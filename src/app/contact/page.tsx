'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our travel experts to plan your perfect Zimbabwe adventure</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>We&apos;re here to help you plan the perfect Zimbabwe experience. Contact us anytime!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <h3>Phone</h3>
                    <p>+263 77 123 4567</p>
                    <p>+263 78 123 4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <h3>Email</h3>
                    <p>info@zimtour.co.zw</p>
                    <p>bookings@zimtour.co.zw</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <h3>Address</h3>
                    <p>123 Harare Street</p>
                    <p>Harare, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaClock />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook"><FaFacebook /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Request</option>
                      <option value="custom">Custom Tour</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel plans, questions, or any other inquiries..."
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>We recommend booking at least 2-3 months in advance for peak season (June-October) and 1-2 months for other times. For last-minute bookings, please call us directly.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept bank transfers, credit cards, and mobile money payments. A deposit is required to confirm bookings, with full payment due before travel.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide airport transfers?</h3>
              <p>Yes, we offer reliable airport transfers from all major airports in Zimbabwe. We can arrange transfers to hotels, lodges, or any other destination.</p>
            </div>
            <div className="faq-item">
              <h3>What if I need to cancel my booking?</h3>
              <p>We offer flexible cancellation policies. Cancellations made more than 30 days before travel receive a full refund, with partial refunds for later cancellations.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide travel insurance?</h3>
              <p>We strongly recommend travel insurance and can help you arrange comprehensive coverage for your Zimbabwe adventure.</p>
            </div>
            <div className="faq-item">
              <h3>Can you accommodate special dietary requirements?</h3>
              <p>Absolutely! We work with our accommodation and restaurant partners to accommodate all dietary requirements. Please let us know in advance.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
        }

        .contact-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .contact-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-info > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-item svg {
          font-size: 1.5rem;
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .contact-item h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .contact-item p {
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          line-height: 1.6;
        }

        .social-links h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 1.25rem;
        }

        .social-icons a:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .contact-form-container h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius);
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-large {
          width: 100%;
          padding: 1rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .faq-section {
          background: var(--background-light);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .faq-item h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .faq-item p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-content h1 {
            font-size: 2rem;
          }

          .contact-hero-content p {
            font-size: 1.125rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
