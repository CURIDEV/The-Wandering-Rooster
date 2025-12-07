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
                    <img src="assets/img/logo/twr_logo.svg" alt="The Wandering Rooster" height="125" width="125" />
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

            {/* Location & Map */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-4 mb-lg-0 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Visit Us</h4>
                </div>
                <div className="footer-address-text">
                  <h6 className="mb-3">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    513 Greene Street<br />
                    Key West, FL 33040
                  </h6>
                  
                  {/* Embedded Map */}
                  <div className="map-container mb-3" style={{ 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.1)'
                  }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8154440697787!2d-81.80324492377726!3d24.557964178149157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d1b13d8b1b8b8b%3A0x1234567890abcdef!2s513%20Greene%20St%2C%20Key%20West%2C%20FL%2033040!5e0!3m2!1sen!2sus!4v1234567890123"
                      width="100%"
                      height="180"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  
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
                    <Link href="/food-menu">Menu</Link>
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
                    <Link href="/news">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter & Contact */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Stay Connected</h4>
                </div>
                <div className="footer-content">
                  <p className="mb-3" style={{ fontSize: '14px' }}>
                    Get updates on our location, menu specials, and events!
                  </p>
                  
                  {/* Newsletter Form */}
                  <form onSubmit={handleSubscribe} className="newsletter-form mb-4">
                    <div className="input-group" style={{ 
                      background: 'white',
                      borderRadius: '6px',
                      padding: '4px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          padding: '10px 12px',
                          border: 'none',
                          borderRadius: '4px',
                          backgroundColor: 'white',
                          color: '#333',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={isSubmitting}
                        style={{
                          padding: '10px 18px',
                          borderRadius: '4px',
                          border: 'none',
                          whiteSpace: 'nowrap',
                          fontSize: '14px'
                        }}
                      >
                        {isSubmitting ? 'Joining...' : 'Subscribe'}
                      </button>
                    </div>
                  </form>
                  
                  {/* Contact Info */}
                  <div style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '15px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <h5 style={{ fontSize: '12px', marginBottom: '10px', opacity: 0.8 }}>CONTACT US</h5>
                    <p style={{ margin: '0 0 8px 0' }}>
                      <a 
                        href="tel:+13055550123" 
                        style={{ 
                          color: '#D12525',
                          fontSize: '16px',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        <i className="fas fa-phone-alt me-2" style={{ fontSize: '13px' }}></i>
                        (954) 760-0555
                      </a>
                    </p>
                    <p style={{ margin: 0 }}>
                      <a 
                        href="mailto:twradmin@wanderingrooster.com" 
                        style={{ 
                          color: '#D12525',
                          fontSize: '16px',
                          textDecoration: 'none',
                          opacity: 0.9,
                          display: 'block'
                        }}
                      >
                        <i className="fas fa-envelope me-2" style={{ fontSize: '13px' }}></i>
                        twradmin@wanderingrooster.com
                      </a>
                    </p>
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
              © Copyright <span className="theme-color-3">2025</span>{" "}
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
