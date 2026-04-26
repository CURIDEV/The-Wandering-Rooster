"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;

    default:
      return <Header1 />;
  }
};
export default Header;

const Menus = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <a href="https://www.roostershop.store" target="_blank" rel="noopener noreferrer">
          Shop
        </a>
      </li>
      <li>
        <Link href="/food-menu">Menu</Link>
      </li>
      
      <li className="has-dropdown">
        <Link href="/about">
          About Us
          <i className="fas fa-angle-down" />
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/testimonial">Testimonials</Link>
          </li>          
        </ul>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

const Header1 = () => {
  return (
    <Fragment>
      <header className="section-bg">
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <ul>
                <li>
                  <span>100%</span> Fast & Fresh Delivery
                </li>
                <li>
                  <i className="fas fa-truck" />
                  513 Greene Street, Key West, FL 33040
                </li>
              </ul>
              <div className="top-right">
                <div className="search-wrp">
                  <button>
                    <i className="far fa-phone" />
                  </button>
                  <input placeholder="954-760-0555" aria-label="search" />
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/p/The-Wandering-Rooster-61579850699163/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/thewanderingrooster/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.google.com/search?q=the+wandering+rooster+google+business+profile&oq=the&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg8MgYIARBFGDsyDggCEEUYJxg7GIAEGIoFMhUIAxAuGCcYrwEYxwEYgAQYigUYjgUyBggEEEUYOTIGCAUQRRg8MgYIBhBFGD0yBggHEEUYQdIBCDM0MzlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google" />
                  </a>
                  <a href="https://www.yelp.com/biz/the-wandering-rooster-key-west" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-yelp"  />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/twr_logo.svg" alt="logo-img" width="90" height="90" />
                  </Link>
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header-button">
                    <Link href="https://online.skytab.com/2f3f98da057f3ff70d5e32d773b8e783/order-settings"  target="_blank" className="theme-btn bg-red-2">
                      WE DELIVER 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <MobileMenu />
    </Fragment>
  );
};

const Header2 = () => {
  return (
    <Fragment>
      <header>
        <div id="header-sticky" className="header-2">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo-3.svg" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="logo-2">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo.svg" alt="logo-img" />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  
                  <div className="header-button">
                    <a href="https://www.roostershop.store"
  className="theme-btn bg-transparent"
>
                      <span className="button-content-wrapper d-flex align-items-center">
                        <span className="button-icon">
                          <i className="flaticon-delivery" />
                        </span>
                        <span className="button-text">order now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSubmenu = (menu) => setActiveMenu(activeMenu === menu ? "" : menu);

  return (
    <div className="twr-mobile-menu d-block d-lg-none" style={{ background: '#1a1a1a', padding: '20px' }}>
      <div style={{ position: 'relative' }}>
        <button 
          onClick={toggleMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            background: '#D12525',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <div style={{ width: '25px', height: '20px', position: 'relative' }}>
            <span style={{
              display: 'block',
              background: '#fff',
              height: '3px',
              width: '100%',
              position: 'absolute',
              top: 0,
              borderRadius: '2px',
              transition: 'all 0.3s',
              transform: isOpen ? 'rotate(45deg)' : 'none',
              transformOrigin: 'center',
              top: isOpen ? '8px' : '0'
            }}></span>
            <span style={{
              display: 'block',
              background: '#fff',
              height: '3px',
              width: '100%',
              position: 'absolute',
              top: '8px',
              borderRadius: '2px',
              transition: 'all 0.3s',
              opacity: isOpen ? 0 : 1
            }}></span>
            <span style={{
              display: 'block',
              background: '#fff',
              height: '3px',
              width: '100%',
              position: 'absolute',
              bottom: 0,
              borderRadius: '2px',
              transition: 'all 0.3s',
              transform: isOpen ? 'rotate(-45deg)' : 'none',
              transformOrigin: 'center',
              bottom: isOpen ? '8px' : '0'
            }}></span>
          </div>
        </button>
        
        <nav style={{
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s',
          marginTop: '20px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Link href="/" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
                Home
              </Link>
            </li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <a href="https://www.roostershop.store" style={{ display: 'block', padding: '15px 10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
                Shop
              </a>
            </li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Link href="/food-menu" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
                Menu
              </Link>
            </li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Link href="/news" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
                Blog
              </Link>
            </li>
            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/about" style={{ display: 'block', padding: '15px 10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500, flex: 1 }}>
                  Pages
                </Link>
                <button 
                  onClick={() => toggleSubmenu('pages')}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '4px',
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <i className="far fa-plus" style={{ transform: activeMenu === 'pages' ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}></i>
                </button>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.3)',
                maxHeight: activeMenu === 'pages' ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s'
              }}>
                <li>
                  <Link href="/about" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px 15px 30px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '14px' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px 15px 30px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '14px' }}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/testimonial" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px 15px 30px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '14px' }}>
                    Testimonials
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu} style={{ display: 'block', padding: '15px 10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};