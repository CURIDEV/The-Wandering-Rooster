import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const ContactPage = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Contact Us"} />
      
      {/* Modern Contact Section */}
      <section className="contact-section section-padding section-bg">
        <div className="container">
          <div className="row g-5">
            
            {/* Left Side - Contact Info & Map */}
            <div className="col-lg-6">
              <div className="contact-info-wrapper">
                <div className="section-title mb-4">
                  <span className="wow fadeInUp">Get in Touch</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Visit Us in Key West
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s" style={{ color: '#666', marginTop: '15px' }}>
                    Stop by our food truck for authentic Key West flavors! We're here to serve you delicious food with island vibes.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="contact-cards mb-4">
                  {/* Address */}
                  <div 
                    className="contact-card wow fadeInUp" 
                    data-wow-delay=".5s"
                    style={{
                      background: 'white',
                      padding: '25px',
                      borderRadius: '12px',
                      marginBottom: '20px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#ff6b35',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fas fa-map-marker-alt" style={{ color: 'white', fontSize: '22px' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>Location</h4>
                      <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>
                        513 Greene Street<br />
                        Key West, FL 33040
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div 
                    className="contact-card wow fadeInUp" 
                    data-wow-delay=".6s"
                    style={{
                      background: 'white',
                      padding: '25px',
                      borderRadius: '12px',
                      marginBottom: '20px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#ff6b35',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fas fa-phone-alt" style={{ color: 'white', fontSize: '22px' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>Phone</h4>
                      <p style={{ margin: 0, color: '#666' }}>
                        <a href="tel:+13055551234" style={{ color: '#ff6b35', textDecoration: 'none' }}>
                          (305) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div 
                    className="contact-card wow fadeInUp" 
                    data-wow-delay=".7s"
                    style={{
                      background: 'white',
                      padding: '25px',
                      borderRadius: '12px',
                      marginBottom: '30px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#ff6b35',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fas fa-envelope" style={{ color: 'white', fontSize: '22px' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>Email</h4>
                      <p style={{ margin: 0, color: '#666' }}>
                        <a href="mailto:info@yourfoodtruck.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>
                          info@yourfoodtruck.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="google-map wow fadeInUp" data-wow-delay=".8s" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.845588193442!2d-81.80349!3d24.55572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d1b134ad952377%3A0x1!2s513%20Greene%20St%2C%20Key%20West%2C%20FL%2033040!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-lg-6">
              <div 
                className="contact-form-modern wow fadeInUp" 
                data-wow-delay=".5s"
                style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                }}
              >
                <div className="section-title mb-4">
                  <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Send Us a Message</h2>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Have a question or want to place a special order? Fill out the form below and we'll get back to you as soon as possible!
                  </p>
                </div>

                <form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
                  <div className="row g-4">
                    {/* Name */}
                    <div className="col-12">
                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                        Your Name <span style={{ color: '#ff6b35' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        style={{
                          width: '100%',
                          padding: '15px',
                          border: '2px solid #eee',
                          borderRadius: '8px',
                          fontSize: '16px',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                        Email Address <span style={{ color: '#ff6b35' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        style={{
                          width: '100%',
                          padding: '15px',
                          border: '2px solid #eee',
                          borderRadius: '8px',
                          fontSize: '16px',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Phone (Optional) */}
                    <div className="col-12">
                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(305) 555-1234"
                        style={{
                          width: '100%',
                          padding: '15px',
                          border: '2px solid #eee',
                          borderRadius: '8px',
                          fontSize: '16px',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                        Your Message <span style={{ color: '#ff6b35' }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        style={{
                          width: '100%',
                          padding: '15px',
                          border: '2px solid #eee',
                          borderRadius: '8px',
                          fontSize: '16px',
                          resize: 'vertical',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="theme-btn w-100"
                        style={{
                          width: '100%',
                          padding: '15px',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '15px'
                        }}
                      >
                        <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                          <span className="button-icon">
                            <i className="fas fa-paper-plane" />
                          </span>
                          <span className="button-text">Send Message</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* Quick Links */}
                <div style={{ 
                  marginTop: '30px', 
                  paddingTop: '30px', 
                  borderTop: '1px solid #eee',
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href="/menu" 
                    className="theme-btn"
                    style={{
                      flex: '1',
                      minWidth: '150px',
                      textAlign: 'center',
                      padding: '12px 20px',
                      fontSize: '14px'
                    }}
                  >
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="fas fa-utensils" />
                      </span>
                      <span className="button-text">View Menu</span>
                    </span>
                  </a>
                  <a 
                    href="https://your-skytab-ordering-url.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                    style={{
                      flex: '1',
                      minWidth: '150px',
                      textAlign: 'center',
                      padding: '12px 20px',
                      fontSize: '14px'
                    }}
                  >
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="fas fa-shopping-bag" />
                      </span>
                      <span className="button-text">Order Online</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Cta />
    </FoodKingLayout>
  );
};

export default ContactPage;
