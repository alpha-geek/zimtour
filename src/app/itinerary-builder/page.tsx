'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkedAlt, FaCalendar, FaUsers, FaDollarSign, FaCheck, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function ItineraryBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    duration: '',
    groupSize: '',
    budget: '',
    destinations: [],
    interests: [],
    accommodation: '',
    specialRequirements: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const destinations = [
    { id: 'victoria-falls', name: 'Victoria Falls', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'hwange', name: 'Hwange National Park', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'great-zimbabwe', name: 'Great Zimbabwe', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'mana-pools', name: 'Mana Pools', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'matobo-hills', name: 'Matobo Hills', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'harare', name: 'Harare', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const interests = [
    { id: 'wildlife', name: 'Wildlife Safari', icon: '🦁' },
    { id: 'culture', name: 'Cultural Tours', icon: '🏛️' },
    { id: 'adventure', name: 'Adventure Activities', icon: '🏔️' },
    { id: 'relaxation', name: 'Relaxation & Spa', icon: '🧘' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'history', name: 'Historical Sites', icon: '📚' },
    { id: 'food', name: 'Local Cuisine', icon: '🍽️' },
    { id: 'shopping', name: 'Shopping & Markets', icon: '🛍️' }
  ];

  const accommodationTypes = [
    { id: 'luxury', name: 'Luxury Hotels', description: '5-star accommodations with premium amenities' },
    { id: 'mid-range', name: 'Mid-Range Hotels', description: 'Comfortable 3-4 star hotels' },
    { id: 'budget', name: 'Budget Accommodations', description: 'Affordable guesthouses and lodges' },
    { id: 'safari-lodge', name: 'Safari Lodges', description: 'Wilderness experiences in national parks' },
    { id: 'mixed', name: 'Mixed Options', description: 'Combination of different accommodation types' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDestinationToggle = (destinationId: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(destinationId)
        ? prev.destinations.filter(id => id !== destinationId)
        : [...prev.destinations, destinationId]
    }));
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Itinerary request:', formData);
    alert('Thank you for your itinerary request! Our travel experts will contact you within 24 hours with a personalized plan.');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const benefits = [
    {
      icon: <FaStar />,
      title: 'Personalized Planning',
      description: 'Custom itineraries tailored to your preferences and schedule'
    },
    {
      icon: <FaClock />,
      title: 'Expert Guidance',
      description: 'Local experts with deep knowledge of Zimbabwe\'s hidden gems'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Reliable',
      description: 'Fully insured and maintained vehicles with professional guides'
    },
    {
      icon: <FaCheck />,
      title: 'Flexible Options',
      description: 'Customizable packages to fit your budget and timeline'
    }
  ];

  return (
    <div className="itinerary-builder-page">
      {/* Hero Section */}
      <section className="itinerary-hero">
        <div className="container">
          <div className="itinerary-hero-content">
            <h1>Plan Your Perfect Trip</h1>
            <p>Let us create a custom itinerary tailored to your preferences, schedule, and budget</p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="progress-section">
        <div className="container">
          <div className="progress-bar">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Basic Info</span>
            </div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Destinations</span>
            </div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Preferences</span>
            </div>
            <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`}>
              <div className="step-number">4</div>
              <span>Submit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <form onSubmit={handleSubmit} className="itinerary-form">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2>Basic Information</h2>
                <p>Tell us about yourself and your travel plans</p>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
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
                    <label htmlFor="travelDates">Preferred Travel Dates</label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      placeholder="e.g., June 15-25, 2024"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="duration">Trip Duration</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                    >
                      <option value="">Select duration</option>
                      <option value="1-3 days">1-3 days</option>
                      <option value="4-7 days">4-7 days</option>
                      <option value="8-14 days">8-14 days</option>
                      <option value="15+ days">15+ days</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="groupSize">Group Size</label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                    >
                      <option value="">Select group size</option>
                      <option value="1-2 people">1-2 people</option>
                      <option value="3-5 people">3-5 people</option>
                      <option value="6-10 people">6-10 people</option>
                      <option value="10+ people">10+ people</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Destinations */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2>Choose Your Destinations</h2>
                <p>Select the places you'd like to visit in Zimbabwe</p>
                
                <div className="destinations-grid">
                  {destinations.map(destination => (
                    <div
                      key={destination.id}
                      className={`destination-card ${formData.destinations.includes(destination.id) ? 'selected' : ''}`}
                      onClick={() => handleDestinationToggle(destination.id)}
                    >
                      <div className="destination-image">
                        <img src={destination.image} alt={destination.name} />
                      </div>
                      <div className="destination-info">
                        <h3>{destination.name}</h3>
                        {formData.destinations.includes(destination.id) && (
                          <div className="selected-indicator">
                            <FaCheck />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2>Your Preferences</h2>
                <p>Tell us about your interests and accommodation preferences</p>
                
                <div className="preferences-section">
                  <h3>Interests & Activities</h3>
                  <div className="interests-grid">
                    {interests.map(interest => (
                      <div
                        key={interest.id}
                        className={`interest-card ${formData.interests.includes(interest.id) ? 'selected' : ''}`}
                        onClick={() => handleInterestToggle(interest.id)}
                      >
                        <div className="interest-icon">{interest.icon}</div>
                        <span>{interest.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="preferences-section">
                  <h3>Accommodation Preference</h3>
                  <div className="accommodation-options">
                    {accommodationTypes.map(option => (
                      <div
                        key={option.id}
                        className={`accommodation-card ${formData.accommodation === option.id ? 'selected' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, accommodation: option.id }))}
                      >
                        <h4>{option.name}</h4>
                        <p>{option.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Budget Range (per person)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="$500-1000">$500 - $1,000</option>
                    <option value="$1000-2000">$1,000 - $2,000</option>
                    <option value="$2000-5000">$2,000 - $5,000</option>
                    <option value="$5000+">$5,000+</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="specialRequirements">Special Requirements</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    placeholder="Any special requirements, dietary needs, accessibility needs, etc."
                    rows={4}
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="form-step">
                <h2>Review Your Request</h2>
                <p>Please review your information before submitting</p>
                
                <div className="review-summary">
                  <div className="review-section">
                    <h3>Personal Information</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                  </div>
                  
                  <div className="review-section">
                    <h3>Travel Details</h3>
                    <p><strong>Dates:</strong> {formData.travelDates || 'Not specified'}</p>
                    <p><strong>Duration:</strong> {formData.duration || 'Not specified'}</p>
                    <p><strong>Group Size:</strong> {formData.groupSize || 'Not specified'}</p>
                  </div>
                  
                  <div className="review-section">
                    <h3>Destinations</h3>
                    <p>{formData.destinations.length > 0 
                      ? destinations.filter(d => formData.destinations.includes(d.id)).map(d => d.name).join(', ')
                      : 'No destinations selected'
                    }</p>
                  </div>
                  
                  <div className="review-section">
                    <h3>Preferences</h3>
                    <p><strong>Interests:</strong> {formData.interests.length > 0 
                      ? interests.filter(i => formData.interests.includes(i.id)).map(i => i.name).join(', ')
                      : 'No interests selected'
                    }</p>
                    <p><strong>Accommodation:</strong> {formData.accommodation 
                      ? accommodationTypes.find(a => a.id === formData.accommodation)?.name
                      : 'Not specified'
                    }</p>
                    <p><strong>Budget:</strong> {formData.budget || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="btn btn-outline">
                  Previous
                </button>
              )}
              
              {currentStep < 4 ? (
                <button type="button" onClick={nextStep} className="btn btn-primary">
                  Next
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Custom Planning?</h2>
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

      <style jsx>{`
        .itinerary-builder-page {
          min-height: 100vh;
        }

        .itinerary-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .itinerary-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .itinerary-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .progress-section {
          background: white;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          transition: color 0.3s ease;
        }

        .progress-step.active {
          color: var(--primary-color);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: var(--border-color);
          color: var(--text-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .progress-step.active .step-number {
          background: var(--primary-color);
          color: white;
        }

        .itinerary-form {
          max-width: 800px;
          margin: 0 auto;
        }

        .form-step {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          margin-bottom: 2rem;
        }

        .form-step h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .form-step > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
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
          min-height: 100px;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .destination-card {
          background: white;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .destination-card:hover,
        .destination-card.selected {
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .destination-image {
          height: 120px;
          overflow: hidden;
        }

        .destination-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .destination-info {
          padding: 1rem;
          text-align: center;
          position: relative;
        }

        .destination-info h3 {
          font-size: 1rem;
          margin: 0;
          color: var(--text-primary);
        }

        .selected-indicator {
          position: absolute;
          top: -0.5rem;
          right: 0.5rem;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }

        .preferences-section {
          margin-bottom: 2rem;
        }

        .preferences-section h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .interest-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .interest-card:hover,
        .interest-card.selected {
          border-color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }

        .interest-icon {
          font-size: 2rem;
        }

        .accommodation-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .accommodation-card {
          padding: 1.5rem;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .accommodation-card:hover,
        .accommodation-card.selected {
          border-color: var(--primary-color);
          background: var(--background-light);
        }

        .accommodation-card h4 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .accommodation-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .review-summary {
          background: var(--background-light);
          padding: 2rem;
          border-radius: var(--border-radius);
        }

        .review-section {
          margin-bottom: 1.5rem;
        }

        .review-section h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .review-section p {
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 2rem;
        }

        .form-navigation .btn {
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

        @media (max-width: 768px) {
          .itinerary-hero-content h1 {
            font-size: 2rem;
          }

          .itinerary-hero-content p {
            font-size: 1.125rem;
          }

          .progress-bar {
            flex-direction: column;
            gap: 1rem;
          }

          .form-step {
            padding: 1.5rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .destinations-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }

          .interests-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .accommodation-options {
            grid-template-columns: 1fr;
          }

          .form-navigation {
            flex-direction: column;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
