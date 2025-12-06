'use client';

import { useState, useEffect } from 'react';
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Cta from "@/components/Cta";

const FoodMenu2 = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your SkyTab online ordering URL
  const SKYTAB_URL = "https://your-skytab-ordering-url.com";

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

  // Group items by their categories
  const groupByCategory = () => {
    const grouped = {};
    
    menuItems.forEach(item => {
      if (item.categories && item.categories.length > 0) {
        item.categories.forEach(cat => {
          // Skip the main "Food Menu" category (ID 27)
          if (cat.id !== 27) {
            if (!grouped[cat.name]) {
              grouped[cat.name] = {
                id: cat.id,
                name: cat.name,
                items: []
              };
            }
            grouped[cat.name].items.push(item);
          }
        });
      }
    });

    // Convert to array and sort alphabetically
    return Object.values(grouped).sort((a, b) => a.name.localeCompare(b.name));
  };

  const categories = groupByCategory();

  // Icons for different categories
  const getCategoryIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('burger')) return 'flaticon-burger';
    if (name.includes('side')) return 'flaticon-french-fries';
    if (name.includes('starter')) return 'flaticon-quality'; // Or could use flaticon-chicken
    if (name.includes('classic')) return 'flaticon-sandwich';
    if (name.includes('smoothie')) return 'flaticon-coffee'; // Blender/drink icon
    if (name.includes('beverage') || name.includes('drink')) return 'flaticon-soft-drink';
    if (name.includes('ice') || name.includes('shaved')) return 'flaticon-ice-cream';
    return 'flaticon-fork';
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Food Menu"} />

      {/* Food Menu Section - One Complete Document */}
      <section className="fooder-menu-section fix section-padding">
        <div className="container">
          {/* Everything in one white container/document */}
          <div 
            className="menu-document wow fadeInUp"
            style={{
              background: 'white',
              padding: '50px',
              borderRadius: '12px',
              boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
              border: '3px solid #ff6b35',
              position: 'relative'
            }}
          >
            {/* Decorative corner elements */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              width: '30px',
              height: '30px',
              borderTop: '3px solid #ff6b35',
              borderLeft: '3px solid #ff6b35'
            }} />
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              width: '30px',
              height: '30px',
              borderTop: '3px solid #ff6b35',
              borderRight: '3px solid #ff6b35'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              width: '30px',
              height: '30px',
              borderBottom: '3px solid #ff6b35',
              borderLeft: '3px solid #ff6b35'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              width: '30px',
              height: '30px',
              borderBottom: '3px solid #ff6b35',
              borderRight: '3px solid #ff6b35'
            }} />

            {/* Menu Header */}
            <div className="menu-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div style={{ marginBottom: '25px' }}>
                <img 
                  src="assets/img/logo/twr_logo.svg" 
                  alt="The Wandering Rooster"
                  style={{ 
                    maxWidth: '250px',
                    height: 'auto',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>
              <div style={{
                borderTop: '2px solid #ff6b35',
                borderBottom: '2px solid #ff6b35',
                padding: '20px 0',
                margin: '20px auto',
                maxWidth: '600px'
              }}>
                <h2 style={{ 
                  fontSize: '42px', 
                  margin: 0,
                  color: '#333',
                  fontFamily: 'serif'
                }}>
                  Our Menu
                </h2>
                <p style={{ 
                  margin: '10px 0 0',
                  color: '#666',
                  fontSize: '16px',
                  fontStyle: 'italic'
                }}>
                  Three Generations of Key West Tradition
                </p>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                fontSize: '14px',
                color: '#666'
              }}>
                <div>
                  <i className="fas fa-map-marker-alt" style={{ color: '#ff6b35', marginRight: '8px' }} />
                  513 Greene St, Key West, FL 33040
                </div>
                <div>
                  <i className="fas fa-phone" style={{ color: '#ff6b35', marginRight: '8px' }} />
                  (305) 555-1234
                </div>
              </div>
            </div>

            {/* Loading/Error States */}
            {loading && (
            <div className="text-center py-5">
              <h3>Loading menu...</h3>
            </div>
          )}

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              <h4>Error Loading Menu</h4>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && categories.length === 0 && (
            <div className="text-center py-5">
              <h3>No menu items available</h3>
              <p>Please add items and categories to your Food Menu in WooCommerce.</p>
            </div>
          )}

          {!loading && !error && categories.length > 0 && (
            <>
              <div className="fooder-menu-wrapper">
                {categories.map((category, categoryIndex) => (
                  <div key={category.id} className="category-section mb-5">
                    {/* Category Header */}
                    <div 
                      className="category-header wow fadeInUp"
                      data-wow-delay={`.${categoryIndex * 2}s`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '30px',
                        paddingBottom: '15px',
                        borderBottom: '2px solid #ff6b35'
                      }}
                    >
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: '#ff6b35',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <i className={getCategoryIcon(category.name)} style={{ color: 'white', fontSize: '24px' }} />
                      </div>
                      <h3 style={{ 
                        margin: 0, 
                        fontSize: '32px', 
                        color: '#333',
                        fontWeight: '700'
                      }}>
                        {category.name}
                      </h3>
                    </div>

                    {/* Category Items */}
                    <div className="row">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={item.id}
                          className="col-xl-6 col-lg-6 wow fadeInUp"
                          data-wow-delay={`.${((itemIndex % 2) * 2 + 3)}s`}
                        >
                          <div className="food-menu-items d-flex align-items-center justify-content-between">
                            {item.images && item.images.length > 0 && (
                              <div className="food-menu-image" style={{ 
                                width: '80px', 
                                height: '80px', 
                                marginRight: '20px',
                                flexShrink: 0,
                                borderRadius: '8px',
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
                            <div className="food-menu-content" style={{ flex: 1 }}>
                              <h4>{item.name}</h4>
                              {getCleanDescription(item) && (
                                <p>{getCleanDescription(item)}</p>
                              )}
                            </div>
                            <h4 className="price" style={{ marginLeft: '15px' }}>
                              ${parseFloat(item.price).toFixed(2)}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* SkyTab Order Button */}
              <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".5s">
                <a 
                  href={SKYTAB_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="theme-btn"
                  style={{ fontSize: '18px', padding: '15px 40px' }}
                >
                  <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon">
                      <i className="flaticon-delivery" />
                    </span>
                    <span className="button-text">Order Online Now</span>
                  </span>
                </a>
              </div>
            </>
          )}
          
          </div>{/* End menu-document */}
        </div>
      </section>
      {/* Food Menu Section End */}
      <Cta />
    </FoodKingLayout>
  );
};

export default FoodMenu2;