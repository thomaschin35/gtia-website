import React, { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Guide', href: '/guide' },
  { name: 'Resources', href: '/resources' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <header className="custom-navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a className="navbar-logo-link" href="/">
          <img src="/assets/images/gtia-gold-logo.png" alt="GTIA Logo" className="navbar-logo" height={40} />
        </a>
        {/* Hamburger for mobile */}
        <button className="navbar-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
        </button>
        {/* Nav Items */}
        <nav className={`navbar-nav-section${navOpen ? ' open' : ''}`}>
          <ul className="navbar-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="navbar-nav-item">
                <a
                  href={item.href}
                  className={`navbar-nav-link${currentPath === item.href ? ' active' : ''}`}
                  onClick={() => setNavOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="navbar-nav-item">
              <a href="/join" className="join-us-btn" onClick={() => setNavOpen(false)}>
                JOIN US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 