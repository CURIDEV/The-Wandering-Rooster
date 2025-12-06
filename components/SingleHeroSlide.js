"use client";

import Link from "next/link";

export const SingleHeroSlide = () => {
  const duration = "1";
  
  return (
    <section className="hero-section">
      <div className="hero-2 bg-contain" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("assets/img/hero/twr_old.jpg")' }}>
        <div className="left-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.2s">
          <img src="assets/img/hero/left-shape.png" alt="shape-img" />
        </div>
        <div className="chili-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.4s">
          <img src="assets/img/hero/leaves+chilli.png" alt="shape-img" />
        </div>
        <div className="vagetable-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.8s">
          <img src="assets/img/hero/onion+tomato.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="hero-content">
                <p data-animation="fadeInUp" data-duration={duration} data-delay="1.3s">
                  The Ultimate Smash 
                </p>
                <h1 data-animation="fadeInUp" data-duration={duration} data-delay="1.5s">
                  Makes You Wander Back For More 
                </h1>
                <div data-animation="fadeInUp" data-duration={duration} data-delay="1.7s" className="price-text">
                  <h3></h3>
                  <h2></h2>
                </div>
                <div className="hero-button">
                  <Link href="/shop-single" className="theme-btn" data-animation="fadeInUp" data-duration={duration} data-delay="1.9s">
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery" />
                      </span>
                      <span className="button-text">order now</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
              <div className="burger-image" data-animation="fadeInUp" data-duration={duration} data-delay="1.4s">
                <img 
                  src="assets/img/hero/burger.png" 
                  alt="smash-burger"
                  style={{
                    maxWidth: '550px',
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                <div className="burger-text" data-animation="fadeInUp" data-duration={duration} data-delay="1.6s">
                  <img src="assets/img/hero/burger-text.png" alt="shape-img"  />
                </div>
                <div className="hero-text" data-animation="fadeInUp" data-duration={duration} data-delay="1.8s">
                  <img src="assets/img/hero/today_best_deals.png" alt="text-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};