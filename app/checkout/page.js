"use client";

import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FoodKingLayout from "@/layouts/FoodKingLayout";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const CheckoutPage = () => {
  const router = useRouter();
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  const [loading, setLoading] = useState(false);
  const [shippingMethods, setShippingMethods] = useState([]);
  const [paymentGateways, setPaymentGateways] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [taxRate, setTaxRate] = useState(0);
  
  const [billingDetails, setBillingDetails] = useState({
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: 'US',
    email: '',
    phone: ''
  });

  const [shippingDetails, setShippingDetails] = useState({
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: 'US'
  });

  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [orderNotes, setOrderNotes] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart');
      return;
    }
    fetchCheckoutData();
  }, [cartItems]);

  useEffect(() => {
    if (sameAsBilling) {
      setShippingDetails({
        first_name: billingDetails.first_name,
        last_name: billingDetails.last_name,
        company: billingDetails.company,
        address_1: billingDetails.address_1,
        address_2: billingDetails.address_2,
        city: billingDetails.city,
        state: billingDetails.state,
        postcode: billingDetails.postcode,
        country: billingDetails.country
      });
    }
  }, [sameAsBilling, billingDetails]);

  const fetchCheckoutData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;
      const credentials = btoa(`${consumerKey}:${consumerSecret}`);

      // Fetch shipping zones and methods
      const shippingResponse = await fetch(`${url}/wp-json/wc/v3/shipping/zones`, {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      });

      if (shippingResponse.ok) {
        const zones = await shippingResponse.json();
        const allMethods = [];
        
        for (const zone of zones) {
          const methodsResponse = await fetch(
            `${url}/wp-json/wc/v3/shipping/zones/${zone.id}/methods`,
            {
              headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json',
              },
            }
          );
          const methods = await methodsResponse.json();
          allMethods.push(...methods.filter(m => m.enabled));
        }
        
        setShippingMethods(allMethods);
        if (allMethods.length > 0) {
          setSelectedShipping(allMethods[0]);
        }
      }

      // Fetch payment gateways
      console.log('Fetching payment gateways from:', `${url}/wp-json/wc/v3/payment_gateways`);
      const paymentResponse = await fetch(`${url}/wp-json/wc/v3/payment_gateways`, {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Payment response status:', paymentResponse.status);
      
      if (paymentResponse.ok) {
        const gateways = await paymentResponse.json();
        console.log('All gateways:', gateways);
        const enabledGateways = gateways.filter(g => g.enabled);
        console.log('Enabled gateways:', enabledGateways);
        setPaymentGateways(enabledGateways);
        if (enabledGateways.length > 0) {
          setSelectedPayment(enabledGateways[0]);
        }
      } else {
        console.error('Payment gateway fetch failed:', await paymentResponse.text());
      }

      // Fetch tax rates
      const taxResponse = await fetch(`${url}/wp-json/wc/v3/taxes`, {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      });

      if (taxResponse.ok) {
        const taxes = await taxResponse.json();
        if (taxes.length > 0) {
          setTaxRate(parseFloat(taxes[0].rate) / 100);
        }
      }

    } catch (err) {
      console.error('Error fetching checkout data:', err);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Billing validation
    if (!billingDetails.first_name) newErrors.first_name = 'First name is required';
    if (!billingDetails.last_name) newErrors.last_name = 'Last name is required';
    if (!billingDetails.address_1) newErrors.address_1 = 'Address is required';
    if (!billingDetails.city) newErrors.city = 'City is required';
    if (!billingDetails.state) newErrors.state = 'State is required';
    if (!billingDetails.postcode) newErrors.postcode = 'Zip code is required';
    if (!billingDetails.email) newErrors.email = 'Email is required';
    if (!billingDetails.phone) newErrors.phone = 'Phone is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (billingDetails.email && !emailRegex.test(billingDetails.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Shipping validation (if different from billing)
    if (!sameAsBilling) {
      if (!shippingDetails.first_name) newErrors.shipping_first_name = 'First name is required';
      if (!shippingDetails.last_name) newErrors.shipping_last_name = 'Last name is required';
      if (!shippingDetails.address_1) newErrors.shipping_address_1 = 'Address is required';
      if (!shippingDetails.city) newErrors.shipping_city = 'City is required';
      if (!shippingDetails.state) newErrors.shipping_state = 'State is required';
      if (!shippingDetails.postcode) newErrors.shipping_postcode = 'Zip code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      alert('Please fill in all required fields');
      return;
    }

    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }

    setLoading(true);

    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;
      const credentials = btoa(`${consumerKey}:${consumerSecret}`);

      // Prepare line items
      const line_items = cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      // Calculate shipping cost
      const shippingCost = selectedShipping?.settings?.cost?.value 
        ? parseFloat(selectedShipping.settings.cost.value) 
        : 0;

      // Prepare order data
      const orderData = {
        payment_method: selectedPayment.id,
        payment_method_title: selectedPayment.title,
        set_paid: false, // Set to false, let payment gateway handle it
        billing: billingDetails,
        shipping: sameAsBilling ? billingDetails : shippingDetails,
        line_items: line_items,
        shipping_lines: [
          {
            method_id: selectedShipping?.id || 'flat_rate',
            method_title: selectedShipping?.title || 'Standard Shipping',
            total: shippingCost.toFixed(2)
          }
        ],
        customer_note: orderNotes
      };

      // Create order
      const orderResponse = await fetch(`${url}/wp-json/wc/v3/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (orderResponse.ok) {
        const order = await orderResponse.json();
        
        // Clear cart
        clearCart();
        
        // Redirect to success page or payment page
        if (selectedPayment.id === 'cod') {
          // Cash on delivery - redirect to success
          router.push(`/order-confirmation?order_id=${order.id}`);
        } else {
          // Other payment methods - redirect to payment URL if available
          if (order.payment_url) {
            window.location.href = order.payment_url;
          } else {
            router.push(`/order-confirmation?order_id=${order.id}`);
          }
        }
      } else {
        const errorData = await orderResponse.json();
        console.error('Order creation error:', errorData);
        alert('Failed to create order. Please try again.');
      }

    } catch (err) {
      console.error('Error placing order:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e, section = 'billing') => {
    const { name, value } = e.target;
    if (section === 'billing') {
      setBillingDetails(prev => ({ ...prev, [name]: value }));
    } else {
      setShippingDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const subtotal = getCartTotal();
  const shippingCost = selectedShipping?.settings?.cost?.value 
    ? parseFloat(selectedShipping.settings.cost.value) 
    : 0;
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  if (cartItems.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <FoodKingLayout>
      <PageBanner pageName="Checkout" />
      
      <section className="checkout-section section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
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
                <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ff6b35', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px', fontWeight: 'bold' }}>
                    2
                  </div>
                  <h6 style={{ margin: 0, fontWeight: 'bold' }}>Checkout Details</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', opacity: '0.6' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e0e0e0', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px', fontWeight: 'bold' }}>
                    3
                  </div>
                  <h6 style={{ margin: 0 }}>Order Complete</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Checkout Form */}
            <div className="col-lg-8">
              {/* Billing Details */}
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ marginBottom: '25px' }}>
                  <i className="fas fa-user" style={{ marginRight: '10px', color: '#ff6b35' }}></i>
                  Billing Details
                </h4>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      First Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={billingDetails.first_name}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.first_name ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.first_name && <small style={{ color: 'red' }}>{errors.first_name}</small>}
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Last Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={billingDetails.last_name}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.last_name ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.last_name && <small style={{ color: 'red' }}>{errors.last_name}</small>}
                  </div>

                  <div className="col-12">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={billingDetails.company}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div className="col-12">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Street Address <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="address_1"
                      value={billingDetails.address_1}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      placeholder="House number and street name"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.address_1 ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        marginBottom: '10px'
                      }}
                    />
                    {errors.address_1 && <small style={{ color: 'red' }}>{errors.address_1}</small>}
                    <input
                      type="text"
                      name="address_2"
                      value={billingDetails.address_2}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      City <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={billingDetails.city}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.city ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.city && <small style={{ color: 'red' }}>{errors.city}</small>}
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      State <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={billingDetails.state}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.state ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.state && <small style={{ color: 'red' }}>{errors.state}</small>}
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Zip Code <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={billingDetails.postcode}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.postcode ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.postcode && <small style={{ color: 'red' }}>{errors.postcode}</small>}
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Country <span style={{ color: 'red' }}>*</span>
                    </label>
                    <select
                      name="country"
                      value={billingDetails.country}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Email Address <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={billingDetails.email}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.email ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                  </div>

                  <div className="col-md-6">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Phone <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={billingDetails.phone}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.phone ? '2px solid red' : '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 style={{ margin: 0 }}>
                    <i className="fas fa-shipping-fast" style={{ marginRight: '10px', color: '#ff6b35' }}></i>
                    Shipping Address
                  </h4>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={sameAsBilling}
                      onChange={(e) => setSameAsBilling(e.target.checked)}
                      style={{ marginRight: '8px' }}
                    />
                    Same as billing
                  </label>
                </div>

                {!sameAsBilling && (
                  <div className="row g-3">
                    {/* Repeat similar fields for shipping */}
                    <div className="col-md-6">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        First Name <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={shippingDetails.first_name}
                        onChange={(e) => handleInputChange(e, 'shipping')}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: errors.shipping_first_name ? '2px solid red' : '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    {/* Add remaining shipping fields similar to billing */}
                  </div>
                )}
              </div>

              {/* Order Notes */}
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ marginBottom: '15px' }}>
                  <i className="fas fa-sticky-note" style={{ marginRight: '10px', color: '#ff6b35' }}></i>
                  Order Notes (Optional)
                </h4>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div style={{ position: 'sticky', top: '100px' }}>
                {/* Your Order */}
                <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ marginBottom: '20px' }}>Your Order</h4>
                  
                  {/* Order Items */}
                  <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                    {cartItems.map(item => (
                      <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center" style={{ flex: 1 }}>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px', marginRight: '12px' }}
                          />
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: '500' }}>{item.name}</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>Qty: {item.quantity}</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span style={{ fontWeight: '500' }}>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping:</span>
                      <span style={{ fontWeight: '500' }}>
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax:</span>
                      <span style={{ fontWeight: '500' }}>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                    <span>Total:</span>
                    <span style={{ color: '#ff6b35' }}>${total.toFixed(2)}</span>
                  </div>

                  {/* Shipping Methods */}
                  {shippingMethods.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <h6 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 'bold' }}>Shipping Method</h6>
                      {shippingMethods.map(method => (
                        <div 
                          key={method.id}
                          style={{
                            padding: '10px',
                            border: selectedShipping?.id === method.id ? '2px solid #ff6b35' : '1px solid #ddd',
                            borderRadius: '4px',
                            marginBottom: '8px',
                            cursor: 'pointer'
                          }}
                          onClick={() => setSelectedShipping(method)}
                        >
                          <label style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
                            <div>
                              <input
                                type="radio"
                                checked={selectedShipping?.id === method.id}
                                onChange={() => setSelectedShipping(method)}
                                style={{ marginRight: '8px' }}
                              />
                              <span style={{ fontSize: '14px' }}>{method.title}</span>
                            </div>
                            <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                              {method.method_id === 'free_shipping' ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Payment Methods */}
                  <div style={{ marginBottom: '20px' }}>
                    <h6 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 'bold' }}>Payment Method</h6>
                    {paymentGateways.length > 0 ? (
                      <>
                        {console.log('Payment Gateways:', paymentGateways)}
                        {paymentGateways.map(gateway => {
                          console.log('Gateway:', gateway);
                          
                          // Create friendly names from IDs
                          const getFriendlyName = (id, title) => {
                            if (title) return title;
                            
                            // Map gateway IDs to friendly names
                            const nameMap = {
                              'woocommerce_payments': 'Credit or Debit Card',
                              'woocommerce_payments_affirm': 'Affirm',
                              'woocommerce_payments_afterpay_clearpay': 'Afterpay',
                              'woocommerce_payments_klarna': 'Klarna',
                              'stripe': 'Credit Card (Stripe)',
                              'paypal': 'PayPal',
                              'cod': 'Cash on Delivery',
                              'bacs': 'Direct Bank Transfer',
                              'cheque': 'Check Payments'
                            };
                            
                            return nameMap[id] || id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                          };
                          
                          const displayTitle = getFriendlyName(gateway.id, gateway.title);
                          const displayDescription = gateway.description || gateway.method_description || '';
                          
                          return (
                            <div 
                              key={gateway.id}
                              style={{
                                padding: '12px',
                                border: selectedPayment?.id === gateway.id ? '2px solid #ff6b35' : '1px solid #ddd',
                                borderRadius: '4px',
                                marginBottom: '8px',
                                cursor: 'pointer',
                                backgroundColor: selectedPayment?.id === gateway.id ? '#fff5f0' : '#fff'
                              }}
                              onClick={() => setSelectedPayment(gateway)}
                            >
                              <label style={{ cursor: 'pointer', margin: 0, display: 'flex', alignItems: 'flex-start' }}>
                                <input
                                  type="radio"
                                  checked={selectedPayment?.id === gateway.id}
                                  onChange={() => setSelectedPayment(gateway)}
                                  style={{ marginRight: '10px', marginTop: '2px', flexShrink: 0 }}
                                />
                                <div style={{ flex: 1 }}>
                                  <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                                    {displayTitle}
                                  </div>
                                  {displayDescription && (
                                    <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
                                      {displayDescription}
                                    </div>
                                  )}
                                </div>
                              </label>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div style={{
                        padding: '15px',
                        backgroundColor: '#fff3cd',
                        border: '1px solid #ffc107',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#856404'
                      }}>
                        <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                        No payment methods available. Please enable payment gateways in WooCommerce Settings → Payments
                      </div>
                    )}
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="theme-btn w-100"
                    style={{
                      padding: '15px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.6 : 1
                    }}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-lock" style={{ marginRight: '8px' }}></i>
                        Place Order
                      </>
                    )}
                  </button>

                  {/* Security Info */}
                  <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#666' }}>
                    <i className="fas fa-shield-alt" style={{ marginRight: '5px' }}></i>
                    Your payment information is secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};

export default CheckoutPage;