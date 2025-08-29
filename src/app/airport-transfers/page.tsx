'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPlane, FaCar, FaClock, FaShieldAlt, FaStar, FaCheck, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function AirportTransfers() {
  const [selectedAirport, setSelectedAirport] = useState('harare');

  const airports = [
    {
      id: 'harare',
      name: 'Harare International Airport',
      code: 'HRE',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'victoria-falls',
      name: 'Victoria Falls International Airport',
      code: 'VFA',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bulawayo',
      name: 'Joshua Mqabuko Nkomo International Airport',
      code: 'BUQ',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const transferOptions = [
    {
      type: 'Standard Transfer',
      description: 'Reliable airport transfer service with professional drivers',
      features: ['Meet & Greet Service', 'Flight Monitoring', 'Professional Driver', 'Air-conditioned Vehicle'],
      price: 45,
      duration: '30-45 minutes'
    },
    {
      type: 'Premium Transfer',
      description: 'Luxury transfer service with premium vehicles and enhanced amenities',
      features: ['Meet & Greet Service', 'Flight Monitoring', 'Professional Driver', 'Luxury Vehicle', 'Refreshments', 'WiFi'],
      price: 75,
      duration: '30-45 minutes'
    },
    {
      type: 'Group Transfer',
      description: 'Perfect for families and groups with spacious vehicles',
      features: ['Meet & Greet Service', 'Flight Monitoring', 'Professional Driver', 'Spacious Vehicle', 'Luggage Space', 'Child Seats Available'],
      price: 95,
      duration: '30-45 minutes'
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Reliable',
      description: 'Fully insured vehicles and professional drivers'
    },
    {
      icon: <FaClock />,
      title: '24/7 Service',
      description: 'Available round the clock for all flight schedules'
    },
    {
      icon: <FaStar />,
      title: 'Premium Quality',
      description: 'Well-maintained vehicles and exceptional service'
    },
    {
      icon: <FaCheck />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges'
    }
  ];

  const selectedAirportData = airports.find(airport => airport.id === selectedAirport);

  return (
    <div className="airport-transfers-page">
      {/* Hero Section */}
      <section className="transfers-hero">
        <div className="container">
          <div className="transfers-hero-content">
            <h1>Airport Transfers</h1>
            <p>Reliable and comfortable transfers from all major airports in Zimbabwe</p>
          </div>
        </div>
      </section>

      {/* Airport Selection */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Select Your Airport</h2>
          <div className="airport-selection">
            {airports.map((airport) => (
              <div
                key={airport.id}
                className={`airport-card ${selectedAirport === airport.id ? 'active' : ''}`}
                onClick={() => setSelectedAirport(airport.id)}
              >
                <div className="airport-image">
                  <img src={airport.image} alt={airport.name} />
                </div>
                <div className="airport-info">
                  <h3>{airport.name}</h3>
                  <p className="airport-code">{airport.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Options */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Transfer Options from {selectedAirportData?.name}</h2>
          <div className="transfer-options">
            {transferOptions.map((option, index) => (
              <div key={index} className="transfer-card card">
                <div className="transfer-header">
                  <h3>{option.type}</h3>
                  <div className="transfer-price">
                    <span className="price">${option.price}</span>
                    <span className="duration">{option.duration}</span>
                  </div>
                </div>
                <p className="transfer-description">{option.description}</p>
                <div className="transfer-features">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="transfer-feature">
                      <FaCheck />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="transfer-actions">
                  <Link href={`/booking?service=transfer&airport=${selectedAirport}&type=${option.type.toLowerCase().replace(' ', '-')}`} className="btn btn-primary">
                    Book Now
                  </Link>
                  <a href="tel:+263771234567" className="btn btn-outline">
                    <FaPhone />
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Airport Transfers?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How to Book</h2>
          <div className="booking-steps">
            <div className="booking-step">
              <div className="step-number">1</div>
              <h3>Select Your Service</h3>
              <p>Choose your preferred transfer type and vehicle</p>
            </div>
            <div className="booking-step">
              <div className="step-number">2</div>
              <h3>Provide Details</h3>
              <p>Share your flight details and pickup location</p>
            </div>
            <div className="booking-step">
              <div className="step-number">3</div>
              <h3>Confirm Booking</h3>
              <p>Receive instant confirmation and driver details</p>
            </div>
            <div className="booking-step">
              <div className="step-number">4</div>
              <h3>Enjoy Your Ride</h3>
              <p>Relax and enjoy your comfortable transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Transfer?</h2>
            <p>Contact us today to arrange your airport transfer</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              <a href="tel:+263771234567" className="btn btn-outline">
                <FaPhone />
                Call +263 77 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .airport-transfers-page {
          min-height: 100vh;
        }

        .transfers-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .transfers-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .transfers-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .airport-selection {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .airport-card {
          background: white;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .airport-card:hover,
        .airport-card.active {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .airport-card.active {
          border: 2px solid var(--primary-color);
        }

        .airport-image {
          height: 200px;
          overflow: hidden;
        }

        .airport-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .airport-info {
          padding: 1.5rem;
          text-align: center;
        }

        .airport-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .airport-code {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.125rem;
        }

        .transfer-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .transfer-card {
          padding: 2rem;
        }

        .transfer-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .transfer-header h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin: 0;
        }

        .transfer-price {
          text-align: right;
        }

        .transfer-price .price {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .transfer-price .duration {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .transfer-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .transfer-features {
          margin-bottom: 2rem;
        }

        .transfer-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .transfer-feature svg {
          color: var(--primary-color);
          font-size: 0.875rem;
        }

        .transfer-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .transfer-actions .btn {
          flex: 1;
          min-width: 120px;
        }

        .benefits-section {
          background: var(--background-light);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit-item {
          text-align: center;
          padding: 2rem;
        }

        .benefit-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .benefit-item h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .benefit-item p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .booking-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .booking-step {
          text-align: center;
          padding: 2rem;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1rem;
        }

        .booking-step h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .booking-step p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .transfers-hero-content h1 {
            font-size: 2rem;
          }

          .transfers-hero-content p {
            font-size: 1.125rem;
          }

          .airport-selection {
            grid-template-columns: 1fr;
          }

          .transfer-options {
            grid-template-columns: 1fr;
          }

          .transfer-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .transfer-actions {
            flex-direction: column;
          }

          .benefits-grid,
          .booking-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
