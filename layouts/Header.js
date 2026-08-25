"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { VACATION_MODE, REOPEN_LABEL } from "@/config/vacation";

const ORDER_URL =
  "https://online.skytab.com/2f3f98da057f3ff70d5e32d773b8e783/order-settings";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu("");
  };
  const toggleSubmenu = (menu) =>
    setActiveMenu((m) => (m === menu ? "" : menu));

  return (
    <Fragment>
      <header className="section-bg">
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                {/* Logo */}
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img
                      src="assets/img/logo/twr_logo.svg"
                      alt="The Wandering Rooster"
                      width="90"
                      height="90"
                      className="twr-logo-img"
                    />
                  </Link>
                </div>

                {/* Desktop navigation (hidden below lg) */}
                <div className="header-left">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus pathname={pathname} />
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Right cluster: order button (all sizes) + hamburger (mobile) */}
                <div
                  className="header-right d-flex justify-content-end align-items-center"
                  style={{ gap: "12px" }}
                >
                  {VACATION_MODE ? (
                    <span className="twr-order-btn twr-order-btn--closed">
                      <i
                        className="fas fa-umbrella-beach"
                        style={{ marginRight: "8px" }}
                      />
                      BACK {REOPEN_LABEL.toUpperCase()}
                    </span>
                  ) : (
                    <Link
                      href={ORDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="twr-order-btn"
                    >
                      <i
                        className="fas fa-shopping-bag"
                        style={{ marginRight: "8px" }}
                      />
                      WE DELIVER
                    </Link>
                  )}

                  {/* Hamburger toggle — mobile only */}
                  <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                    className="twr-burger d-lg-none"
                  >
                    <span
                      className={`twr-burger__bar ${isOpen ? "is-open-1" : ""}`}
                    />
                    <span
                      className={`twr-burger__bar ${isOpen ? "is-open-2" : ""}`}
                    />
                    <span
                      className={`twr-burger__bar ${isOpen ? "is-open-3" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile dropdown panel — slides down from the bar, mobile only */}
          <div
            className={`twr-mobile-panel d-lg-none ${isOpen ? "is-open" : ""}`}
          >
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://www.roostershop.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Shop
                </a>
              </li>
              <li>
                <Link href="/food-menu" onClick={closeMenu}>
                  Menu
                </Link>
              </li>

              <li>
                <div className="twr-submenu-row">
                  <Link href="/about" onClick={closeMenu} style={{ flex: 1 }}>
                    About Us
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle About submenu"
                    className="twr-submenu-toggle"
                    onClick={() => toggleSubmenu("about")}
                  >
                    <i
                      className="fas fa-plus"
                      style={{
                        transform:
                          activeMenu === "about" ? "rotate(45deg)" : "none",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </button>
                </div>
                <ul
                  className={`twr-submenu ${
                    activeMenu === "about" ? "is-open" : ""
                  }`}
                >
                  <li>
                    <Link href="/about" onClick={closeMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" onClick={closeMenu}>
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Search overlay (unchanged) */}
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

      {/* Component-scoped styles — self-contained so they don't fight the theme */}
      <style>{`
        .twr-order-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #D12525;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          border-radius: 6px;
          text-decoration: none;
          padding: 16px 24px;
          font-size: 15px;
          line-height: 1;
          white-space: nowrap;
          transition: background 0.25s ease, transform 0.12s ease;
        }
        .twr-order-btn:hover { background: #b31f1f; color: #fff; }
        .twr-order-btn:active { transform: scale(0.97); }

        /* Vacation mode: a status badge, not a link — nothing to click. */
        .twr-order-btn--closed { background: #00813D; cursor: default; }
        .twr-order-btn--closed:hover { background: #00813D; }
        .twr-order-btn--closed:active { transform: none; }

        .twr-burger {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 46px;
          height: 46px;
          padding: 0 11px;
          background: #D12525;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .twr-burger__bar {
          display: block;
          width: 100%;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .twr-burger__bar.is-open-1 { transform: translateY(8px) rotate(45deg); }
        .twr-burger__bar.is-open-2 { opacity: 0; }
        .twr-burger__bar.is-open-3 { transform: translateY(-8px) rotate(-45deg); }

        .twr-mobile-panel {
          overflow: hidden;
          max-height: 0;
          background: #0E4B4B;
          transition: max-height 0.35s ease;
        }
        .twr-mobile-panel.is-open { max-height: 640px; }
        .twr-mobile-panel ul { list-style: none; margin: 0; padding: 0; }
        .twr-mobile-panel a {
          display: block;
          padding: 16px 24px;
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .twr-mobile-panel a:hover { background: rgba(255,255,255,0.06); color: #fff; }

        .twr-submenu-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .twr-submenu-row a { border-bottom: none; }
        .twr-submenu-toggle {
          width: 52px;
          height: 54px;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        .twr-submenu {
          max-height: 0;
          overflow: hidden;
          background: rgba(0,0,0,0.25);
          transition: max-height 0.3s ease;
        }
        .twr-submenu.is-open { max-height: 220px; }
        .twr-submenu a {
          padding-left: 44px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.82);
        }

        /* Mobile-only tweaks (below Bootstrap lg = 992px) */
        @media (max-width: 991.98px) {
          .twr-logo-img { height: 50px; width: auto; }
          .twr-order-btn { padding: 14px 18px; font-size: 13px; }
        }
      `}</style>
    </Fragment>
  );
};

export default Header;

const Menus = ({ pathname }) => {
  const isActive = (href) => (pathname === href ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/" className={isActive("/")}>
          Home
        </Link>
      </li>
      <li>
        <a
          href="https://www.roostershop.store"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </li>
      <li>
        <Link href="/food-menu" className={isActive("/food-menu")}>
          Menu
        </Link>
      </li>
      <li className="has-dropdown">
        <Link href="/about" className={isActive("/about")}>
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
        </ul>
      </li>
      <li>
        <Link href="/contact" className={isActive("/contact")}>
          Contact
        </Link>
      </li>
    </ul>
  );
};