'use client';

import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaUser, FaCalendar, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

export default function Testimonials() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Reviews' },
    { id: 'safari', name: 'Safari Tours' },
    { id: 'culture', name: 'Cultural Tours' },
    { id: 'adventure', name: 'Adventure Tours' },
    { id: 'family', name: 'Family Tours' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United States',
      rating: 5,
      date: 'March 2024',
      tour: 'Victoria Falls & Hwange Safari',
      category: 'safari',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'Absolutely incredible experience! Our guide David was knowledgeable and passionate about wildlife. We saw the Big 5 and the Victoria Falls were breathtaking. The lodge was luxurious and the food was amazing. Highly recommend!',
      highlights: ['Big 5 sightings', 'Luxury accommodation', 'Expert guide', 'Victoria Falls']
    },
    {
      id: 2,
      name: 'Michael Chen',
      country: 'Australia',
      rating: 5,
      date: 'February 2024',
      tour: 'Great Zimbabwe Cultural Tour',
      category: 'culture',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'The cultural tour was eye-opening. Learning about the ancient civilization and seeing the stone ruins was fascinating. Our guide was very informative and the local community interaction was authentic.',
      highlights: ['Historical sites', 'Cultural immersion', 'Local community', 'Educational']
    },
    {
      id: 3,
      name: 'Emma Thompson',
      country: 'United Kingdom',
      rating: 5,
      date: 'January 2024',
      tour: 'Mana Pools Walking Safari',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'The walking safari was the highlight of our Africa trip. Being on foot with wildlife was exhilarating and our guide ensured our safety while providing incredible wildlife encounters.',
      highlights: ['Walking safari', 'Wildlife encounters', 'Adventure', 'Safety']
    },
    {
      id: 4,
      name: 'The Rodriguez Family',
      country: 'Spain',
      rating: 5,
      date: 'December 2023',
      tour: 'Family Safari Adventure',
      category: 'family',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'Perfect family vacation! The kids loved the game drives and learning about animals. The guides were patient and educational. The accommodation was family-friendly and comfortable.',
      highlights: ['Family-friendly', 'Educational', 'Comfortable', 'Game drives']
    },
    {
      id: 5,
      name: 'Hans Mueller',
      country: 'Germany',
      rating: 5,
      date: 'November 2023',
      tour: 'Photography Safari',
      category: 'safari',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'As a photographer, this was a dream come true. The guides positioned us perfectly for amazing shots. The light was perfect and we captured incredible wildlife moments.',
      highlights: ['Photography', 'Perfect positioning', 'Amazing shots', 'Wildlife']
    },
    {
      id: 6,
      name: 'Lisa Park',
      country: 'South Korea',
      rating: 5,
      date: 'October 2023',
      tour: 'Victoria Falls Adventure',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'The adventure activities at Victoria Falls were incredible! White water rafting, helicopter flights, and the Devil\'s Pool experience. Everything was well-organized and safe.',
      highlights: ['Adventure activities', 'Victoria Falls', 'Safety', 'Well-organized']
    },
    {
      id: 7,
      name: 'Pierre Dubois',
      country: 'France',
      rating: 5,
      date: 'September 2023',
      tour: 'Luxury Safari Experience',
      category: 'safari',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'The luxury safari exceeded all expectations. The lodge was stunning, the service impeccable, and the wildlife viewing was spectacular. A truly unforgettable experience.',
      highlights: ['Luxury accommodation', 'Impeccable service', 'Spectacular wildlife', 'Unforgettable']
    },
    {
      id: 8,
      name: 'Maria Santos',
      country: 'Brazil',
      rating: 5,
      date: 'August 2023',
      tour: 'Cultural Heritage Tour',
      category: 'culture',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      review: 'Learning about Zimbabwe\'s rich cultural heritage was fascinating. The rock art sites and traditional villages gave us a deep understanding of the country\'s history.',
      highlights: ['Cultural heritage', 'Rock art', 'Traditional villages', 'History']
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedFilter === 'all' || testimonial.category === selectedFilter
  );

  const stats = [
    { number: '4.9', label: 'Average Rating', description: 'Out of 5 stars' },
    { number: '500+', label: 'Happy Customers', description: 'From 50+ countries' },
    { number: '98%', label: 'Recommendation Rate', description: 'Would recommend us' },
    { number: '100%', label: 'Safety Record', description: 'No incidents reported' }
  ];

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-content">
            <h1>Customer Testimonials</h1>
            <p>See what our guests say about their Zimbabwe adventures</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container">
          <div className="filter-section">
            <h2>Filter by Tour Type</h2>
            <div className="filter-buttons">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {filteredTestimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-country">{testimonial.country}</p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-review">{testimonial.review}</p>
                </div>
                
                <div className="testimonial-details">
                  <div className="detail-item">
                    <FaCalendar />
                    <span>{testimonial.date}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt />
                    <span>{testimonial.tour}</span>
                  </div>
                </div>
                
                <div className="testimonial-highlights">
                  <h4>Trip Highlights:</h4>
                  <div className="highlight-tags">
                    {testimonial.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">
                        <FaHeart />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="section featured-review-section">
        <div className="container">
          <div className="featured-review">
            <div className="featured-content">
              <div className="quote-icon-large">
                <FaQuoteLeft />
              </div>
              <blockquote>
                "ZimTour provided us with the most incredible safari experience. From the moment we arrived, everything was perfectly organized. Our guide's knowledge of wildlife was exceptional, and we saw more animals than we could have imagined. The Victoria Falls were absolutely breathtaking. This was truly a once-in-a-lifetime experience that exceeded all our expectations."
              </blockquote>
              <div className="featured-author">
                <div className="author-info">
                  <h3>Jennifer & Mark Wilson</h3>
                  <p>United States • Victoria Falls & Safari Adventure</p>
                  <div className="author-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Own Story?</h2>
            <p>Join hundreds of satisfied travelers who have experienced the magic of Zimbabwe</p>
            <div className="cta-buttons">
              <a href="/tours" className="btn btn-primary">Book Your Adventure</a>
              <a href="/contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .testimonials-page {
          min-height: 100vh;
        }

        .testimonials-hero {
          background: var(--gradient-primary);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .testimonials-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .testimonials-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .filter-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .filter-section h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border-color);
          background: white;
          color: var(--text-secondary);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .testimonial-info h3 {
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .testimonial-country {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
        }

        .star {
          color: var(--secondary-color);
          font-size: 0.875rem;
        }

        .testimonial-content {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .quote-icon {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          color: var(--primary-color);
          font-size: 1.5rem;
          opacity: 0.3;
        }

        .testimonial-review {
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
          padding-left: 2rem;
        }

        .testimonial-details {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .detail-item svg {
          color: var(--primary-color);
        }

        .testimonial-highlights h4 {
          font-size: 1rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .highlight-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .highlight-tag {
          background: var(--background-light);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius);
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .highlight-tag svg {
          color: var(--primary-color);
          font-size: 0.75rem;
        }

        .featured-review-section {
          background: var(--gradient-accent);
          color: white;
        }

        .featured-review {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .quote-icon-large {
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 2rem;
        }

        .featured-review blockquote {
          font-size: 1.25rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .featured-author {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .author-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .author-info p {
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .author-rating {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
        }

        .author-rating .star {
          color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          .testimonials-hero-content h1 {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }

          .filter-buttons {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-details {
            flex-direction: column;
            gap: 0.5rem;
          }

          .featured-review blockquote {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
}
