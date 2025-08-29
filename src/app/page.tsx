import Link from 'next/link';
import { FaPlane, FaHotel, FaRoute, FaMapMarkedAlt, FaStar, FaUsers, FaShieldAlt } from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      icon: <FaPlane />,
      title: 'Airport Transfers',
      description: 'Reliable and comfortable transfers from all major airports in Zimbabwe.',
      link: '/airport-transfers'
    },
    {
      icon: <FaRoute />,
      title: 'Day Tours',
      description: 'Explore Zimbabwe&apos;s most beautiful destinations with our expert guides.',
      link: '/tours'
    },
    {
      icon: <FaHotel />,
      title: 'Hotel Bookings',
      description: 'Book accommodations at the best hotels and guest houses across Zimbabwe.',
      link: '/hotels'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Custom Itineraries',
      description: 'Let us create the perfect itinerary tailored to your preferences.',
      link: '/itinerary-builder'
    }
  ];

  const destinations = [
    {
      name: 'Victoria Falls',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the majestic Victoria Falls, one of the Seven Natural Wonders of the World.'
    },
    {
      name: 'Hwange National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Discover Zimbabwe\'s largest national park with incredible wildlife viewing opportunities.'
    },
    {
      name: 'Great Zimbabwe',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the ancient stone ruins of Great Zimbabwe, a UNESCO World Heritage site.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Travelers' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Destinations' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Discover the Magic of Zimbabwe</h1>
            <p>Experience unforgettable adventures with Zimbabwe&apos;s premier tour company. From airport transfers to wildlife safaris, we make your dreams come true.</p>
            <div className="hero-buttons">
              <Link href="/tours" className="btn btn-primary">Explore Tours</Link>
              <Link href="/itinerary-builder" className="btn btn-outline">Plan Your Trip</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive travel solutions to make your Zimbabwe adventure perfect</p>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.link} className="service-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">Explore the most popular destinations in Zimbabwe</p>
          <div className="grid grid-3">
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card card">
                <div className="destination-image">
                  <img src={destination.image} alt={destination.name} />
                </div>
                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <Link href="/tours" className="btn btn-outline">View Tours</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="why-choose-content">
              <h2>Why Choose ZimTour?</h2>
              <p>We&apos;re not just another tour company. We&apos;re your local experts with deep knowledge of Zimbabwe&apos;s culture, wildlife, and hidden gems.</p>
              <div className="features">
                <div className="feature">
                  <FaStar className="feature-icon" />
                  <div>
                    <h4>Expert Guides</h4>
                    <p>Our guides are certified professionals with years of experience.</p>
                  </div>
                </div>
                <div className="feature">
                  <FaUsers className="feature-icon" />
                  <div>
                    <h4>Personalized Service</h4>
                    <p>Every tour is customized to meet your specific needs and preferences.</p>
                  </div>
                </div>
                <div className="feature">
                  <FaShieldAlt className="feature-icon" />
                  <div>
                    <h4>Safe & Reliable</h4>
                    <p>Your safety is our top priority with fully insured and maintained vehicles.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Zimbabwe Safari" />
            </div>
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
              <Link href="/booking" className="btn btn-outline">Book Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
