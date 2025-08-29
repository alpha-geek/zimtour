'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar, FaHeart } from 'react-icons/fa';

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'wildlife', name: 'Wildlife Safaris' },
    { id: 'cultural', name: 'Cultural Tours' },
    { id: 'adventure', name: 'Adventure Tours' },
    { id: 'day-trips', name: 'Day Trips' }
  ];

  const tours = [
    {
      id: 1,
      name: 'Victoria Falls Full Day Tour',
      category: 'day-trips',
      duration: '8 hours',
      groupSize: '2-12 people',
      location: 'Victoria Falls',
      price: 120,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the majestic Victoria Falls with guided tours, optional activities, and lunch included.',
      highlights: ['Guided Falls Tour', 'Devil&apos;s Pool Option', 'Lunch Included', 'Hotel Pickup']
    },
    {
      id: 2,
      name: 'Hwange Wildlife Safari',
      category: 'wildlife',
      duration: '3 days',
      groupSize: '4-8 people',
      location: 'Hwange National Park',
      price: 450,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Multi-day safari in Zimbabwe&apos;s largest national park with luxury accommodation and expert guides.',
      highlights: ['Game Drives', 'Luxury Lodge', 'Expert Guide', 'All Meals']
    },
    {
      id: 3,
      name: 'Great Zimbabwe Cultural Tour',
      category: 'cultural',
      duration: '6 hours',
      groupSize: '2-15 people',
      location: 'Masvingo',
      price: 85,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the ancient stone ruins of Great Zimbabwe, a UNESCO World Heritage site.',
      highlights: ['UNESCO Site', 'Historical Guide', 'Museum Visit', 'Transport']
    },
    {
      id: 4,
      name: 'Mana Pools Adventure',
      category: 'adventure',
      duration: '4 days',
      groupSize: '6-10 people',
      location: 'Mana Pools',
      price: 680,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Walking safari and canoe adventure in the pristine wilderness of Mana Pools.',
      highlights: ['Walking Safari', 'Canoe Adventure', 'Camping', 'Wildlife']
    },
    {
      id: 5,
      name: 'Harare City Tour',
      category: 'cultural',
      duration: '4 hours',
      groupSize: '2-8 people',
      location: 'Harare',
      price: 65,
      rating: 4.5,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Discover the capital city with visits to markets, museums, and cultural sites.',
      highlights: ['City Markets', 'Museums', 'Local Guide', 'Refreshments']
    },
    {
      id: 6,
      name: 'Matobo Hills Rock Art',
      category: 'cultural',
      duration: '7 hours',
      groupSize: '2-12 people',
      location: 'Matobo Hills',
      price: 95,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore ancient rock art and stunning landscapes in the Matobo Hills.',
      highlights: ['Rock Art', 'Hiking', 'Scenic Views', 'Lunch']
    }
  ];

  const filteredTours = tours.filter(tour => 
    selectedCategory === 'all' || tour.category === selectedCategory
  );

  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="tours-page">
      {/* Hero Section */}
      <section className="tours-hero">
        <div className="container">
          <div className="tours-hero-content">
            <h1>Discover Zimbabwe&apos;s Best Tours</h1>
            <p>From wildlife safaris to cultural experiences, explore the beauty of Zimbabwe with our expert guides.</p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="tours-filters">
        <div className="container">
          <div className="filters-container">
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="sort-filter">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section">
        <div className="container">
          <div className="tours-grid">
            {sortedTours.map(tour => (
              <div key={tour.id} className="tour-card card">
                <div className="tour-image">
                  <img src={tour.image} alt={tour.name} />
                  <button className="favorite-btn">
                    <FaHeart />
                  </button>
                  <div className="tour-price">
                    <span className="price-amount">${tour.price}</span>
                    <span className="price-unit">per person</span>
                  </div>
                </div>
                <div className="tour-content">
                  <div className="tour-header">
                    <h3>{tour.name}</h3>
                    <div className="tour-rating">
                      <FaStar />
                      <span>{tour.rating}</span>
                      <span className="reviews">({tour.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="tour-description">{tour.description}</p>
                  <div className="tour-details">
                    <div className="tour-detail">
                      <FaClock />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="tour-detail">
                      <FaUsers />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="tour-detail">
                      <FaMapMarkerAlt />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                  <div className="tour-highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {tour.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tour-actions">
                    <Link href={`/booking?tour=${tour.id}`} className="btn btn-primary">
                      Book Now
                    </Link>
                    <Link href={`/tours/${tour.id}`} className="btn btn-outline">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Can&apos;t Find What You&apos;re Looking For?</h2>
            <p>Let us create a custom tour tailored to your preferences and schedule.</p>
            <div className="cta-buttons">
              <Link href="/itinerary-builder" className="btn btn-primary">Plan Custom Tour</Link>
              <Link href="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
