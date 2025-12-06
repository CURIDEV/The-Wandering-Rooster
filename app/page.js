'use client';

import { useState, useEffect } from 'react';
import { SingleHeroSlide } from "@/components/SingleHeroSlide";
import NewsletterCTA from "@/components/NewsletterCTA";
import ModernTestimonials from "@/components/ModernTestimonials";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const Page = () => {
  const [featuredMenuItems, setFeaturedMenuItems] = useState([]);
  const [retailProducts, setRetailProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedItems();
  }, []);

  const fetchFeaturedItems = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      // Fetch 3 food menu items (category 27)
      const menuResponse = await fetch(`${url}/wp-json/wc/v3/products?category=16&per_page=3&featured=true`, {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      // Fetch 8 retail products (category 26)
      const retailResponse = await fetch(`${url}/wp-json/wc/v3/products?category=22&per_page=8&orderby=date`, {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (menuResponse.ok) {
        const menuData = await menuResponse.json();
        setFeaturedMenuItems(menuData);
      }

      if (retailResponse.ok) {
        const retailData = await retailResponse.json();
        setRetailProducts(retailData);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching featured items:', err);
      setLoading(false);
    }
  };

  return (
    <FoodKingLayout>
      {/* Hero Section */}
      <SingleHeroSlide />

      {/* Featured Menu Items Section */}
      <section className="food-banner-section section-padding fix">
        <div className="burger-shape-2">
          <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="wow fadeInUp">Featured Items</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Try Our Favorites
            </h2>
          </div>
          
          {loading ? (
            <div className="text-center py-5"><h4>Loading featured items...</h4></div>
          ) : (
            <div className="row g-4">
              {featuredMenuItems.map((item, index) => (
                <div
                  key={item.id}
                  className="col-xl-4 col-lg-6 wow fadeInUp"
                  data-wow-delay={`.${(index + 1) * 2}s`}
                >
                  <div className="single-offer-items bg-cover style-3"
                    style={{
                      backgroundImage: item.images && item.images[0] 
                        ? `url("${item.images[0].src}")`
                        : 'url("assets/img/banner/offer-bg-2.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '350px',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0,0,0,0.4)',
                      borderRadius: '8px'
                    }} />
                    <div className="offer-content" style={{ position: 'relative', zIndex: 2 }}>
                      <h5 style={{ color: '#fff' }}>Featured Item</h5>
                      <h3 style={{ color: '#fff' }}>{item.name}</h3>
                      <Link href={`/food-menu`} className="link-btn">
                        View Menu <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Delivery CTA Banner */}
      <section className="main-cta-banner-2 section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/main-cta-bg-2.jpg")',
        }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src="assets/img/tomato.png" alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src="assets/img/chilli.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                Island Fresh, Rooster Fast
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Fresh from the Roost,  <br />
                <span className="theme-color-3">Straight to You</span>
              </h2>
            </div>
            <Link href="/food-menu" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">Order Now</span>
              </span>
            </Link>
            <div className="delivery-man">
              <img src="assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retail Products Section */}
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Shop Our Products</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Featured Retail Items
            </h2>
          </div>
          
          {loading ? (
            <div className="text-center py-5"><h4>Loading products...</h4></div>
          ) : (
            <>
              <div className="row">
                {retailProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`.${(index % 4) * 2 + 3}s`}
                  >
                    <div className="catagory-product-card-2 text-center">
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
                          <Link href={`/shop-single?id=${product.id}`} className="theme-btn-2">
                            <i className="far fa-shopping-basket" />
                            Shop Now
                          </Link>
                        </div>
                        <div className="info-price d-flex align-items-center justify-content-center">
                          <span>${parseFloat(product.price).toFixed(2)}</span>
                        </div>
                        <h4>
                          <a href={`/shop-single?id=${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {product.name}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".5s">
                <Link href="/shop" className="theme-btn">
                  View All Products
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Video Section */}
      <div className="video-section section-padding bg-cover"
        style={{ 
          backgroundImage: 'url("assets/img/banner/video-bg.svg")',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="video-wrapper" style={{ 
            position: 'relative', 
            paddingBottom: '10%', /* Reduced height */
            height: 0,
            overflow: 'hidden',
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              src="https://www.youtube.com/embed/zH9JWps1wOY?autoplay=0&mute=0&controls=1&loop=0&rel=0&modestbranding=1"
              title="Restaurant Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <ModernTestimonials />

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </FoodKingLayout>
  );
};

export default Page;