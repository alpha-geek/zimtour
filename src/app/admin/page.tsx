'use client';

import { useState, useEffect } from 'react';
import { 
  FaUserPlus, FaUserMinus, FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar, FaShieldAlt, 
  FaImage, FaComments, FaHotel, FaRoute, FaCog, FaPlus, FaTrash, FaSave, FaTimes, FaEye,
  FaCalendar, FaDollarSign, FaClock, FaUsers, FaGlobe, FaHeart, FaQuoteLeft, FaSignOutAlt,
  FaChartLine, FaTrophy, FaBell, FaSearch
} from 'react-icons/fa';
import AdminLogin from '@/components/AdminLogin';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setLoginError('');
    
    try {
      const response = await fetch('/api/auth/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage and set cookie
        localStorage.setItem('adminToken', data.token);
        document.cookie = `adminToken=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;
        setIsAuthenticated(true);
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Network error. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    document.cookie = 'adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} isLoading={isLoading} error={loginError} />;
  }

  // Dashboard Stats
  const dashboardStats = [
    { 
      label: 'Total Tours', 
      value: '50', 
      change: '+12%', 
      icon: <FaRoute />, 
      color: 'blue',
      bgColor: 'rgba(59, 130, 246, 0.1)'
    },
    { 
      label: 'Active Hotels', 
      value: '24', 
      change: '+8%', 
      icon: <FaHotel />, 
      color: 'green',
      bgColor: 'rgba(34, 197, 94, 0.1)'
    },
    { 
      label: 'Staff Members', 
      value: '18', 
      change: '+3%', 
      icon: <FaUsers />, 
      color: 'purple',
      bgColor: 'rgba(147, 51, 234, 0.1)'
    },
    { 
      label: 'Customer Reviews', 
      value: '1,247', 
      change: '+23%', 
      icon: <FaComments />, 
      color: 'orange',
      bgColor: 'rgba(249, 115, 22, 0.1)'
    },
    { 
      label: 'Gallery Photos', 
      value: '156', 
      change: '+15%', 
      icon: <FaImage />, 
      color: 'pink',
      bgColor: 'rgba(236, 72, 153, 0.1)'
    },
    { 
      label: 'Total Bookings', 
      value: '892', 
      change: '+31%', 
      icon: <FaCalendar />, 
      color: 'red',
      bgColor: 'rgba(239, 68, 68, 0.1)'
    }
  ];

  // Tours Data
  const [tours, setTours] = useState([
    {
      id: 1,
      name: 'Victoria Falls Full Day Tour',
      category: 'Day Trips',
      duration: '8 hours',
      price: 120,
      location: 'Victoria Falls',
      rating: 4.8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Hwange Wildlife Safari',
      category: 'Safari',
      duration: '3 days',
      price: 450,
      location: 'Hwange National Park',
      rating: 4.9,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // Hotels Data
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Victoria Falls Safari Lodge',
      location: 'Victoria Falls',
      price: 180,
      rating: 4.8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Hwange Safari Lodge',
      location: 'Hwange National Park',
      price: 220,
      rating: 4.7,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // Staff Data
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: 'John Moyo',
      position: 'Senior Tour Guide',
      email: 'john.moyo@zimtour.co.zw',
      phone: '+263 77 123 4567',
      location: 'Harare',
      rating: 4.9,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Sarah Ndlovu',
      position: 'Safari Specialist',
      email: 'sarah.ndlovu@zimtour.co.zw',
      phone: '+263 78 234 5678',
      location: 'Victoria Falls',
      rating: 4.8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]);

  // Testimonials Data
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United States',
      rating: 5,
      tour: 'Victoria Falls & Hwange Safari',
      review: 'Absolutely incredible experience! Our guide David was knowledgeable and passionate about wildlife.',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      country: 'Australia',
      rating: 5,
      tour: 'Great Zimbabwe Cultural Tour',
      review: 'The cultural tour was eye-opening. Learning about the ancient civilization was fascinating.',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]);

  // Gallery Data
  const [gallery, setGallery] = useState([
    {
      id: 1,
      title: 'Lion Pride at Hwange',
      category: 'wildlife',
      location: 'Hwange National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'active'
    },
    {
      id: 2,
      title: 'Victoria Falls Rainbow',
      category: 'landscapes',
      location: 'Victoria Falls',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'active'
    }
  ]);

  // Site Content Data
  const [siteContent, setSiteContent] = useState({
    heroTitle: 'Discover the Magic of Zimbabwe',
    heroSubtitle: 'Experience unforgettable adventures with Zimbabwe\'s premier tour company.',
    heroDescription: 'From airport transfers to wildlife safaris, we make your dreams come true.',
    aboutTitle: 'About ZimTour',
    aboutDescription: 'Your trusted partner for unforgettable Zimbabwe adventures',
    contactEmail: 'info@zimtour.co.zw',
    contactPhone: '+263 77 123 4567',
    contactAddress: '123 Harare Street, Harare, Zimbabwe'
  });

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaCog /> },
    { id: 'tours', label: 'Tours', icon: <FaRoute /> },
    { id: 'hotels', label: 'Hotels', icon: <FaHotel /> },
    { id: 'staff', label: 'Staff', icon: <FaUsers /> },
    { id: 'testimonials', label: 'Testimonials', icon: <FaComments /> },
    { id: 'gallery', label: 'Gallery', icon: <FaImage /> },
    { id: 'content', label: 'Site Content', icon: <FaGlobe /> }
  ];

  const openModal = (type: string, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setEditingItem(null);
  };

  const handleDelete = (type: string, id: number) => {
    if (confirm('Are you sure you want to delete this item?')) {
      switch (type) {
        case 'tour':
          setTours(prev => prev.filter(tour => tour.id !== id));
          break;
        case 'hotel':
          setHotels(prev => prev.filter(hotel => hotel.id !== id));
          break;
        case 'staff':
          setStaff(prev => prev.filter(member => member.id !== id));
          break;
        case 'testimonial':
          setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
          break;
        case 'gallery':
          setGallery(prev => prev.filter(photo => photo.id !== id));
          break;
      }
    }
  };

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h2>Dashboard Overview</h2>
          <p>Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-primary">
            <FaPlus /> Add New Tour
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ backgroundColor: stat.bgColor }}>
            <div className="stat-header">
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-change positive">
                {stat.change}
              </div>
            </div>
            <div className="stat-info">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <FaPlus className="activity-icon" />
            <div className="activity-content">
              <p>New tour "Mana Pools Adventure" added</p>
              <span>2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <FaStar className="activity-icon" />
            <div className="activity-content">
              <p>New 5-star review received</p>
              <span>4 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <FaUserPlus className="activity-icon" />
            <div className="activity-content">
              <p>New staff member "David Chikomba" added</p>
              <span>1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTours = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Manage Tours</h2>
        <button onClick={() => openModal('tour')} className="btn btn-primary">
          <FaPlus /> Add New Tour
        </button>
      </div>
      <div className="data-grid">
        {tours.map(tour => (
          <div key={tour.id} className="data-card">
            <div className="card-image">
              <img src={tour.image} alt={tour.name} />
            </div>
            <div className="card-content">
              <h3>{tour.name}</h3>
              <p className="card-category">{tour.category}</p>
              <div className="card-details">
                <span><FaClock /> {tour.duration}</span>
                <span><FaDollarSign /> ${tour.price}</span>
                <span><FaMapMarkerAlt /> {tour.location}</span>
                <span><FaStar /> {tour.rating}</span>
              </div>
              <div className="card-actions">
                <button onClick={() => openModal('tour', tour)} className="btn btn-outline">
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete('tour', tour.id)} className="btn btn-danger">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHotels = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Manage Hotels</h2>
        <button onClick={() => openModal('hotel')} className="btn btn-primary">
          <FaPlus /> Add New Hotel
        </button>
      </div>
      <div className="data-grid">
        {hotels.map(hotel => (
          <div key={hotel.id} className="data-card">
            <div className="card-image">
              <img src={hotel.image} alt={hotel.name} />
            </div>
            <div className="card-content">
              <h3>{hotel.name}</h3>
              <div className="card-details">
                <span><FaMapMarkerAlt /> {hotel.location}</span>
                <span><FaDollarSign /> ${hotel.price}/night</span>
                <span><FaStar /> {hotel.rating}</span>
              </div>
              <div className="card-actions">
                <button onClick={() => openModal('hotel', hotel)} className="btn btn-outline">
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete('hotel', hotel.id)} className="btn btn-danger">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStaff = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Manage Staff</h2>
        <button onClick={() => openModal('staff')} className="btn btn-primary">
          <FaPlus /> Add New Staff
        </button>
      </div>
      <div className="data-grid">
        {staff.map(member => (
          <div key={member.id} className="data-card">
            <div className="card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="card-category">{member.position}</p>
              <div className="card-details">
                <span><FaEnvelope /> {member.email}</span>
                <span><FaPhone /> {member.phone}</span>
                <span><FaMapMarkerAlt /> {member.location}</span>
                <span><FaStar /> {member.rating}</span>
              </div>
              <div className="card-actions">
                <button onClick={() => openModal('staff', member)} className="btn btn-outline">
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete('staff', member.id)} className="btn btn-danger">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Manage Testimonials</h2>
        <button onClick={() => openModal('testimonial')} className="btn btn-primary">
          <FaPlus /> Add New Testimonial
        </button>
      </div>
      <div className="data-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="data-card">
            <div className="card-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="card-content">
              <h3>{testimonial.name}</h3>
              <p className="card-category">{testimonial.country}</p>
              <div className="card-details">
                <span><FaStar /> {testimonial.rating}/5</span>
                <span><FaRoute /> {testimonial.tour}</span>
              </div>
              <p className="card-review">{testimonial.review}</p>
              <div className="card-actions">
                <button onClick={() => openModal('testimonial', testimonial)} className="btn btn-outline">
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete('testimonial', testimonial.id)} className="btn btn-danger">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Manage Gallery</h2>
        <button onClick={() => openModal('gallery')} className="btn btn-primary">
          <FaPlus /> Add New Photo
        </button>
      </div>
      <div className="data-grid">
        {gallery.map(photo => (
          <div key={photo.id} className="data-card">
            <div className="card-image">
              <img src={photo.image} alt={photo.title} />
            </div>
            <div className="card-content">
              <h3>{photo.title}</h3>
              <div className="card-details">
                <span><FaMapMarkerAlt /> {photo.location}</span>
                <span><FaImage /> {photo.category}</span>
              </div>
              <div className="card-actions">
                <button onClick={() => openModal('gallery', photo)} className="btn btn-outline">
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete('gallery', photo.id)} className="btn btn-danger">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSiteContent = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Site Content Management</h2>
        <button onClick={() => openModal('content')} className="btn btn-primary">
          <FaEdit /> Edit Content
        </button>
      </div>
      <div className="content-preview">
        <div className="preview-section">
          <h3>Hero Section</h3>
          <div className="preview-content">
            <h1>{siteContent.heroTitle}</h1>
            <p>{siteContent.heroSubtitle}</p>
            <p>{siteContent.heroDescription}</p>
          </div>
        </div>
        <div className="preview-section">
          <h3>About Section</h3>
          <div className="preview-content">
            <h2>{siteContent.aboutTitle}</h2>
            <p>{siteContent.aboutDescription}</p>
          </div>
        </div>
        <div className="preview-section">
          <h3>Contact Information</h3>
          <div className="preview-content">
            <p><FaEnvelope /> {siteContent.contactEmail}</p>
            <p><FaPhone /> {siteContent.contactPhone}</p>
            <p><FaMapMarkerAlt /> {siteContent.contactAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>{editingItem ? 'Edit' : 'Add New'} {modalType}</h3>
            <button onClick={closeModal} className="modal-close">
              <FaTimes />
            </button>
          </div>
          <div className="modal-body">
            {/* Form content would go here based on modalType */}
            <p>Form for {modalType} management would be implemented here.</p>
            <p>This would include all necessary fields for adding/editing {modalType}.</p>
          </div>
          <div className="modal-footer">
            <button onClick={closeModal} className="btn btn-outline">Cancel</button>
            <button className="btn btn-primary">
              <FaSave /> {editingItem ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="admin-page">
      {/* Modern Header */}
      <div className="admin-header">
        <div className="header-content">
          <div className="header-left">
            <div className="brand">
              <span className="brand-text">ZimTour</span>
              <span className="brand-subtitle">Admin Panel</span>
            </div>
          </div>
          <div className="header-right">
            <div className="header-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="header-notifications">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </div>
            <div className="header-user">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Admin" />
              <span>Admin User</span>
            </div>
            <button onClick={handleLogout} className="logout-btn">
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </div>

      <div className="admin-container">
        <div className="admin-sidebar">
          <nav className="admin-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="admin-main">
          <div className="main-content">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'tours' && renderTours()}
            {activeTab === 'hotels' && renderHotels()}
            {activeTab === 'staff' && renderStaff()}
            {activeTab === 'testimonials' && renderTestimonials()}
            {activeTab === 'gallery' && renderGallery()}
            {activeTab === 'content' && renderSiteContent()}
          </div>
        </div>
      </div>

      {renderModal()}

      <style jsx>{`
        .admin-page {
          min-height: 100vh;
          background: var(--background-light);
        }

        .admin-header {
          background: var(--gradient-primary);
          color: white;
          padding: 2rem 0;
        }

        .admin-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .admin-container {
          display: flex;
          min-height: calc(100vh - 120px);
        }

        .admin-sidebar {
          width: 250px;
          background: white;
          border-right: 1px solid var(--border-color);
          padding: 2rem 0;
        }

        .admin-nav {
          display: flex;
          flex-direction: column;
        }

        .nav-tab {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          border: none;
          background: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .nav-tab:hover {
          background: var(--background-light);
          color: var(--primary-color);
        }

        .nav-tab.active {
          background: var(--primary-color);
          color: white;
        }

        .admin-main {
          flex: 1;
          padding: 2rem 0;
        }

        .dashboard-content h2,
        .content-section h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
        }

        .stat-card.blue { border-left: 4px solid #3b82f6; }
        .stat-card.green { border-left: 4px solid #10b981; }
        .stat-card.purple { border-left: 4px solid #8b5cf6; }
        .stat-card.orange { border-left: 4px solid #f59e0b; }
        .stat-card.pink { border-left: 4px solid #ec4899; }
        .stat-card.red { border-left: 4px solid #ef4444; }

        .stat-icon {
          font-size: 2rem;
          color: var(--primary-color);
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .recent-activity {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .recent-activity h3 {
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-icon {
          color: var(--primary-color);
          font-size: 1.25rem;
        }

        .activity-content p {
          margin: 0;
          color: var(--text-primary);
        }

        .activity-content span {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .data-card {
          background: white;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease;
        }

        .data-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .card-image {
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .card-category {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .card-details {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .card-details span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .card-review {
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .card-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: var(--border-radius);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .btn-primary {
          background: var(--gradient-primary);
          color: white;
        }

        .btn-outline {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .content-preview {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .preview-section {
          margin-bottom: 2rem;
        }

        .preview-section h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .preview-content {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .preview-content h1,
        .preview-content h2 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: var(--border-radius-lg);
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          color: var(--text-secondary);
        }

        .modal-body {
          padding: 1.5rem;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 1024px) {
          .admin-container {
            flex-direction: column;
          }

          .admin-sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }

          .admin-nav {
            flex-direction: row;
            overflow-x: auto;
            padding: 0 1rem;
          }

          .nav-tab {
            white-space: nowrap;
            padding: 1rem;
          }
        }

        @media (max-width: 768px) {
          .admin-header h1 {
            font-size: 1.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }

          .data-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .card-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
