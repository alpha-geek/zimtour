import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ZimTour</h3>
            <p>Your premier tour company in Zimbabwe, offering unforgettable experiences from airport transfers to wildlife safaris.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/airport-transfers">Airport Transfers</Link></li>
              <li><Link href="/tours">Day Tours</Link></li>
              <li><Link href="/hotels">Hotel Bookings</Link></li>
              <li><Link href="/itinerary-builder">Custom Itineraries</Link></li>
              <li><Link href="/services">Game Reserve Tours</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Popular Destinations</h4>
            <ul>
              <li>Victoria Falls</li>
              <li>Hwange National Park</li>
              <li>Great Zimbabwe</li>
              <li>Mana Pools</li>
              <li>Matobo Hills</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+263 77 123 4567</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@zimtour.co.zw</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 Harare Street, Harare, Zimbabwe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 ZimTour. All rights reserved.</p>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
