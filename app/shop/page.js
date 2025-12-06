'use client';

import { useState, useEffect } from 'react';
import { addToCart } from '@/utils/cartUtils';
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      if (!url || !consumerKey || !consumerSecret) {
        throw new Error('Missing WooCommerce API credentials');
      }

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      const response = await fetch(`${url}/wp-json/wc/v3/products?per_page=12&category=26`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to load products');
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    // Add to cart using utility function
    addToCart(product, 1);
    
    // Show notification
    setNotification({ show: true, message: `${product.name} added to cart!` });
    
    // Hide notification after 2 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 2000);
  };

  const calculateDiscount = (regularPrice, salePrice) => {
    if (!salePrice || salePrice === regularPrice) return null;
    const regular = parseFloat(regularPrice);
    const sale = parseFloat(salePrice);
    const discount = Math.round(((regular - sale) / regular) * 100);
    return discount > 0 ? discount : null;
  };

  const renderStars = (rating) => {
    const ratingNum = parseFloat(rating) || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`fas fa-star ${i > ratingNum ? 'text-white' : ''}`}
        />
      );
    }
    return stars;
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Page"} />
      
      {/* Success Notification */}
      {notification.show && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#28a745',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 9999,
          animation: 'slideIn 0.3s ease-out',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <i className="fas fa-check-circle"></i>
          {notification.message}
        </div>
      )}

      <section className="food-category-section fix section-padding">
        <div className="container">
          <ProductTopBar />
          
          {loading && (
            <div className="text-center py-5">
              <h3>Loading products...</h3>
            </div>
          )}

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              <h4>Error Loading Products</h4>
              <p>{error}</p>
              <p className="mb-0">Please check your WooCommerce API settings.</p>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-5">
              <h3>No products found</h3>
              <p>Please add products to your WooCommerce store.</p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <>
              <div className="row">
                {products.map((product, index) => {
                  const discount = calculateDiscount(product.regular_price, product.sale_price);
                  const hasDiscount = discount && discount > 0;
                  
                  return (
                    <div
                      key={product.id}
                      className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`.${(index % 4) * 2 + 3}s`}
                    >
                      <div className="catagory-product-card-2 shadow-style text-center">
                        <a href={`/shop-single?id=${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                          <div className="catagory-product-image" style={{ 
                            borderRadius: '8px 8px 0 0', 
                            overflow: 'hidden',
                            backgroundColor: '#f8f8f8',
                            cursor: 'pointer'
                          }}>
                            <img 
                              src={product.images && product.images.length > 0 
                                ? product.images[0].src 
                                : '/assets/img/food/placeholder.png'
                              } 
                              alt={product.name}
                              style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                display: 'block'
                              }}
                            />
                          </div>
                        </a>
                        <div className="catagory-product-content">
                          <div className="catagory-button">
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddToCart(product);
                              }}
                              className="theme-btn-2"
                              style={{ border: 'none', cursor: 'pointer' }}
                            >
                              <i className="far fa-shopping-basket" />
                              Add To Cart
                            </button>
                          </div>
                          <div className="info-price d-flex align-items-center justify-content-center">
                            {hasDiscount && <p>-{discount}%</p>}
                            {hasDiscount && (
                              <h6>${parseFloat(product.regular_price).toFixed(2)}</h6>
                            )}
                            <span>${parseFloat(product.price).toFixed(2)}</span>
                          </div>
                          <h4>
                            <a href={`/shop-single?id=${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                              {product.name}
                            </a>
                          </h4>
                          <div className="star">
                            {renderStars(product.average_rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="page-nav-wrap mt-5 text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <ul>
                  <li>
                    <Link className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-left" />
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Add animation for notification */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <Cta />
    </FoodKingLayout>
  );
};

export default Page;