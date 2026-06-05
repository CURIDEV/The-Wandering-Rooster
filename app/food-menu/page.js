'use client';

import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Cta from "@/components/Cta";

// Hardcoded menu data - replace with Sanity later
const MENU_DATA = [
  {
    name: 'Sunset Starters',
    items: [
      {
        id: 1,
        name: 'Conch Fritters',
        description: 'Crispy on the outside, tender inside—our conch fritters are packed with fresh herbs, and island spices. They’re a true taste of the Keys in every bite. Bold, savory, and full of coastal flavor.',
        price: 15.00,
        image: null, // or '/assets/img/menu/conch-fritters.jpg'
      },

      {
        id: 2,
        name: 'Loaded Tater Tots',
        description: 'Crispy golden tots smothered in tender smoked pork and rich BBQ sauce. The crunch hits first, then the smoke, then that sweet tangy kick. Comfort food cranked up to island level.',
        price: 12.00,
        image: null,
      },

    ],
  },
  {
    name: 'Smash Burgers',
    items: [
      {
        id: 10,
        name: 'Duval Street Smash',
        description: 'Double Smash Patty with American cheese, Mustard, Diced Onions and Pickles on a Lightly Toasted Potato Bun.',
        price: 16.00,
        image: null,
      },
      {
        id: 11,
        name: 'Onion Smash',
        description: 'Double Smash Patty with American Cheese, Grilled Onions & Our Signature Rooster Sauce on a Lightly Toasted Potato Bun.',
        price: 16.00,
        image: null,
      },

      {
        id: 12,
        name: 'Rooster Smash',
        description: 'Double Smash Patty featuring our own Signature Cock Sauce & American Cheese. It’s a Must-Try for Burger Lovers Craving a Taste of the Island.',
        price: 16.00,
        image: null,
      },

      {
        id: 13,
        name: 'Smash Hamburger',
        description: 'Our signature juicy single smash burger, cooked to perfection and built your way. Choose your favorite toppings and create the perfect bite every time.',
        price: 13.00,
        image: null,
      },

      {
        id: 14,
        name: 'Smash Cheeseburger',
        description: 'Our signature juicy single smash burger with American Cheese, cooked to perfection and built your way. Choose your favorite toppings and create the perfect bite every time.',
        price: 13.00,
        image: null,
      },
    ],
  },
  {
    name: 'Sandwiches',
    items: [
      {
        id: 20,
        name: 'Rooster "Cuban" Mix',
        description: 'Our twist on the classic Cuban Mix Sandwich. Slow-smoked pork, sliced ham, and melted Swiss on toasted Cuban bread with house mustard sauce, shredded lettuce, and tangypickles. Pressed until golden and crackling—warm and savory inside.',
        price: 14.00,
        image: null,
      },

      {
        id: 21,
        name: 'Pulled Pork Sandwich',
        description: 'Piled-high pulled pork smoked low and slow, finished with rich BBQ sauce and a crisp mango slaw on a soft potato bun. Tender meat, tangy sauce, sweet heat from the slaw—comfort food with island soul.',
        price: 14.00,
        image: null,
      },
    ],
  },
  {
    name: 'Sides',
    items: [
      {
        id: 30,
        name: 'Tater Tots',
        description: 'Crispy, golden bite-size potatoes fried to perfection. Crunchy outside, fluffy inside. Served hot and salted just right.',
        price: 4.00,
        image: null,
      },

      {
        id: 31,
        name: 'Hand Cut Chips',
        description: 'Fresh hand-cut potatoes fried until perfectly crisp and lightly salted. Thin, crunchy, and made to order.',
        price: 4.00,
        image: null,
      },

      {
        id: 32,
        name: 'Island Slaw',
        description: 'Sweet & tangy tropical slaw with a fresh island twist.',
        price: 4.00,
        image: null,
      },
    ],
  },
  {
    name: 'Beverages',
    items: [
      {
        id: 40,
        name: 'Key West Lemonade',
        description: 'Fresh-squeezed with a Key West twist',
        price: 5.00,
        image: null,
      },

      {
        id: 41,
        name: 'Chilled Southern Sweet Tea',
        description: 'Fresh-squeezed with a Key West twist',
        price: 5.00,
        image: null,
      },

{
        id: 42,
        name: 'Coca-Cola',
        description: 'Classic Coke, the original cola flavor.',
        price: 3.50,
        image: null,
      },

      {
        id: 43,
        name: 'Sprite',
        description: 'Refreshing lemon-lime soda.',
        price: 3.50,
        image: null,
      },

      {
        id: 44,
        name: 'Diet Coke',
        description: 'Zero sugar version of the classic cola.',
        price: 3.50,
        image: null,
      },

        {
        id: 45,
        name: 'Bottled Water',
        description: 'Clean, refreshing bottled water.',
        price: 3.50,
        image: null,
      },
    ],
  },
];

