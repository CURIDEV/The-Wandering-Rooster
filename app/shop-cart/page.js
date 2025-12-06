"use client";

import { useCart } from '@/context/CartContext';
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const Page = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <FoodKingLayout>
        <PageBanner pageName={"Shopping Cart"} />
        <section className="cart-section section-padding">
          <div className="container">
            <div className="text-center py-5">
              <div style={{ 
                maxWidth: '500px', 
                margin: '0 auto',
                padding: '40px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px'
              }}>
                <i className="fas fa-shopping-cart" style={{ 
                  fontSize: '64px', 
                  color: '#ddd',
                  marginBottom: '20px'
                }}></i>
                <h3 style={{ marginBottom: '15px' }}>Your cart is empty</h3>
                <p style={{ color: '#666', marginBottom: '30px' }}>
                  Looks like you haven't added anything to your cart yet. 
                  Start shopping to fill it up!
                </p>
                <Link href="/shop" className="theme-btn" style={{ display: 'inline-block' }}>
                  <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </FoodKingLayout>
    );
  }

  const subtotal = getCartTotal();

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shopping Cart"} />
      
      <section className="cart-section section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {/* Cart Items */}
            <div className="col-lg-8">
              {/* Cart Header */}
              <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 style={{ margin: 0 }}>
                    Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                  </h4>
                  <button 
                    onClick={clearCart}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6b35',
                      cursor: 'pointer',
                      fontSize: '14px',
                      textDecoration: 'underline'
                    }}
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '15px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s',
                  }}
                  className="cart-item-card"
                >
                  <div className="row align-items-center">
                    {/* Product Image */}
                    <div className="col-md-3 col-sm-4">
                      {item.image && (
                        <div style={{ position: 'relative' }}>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            style={{ 
                              width: '100%', 
                              height: '150px', 
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: '1px solid #eee'
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="col-md-5 col-sm-8">
                      <h5 style={{ marginBottom: '10px', fontSize: '18px' }}>
                        <Link 
                          href={`/shop-single?id=${item.id}`}
                          style={{ color: '#333', textDecoration: 'none' }}
                        >
                          {item.name}
                        </Link>
                      </h5>
                      
                      {/* Product Meta Info */}
                      <div style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                        {item.sku && <div>SKU: {item.sku}</div>}
                        {item.stock_status && (
                          <div style={{ 
                            color: item.stock_status === 'instock' ? '#28a745' : '#dc3545',
                            fontWeight: '500',
                            marginTop: '5px'
                          }}>
                            <i className={`fas fa-${item.stock_status === 'instock' ? 'check-circle' : 'exclamation-circle'}`}></i>
                            {' '}{item.stock_status === 'instock' ? 'In Stock' : 'Out of Stock'}
                          </div>
                        )}
                      </div>

                      {/* Price per unit */}
                      <div style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold',
                        color: '#ff6b35',
                        marginBottom: '15px'
                      }}>
                        ${item.price.toFixed(2)} each
                      </div>

                      {/* Remove Button - Mobile */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#dc3545',
                          cursor: 'pointer',
                          fontSize: '14px',
                          padding: '0',
                          textDecoration: 'underline'
                        }}
                        className="d-md-none"
                      >
                        <i className="fas fa-trash-alt"></i> Remove
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="col-md-4">
                      <div className="text-md-end">
                        {/* Quantity Controls */}
                        <div className="d-flex align-items-center justify-content-md-end mb-3">
                          <label style={{ 
                            marginRight: '10px', 
                            fontSize: '14px',
                            color: '#666',
                            minWidth: '50px'
                          }}>
                            Qty:
                          </label>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              style={{
                                width: '35px',
                                height: '35px',
                                border: 'none',
                                background: '#f8f9fa',
                                cursor: 'pointer',
                                fontSize: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value) && value >= 1) {
                                  updateQuantity(item.id, value);
                                }
                              }}
                              style={{ 
                                width: '50px', 
                                height: '35px',
                                textAlign: 'center',
                                border: 'none',
                                borderLeft: '1px solid #ddd',
                                borderRight: '1px solid #ddd',
                                fontSize: '14px',
                                fontWeight: 'bold'
                              }}
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              style={{
                                width: '35px',
                                height: '35px',
                                border: 'none',
                                background: '#f8f9fa',
                                cursor: 'pointer',
                                fontSize: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div style={{ 
                          fontSize: '20px', 
                          fontWeight: 'bold',
                          color: '#333',
                          marginBottom: '10px'
                        }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        {/* Remove Button - Desktop */}
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#dc3545',
                            cursor: 'pointer',
                            fontSize: '14px',
                            padding: '0',
                            textDecoration: 'underline'
                          }}
                          className="d-none d-md-block"
                        >
                          <i className="fas fa-trash-alt"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <div className="mt-4">
                <Link 
                  href="/shop" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#ff6b35',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-lg-4">
              <div style={{ position: 'sticky', top: '100px' }}>
                {/* Order Summary */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '25px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ marginBottom: '20px', fontSize: '20px' }}>Cart Summary</h4>
                  
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                    <div className="d-flex justify-content-between mb-2" style={{ fontSize: '15px' }}>
                      <span style={{ color: '#666' }}>Subtotal:</span>
                      <span style={{ fontWeight: '500' }}>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Info Message */}
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    fontSize: '13px',
                    color: '#004085'
                  }}>
                    <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
                    Shipping and taxes calculated at checkout
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => {
                      window.location.href = `${process.env.NEXT_PUBLIC_WC_SITE_URL}/checkout`;
                    }}
                    className="theme-btn w-100"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '15px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    Proceed to Checkout
                    <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                  </button>

                  {/* Security Badges */}
                  <div style={{
                    textAlign: 'center',
                    paddingTop: '15px',
                    borderTop: '1px solid #eee'
                  }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                      <i className="fas fa-lock" style={{ marginRight: '5px' }}></i>
                      Secure Checkout
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <i className="fab fa-cc-visa" style={{ fontSize: '30px', color: '#1A1F71' }}></i>
                      <i className="fab fa-cc-mastercard" style={{ fontSize: '30px', color: '#EB001B' }}></i>
                      <i className="fab fa-cc-amex" style={{ fontSize: '30px', color: '#006FCF' }}></i>
                      <i className="fab fa-cc-paypal" style={{ fontSize: '30px', color: '#003087' }}></i>
                    </div>
                  </div>
                </div>

                {/* Customer Support */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  marginTop: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center'
                }}>
                  <i className="fas fa-headset" style={{ fontSize: '32px', color: '#ff6b35', marginBottom: '10px' }}></i>
                  <h6 style={{ marginBottom: '8px' }}>Need Help?</h6>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                    Our support team is here to assist you
                  </p>
                  <a href="tel:1-800-123-4567" style={{ 
                    color: '#ff6b35', 
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    <i className="fas fa-phone" style={{ marginRight: '5px' }}></i>
                    1-800-123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom CSS */}
      <style jsx>{`
        .cart-item-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        }

        @media (max-width: 768px) {
          .col-md-3, .col-md-5, .col-md-4 {
            margin-bottom: 15px;
          }
        }
      `}</style>

      <Cta />
    </FoodKingLayout>
  );
};

export default Page;