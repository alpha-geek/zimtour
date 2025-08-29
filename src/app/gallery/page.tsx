'use client';

import { useState } from 'react';
import { FaSearch, FaHeart, FaShare, FaDownload, FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'culture', name: 'Culture' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'lodges', name: 'Lodges & Camps' }
  ];

  const photos = [
    {
      id: 1,
      title: 'Lion Pride at Hwange',
      category: 'wildlife',
      location: 'Hwange National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A majestic lion pride resting in the golden grass of Hwange National Park'
    },
    {
      id: 2,
      title: 'Victoria Falls Rainbow',
      category: 'landscapes',
      location: 'Victoria Falls',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'The iconic rainbow over Victoria Falls, one of the Seven Natural Wonders'
    },
    {
      id: 3,
      title: 'Traditional Dance',
      category: 'culture',
      location: 'Great Zimbabwe',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Local performers showcasing traditional Zimbabwean dance and music'
    },
    {
      id: 4,
      title: 'Elephant Family',
      category: 'wildlife',
      location: 'Mana Pools',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A family of elephants crossing the Zambezi River at Mana Pools'
    },
    {
      id: 5,
      title: 'Matobo Hills Sunset',
      category: 'landscapes',
      location: 'Matobo Hills',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Breathtaking sunset over the ancient granite formations of Matobo Hills'
    },
    {
      id: 6,
      title: 'Canoe Safari',
      category: 'adventure',
      location: 'Mana Pools',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Peaceful canoe safari on the Zambezi River with wildlife viewing'
    },
    {
      id: 7,
      title: 'Luxury Safari Lodge',
      category: 'lodges',
      location: 'Hwange National Park',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant safari lodge overlooking the African wilderness'
    },
    {
      id: 8,
      title: 'Giraffe Silhouette',
      category: 'wildlife',
      location: 'Hwange National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Graceful giraffe against the backdrop of a golden sunset'
    },
    {
      id: 9,
      title: 'Local Market',
      category: 'culture',
      location: 'Harare',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Vibrant local market showcasing Zimbabwean crafts and produce'
    },
    {
      id: 10,
      title: 'Rock Art',
      category: 'culture',
      location: 'Matobo Hills',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Ancient San rock art paintings in the Matobo Hills'
    },
    {
      id: 11,
      title: 'Walking Safari',
      category: 'adventure',
      location: 'Mana Pools',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Guided walking safari through pristine wilderness'
    },
    {
      id: 12,
      title: 'Bush Camp',
      category: 'lodges',
      location: 'Hwange National Park',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intimate bush camp offering authentic safari experiences'
    }
  ];

  const filteredPhotos = photos.filter(photo => 
    selectedCategory === 'all' || photo.category === selectedCategory
  );

  const openLightbox = (photo: any) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content">
            <h1>Photo Gallery</h1>
            <p>Discover the beauty of Zimbabwe through our stunning photography</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <div className="container">
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
        </div>
      </section>

      {/* Photo Grid */}
      <section className="section">
        <div className="container">
          <div className="photo-grid">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="photo-card" onClick={() => openLightbox(photo)}>
                <div className="photo-image">
                  <img src={photo.image} alt={photo.title} />
                  <div className="photo-overlay">
                    <div className="photo-info">
                      <h3>{photo.title}</h3>
                      <p>{photo.location}</p>
                    </div>
                    <div className="photo-actions">
                      <button className="action-btn">
                        <FaSearch />
                      </button>
                      <button className="action-btn">
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <div className="lightbox-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p className="lightbox-location">{selectedImage.location}</p>
              <p className="lightbox-description">{selectedImage.description}</p>
              <div className="lightbox-actions">
                <button className="btn btn-primary">
                  <FaDownload />
                  Download
                </button>
                <button className="btn btn-outline">
                  <FaShare />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Capture Your Own Memories?</h2>
            <p>Book a tour with us and create your own stunning photographs of Zimbabwe</p>
            <div className="cta-buttons">
              <a href="/tours" className="btn btn-primary">Book a Tour</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-page {
          min-height: 100vh;
        }

        .gallery-hero {
          background: var(--gradient-primary);
          color: white;
          padding: 6rem 0 3rem;
          text-align: center;
        }

        .gallery-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .gallery-hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .category-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border-color);
          background: white;
          color: var(--text-secondary);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .category-btn:hover,
        .category-btn.active {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .photo-card {
          position: relative;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .photo-card:hover {
          transform: translateY(-5px);
        }

        .photo-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .photo-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .photo-card:hover .photo-image img {
          transform: scale(1.1);
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-card:hover .photo-overlay {
          opacity: 1;
        }

        .photo-info h3 {
          color: white;
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }

        .photo-info p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
        }

        .photo-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
        }

        .action-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .action-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .lightbox-content {
          background: white;
          border-radius: var(--border-radius-lg);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
        }

        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background 0.2s ease;
        }

        .lightbox-close:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .lightbox-image {
          height: 400px;
          overflow: hidden;
        }

        .lightbox-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lightbox-info {
          padding: 2rem;
        }

        .lightbox-info h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .lightbox-location {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .lightbox-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .lightbox-actions {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .gallery-hero-content h1 {
            font-size: 2rem;
          }

          .category-filters {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .photo-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
          }

          .lightbox-content {
            margin: 1rem;
          }

          .lightbox-image {
            height: 250px;
          }

          .lightbox-info {
            padding: 1rem;
          }

          .lightbox-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