const FoodMenu2 = () => {
  // Replace with your SkyTab online ordering URL
  const SKYTAB_URL = "https://your-skytab-ordering-url.com";

  // Icons for different categories
  const getCategoryIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('burger')) return 'flaticon-burger';
    if (name.includes('side')) return 'flaticon-french-fries';
    if (name.includes('starter') || name.includes('appetizer')) return 'flaticon-quality';
    if (name.includes('sandwich') || name.includes('classic')) return 'flaticon-sandwich';
    if (name.includes('fresh')) return 'flaticon-quality';
    if (name.includes('beverages') || name.includes('drink')) return 'flaticon-quality';
    if (name.includes('ice') || name.includes('shaved')) return 'flaticon-quality';
    if (name.includes('salad')) return 'flaticon-quality';
    if (name.includes('main') || name.includes('entree')) return 'flaticon-chicken';
    if (name.includes('dessert')) return 'flaticon-ice-cream';
    return 'flaticon-fork';
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Food Menu"} />

      {/* Food Menu Section - One Complete Document */}
      <section className="fooder-menu-section fix section-padding">
        <div className="container">
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
            <div style={{ position: 'absolute', top: '15px', left: '15px', width: '30px', height: '30px', borderTop: '3px solid #ff6b35', borderLeft: '3px solid #ff6b35' }} />
            <div style={{ position: 'absolute', top: '15px', right: '15px', width: '30px', height: '30px', borderTop: '3px solid #ff6b35', borderRight: '3px solid #ff6b35' }} />
            <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '30px', height: '30px', borderBottom: '3px solid #ff6b35', borderLeft: '3px solid #ff6b35' }} />
            <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '30px', height: '30px', borderBottom: '3px solid #ff6b35', borderRight: '3px solid #ff6b35' }} />

            {/* Menu Header */}
            <div className="menu-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div style={{ marginBottom: '25px' }}>
                <img 
                  src="assets/img/logo/twr_logo.svg" 
                  alt="The Wandering Rooster"
                  style={{ maxWidth: '250px', height: 'auto', margin: '0 auto', display: 'block' }}
                />
              </div>
              <div style={{
                borderTop: '2px solid #ff6b35',
                borderBottom: '2px solid #ff6b35',
                padding: '20px 0',
                margin: '20px auto',
                maxWidth: '600px'
              }}>
                <h2 style={{ fontSize: '42px', margin: 0, color: '#333', fontFamily: 'serif' }}>
                  Our Menu
                </h2>
                <p style={{ margin: '10px 0 0', color: '#666', fontSize: '16px', fontStyle: 'italic' }}>
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
                  (786) 553-6807
                </div>
              </div>
            </div>

            <div className="fooder-menu-wrapper">
              {MENU_DATA.map((category, categoryIndex) => (
                <div key={category.name} className="category-section mb-5">
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
                    <h3 style={{ margin: 0, fontSize: '32px', color: '#333', fontWeight: '700' }}>
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
                        <div className="food-menu-items d-flex align-items-start justify-content-between">
                          {item.image && (
                            <div style={{ 
                              width: '80px', 
                              height: '80px', 
                              marginRight: '20px',
                              flexShrink: 0,
                              borderRadius: '8px',
                              overflow: 'hidden'
                            }}>
                              <img 
                                src={item.image} 
                                alt={item.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            </div>
                          )}
                          <div className="food-menu-content" style={{ flex: 1 }}>
                            <h4>{item.name}</h4>
                            {item.description && <p>{item.description}</p>}
                          </div>
                          <h4 className="price" style={{ marginLeft: '15px' }}>
                            ${item.price.toFixed(2)}
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
                href="https://online.skytab.com/2f3f98da057f3ff70d5e32d773b8e783/order-settings"
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

          </div>{/* End menu-document */}
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default FoodMenu2;