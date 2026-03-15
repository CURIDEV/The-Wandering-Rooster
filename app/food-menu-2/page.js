'use client';

import { useState, useEffect } from 'react';
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const FoodMenu2 = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your SkyTab online ordering URL
  const SKYTAB_URL = "https://your-skytab-ordering-url.com";

  // Manual image mapping for categories
  // Now just one image per category - the image should have the wave/split design built in
  const categoryImageMap = {
    'starters': '/assets/img/menu/video-bg.svg',
    'smash': '/assets/img/menu/main-cta-bg-2.jpg',  // Update slug to match WordPress
    'conch': '/assets/img/menu/hero-bg-2.jpg',      // Update slug to match WordPress
    'fresh': '/assets/img/menu/food-text.avif',     // Update slug to match WordPress
    'ice': '/assets/img/menu/red_yellow.svg',     // Update slug to match WordPress
    'sides': '/assets/img/menu/bluepattern.svg',
    'beverage': '/assets/img/menu/textured.jpeg'
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Helper function to strip HTML and get clean text
  const getCleanDescription = (item) => {
    if (item.short_description && item.short_description.trim()) {
      const temp = document.createElement('div');
      temp.innerHTML = item.short_description;
      const text = temp.textContent || temp.innerText || '';
      return text.trim();
    }
    
    if (item.description && item.description.trim()) {
      const temp = document.createElement('div');
      temp.innerHTML = item.description;
      const text = temp.textContent || temp.innerText || '';
      return text.trim().substring(0, 150) + (text.length > 150 ? '...' : '');
    }
    
    return '';
  };

  const fetchMenuItems = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      if (!url || !consumerKey || !consumerSecret) {
        throw new Error('Missing WooCommerce API credentials');
      }

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      // Fetch products from Food Menu category (ID: 16)
      const response = await fetch(`${url}/wp-json/wc/v3/products?category=16&per_page=100`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch menu items: ${response.status}`);
      }

      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching menu items:', err);
      setError(err.message || 'Failed to load menu items');
      setLoading(false);
    }
  };

  // Define custom category order by slug
  // UPDATE THESE to match your actual WordPress category slugs
  const categoryOrder = [
    'starters',
    'smash',  
    'conch', 
    'fresh',   
    'ice',     
    'sides',         
    'beverage'
  ];

  // Group items by their categories
  const groupByCategory = () => {
    const grouped = {};
    
    menuItems.forEach(item => {
      if (item.categories && item.categories.length > 0) {
        item.categories.forEach(cat => {
          // Skip the main "Food Menu" category (ID 16)
          if (cat.id !== 16) {
            if (!grouped[cat.slug]) {
              grouped[cat.slug] = {
                id: cat.id,
                name: cat.name,
                slug: cat.slug,
                // Use custom image from map or WooCommerce image or null
                backgroundImage: categoryImageMap[cat.slug] || (cat.image ? cat.image.src : null),
                items: []
              };
            }
            grouped[cat.slug].items.push(item);
          }
        });
      }
    });

    // Convert to array and sort by custom order
    const categoriesArray = Object.values(grouped);
    
    return categoriesArray.sort((a, b) => {
      const indexA = categoryOrder.indexOf(a.slug);
      const indexB = categoryOrder.indexOf(b.slug);
      
      // If both are in the order array, sort by position
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      // If only A is in order array, it comes first
      if (indexA !== -1) return -1;
      // If only B is in order array, it comes first
      if (indexB !== -1) return 1;
      // Neither in order array, sort alphabetically
      return a.name.localeCompare(b.name);
    });
  };

  const categories = groupByCategory();

  // Temporary debug - check what's being loaded
  useEffect(() => {
    if (categories.length > 0) {
      console.log('=== CATEGORY DEBUG ===');
      categories.forEach(cat => {
        console.log(`Category: ${cat.name}`);
        console.log(`  Slug: ${cat.slug}`);
        console.log(`  Background: ${cat.backgroundImage}`);
        console.log(`  Representative: ${cat.representativeImage}`);
        console.log(`  Has mapping: ${!!categoryImageMap[cat.slug]}`);
      });
    }
  }, [categories]);

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Food Menu"} />

      {/* Clean Menu Section */}
      <section className="menu-section" style={{ 
        padding: '80px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Loading/Error States */}
            {loading && (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <h3>Loading menu...</h3>
              </div>
            )}

            {error && (
              <div style={{
                backgroundColor: '#fff',
                border: '2px solid #dc3545',
                borderRadius: '8px',
                padding: '30px',
                textAlign: 'center',
                marginBottom: '30px'
              }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>Error Loading Menu</h4>
                <p style={{ color: '#666', margin: 0 }}>{error}</p>
              </div>
            )}

            {!loading && !error && categories.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <h3>No menu items available</h3>
                <p>Please add items and categories to your Food Menu in WooCommerce.</p>
              </div>
            )}

            {!loading && !error && categories.length > 0 && (
              <>
                {categories.map((category, categoryIndex) => (
                  <div 
                    key={category.id} 
                    style={{ 
                      marginBottom: categoryIndex < categories.length - 1 ? '60px' : '40px' 
                    }}
                  >
                    {/* Single Category Header Container */}
                    <div style={{
                      position: 'relative',
                      height: '220px',
                      marginBottom: '30px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundImage: category.backgroundImage 
                        ? `url(${category.backgroundImage})` 
                        : 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      {/* Optional: Dark overlay if you want text over the image */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '50px'
                      }}>
                        <h2 style={{
                          fontSize: '44px',
                          fontWeight: '700',
                          color: '#fff',
                          margin: 0,
                          textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
                          letterSpacing: '-0.5px'
                        }}>
                          {category.name}
                        </h2>
                      </div>
                    </div>

                    {/* Menu Items Grid */}
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
                      gap: '16px'
                    }}>
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            backgroundColor: '#fff',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            padding: '20px',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'flex-start',
                            transition: 'box-shadow 0.2s ease',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {/* Left side: Content */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            {/* Title and Price */}
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'baseline',
                              gap: '12px',
                              marginBottom: '8px'
                            }}>
                              <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#111',
                                margin: 0,
                                lineHeight: '1.4'
                              }}>
                                {item.name}
                              </h4>
                              <span style={{
                                fontSize: '18px',
                                fontWeight: '700',
                                color: '#111',
                                whiteSpace: 'nowrap'
                              }}>
                                ${parseFloat(item.price).toFixed(2)}
                              </span>
                            </div>

                            {/* Description */}
                            {getCleanDescription(item) && (
                              <p style={{
                                fontSize: '14px',
                                color: '#6b7280',
                                margin: 0,
                                lineHeight: '1.6'
                              }}>
                                {getCleanDescription(item)}
                              </p>
                            )}
                          </div>

                          {/* Right side: Image */}
                          {item.images && item.images.length > 0 && (
                            <div style={{
                              width: '100px',
                              height: '100px',
                              flexShrink: 0,
                              borderRadius: '6px',
                              overflow: 'hidden'
                            }}>
                              <img 
                                src={item.images[0].src} 
                                alt={item.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Order CTA */}
                <div style={{
                  backgroundColor: '#fff',
                  border: '2px solid #ff6b35',
                  borderRadius: '12px',
                  padding: '40px',
                  textAlign: 'center',
                  marginTop: '60px'
                }}>
                  <h3 style={{ 
                    fontSize: '28px',
                    marginBottom: '20px',
                    color: '#333'
                  }}>
                    Ready to Order?
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#666',
                    marginBottom: '25px'
                  }}>
                    Place your order online for pickup or delivery
                  </p>
                  <a 
                    href={SKYTAB_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="theme-btn"
                    style={{
                      display: 'inline-block',
                      fontSize: '18px',
                      padding: '15px 40px'
                    }}
                  >
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery" />
                      </span>
                      <span className="button-text">Order on SkyTab</span>
                    </span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Optional: Keep your delivery CTA section if you want */}
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
                Fast & Fresh
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Order Online <br />
                <span className="theme-color-3">Quick Delivery</span>
              </h2>
            </div>
            <a 
              href={SKYTAB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="theme-btn bg-white wow fadeInUp" 
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">Order Now</span>
              </span>
            </a>
            <div className="delivery-man">
              <img src="assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};

export default FoodMenu2;