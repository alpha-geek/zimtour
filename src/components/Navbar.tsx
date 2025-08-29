'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/tours', label: 'Tours' },
    { to: '/airport-transfers', label: 'Airport Transfers' },
    { to: '/hotels', label: 'Hotels' },
    { to: '/itinerary-builder', label: 'Plan Trip' },
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
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`nav-link ${pathname === link.to ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-contact">
          <a href="tel:+263771234567" className="contact-link">
            <FaPhone />
            <span>+263 77 123 4567</span>
          </a>
          <a href="mailto:info@zimtour.co.zw" className="contact-link">
            <FaEnvelope />
            <span>info@zimtour.co.zw</span>
          </a>
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
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
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
          color: var(--primary-color);
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
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-color);
          border-radius: 1px;
        }

        .navbar-contact {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: var(--primary-color);
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

        @media (max-width: 1024px) {
          .navbar-contact {
            display: none;
          }
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

          .navbar-contact {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
