"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your newsletter subscription logic here
    // For example, integrate with Mailchimp, ConvertKit, etc.
    
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thanks for subscribing!");
    }, 1000);
  };

  return (
    <footer className="footer-section fix section-bg">
      <div className="burger-shape">
        <img src="assets/img/shape/burger-shape-3.png" alt="burger-shape" />
      </div>
      <div className="fry-shape">
        <img src="assets/img/shape/fry-shape-2.png" alt="burger-shape" />
      </div>
      
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row justify-content-between">
            
            {/* Logo & About */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-4 mb-lg-0 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head mb-3">
                  <Link href="/">
                    <img src="assets/img/logo/logo.svg" alt="The Wandering Rooster" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p className="mb-3">
                    Key West's favorite food truck serving fresh, delicious meals with island flavor.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://facebook.com/wanderingrooster" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://instagram.com/wanderingrooster" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://twitter.com/wanderingrooster" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Location */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-4 mb-lg-0 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Visit Us</h4>
                </div>
                <div className="footer-address-text">
                  <h6 className="mb-3">
                    Key West, Florida
                  </h6>
                  <h5>Hours:</h5>
                  <h6 className="mb-2">
                    11:00am – 8:00pm
                  </h6>
                  <h6>
                    Tuesday – Sunday
                  </h6>
                  <p className="mt-3" style={{ fontSize: '14px', opacity: 0.8 }}>
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Check Instagram for daily location
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-xl-2 col-lg-4 col-md-6 mb-4 mb-lg-0 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/catering">Catering</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Stay Updated</h4>
                </div>
                <div className="footer-content">
                  <p className="mb-3">
                    Get the latest updates on our location, menu specials, and events!
                  </p>
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          padding: '12px 15px',
                          borderRadius: '4px 0 0 4px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          color: '#fff'
                        }}
                      />
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={isSubmitting}
                        style={{
                          padding: '12px 20px',
                          borderRadius: '0 4px 4px 0',
                          border: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {isSubmitting ? 'Joining...' : 'Subscribe'}
                      </button>
                    </div>
                  </form>
                  <div className="support-text mt-4">
                    <h5>Questions?</h5>
                    <h3>
                      <a href="tel:+1305-555-0123">+1 (305) 555-0123</a>
                    </h3>
                    <a 
                      href="mailto:hello@wanderingrooster.com" 
                      className="link"
                      style={{ fontSize: '14px' }}
                    >
                      hello@wanderingrooster.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex flex-column flex-md-row align-items-center justify-content-between">
            <p className="wow fadeInLeft mb-3 mb-md-0" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2024</span>{" "}
              <Link href="/">The Wandering Rooster</Link>. All Rights Reserved.
            </p>
            <div className="footer-links wow fadeInRight" data-wow-delay=".5s">
              <Link href="/privacy" className="me-3">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
