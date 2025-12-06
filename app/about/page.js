import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const AboutPage = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"About Us"} />
      
      {/* Our Story Section */}
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="about-image">
                  <img src="assets/img/about/rooster.png" alt="about-img" />
                  <div className="burger-text">
                    <img
                      src="assets/img/about/burger-text.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="since-text bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/shape/food-shape.png")',
                    }}
                  >
                    <h3>
                      Est.<br />
                      2024
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Our Story</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Authentic <span>Key West</span> Flavors
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s" style={{ marginBottom: '20px' }}>
                    The Wandering Rooster represents three generations of local heritage and culinary tradition. Our family-owned food truck brings the island's most beloved flavors to life, crafted by natives who have called these sun-drenched streets home for over three decades.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".6s" style={{ marginBottom: '20px' }}>
                    Our deep connection to Key West drives everything we do. From sourcing fresh catches from local fishermen to recreating treasured family recipes, we're dedicated to sharing authentic Keys cuisine with both locals and visitors.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".7s" style={{ marginBottom: '30px' }}>
                    As a family-owned food cart, we believe in keeping things simple, fresh, and full of local character. Whether you're a first-time visitor or a longtime lover of Key West, we want you to experience the island the way we do—through its incredible food, warm hospitality, and laid-back island vibes.
                  </p>
                  
                  {/* Milestones */}
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div 
                        className="milestone-card wow fadeInUp" 
                        data-wow-delay=".8s"
                        style={{
                          background: 'white',
                          padding: '25px',
                          borderRadius: '12px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{
                          width: '60px',
                          height: '60px',
                          background: '#ff6b35',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 15px'
                        }}>
                          <i className="fas fa-calendar-alt" style={{ color: 'white', fontSize: '24px' }} />
                        </div>
                        <h3 style={{ fontSize: '32px', color: '#ff6b35', marginBottom: '5px' }}>2024</h3>
                        <p style={{ margin: 0, color: '#666' }}>Established</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div 
                        className="milestone-card wow fadeInUp" 
                        data-wow-delay=".9s"
                        style={{
                          background: 'white',
                          padding: '25px',
                          borderRadius: '12px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{
                          width: '60px',
                          height: '60px',
                          background: '#ff6b35',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 15px'
                        }}>
                          <i className="fas fa-star" style={{ color: 'white', fontSize: '24px' }} />
                        </div>
                        <h3 style={{ fontSize: '32px', color: '#ff6b35', marginBottom: '5px' }}>100+</h3>
                        <p style={{ margin: 0, color: '#666' }}>Five-Star Reviews</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 wow fadeInUp" data-wow-delay="1s">
                    <Link href="/menu" className="theme-btn">
                      <span className="button-content-wrapper d-flex align-items-center">
                        <span className="button-icon">
                          <i className="flaticon-fork" />
                        </span>
                        <span className="button-text">View Our Menu</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <Cta />

      {/* Decorative Separator */}
      <div style={{ 
        background: 'linear-gradient(to bottom, #fff 0%, #f8f9fa 100%)',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Decorative Line with Icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{
                height: '2px',
                width: '100px',
                background: 'linear-gradient(to right, transparent, #ff6b35)',
              }} />
              <div style={{
                width: '50px',
                height: '50px',
                background: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
              }}>
                <i className="fas fa-users" style={{ color: 'white', fontSize: '22px' }} />
              </div>
              <div style={{
                height: '2px',
                width: '100px',
                background: 'linear-gradient(to left, transparent, #ff6b35)',
              }} />
            </div>
          </div>
        </div>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 107, 53, 0.05)',
          borderRadius: '50%',
          transform: 'translateY(-50%)'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 107, 53, 0.03)',
          borderRadius: '50%',
          transform: 'translateY(-50%)'
        }} />
      </div>

      {/* Team/Family Gallery Section */}
      <section className="team-gallery-section section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Meet The Team</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              The Faces Behind <span>The Flavors</span>
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '600px', margin: '15px auto 0', color: '#666' }}>
              We're a family-owned business bringing authentic Key West cuisine to life. Meet the people who make it all happen!
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="row g-4">
            {/* Large Featured Image */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div 
                className="gallery-item large"
                style={{
                  position: 'relative',
                  height: '500px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <img 
                  src="assets/img/about/team-main.jpg" 
                  alt="Our Team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div 
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '30px',
                    color: 'white'
                  }}
                >
                  <h4 style={{ fontSize: '24px', marginBottom: '5px' }}>The Wandering Rooster Family</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>Three generations of Key West tradition</p>
                </div>
              </div>
            </div>

            {/* Smaller Images */}
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12 wow fadeInUp" data-wow-delay=".6s">
                  <div 
                    className="gallery-item"
                    style={{
                      position: 'relative',
                      height: '240px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    <img 
                      src="assets/img/about/team.jpg" 
                      alt="Cooking"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      className="gallery-overlay"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        padding: '20px',
                        color: 'white'
                      }}
                    >
                      <h5 style={{ fontSize: '18px', margin: 0 }}>Fresh Every Day</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 wow fadeInUp" data-wow-delay=".7s">
                  <div 
                    className="gallery-item"
                    style={{
                      position: 'relative',
                      height: '240px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    <img 
                      src="assets/img/about/truck-night.jpg" 
                      alt="Serving"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      className="gallery-overlay"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        padding: '15px',
                        color: 'white'
                      }}
                    >
                      <h5 style={{ fontSize: '16px', margin: 0 }}>Serving Smiles</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 wow fadeInUp" data-wow-delay=".8s">
                  <div 
                    className="gallery-item"
                    style={{
                      position: 'relative',
                      height: '240px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    <img 
                      src="assets/img/about/truck.jpg" 
                      alt="Location"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      className="gallery-overlay"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        padding: '15px',
                        color: 'white'
                      }}
                    >
                      <h5 style={{ fontSize: '16px', margin: 0 }}>Key West Vibes</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".9s">
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
              Come visit us and become part of our story!
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="theme-btn">
                <span className="button-content-wrapper d-flex align-items-center">
                  <span className="button-icon">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <span className="button-text">Find Us</span>
                </span>
              </Link>
              <a 
                href="https://www.google.com/search?q=your+business+key+west" 
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn"
              >
                <span className="button-content-wrapper d-flex align-items-center">
                  <span className="button-icon">
                    <i className="fas fa-star" />
                  </span>
                  <span className="button-text">Leave a Review</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </FoodKingLayout>
  );
};

export default AboutPage;