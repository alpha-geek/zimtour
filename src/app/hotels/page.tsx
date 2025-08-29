'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHotel, FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaUtensils, FaParking, FaCheck } from 'react-icons/fa';

export default function Hotels() {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'harare', name: 'Harare' },
    { id: 'victoria-falls', name: 'Victoria Falls' },
    { id: 'bulawayo', name: 'Bulawayo' },
    { id: 'hwange', name: 'Hwange' }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Victoria Falls Safari Lodge',
      location: 'victoria-falls',
      rating: 4.8,
      reviews: 324,
      price: 180,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxury lodge overlooking the Zambezi River with stunning views of Victoria Falls.',
      amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Spa', 'Game Drives'],
      category: 'Luxury'
    },
    {
      id: 2,
      name: 'Hwange Safari Lodge',
      location: 'hwange',
      rating: 4.7,
      reviews: 156,
      price: 220,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Exclusive safari lodge in the heart of Hwange National Park with wildlife viewing.',
      amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Spa', 'Game Drives', 'Bush Walks'],
      category: 'Safari Lodge'
    },
    {
      id: 3,
      name: 'Harare Grand Hotel',
      location: 'harare',
      rating: 4.5,
      reviews: 89,
      price: 120,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern hotel in the heart of Harare with excellent amenities and central location.',
      amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Gym', 'Conference Rooms'],
      category: 'Business'
    },
    {
      id: 4,
      name: 'Bulawayo Heritage Hotel',
      location: 'bulawayo',
      rating: 4.3,
      reviews: 67,
      price: 95,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Charming heritage hotel with colonial architecture and modern comforts.',
      amenities: ['WiFi', 'Restaurant', 'Bar', 'Garden', 'Parking'],
      category: 'Heritage'
    },
    {
      id: 5,
      name: 'Victoria Falls Hotel',
      location: 'victoria-falls',
      rating: 4.9,
      reviews: 412,
      price: 280,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Historic luxury hotel with breathtaking views of Victoria Falls and the Zambezi River.',
      amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Spa', 'Tennis', 'Helicopter Tours'],
      category: 'Luxury'
    },
    {
      id: 6,
      name: 'Hwange Bush Camp',
      location: 'hwange',
      rating: 4.6,
      reviews: 98,
      price: 150,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intimate bush camp offering authentic safari experiences in Hwange National Park.',
      amenities: ['WiFi', 'Restaurant', 'Game Drives', 'Bush Walks', 'Campfire'],
      category: 'Bush Camp'
    }
  ];

  const filteredHotels = hotels.filter(hotel => 
    selectedLocation === 'all' || hotel.location === selectedLocation
  );

  const benefits = [
    {
      icon: <FaCheck />,
      title: 'Best Price Guarantee',
      description: 'We guarantee the best rates for all our partner hotels'
    },
    {
      icon: <FaCheck />,
      title: 'Instant Confirmation',
      description: 'Receive immediate booking confirmation and hotel details'
    },
    {
      icon: <FaCheck />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your booking needs'
    },
    {
      icon: <FaCheck />,
      title: 'Flexible Cancellation',
      description: 'Most bookings offer free cancellation up to 24 hours before arrival'
    }
  ];

  return (
    <div className="hotels-page">
      {/* Hero Section */}
      <section className="hotels-hero">
        <div className="container">
          <div className="hotels-hero-content">
            <h1>Hotel Bookings</h1>
            <p>Discover the best accommodations across Zimbabwe with exclusive rates and personalized service</p>
          </div>
        </div>
      </section>

      {/* Location Filter */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Select Your Destination</h2>
          <div className="location-filters">
            {locations.map(location => (
              <button
                key={location.id}
                className={`location-btn ${selectedLocation === location.id ? 'active' : ''}`}
                onClick={() => setSelectedLocation(location.id)}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="section">
        <div className="container">
          <div className="hotels-grid">
            {filteredHotels.map(hotel => (
              <div key={hotel.id} className="hotel-card card">
                <div className="hotel-image">
                  <img src={hotel.image} alt={hotel.name} />
                  <div className="hotel-category">{hotel.category}</div>
                  <div className="hotel-price">
                    <span className="price">${hotel.price}</span>
                    <span className="per-night">per night</span>
                  </div>
                </div>
                <div className="hotel-content">
                  <div className="hotel-header">
                    <h3>{hotel.name}</h3>
                    <div className="hotel-rating">
                      <FaStar />
                      <span>{hotel.rating}</span>
                      <span className="reviews">({hotel.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="hotel-location">
                    <FaMapMarkerAlt />
                    <span>{locations.find(loc => loc.id === hotel.location)?.name}</span>
                  </div>
                  <p className="hotel-description">{hotel.description}</p>
                  <div className="hotel-amenities">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <span key={index} className="amenity-tag">{amenity}</span>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="amenity-tag">+{hotel.amenities.length - 4} more</span>
                    )}
                  </div>
                  <div className="hotel-actions">
                    <Link href={`/booking?service=hotel&hotel=${hotel.id}`} className="btn btn-primary">
                      Book Now
                    </Link>
                    <Link href={`/hotels/${hotel.id}`} className="btn btn-outline">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Book with ZimTour?</h2>
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

      {/* Hotel Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Hotel Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <FaHotel />
              </div>
              <h3>Luxury Hotels</h3>
              <p>Premium accommodations with world-class amenities and exceptional service</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <FaHotel />
              </div>
              <h3>Safari Lodges</h3>
              <p>Unique wilderness experiences with wildlife viewing and guided activities</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <FaHotel />
              </div>
              <h3>Bush Camps</h3>
              <p>Authentic safari experiences in intimate, remote locations</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <FaHotel />
              </div>
              <h3>Business Hotels</h3>
              <p>Convenient city accommodations with business facilities and central locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Finding the Perfect Hotel?</h2>
            <p>Our travel experts can help you choose the ideal accommodation for your Zimbabwe adventure</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/itinerary-builder" className="btn btn-outline">Plan Your Trip</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hotels-page {
          min-height: 100vh;
        }

        .hotels-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .hotels-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hotels-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .location-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .location-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border-color);
          background: white;
          color: var(--text-secondary);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .location-btn:hover,
        .location-btn.active {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }

        .hotels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .hotel-card {
          overflow: hidden;
          padding: 0;
          transition: transform 0.3s ease;
        }

        .hotel-card:hover {
          transform: translateY(-5px);
        }

        .hotel-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .hotel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hotel-card:hover .hotel-image img {
          transform: scale(1.05);
        }

        .hotel-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .hotel-price {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius);
          text-align: center;
        }

        .hotel-price .price {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .hotel-price .per-night {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .hotel-content {
          padding: 1.5rem;
        }

        .hotel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .hotel-header h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0;
          flex: 1;
        }

        .hotel-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--secondary-color);
          font-weight: 500;
        }

        .hotel-rating .reviews {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .hotel-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .hotel-location svg {
          color: var(--primary-color);
        }

        .hotel-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .hotel-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .amenity-tag {
          background: var(--background-light);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius);
          font-size: 0.875rem;
        }

        .hotel-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hotel-actions .btn {
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

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .category-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .category-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .category-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .category-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hotels-hero-content h1 {
            font-size: 2rem;
          }

          .hotels-hero-content p {
            font-size: 1.125rem;
          }

          .location-filters {
            gap: 0.5rem;
          }

          .location-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .hotels-grid {
            grid-template-columns: 1fr;
          }

          .hotel-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .hotel-actions {
            flex-direction: column;
          }

          .benefits-grid,
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
