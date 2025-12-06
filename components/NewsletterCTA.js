"use client";
import { useState } from 'react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    try {
      // TODO: Later integrate with WordPress or email service
      // For now, just show success message
      console.log('Newsletter signup:', email);
      setStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section 
      className="newsletter-section fix section-padding"
      style={{
        background: 'linear-gradient(135deg, #222222 0%, #d12525 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative shapes */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        opacity: 0.5
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '300px',
        height: '300px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        opacity: 0.3
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-8">
            <div className="newsletter-content">
              {/* Icon */}
              <div className="wow fadeInUp" data-wow-delay=".2s">
                <i 
                  className="far fa-envelope-open" 
                  style={{ 
                    fontSize: '60px', 
                    color: 'white',
                    marginBottom: '20px'
                  }}
                />
              </div>

              {/* Heading */}
              <h2 
                className="text-white wow fadeInUp" 
                data-wow-delay=".3s"
                style={{ marginBottom: '15px', fontSize: '42px' }}
              >
                Follow the Flock for Exclusive Deals
              </h2>

              {/* Subtext */}
              <p 
                className="text-white wow fadeInUp" 
                data-wow-delay=".4s"
                style={{ 
                  fontSize: '18px', 
                  marginBottom: '35px',
                  opacity: 0.9
                }}
              >
                Subscribe to get exclusive deals, special offers, and be the first to know about our latest menu items!
              </p>

              {/* Subscription Form */}
              <form 
                onSubmit={handleSubmit}
                className="wow fadeInUp" 
                data-wow-delay=".5s"
              >
                <div style={{ 
                  maxWidth: '600px', 
                  margin: '0 auto',
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{
                      flex: '1',
                      minWidth: '250px',
                      padding: '15px 25px',
                      fontSize: '16px',
                      border: 'none',
                      borderRadius: '50px',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="theme-btn"
                    style={{
                      padding: '15px 40px',
                      fontSize: '16px',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      background: 'white',
                      color: '#dc2626',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#f3f4f6';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Subscribe Now
                  </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <p style={{ 
                    color: 'white', 
                    marginTop: '20px',
                    fontSize: '16px',
                    background: 'rgba(34, 197, 94, 0.3)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}>
                    ✓ Thanks for subscribing! Check your email for confirmation.
                  </p>
                )}

                {status === 'error' && (
                  <p style={{ 
                    color: 'white', 
                    marginTop: '20px',
                    fontSize: '16px',
                    background: 'rgba(239, 68, 68, 0.3)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}>
                    ✗ Please enter a valid email address.
                  </p>
                )}
              </form>

              {/* Privacy Note */}
              <p 
                className="text-white wow fadeInUp" 
                data-wow-delay=".6s"
                style={{ 
                  fontSize: '14px', 
                  marginTop: '20px',
                  opacity: 0.7
                }}
              >
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;