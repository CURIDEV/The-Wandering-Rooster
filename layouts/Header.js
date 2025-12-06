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
        <a href={process.env.NEXT_PUBLIC_WC_SITE_URL || "https://store.thewanderingrooster.com"} target="_blank" rel="noopener noreferrer">
          Shop
        </a>
      </li>
      <li>
        <Link href="/food-menu">Menu</Link>
      </li>
      <li>
        <Link href="/news">Blog</Link>
      </li>
      <li className="has-dropdown">
        <Link href="/about">
          Pages
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
                  Order Now 
                </li>
              </ul>
              <div className="top-right">
                <div className="search-wrp">
                  <button>
                    <i className="far fa-search" />
                  </button>
                  <input placeholder="Search" aria-label="Search" />
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-vimeo-v" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
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
                    <Link href="/contact" className="theme-btn bg-red-2">
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
                    <a 
                      href={process.env.NEXT_PUBLIC_WC_SITE_URL || "https://store.thewanderingrooster.com"}
                      target="_blank"
                      rel="noopener noreferrer"
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
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-lg-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href={process.env.NEXT_PUBLIC_WC_SITE_URL || "https://store.thewanderingrooster.com"} target="_blank" rel="noopener noreferrer">
                Shop
              </a>
            </li>
            <li>
              <Link href="/food-menu">Menu</Link>
            </li>
            <li>
              <Link href="/news">
                Blog
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu" style={activeLi("news")}>
                <li>
                  <Link href="/news">Blog</Link>
                </li>
                <li>
                  <Link href="/news-details">Blog Details</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("news")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="has-dropdown">
              <Link href="/about">
                Pages
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu" style={activeLi("pages")}>
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
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("pages")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="mean-last">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};