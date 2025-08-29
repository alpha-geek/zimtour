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
      image: 'https://www.wildernessdestinations.com/media/2023/03/victoria-falls-zimbabwe.jpg',
      description: 'Experience the majestic Victoria Falls with helicopter flights, bungee jumping, and river cruises.'
    },
    {
      name: 'Hwange National Park',
      image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/hwange-national-park-zimbabwe.jpg',
      description: 'Discover Zimbabwe\'s largest national park with walking safaris and luxury lodge experiences.'
    },
    {
      name: 'Mana Pools',
      image: 'https://www.wildernessdestinations.com/media/2023/03/mana-pools-zimbabwe.jpg',
      description: 'Explore the pristine wilderness with canoe safaris and walking adventures.'
    },
    {
      name: 'Great Zimbabwe',
      image: 'https://www.zimbabwetourism.net/wp-content/uploads/2023/02/great-zimbabwe-ruins.jpg',
      description: 'Explore the ancient stone ruins of Great Zimbabwe, a UNESCO World Heritage site.'
    },
    {
      name: 'Eastern Highlands',
      image: 'https://www.zimbabwetourism.net/wp-content/uploads/2023/02/eastern-highlands-zimbabwe.jpg',
      description: 'Hike through beautiful mountains with waterfalls and tea estates.'
    },
    {
      name: 'Gonarezhou',
      image: 'https://www.wildernessdestinations.com/media/2023/03/gonarezhou-national-park-zimbabwe.jpg',
      description: 'Remote wilderness safari in Zimbabwe\'s second-largest national park.'
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

      {/* Adventure Activities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Adventure Activities</h2>
          <p className="section-subtitle">Thrilling experiences for adrenaline seekers and adventure lovers</p>
          <div className="grid grid-4">
            <div className="activity-card card">
              <div className="activity-icon">🚁</div>
              <h3>Helicopter Flights</h3>
              <p>Spectacular aerial views of Victoria Falls and the Zambezi River gorge</p>
              <span className="activity-price">From $180</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🏊</div>
              <h3>Devil&apos;s Pool</h3>
              <p>Swim at the edge of Victoria Falls during low water season</p>
              <span className="activity-price">From $150</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🛶</div>
              <h3>River Cruises</h3>
              <p>Sunset cruises on the Zambezi with wildlife viewing</p>
              <span className="activity-price">From $85</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🏃</div>
              <h3>Bungee Jumping</h3>
              <p>Thrilling bungee jump from Victoria Falls Bridge</p>
              <span className="activity-price">From $120</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🛶</div>
              <h3>White Water Rafting</h3>
              <p>Exciting rafting on the Zambezi River rapids</p>
              <span className="activity-price">From $140</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">📸</div>
              <h3>Photography Tours</h3>
              <p>Professional photography workshops and wildlife photography</p>
              <span className="activity-price">From $140</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🏕️</div>
              <h3>Walking Safaris</h3>
              <p>Intimate walking experiences with expert guides</p>
              <span className="activity-price">From $320</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🚣</div>
              <h3>Canoe Safaris</h3>
              <p>Canoe adventures through Mana Pools wilderness</p>
              <span className="activity-price">From $520</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🎣</div>
              <h3>River Fishing</h3>
              <p>Professional fishing on the Zambezi River</p>
              <span className="activity-price">From $180</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🌙</div>
              <h3>Night Safaris</h3>
              <p>Nocturnal wildlife viewing with spotlights</p>
              <span className="activity-price">From $120</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🦅</div>
              <h3>Bird Watching</h3>
              <p>Specialized bird watching with expert guides</p>
              <span className="activity-price">From $580</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🛩️</div>
              <h3>Microlight Flights</h3>
              <p>Ultimate aerial experience over Victoria Falls</p>
              <span className="activity-price">From $160</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🎨</div>
              <h3>Cultural Tours</h3>
              <p>Traditional village visits and cultural experiences</p>
              <span className="activity-price">From $65</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🚴</div>
              <h3>Mountain Biking</h3>
              <p>Adventure biking through scenic mountain routes</p>
              <span className="activity-price">From $120</span>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🍽️</div>
              <h3>Sunset Dinner Cruises</h3>
              <p>Luxury dining on the Zambezi River</p>
              <span className="activity-price">From $180</span>
            </div>
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
              <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/zimbabwe-safari-experience.jpg" alt="Zimbabwe Safari" />
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
