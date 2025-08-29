'use client';

import Link from 'next/link';
import { FaPlane, FaHotel, FaRoute, FaMapMarkedAlt, FaShieldAlt, FaUsers, FaStar, FaClock, FaCheck } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaPlane />,
      title: 'Airport Transfers',
      description: 'Reliable and comfortable transfers from all major airports in Zimbabwe with professional drivers and well-maintained vehicles.',
      features: ['Meet & Greet Service', 'Flight Monitoring', 'Professional Drivers', 'Luxury Vehicles'],
      price: 'From $45',
      link: '/airport-transfers'
    },
    {
      icon: <FaRoute />,
      title: 'Safari Tours',
      description: 'World-class wildlife safaris in Zimbabwe\'s premier national parks with expert guides and luxury accommodation.',
      features: ['Expert Guides', 'Luxury Lodges', 'Game Drives', 'All-Inclusive'],
      price: 'From $450',
      link: '/tours'
    },
    {
      icon: <FaHotel />,
      title: 'Hotel Bookings',
      description: 'Book accommodations at the best hotels and guest houses across Zimbabwe with exclusive rates.',
      features: ['Best Price Guarantee', 'Wide Selection', 'Instant Confirmation', '24/7 Support'],
      price: 'Best Rates',
      link: '/hotels'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Custom Itineraries',
      description: 'Let us create the perfect itinerary tailored to your preferences, schedule, and budget.',
      features: ['Personalized Planning', 'Flexible Dates', 'Custom Activities', 'Budget Options'],
      price: 'Custom Pricing',
      link: '/itinerary-builder'
    },
    {
      icon: <FaRoute />,
      title: 'Adventure Activities',
      description: 'Thrilling adventure activities including bungee jumping, white water rafting, and helicopter flights.',
      features: ['Safety Equipment', 'Professional Guides', 'Video Recording', 'Insurance Included'],
      price: 'From $85',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Photography Tours',
      description: 'Specialized photography tours with expert photographers and prime wildlife viewing locations.',
      features: ['Professional Photographer', 'Photography Hides', 'Equipment Tips', 'Best Locations'],
      price: 'From $140',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Luxury Safaris',
      description: 'Premium luxury safari experiences with private guides, exclusive lodges, and personalized service.',
      features: ['Private Guides', 'Luxury Lodges', 'Personal Butler', 'All-Inclusive'],
      price: 'From $1200',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Family Packages',
      description: 'Family-friendly tours and activities designed for travelers with children of all ages.',
      features: ['Kid-Friendly Activities', 'Educational Tours', 'Comfortable Lodging', 'Safety First'],
      price: 'From $420',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Honeymoon Packages',
      description: 'Romantic honeymoon experiences combining luxury accommodation with unforgettable activities.',
      features: ['Private Tours', 'Luxury Accommodation', 'Romantic Dinners', 'All-Inclusive'],
      price: 'From $2200',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Cultural Tours',
      description: 'Immerse yourself in Zimbabwe\'s rich culture and history with expert local guides.',
      features: ['Local Guides', 'Historical Sites', 'Cultural Experiences', 'Traditional Meals'],
      price: 'From $75',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Hiking Adventures',
      description: 'Explore Zimbabwe\'s beautiful mountains and landscapes with guided hiking tours.',
      features: ['Expert Guides', 'Scenic Routes', 'Mountain Lodges', 'All Meals'],
      price: 'From $280',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'River Cruises',
      description: 'Relaxing river cruises on the Zambezi River with wildlife viewing and sunset experiences.',
      features: ['Sunset Views', 'Wildlife Spotting', 'Refreshments', 'Professional Crew'],
      price: 'From $85',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Night Safaris',
      description: 'Nocturnal wildlife viewing experiences with spotlight equipment and expert guides.',
      features: ['Night Game Drives', 'Spotlight Equipment', 'Expert Guides', 'Refreshments'],
      price: 'From $120',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Bird Watching Tours',
      description: 'Specialized bird watching safaris with expert ornithologists and specialized equipment.',
      features: ['Expert Ornithologist', 'Specialized Equipment', 'Prime Locations', 'All Meals'],
      price: 'From $580',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Conservation Safaris',
      description: 'Conservation-focused safaris with research activities and wildlife monitoring.',
      features: ['Conservation Activities', 'Research Participation', 'Luxury Lodge', 'All Meals'],
      price: 'From $1200',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Spa & Wellness',
      description: 'Luxury spa experiences with views of Victoria Falls and premium treatments.',
      features: ['Luxury Spa', 'Premium Treatments', 'Falls Views', 'Refreshments'],
      price: 'From $350',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Fishing Tours',
      description: 'Professional fishing experiences on the Zambezi River targeting tiger fish and bream.',
      features: ['Professional Guide', 'Fishing Equipment', 'Refreshments', 'Catch & Release'],
      price: 'From $180',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Mountain Biking',
      description: 'Adventure mountain biking through scenic routes in the Chimanimani Mountains.',
      features: ['Mountain Biking', 'Scenic Routes', 'Safety Equipment', 'Lunch Included'],
      price: 'From $120',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Full Moon Tours',
      description: 'Magical evening tours of Victoria Falls under the full moon.',
      features: ['Full Moon Views', 'Evening Tour', 'Local Guide', 'Refreshments'],
      price: 'From $85',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Bridge Tours',
      description: 'Walk across the historic Victoria Falls Bridge with stunning gorge views.',
      features: ['Bridge Walk', 'Historical Information', 'Photo Opportunities', 'Safety Equipment'],
      price: 'From $45',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Rainforest Walks',
      description: 'Guided walks through the Victoria Falls rainforest with multiple viewpoints.',
      features: ['Rainforest Walk', 'Multiple Viewpoints', 'Local Guide', 'Raincoats Provided'],
      price: 'From $35',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Art Gallery Tours',
      description: 'Explore Harare\'s vibrant art scene with visits to galleries and studios.',
      features: ['Art Galleries', 'Artist Studios', 'Local Guide', 'Refreshments'],
      price: 'From $55',
      link: '/tours'
    },
    {
      icon: <FaRoute />,
      title: 'Elephant Safaris',
      description: 'Specialized elephant viewing safaris with expert guides and hides.',
      features: ['Elephant Viewing', 'Specialized Hides', 'Expert Guide', 'All Meals'],
      price: 'From $680',
      link: '/tours'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Reliable',
      description: 'Your safety is our top priority with fully insured and maintained vehicles.'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Guides',
      description: 'Our guides are certified professionals with years of experience and deep local knowledge.'
    },
    {
      icon: <FaStar />,
      title: 'Premium Service',
      description: 'We provide personalized attention and go above and beyond to exceed your expectations.'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you before, during, and after your trip.'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive travel solutions to make your Zimbabwe adventure perfect</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature">
                      <FaCheck />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="service-price">{service.price}</div>
                <Link href={service.link} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose ZimTour?</h2>
          <p className="section-subtitle">We're not just another tour company. We're your local experts with deep knowledge of Zimbabwe's culture, wildlife, and hidden gems.</p>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Contact us today to plan your perfect Zimbabwe experience</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link href="/tours" className="btn btn-outline">View Tours</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          min-height: 100vh;
        }

        .services-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .services-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .services-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          text-align: center;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .service-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-features {
          margin-bottom: 1.5rem;
        }

        .service-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .service-feature svg {
          color: var(--primary-color);
          font-size: 0.75rem;
        }

        .service-price {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .why-choose-section {
          background: var(--background-light);
        }

        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .why-choose-item {
          text-align: center;
          padding: 2rem;
        }

        .why-choose-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .why-choose-item h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .why-choose-item p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-hero-content h1 {
            font-size: 2rem;
          }

          .services-hero-content p {
            font-size: 1.125rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .why-choose-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
