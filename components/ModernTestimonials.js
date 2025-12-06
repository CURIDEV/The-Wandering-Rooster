"use client";

import { useState, useEffect } from 'react';

const ModernTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Your testimonials - add as many as you want!
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Google Reviewer",
      image: "assets/img/client/avatar-1.jpg",
      text: "Best conch fritters in Key West! The seasoning is perfect and they're always fresh and hot. I come here at least twice a week!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Local Regular",
      image: "assets/img/client/avatar-2.jpg",
      text: "The turtle soup is incredible - authentic Key West recipe. Staff is friendly and the atmosphere is great. Highly recommend!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Visitor from Miami",
      image: "assets/img/client/avatar-3.jpg",
      text: "Found this gem while visiting Key West. The grouper sandwich was amazing and the tots were perfectly crispy. Will definitely be back!",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Facebook Reviewer",
      image: "assets/img/client/avatar-4.jpg",
      text: "Authentic Key West flavors! The conch chowder is the best I've had. Great portions and friendly service. A must-visit spot!",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Martinez",
      role: "Tourist",
      image: "assets/img/client/avatar-5.jpg",
      text: "We came here three times during our vacation! Everything on the menu is delicious. The key lime pie is to die for!",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Yelp Reviewer",
      image: "assets/img/client/avatar-6.jpg",
      text: "Best food truck in Key West, hands down. Fresh ingredients, generous portions, and incredible taste. You won't be disappointed!",
      rating: 5
    }
  ];

  // Calculate how many testimonials to show at once (3 on desktop, 2 on tablet, 1 on mobile)
  const [itemsPerView, setItemsPerView] = useState(3);
  
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 992) {
        setItemsPerView(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(1); // Mobile: 1 card
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView, testimonials.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
        style={{ fontSize: '14px', marginRight: '2px' }}
      />
    ));
  };

  // Generate avatar with initials
  const getAvatarStyle = (name) => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#f39c12'];
    const colorIndex = name.charCodeAt(0) % colors.length;
    
    return {
      backgroundColor: colors[colorIndex],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    };
  };

  const getInitials = (name) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return names[0][0] + names[names.length - 1][0];
    }
    return name.substring(0, 2);
  };

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  return (
    <section className="testimonial-section fix section-padding" style={{ background: '#f8f9fa', position: 'relative' }}>
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="wow fadeInUp">Testimonials</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            What Our Customers Say
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".4s" style={{ color: '#666', marginTop: '10px' }}>
            Over 100 five-star reviews in our first 90 days!
          </p>
        </div>

        {/* Slider Container */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '0 50px' }}>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              opacity: currentIndex === 0 ? 0.4 : 1,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <i className="fas fa-chevron-left" style={{ fontSize: '20px', color: '#333' }} />
          </button>

          {/* Testimonials Track */}
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    padding: '0 15px'
                  }}
                >
                  <div 
                    className="testimonial-card"
                    style={{
                      background: 'white',
                      padding: '30px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Quote Icon */}
                    <div style={{ marginBottom: '20px' }}>
                      <i 
                        className="fas fa-quote-left" 
                        style={{ 
                          fontSize: '32px', 
                          color: '#ff6b6b',
                          opacity: 0.3 
                        }}
                      />
                    </div>

                    {/* Stars */}
                    <div style={{ marginBottom: '15px' }}>
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p 
                      style={{ 
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#666',
                        marginBottom: '25px',
                        flex: 1,
                        minHeight: '100px'
                      }}
                    >
                      "{testimonial.text}"
                    </p>

                    {/* Customer Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          flexShrink: 0,
                          ...getAvatarStyle(testimonial.name)
                        }}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h5 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                          {testimonial.name}
                        </h5>
                        <span style={{ fontSize: '14px', color: '#999' }}>
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              opacity: currentIndex >= maxIndex ? 0.4 : 1,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (currentIndex < maxIndex) e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <i className="fas fa-chevron-right" style={{ fontSize: '20px', color: '#333' }} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: currentIndex === index ? '#ff6b6b' : '#ddd',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".5s">
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '15px' }}>
            Love our food? Share your experience!
          </p>
          <a 
            href="https://www.google.com/search?q=your+business+name+key+west" 
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;