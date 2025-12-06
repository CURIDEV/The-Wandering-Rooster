"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import FoodKingLayout from "@/layouts/FoodKingLayout";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;
      const credentials = btoa(`${consumerKey}:${consumerSecret}`);

      const response = await fetch(`${url}/wp-json/wc/v3/orders/${orderId}`, {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const orderData = await response.json();
        setOrder(orderData);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching order details:', err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <FoodKingLayout>
        <PageBanner pageName="Order Confirmation" />
        <section className="section-padding">
          <div className="container">
            <div className="text-center py-5">
              <i className="fas fa-spinner fa-spin" style={{ fontSize: '48px', color: '#ff6b35' }}></i>
              <h4 style={{ marginTop: '20px' }}>Loading order details...</h4>
            </div>
          </div>
        </section>
      </FoodKingLayout>
    );
  }

  if (!order) {
    return (
      <FoodKingLayout>
        <PageBanner pageName="Order Confirmation" />
        <section className="section-padding">
          <div className="container">
            <div className="text-center py-5">
              <i className="fas fa-exclamation-circle" style={{ fontSize: '64px', color: '#dc3545', marginBottom: '20px' }}></i>
              <h3>Order Not Found</h3>
              <p>We couldn't find your order. Please check your email for order details.</p>
              <Link href="/" className="theme-btn" style={{ marginTop: '20px', display: 'inline-block' }}>
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </FoodKingLayout>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'pending': '#ffc107',
      'processing': '#17a2b8',
      'on-hold': '#6c757d',
      'completed': '#28a745',
      'cancelled': '#dc3545',
      'refunded': '#6c757d',
      'failed': '#dc3545'
    };
    return colors[status] || '#6c757d';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'pending': 'fa-clock',
      'processing': 'fa-cog fa-spin',
      'on-hold': 'fa-pause-circle',
      'completed': 'fa-check-circle',
      'cancelled': 'fa-times-circle',
      'refunded': 'fa-undo',
      'failed': 'fa-exclamation-triangle'
    };
    return icons[status] || 'fa-info-circle';
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName="Order Confirmation" />
      
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Success Message */}
          <div style={{
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <i className="fas fa-check-circle" style={{ fontSize: '64px', color: '#28a745', marginBottom: '15px' }}></i>
            <h2 style={{ color: '#155724', marginBottom: '10px' }}>Thank You for Your Order!</h2>
            <p style={{ fontSize: '16px', color: '#155724', marginBottom: '15px' }}>
              Your order has been received and is being processed.
            </p>
            <p style={{ fontSize: '14px', color: '#155724' }}>
              A confirmation email has been sent to <strong>{order.billing.email}</strong>
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="checkout-progress mb-5">
            <div className="row text-center">
              <div className="col-md-4">
                <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', opacity: '0.6' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#28a745', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px' }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h6 style={{ margin: 0 }}>Shopping Cart</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', opacity: '0.6' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#28a745', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px' }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h6 style={{ margin: 0 }}>Checkout Details</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ff6b35', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px', fontWeight: 'bold' }}>
                    3
                  </div>
                  <h6 style={{ margin: 0, fontWeight: 'bold' }}>Order Complete</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Order Details */}
            <div className="col-lg-8">
              {/* Order Info */}
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ marginBottom: '20px' }}>Order Details</h4>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <div style={{ 
                      padding: '15px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '6px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Order Number</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff6b35' }}>#{order.number}</div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div style={{ 
                      padding: '15px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '6px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Order Date</div>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>{formatDate(order.date_created)}</div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div style={{ 
                      padding: '15px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '6px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Order Status</div>
                      <div style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold',
                        color: getStatusColor(order.status),
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <i className={`fas ${getStatusIcon(order.status)}`} style={{ marginRight: '8px' }}></i>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div style={{ 
                      padding: '15px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '6px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Payment Method</div>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>{order.payment_method_title}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ marginBottom: '20px' }}>Order Items</h4>
                
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                        <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Product</th>
                        <th style={{ padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>Quantity</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: 'bold' }}>Price</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: 'bold' }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.line_items.map((item) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                          <td style={{ padding: '15px' }}>
                            <div className="d-flex align-items-center">
                              {item.image && (
                                <img 
                                  src={item.image.src} 
                                  alt={item.name}
                                  style={{ 
                                    width: '60px', 
                                    height: '60px', 
                                    objectFit: 'cover',
                                    borderRadius: '6px',
                                    marginRight: '15px'
                                  }}
                                />
                              )}
                              <div>
                                <div style={{ fontWeight: '500', marginBottom: '4px' }}>{item.name}</div>
                                {item.sku && <div style={{ fontSize: '12px', color: '#666' }}>SKU: {item.sku}</div>}
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: '15px', textAlign: 'center' }}>
                            <span style={{ 
                              display: 'inline-block',
                              padding: '4px 12px',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '4px',
                              fontWeight: '500'
                            }}>
                              {item.quantity}
                            </span>
                          </td>
                          <td style={{ padding: '15px', textAlign: 'right', fontWeight: '500' }}>
                            ${parseFloat(item.price).toFixed(2)}
                          </td>
                          <td style={{ padding: '15px', textAlign: 'right', fontWeight: 'bold', color: '#ff6b35' }}>
                            ${parseFloat(item.total).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Customer Notes */}
              {order.customer_note && (
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ marginBottom: '15px' }}>
                    <i className="fas fa-sticky-note" style={{ marginRight: '10px', color: '#ff6b35' }}></i>
                    Order Notes
                  </h4>
                  <p style={{ 
                    padding: '15px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '6px',
                    margin: 0,
                    fontSize: '14px'
                  }}>
                    {order.customer_note}
                  </p>
                </div>
              )}

              {/* Billing & Shipping Address */}
              <div className="row g-4">
                <div className="col-md-6">
                  <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h5 style={{ marginBottom: '15px' }}>
                      <i className="fas fa-file-invoice" style={{ marginRight: '8px', color: '#ff6b35' }}></i>
                      Billing Address
                    </h5>
                    <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                        {order.billing.first_name} {order.billing.last_name}
                      </div>
                      {order.billing.company && <div>{order.billing.company}</div>}
                      <div>{order.billing.address_1}</div>
                      {order.billing.address_2 && <div>{order.billing.address_2}</div>}
                      <div>{order.billing.city}, {order.billing.state} {order.billing.postcode}</div>
                      <div>{order.billing.country}</div>
                      <div style={{ marginTop: '10px', color: '#666' }}>
                        <div><i className="fas fa-envelope" style={{ marginRight: '5px' }}></i> {order.billing.email}</div>
                        <div><i className="fas fa-phone" style={{ marginRight: '5px' }}></i> {order.billing.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h5 style={{ marginBottom: '15px' }}>
                      <i className="fas fa-shipping-fast" style={{ marginRight: '8px', color: '#ff6b35' }}></i>
                      Shipping Address
                    </h5>
                    <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                        {order.shipping.first_name} {order.shipping.last_name}
                      </div>
                      {order.shipping.company && <div>{order.shipping.company}</div>}
                      <div>{order.shipping.address_1}</div>
                      {order.shipping.address_2 && <div>{order.shipping.address_2}</div>}
                      <div>{order.shipping.city}, {order.shipping.state} {order.shipping.postcode}</div>
                      <div>{order.shipping.country}</div>
                      {order.shipping_lines && order.shipping_lines.length > 0 && (
                        <div style={{ marginTop: '10px', padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                          <div style={{ fontSize: '12px', color: '#666' }}>Shipping Method</div>
                          <div style={{ fontWeight: '500' }}>{order.shipping_lines[0].method_title}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div style={{ position: 'sticky', top: '100px' }}>
                <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                  <h4 style={{ marginBottom: '20px' }}>Order Summary</h4>
                  
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ color: '#666' }}>Subtotal:</span>
                      <span style={{ fontWeight: '500' }}>${parseFloat(order.total) - parseFloat(order.total_tax) - parseFloat(order.shipping_total)}</span>
                    </div>
                    
                    {order.discount_total && parseFloat(order.discount_total) > 0 && (
                      <div className="d-flex justify-content-between mb-2" style={{ color: '#28a745' }}>
                        <span>Discount:</span>
                        <span style={{ fontWeight: '500' }}>-${parseFloat(order.discount_total).toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ color: '#666' }}>Shipping:</span>
                      <span style={{ fontWeight: '500' }}>
                        {parseFloat(order.shipping_total) === 0 ? 'FREE' : `$${parseFloat(order.shipping_total).toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ color: '#666' }}>Tax:</span>
                      <span style={{ fontWeight: '500' }}>${parseFloat(order.total_tax).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>
                    <span>Total:</span>
                    <span style={{ color: '#ff6b35' }}>${parseFloat(order.total).toFixed(2)}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-grid gap-2">
                    <button
                      onClick={() => window.print()}
                      className="theme-btn"
                      style={{ padding: '12px' }}
                    >
                      <i className="fas fa-print" style={{ marginRight: '8px' }}></i>
                      Print Order
                    </button>
                    
                    <Link 
                      href="/shop"
                      className="theme-btn bg-secondary"
                      style={{ 
                        display: 'block',
                        textAlign: 'center',
                        padding: '12px',
                        textDecoration: 'none'
                      }}
                    >
                      <i className="fas fa-shopping-bag" style={{ marginRight: '8px' }}></i>
                      Continue Shopping
                    </Link>
                  </div>
                </div>

                {/* Need Help Card */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center'
                }}>
                  <i className="fas fa-question-circle" style={{ fontSize: '32px', color: '#ff6b35', marginBottom: '10px' }}></i>
                  <h6 style={{ marginBottom: '8px' }}>Questions About Your Order?</h6>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '15px' }}>
                    Our support team is ready to help
                  </p>
                  <a href="tel:1-800-123-4567" style={{ 
                    color: '#ff6b35', 
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '10px'
                  }}>
                    <i className="fas fa-phone" style={{ marginRight: '5px' }}></i>
                    1-800-123-4567
                  </a>
                  <a href={`mailto:support@example.com?subject=Order ${order.number}`} style={{ 
                    color: '#ff6b35', 
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}>
                    <i className="fas fa-envelope" style={{ marginRight: '5px' }}></i>
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};

export default OrderConfirmationPage;