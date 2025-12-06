"use client";

import Link from "next/link";

export const SingleHeroSlideMinimal = () => {
  const duration = "1";
  
  return (
    <section className="hero-section">
      <div 
        className="hero-2 bg-cover" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url("assets/img/hero/twr_old.jpg")',
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* NO decorative shapes - completely clean */}
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div 
                className="hero-content text-center"
                style={{
                  padding: '40px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
              >
                <p 
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.3s"
                  style={{
                    fontSize: '18px',
                    color: '#ff6b35',
                    fontWeight: '600',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  Welcome to Key West
                </p>
                <h1 
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.5s"
                  style={{
                    fontSize: '42px',
                    lineHeight: '1.3',
                    marginBottom: '20px',
                    color: '#333'
                  }}
                >
                  Authentic Island Flavors<br />
                  <span style={{ color: '#ff6b35' }}>Since 2024</span>
                </h1>
                <p
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.6s"
                  style={{
                    fontSize: '16px',
                    color: '#666',
                    marginBottom: '30px',
                    maxWidth: '500px',
                    margin: '0 auto 30px'
                  }}
                >
                  Three generations of Key West tradition in every bite
                </p>
                <div 
                  className="hero-button d-flex gap-3 justify-content-center flex-wrap"
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.8s"
                >
                  <Link href="/menu" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-fork" />
                      </span>
                      <span className="button-text">View Menu</span>
                    </span>
                  </Link>
                  <Link href="/contact" className="theme-btn bg-white" style={{ color: '#ff6b35' }}>
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-location" />
                      </span>
                      <span className="button-text">Find Us</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};