'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { 
      label: 'Tours & Activities', 
      dropdown: true,
      items: [
        { to: '/tours', label: 'All Tours' },
        { to: '/tours?category=wildlife', label: 'Wildlife Safaris' },
        { to: '/tours?category=adventure', label: 'Adventure Activities' },
        { to: '/tours?category=cultural', label: 'Cultural Tours' },
        { to: '/tours?category=photography', label: 'Photography Tours' },
        { to: '/tours?category=family', label: 'Family Tours' },
        { to: '/tours?category=luxury', label: 'Luxury Safaris' },
        { to: '/tours?category=honeymoon', label: 'Honeymoon Packages' }
      ]
    },
    { 
      label: 'Services', 
      dropdown: true,
      items: [
        { to: '/services', label: 'All Services' },
        { to: '/airport-transfers', label: 'Airport Transfers' },
        { to: '/hotels', label: 'Hotel Bookings' },
        { to: '/itinerary-builder', label: 'Custom Itineraries' }
      ]
    },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span className="brand-text">ZimTour</span>
          <span className="brand-tagline">Discover Zimbabwe</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <div key={index} className="nav-item">
              {link.dropdown ? (
                <div className="dropdown">
                  <button
                    className={`nav-link dropdown-toggle ${activeDropdown === link.label ? 'active' : ''}`}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <FaChevronDown className="dropdown-icon" />
                  </button>
                  <div className={`dropdown-menu ${activeDropdown === link.label ? 'show' : ''}`}>
                    {link.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.to}
                        className="dropdown-item"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.to}
                  className={`nav-link ${pathname === link.to ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>



        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-lg);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .navbar .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
        }

        .navbar-brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-color);
          transform: translateY(-1px);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
        }



        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.25rem;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Dropdown Styles */
        .nav-item {
          position: relative;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          color: inherit;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          transition: all 0.2s ease;
        }

        .dropdown-toggle:hover {
          background: var(--primary-color);
          color: white;
        }

        .dropdown-toggle.active {
          background: var(--primary-color);
          color: white;
        }

        .dropdown-icon {
          font-size: 0.75rem;
          transition: transform 0.2s ease;
        }

        .dropdown-toggle.active .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-lg);
          min-width: 250px;
          max-width: 300px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1000;
          border: 1px solid var(--border-color);
          padding: 0.5rem 0;
          display: flex;
          flex-direction: column;
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          width: 100%;
          padding: 0.75rem 1.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.9rem;
          line-height: 1.4;
          white-space: nowrap;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          background: var(--primary-color);
          color: white;
          transform: translateX(5px);
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }



        @media (max-width: 768px) {
          .navbar-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            gap: 1rem;
          }

          .navbar-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            padding: 0.75rem 0;
            width: 100%;
            text-align: center;
          }

          .navbar-toggle {
            display: block;
          }



          /* Mobile Dropdown Styles */
          .dropdown {
            width: 100%;
          }

          .dropdown-toggle {
            width: 100%;
            justify-content: center;
            padding: 0.75rem 0;
          }

          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            background: var(--background-light);
            margin-top: 0.5rem;
            border-radius: var(--border-radius);
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .dropdown-menu.show {
            display: block;
          }

          .dropdown-item {
            padding: 0.75rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
            font-size: 0.9rem;
            line-height: 1.4;
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            flex-shrink: 0;
          }

          .dropdown-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
