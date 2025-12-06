"use client";

import Link from "next/link";

export const SingleHeroSlide3 = () => {
  const duration = "1";
  
  return (
    <section className="hero-section">
      <div 
        className="hero-2 bg-cover" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("assets/img/hero/twr_old.jpg")',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          backgroundPosition: 'center 15%',
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <p 
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.3s"
                  style={{
                    color: '#ff6b35',
                    fontSize: '20px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    marginBottom: '15px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  
                </p>
                <h1 
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.5s"
                  style={{
                    color: 'white',
                    fontSize: '80px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '20px',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
                  }}
                >
                  Makes You Wander... Back For
                  <span style={{ color: '#d12525' }}> More!</span>
                </h1>
                <p
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.7s"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    marginBottom: '30px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    maxWidth: '500px'
                  }}
                >
                  Three generations of Key West tradition in every bite
                </p>
                <div 
                  className="hero-button d-flex gap-3 flex-wrap"
                  data-animation="fadeInUp" 
                  data-duration={duration} 
                  data-delay="1.9s"
                >
                  <Link href="/food-menu"className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-fork" />
                      </span>
                      <span className="button-text">Our Menu</span>
                    </span>
                  </Link>
                  <Link href="https://online.skytab.com/2f3f98da057f3ff70d5e32d773b8e783/order-settings" className="theme-btn bg-white" style={{ color: '#d12525' }}>
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-location" />
                      </span>
                      <span className="button-text">Order Now</span>
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