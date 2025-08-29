'use client';

import Link from 'next/link';
import { FaAward, FaUsers, FaGlobe, FaHeart, FaShieldAlt, FaStar, FaMapMarkedAlt, FaClock } from 'react-icons/fa';

export default function About() {
  const team = [
    {
      name: 'John Moyo',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'With over 15 years of experience in the tourism industry, John founded ZimTour with a vision to showcase Zimbabwe\'s beauty to the world.',
      specialties: ['Safari Planning', 'Cultural Tours', 'Business Development']
    },
    {
      name: 'Sarah Ndlovu',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah ensures every tour runs smoothly with her attention to detail and passion for exceptional customer service.',
      specialties: ['Logistics', 'Customer Service', 'Quality Assurance']
    },
    {
      name: 'David Chikomba',
      position: 'Senior Safari Guide',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'David\'s deep knowledge of wildlife and local culture makes him one of Zimbabwe\'s most respected safari guides.',
      specialties: ['Wildlife Tracking', 'Bird Watching', 'Cultural History']
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Zimbabwe',
      description: 'We love our country and are passionate about sharing its beauty with visitors from around the world.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safety First',
      description: 'Your safety is our top priority. All our guides are certified and our vehicles are fully insured.'
    },
    {
      icon: <FaUsers />,
      title: 'Community Focus',
      description: 'We work closely with local communities to ensure tourism benefits everyone in Zimbabwe.'
    },
    {
      icon: <FaGlobe />,
      title: 'Sustainable Tourism',
      description: 'We promote responsible tourism that protects Zimbabwe\'s natural and cultural heritage.'
    }
  ];

  const achievements = [
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Serving travelers since 2009'
    },
    {
      number: '5000+',
      label: 'Happy Travelers',
      description: 'From over 50 countries'
    },
    {
      number: '50+',
      label: 'Destinations',
      description: 'Across Zimbabwe'
    },
    {
      number: '100%',
      label: 'Satisfaction Rate',
      description: 'Based on customer reviews'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About ZimTour</h1>
            <p>Your trusted partner for unforgettable Zimbabwe adventures</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>Founded in 2009, ZimTour began with a simple mission: to share the incredible beauty and rich culture of Zimbabwe with the world. What started as a small family business has grown into one of Zimbabwe\'s most trusted tour operators.</p>
              <p>Our founder, John Moyo, grew up exploring the wild landscapes of Zimbabwe and developed a deep passion for its wildlife, culture, and people. This passion drives everything we do at ZimTour.</p>
              <p>Today, we\'re proud to have helped thousands of travelers from around the world discover the magic of Zimbabwe, from the majestic Victoria Falls to the vast wilderness of Hwange National Park.</p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Zimbabwe Safari" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To provide exceptional travel experiences that showcase Zimbabwe\'s natural beauty, rich culture, and warm hospitality while promoting sustainable tourism practices.</p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To be the leading tour operator in Zimbabwe, known for authentic experiences, outstanding service, and commitment to conservation and community development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
                <div className="achievement-description">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The passionate people behind your Zimbabwe adventure</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-specialties">
                    <h4>Specialties:</h4>
                    <div className="specialty-tags">
                      {member.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications & Awards</h2>
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="certification-icon">
                <FaAward />
              </div>
              <h3>Zimbabwe Tourism Authority</h3>
              <p>Licensed tour operator with full compliance</p>
            </div>
            <div className="certification-card">
              <div className="certification-icon">
                <FaShieldAlt />
              </div>
              <h3>Safety Certified</h3>
              <p>All guides certified in first aid and safety protocols</p>
            </div>
            <div className="certification-card">
              <div className="certification-icon">
                <FaStar />
              </div>
              <h3>Excellence Award</h3>
              <p>Recognized for outstanding customer service</p>
            </div>
            <div className="certification-card">
              <div className="certification-icon">
                <FaGlobe />
              </div>
              <h3>Sustainable Tourism</h3>
              <p>Committed to environmental and cultural preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Zimbabwe with Us?</h2>
            <p>Join thousands of satisfied travelers who have discovered the magic of Zimbabwe</p>
            <div className="cta-buttons">
              <Link href="/tours" className="btn btn-primary">Explore Our Tours</Link>
              <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
        }

        .about-hero {
          background: var(--gradient-primary);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .about-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .about-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .story-content h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .story-content p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        .story-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
        }

        .mission-section {
          background: var(--background-light);
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .mission-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          text-align: center;
        }

        .mission-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .mission-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          text-align: center;
          padding: 2rem;
        }

        .value-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .value-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .achievements-section {
          background: var(--gradient-accent);
          color: white;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .achievement-card {
          text-align: center;
          padding: 2rem;
        }

        .achievement-number {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .achievement-label {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .achievement-description {
          opacity: 0.9;
          font-size: 0.875rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .team-card {
          background: white;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .team-image {
          height: 250px;
          overflow: hidden;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-content {
          padding: 1.5rem;
        }

        .team-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .team-position {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .team-bio {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .team-specialties h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .specialty-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .specialty-tag {
          background: var(--background-light);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius);
          font-size: 0.875rem;
        }

        .certifications-section {
          background: var(--background-light);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .certification-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .certification-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .certification-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .certification-card h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .certification-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .about-hero-content h1 {
            font-size: 2rem;
          }

          .story-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .story-content h2 {
            font-size: 2rem;
          }

          .mission-grid {
            grid-template-columns: 1fr;
          }

          .values-grid,
          .achievements-grid,
          .team-grid,
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
