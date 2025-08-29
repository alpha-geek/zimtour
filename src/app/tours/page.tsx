'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar, FaHeart } from 'react-icons/fa';

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'wildlife', name: 'Wildlife Safaris' },
    { id: 'cultural', name: 'Cultural Tours' },
    { id: 'adventure', name: 'Adventure Tours' },
    { id: 'day-trips', name: 'Day Trips' },
    { id: 'luxury', name: 'Luxury Safaris' },
    { id: 'photography', name: 'Photography Tours' },
    { id: 'family', name: 'Family Tours' },
    { id: 'honeymoon', name: 'Honeymoon Packages' }
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
      image: 'https://www.wildernessdestinations.com/media/2023/03/victoria-falls-zimbabwe.jpg',
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
      image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/hwange-national-park-zimbabwe.jpg',
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
      image: 'https://www.zimbabwetourism.net/wp-content/uploads/2023/02/great-zimbabwe-ruins.jpg',
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
      image: 'https://www.wildernessdestinations.com/media/2023/03/mana-pools-zimbabwe.jpg',
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
      image: 'https://www.zimbabwetourism.net/wp-content/uploads/2023/02/harare-city-zimbabwe.jpg',
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
      image: 'https://www.zimbabwetourism.net/wp-content/uploads/2023/02/matobo-hills-zimbabwe.jpg',
      description: 'Explore ancient rock art and stunning landscapes in the Matobo Hills.',
      highlights: ['Rock Art', 'Hiking', 'Scenic Views', 'Lunch']
    },
    {
      id: 7,
      name: 'Victoria Falls Helicopter Flight',
      category: 'adventure',
      duration: '15 minutes',
      groupSize: '2-6 people',
      location: 'Victoria Falls',
      price: 180,
      rating: 4.9,
      reviews: 234,
      image: 'https://www.wildernessdestinations.com/media/2023/03/victoria-falls-helicopter.jpg',
      description: 'Spectacular helicopter flight over Victoria Falls and the Zambezi River gorge.',
      highlights: ['Aerial Views', 'Professional Pilot', 'Safety Briefing', 'Photo Opportunities']
    },
    {
      id: 8,
      name: 'Devil\'s Pool & Livingstone Island',
      category: 'adventure',
      duration: '4 hours',
      groupSize: '2-8 people',
      location: 'Victoria Falls',
      price: 150,
      rating: 4.8,
      reviews: 167,
      image: 'https://www.wildernessdestinations.com/media/2023/03/devils-pool-victoria-falls.jpg',
      description: 'Swim in the famous Devil\'s Pool at the edge of Victoria Falls during low water season.',
      highlights: ['Devil\'s Pool Swim', 'Livingstone Island', 'Safety Equipment', 'Professional Guide']
    },
    {
      id: 9,
      name: 'Zambezi River Sunset Cruise',
      category: 'adventure',
      duration: '3 hours',
      groupSize: '2-20 people',
      location: 'Victoria Falls',
      price: 85,
      rating: 4.7,
      reviews: 189,
      image: 'https://www.wildernessdestinations.com/media/2023/03/zambezi-sunset-cruise.jpg',
      description: 'Relaxing sunset cruise on the Zambezi River with wildlife viewing and refreshments.',
      highlights: ['Sunset Views', 'Wildlife Spotting', 'Refreshments', 'Professional Crew']
    },
    {
      id: 10,
      name: 'Hwange Walking Safari',
      category: 'wildlife',
      duration: '2 days',
      groupSize: '4-6 people',
      location: 'Hwange National Park',
      price: 320,
      rating: 4.9,
      reviews: 78,
      image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/hwange-walking-safari.jpg',
      description: 'Intimate walking safari experience with expert guides in Hwange National Park.',
      highlights: ['Walking Safari', 'Expert Guide', 'Luxury Camping', 'All Meals']
    },
    {
      id: 11,
      name: 'Mana Pools Canoe Safari',
      category: 'adventure',
      duration: '3 days',
      groupSize: '4-8 people',
      location: 'Mana Pools',
      price: 520,
      rating: 4.8,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Canoe down the Zambezi River through Mana Pools with wildlife encounters.',
      highlights: ['Canoe Safari', 'Wildlife Viewing', 'Riverside Camping', 'Expert Guide']
    },
    {
      id: 12,
      name: 'Gonarezhou National Park Safari',
      category: 'wildlife',
      duration: '5 days',
      groupSize: '4-8 people',
      location: 'Gonarezhou',
      price: 780,
      rating: 4.7,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Remote wilderness safari in Zimbabwe\'s second-largest national park.',
      highlights: ['Remote Location', 'Game Drives', 'Luxury Lodge', 'All Meals']
    },
    {
      id: 13,
      name: 'Victoria Falls Photography Workshop',
      category: 'photography',
      duration: '6 hours',
      groupSize: '2-6 people',
      location: 'Victoria Falls',
      price: 140,
      rating: 4.8,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional photography workshop at Victoria Falls with expert guidance.',
      highlights: ['Professional Photographer', 'Equipment Tips', 'Best Locations', 'Photo Editing']
    },
    {
      id: 14,
      name: 'Hwange Photography Safari',
      category: 'photography',
      duration: '4 days',
      groupSize: '4-6 people',
      location: 'Hwange National Park',
      price: 650,
      rating: 4.9,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Specialized photography safari with hides and expert wildlife photography guidance.',
      highlights: ['Photography Hides', 'Expert Guide', 'Luxury Lodge', 'All Meals']
    },
    {
      id: 15,
      name: 'Luxury Victoria Falls Experience',
      category: 'luxury',
      duration: '3 days',
      groupSize: '2-4 people',
      location: 'Victoria Falls',
      price: 1200,
      rating: 5.0,
      reviews: 28,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Ultimate luxury experience with private tours, helicopter flights, and exclusive dining.',
      highlights: ['Private Guide', 'Helicopter Flight', 'Luxury Hotel', 'Exclusive Dining']
    },
    {
      id: 16,
      name: 'Hwange Luxury Safari',
      category: 'luxury',
      duration: '5 days',
      groupSize: '2-6 people',
      location: 'Hwange National Park',
      price: 1800,
      rating: 5.0,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium luxury safari with private game drives and exclusive lodge accommodation.',
      highlights: ['Private Game Drives', 'Luxury Lodge', 'Personal Butler', 'All Inclusive']
    },
    {
      id: 17,
      name: 'Family Safari Adventure',
      category: 'family',
      duration: '4 days',
      groupSize: '4-8 people',
      location: 'Hwange National Park',
      price: 680,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Family-friendly safari with educational activities and comfortable accommodation.',
      highlights: ['Family Activities', 'Educational Tours', 'Comfortable Lodge', 'All Meals']
    },
    {
      id: 18,
      name: 'Victoria Falls Family Package',
      category: 'family',
      duration: '2 days',
      groupSize: '4-6 people',
      location: 'Victoria Falls',
      price: 420,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Family package with kid-friendly activities and comfortable accommodation.',
      highlights: ['Kid-Friendly Activities', 'Family Hotel', 'Guided Tours', 'All Meals']
    },
    {
      id: 19,
      name: 'Honeymoon Safari Package',
      category: 'honeymoon',
      duration: '7 days',
      groupSize: '2 people',
      location: 'Victoria Falls & Hwange',
      price: 2200,
      rating: 5.0,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Romantic honeymoon package combining Victoria Falls and safari experiences.',
      highlights: ['Private Tours', 'Luxury Accommodation', 'Romantic Dinners', 'All Inclusive']
    },
    {
      id: 20,
      name: 'Victoria Falls Bungee Jump',
      category: 'adventure',
      duration: '2 hours',
      groupSize: '1-4 people',
      location: 'Victoria Falls',
      price: 120,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thrilling bungee jump from the Victoria Falls Bridge over the Zambezi River.',
      highlights: ['Bungee Jump', 'Safety Equipment', 'Professional Staff', 'Video Recording']
    },
    {
      id: 21,
      name: 'Zambezi White Water Rafting',
      category: 'adventure',
      duration: '1 day',
      groupSize: '4-12 people',
      location: 'Victoria Falls',
      price: 140,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Exciting white water rafting on the Zambezi River with professional guides.',
      highlights: ['White Water Rafting', 'Safety Equipment', 'Professional Guides', 'Lunch']
    },
    {
      id: 22,
      name: 'Chimanimani Hiking Adventure',
      category: 'adventure',
      duration: '3 days',
      groupSize: '4-8 people',
      location: 'Chimanimani',
      price: 280,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Hiking adventure in the beautiful Chimanimani Mountains with stunning views.',
      highlights: ['Mountain Hiking', 'Scenic Views', 'Mountain Lodge', 'All Meals']
    },
    {
      id: 23,
      name: 'Bulawayo Cultural Experience',
      category: 'cultural',
      duration: '6 hours',
      groupSize: '2-10 people',
      location: 'Bulawayo',
      price: 75,
      rating: 4.5,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Cultural tour of Bulawayo including museums, markets, and historical sites.',
      highlights: ['Museums', 'Local Markets', 'Historical Sites', 'Local Guide']
    },
    {
      id: 24,
      name: 'Eastern Highlands Tour',
      category: 'adventure',
      duration: '4 days',
      groupSize: '4-8 people',
      location: 'Eastern Highlands',
      price: 480,
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the beautiful Eastern Highlands with hiking, waterfalls, and tea estates.',
      highlights: ['Mountain Views', 'Waterfalls', 'Tea Estates', 'Luxury Lodge']
    },
    {
      id: 25,
      name: 'Victoria Falls Bridge Tour',
      category: 'adventure',
      duration: '2 hours',
      groupSize: '2-8 people',
      location: 'Victoria Falls',
      price: 45,
      rating: 4.6,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Walk across the historic Victoria Falls Bridge with stunning views of the gorge.',
      highlights: ['Bridge Walk', 'Historical Information', 'Photo Opportunities', 'Safety Equipment']
    },
    {
      id: 26,
      name: 'Zambezi River Fishing',
      category: 'adventure',
      duration: '6 hours',
      groupSize: '2-4 people',
      location: 'Victoria Falls',
      price: 180,
      rating: 4.5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional fishing experience on the Zambezi River targeting tiger fish and bream.',
      highlights: ['Professional Guide', 'Fishing Equipment', 'Refreshments', 'Catch & Release']
    },
    {
      id: 27,
      name: 'Victoria Falls Rainforest Walk',
      category: 'day-trips',
      duration: '3 hours',
      groupSize: '2-12 people',
      location: 'Victoria Falls',
      price: 35,
      rating: 4.7,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Guided walk through the Victoria Falls rainforest with multiple viewpoints.',
      highlights: ['Rainforest Walk', 'Multiple Viewpoints', 'Local Guide', 'Raincoats Provided']
    },
    {
      id: 28,
      name: 'Hwange Night Safari',
      category: 'wildlife',
      duration: '3 hours',
      groupSize: '4-8 people',
      location: 'Hwange National Park',
      price: 120,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nocturnal wildlife viewing experience with spotlight and expert guides.',
      highlights: ['Night Game Drive', 'Spotlight Equipment', 'Expert Guide', 'Refreshments']
    },
    {
      id: 29,
      name: 'Mana Pools Walking Safari',
      category: 'wildlife',
      duration: '5 days',
      groupSize: '4-6 people',
      location: 'Mana Pools',
      price: 850,
      rating: 4.9,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Extended walking safari in the pristine wilderness of Mana Pools.',
      highlights: ['Walking Safari', 'Wilderness Camping', 'Expert Guide', 'All Meals']
    },
    {
      id: 30,
      name: 'Great Zimbabwe Extended Tour',
      category: 'cultural',
      duration: '8 hours',
      groupSize: '2-10 people',
      location: 'Masvingo',
      price: 120,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive tour of Great Zimbabwe including museum and archaeological sites.',
      highlights: ['Extended Tour', 'Museum Visit', 'Archaeological Sites', 'Lunch Included']
    },
    {
      id: 31,
      name: 'Harare Art Gallery Tour',
      category: 'cultural',
      duration: '4 hours',
      groupSize: '2-8 people',
      location: 'Harare',
      price: 55,
      rating: 4.4,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore Harare\'s vibrant art scene with visits to galleries and studios.',
      highlights: ['Art Galleries', 'Artist Studios', 'Local Guide', 'Refreshments']
    },
    {
      id: 32,
      name: 'Matobo Hills Extended Tour',
      category: 'cultural',
      duration: '10 hours',
      groupSize: '2-8 people',
      location: 'Matobo Hills',
      price: 140,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive tour of Matobo Hills including rock art and historical sites.',
      highlights: ['Rock Art Sites', 'Historical Sites', 'Hiking', 'Lunch Included']
    },
    {
      id: 33,
      name: 'Victoria Falls Photography Workshop',
      category: 'photography',
      duration: '8 hours',
      groupSize: '2-6 people',
      location: 'Victoria Falls',
      price: 200,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced photography workshop with professional photographer and equipment.',
      highlights: ['Professional Photographer', 'Equipment Provided', 'Best Locations', 'Photo Editing']
    },
    {
      id: 34,
      name: 'Hwange Birding Safari',
      category: 'wildlife',
      duration: '3 days',
      groupSize: '4-6 people',
      location: 'Hwange National Park',
      price: 580,
      rating: 4.7,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Specialized bird watching safari with expert ornithologist guide.',
      highlights: ['Bird Watching', 'Expert Ornithologist', 'Specialized Equipment', 'All Meals']
    },
    {
      id: 35,
      name: 'Mana Pools Photography Safari',
      category: 'photography',
      duration: '6 days',
      groupSize: '4-6 people',
      location: 'Mana Pools',
      price: 1200,
      rating: 4.9,
      reviews: 28,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Extended photography safari with hides and expert wildlife photography guidance.',
      highlights: ['Photography Hides', 'Expert Guide', 'Wilderness Camping', 'All Meals']
    },
    {
      id: 36,
      name: 'Victoria Falls Luxury Spa Package',
      category: 'luxury',
      duration: '1 day',
      groupSize: '1-2 people',
      location: 'Victoria Falls',
      price: 350,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxury spa experience with views of Victoria Falls and premium treatments.',
      highlights: ['Luxury Spa', 'Premium Treatments', 'Falls Views', 'Refreshments']
    },
    {
      id: 37,
      name: 'Hwange Luxury Camping Safari',
      category: 'luxury',
      duration: '4 days',
      groupSize: '2-6 people',
      location: 'Hwange National Park',
      price: 1400,
      rating: 5.0,
      reviews: 23,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxury camping experience with private tents and gourmet dining.',
      highlights: ['Luxury Tents', 'Gourmet Dining', 'Private Guide', 'All Inclusive']
    },
    {
      id: 38,
      name: 'Victoria Falls Family Adventure',
      category: 'family',
      duration: '3 days',
      groupSize: '4-6 people',
      location: 'Victoria Falls',
      price: 680,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Family adventure package with kid-friendly activities and comfortable accommodation.',
      highlights: ['Kid-Friendly Activities', 'Family Hotel', 'Safety Equipment', 'All Meals']
    },
    {
      id: 39,
      name: 'Hwange Family Safari',
      category: 'family',
      duration: '5 days',
      groupSize: '4-8 people',
      location: 'Hwange National Park',
      price: 980,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Family safari with educational activities and comfortable lodge accommodation.',
      highlights: ['Educational Activities', 'Comfortable Lodge', 'Family Guide', 'All Meals']
    },
    {
      id: 40,
      name: 'Victoria Falls Honeymoon Experience',
      category: 'honeymoon',
      duration: '4 days',
      groupSize: '2 people',
      location: 'Victoria Falls',
      price: 1600,
      rating: 5.0,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Romantic honeymoon experience with private tours and luxury accommodation.',
      highlights: ['Private Tours', 'Luxury Hotel', 'Romantic Dinners', 'All Inclusive']
    },
    {
      id: 41,
      name: 'Mana Pools Honeymoon Safari',
      category: 'honeymoon',
      duration: '6 days',
      groupSize: '2 people',
      location: 'Mana Pools',
      price: 1800,
      rating: 5.0,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Romantic wilderness safari with private camping and intimate experiences.',
      highlights: ['Private Camping', 'Intimate Experiences', 'Romantic Dinners', 'All Inclusive']
    },
    {
      id: 42,
      name: 'Victoria Falls Microlight Flight',
      category: 'adventure',
      duration: '30 minutes',
      groupSize: '1-2 people',
      location: 'Victoria Falls',
      price: 160,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thrilling microlight flight over Victoria Falls for the ultimate aerial experience.',
      highlights: ['Microlight Flight', 'Safety Equipment', 'Professional Pilot', 'Video Recording']
    },
    {
      id: 43,
      name: 'Zambezi River Kayaking',
      category: 'adventure',
      duration: '4 hours',
      groupSize: '2-6 people',
      location: 'Victoria Falls',
      price: 95,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Peaceful kayaking experience on the Zambezi River with wildlife viewing.',
      highlights: ['Kayaking', 'Wildlife Viewing', 'Safety Equipment', 'Professional Guide']
    },
    {
      id: 44,
      name: 'Victoria Falls Gorge Swing',
      category: 'adventure',
      duration: '2 hours',
      groupSize: '1-4 people',
      location: 'Victoria Falls',
      price: 110,
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thrilling gorge swing experience over the Zambezi River gorge.',
      highlights: ['Gorge Swing', 'Safety Equipment', 'Professional Staff', 'Video Recording']
    },
    {
      id: 45,
      name: 'Hwange Conservation Safari',
      category: 'wildlife',
      duration: '7 days',
      groupSize: '4-8 people',
      location: 'Hwange National Park',
      price: 1200,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Conservation-focused safari with research activities and wildlife monitoring.',
      highlights: ['Conservation Activities', 'Research Participation', 'Luxury Lodge', 'All Meals']
    },
    {
      id: 46,
      name: 'Victoria Falls Cultural Village Tour',
      category: 'cultural',
      duration: '3 hours',
      groupSize: '2-12 people',
      location: 'Victoria Falls',
      price: 65,
      rating: 4.5,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Visit local villages and experience traditional Zimbabwean culture.',
      highlights: ['Village Visit', 'Traditional Dance', 'Local Crafts', 'Traditional Meal']
    },
    {
      id: 47,
      name: 'Chimanimani Mountain Biking',
      category: 'adventure',
      duration: '1 day',
      groupSize: '2-8 people',
      location: 'Chimanimani',
      price: 120,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Mountain biking adventure through the beautiful Chimanimani Mountains.',
      highlights: ['Mountain Biking', 'Scenic Routes', 'Safety Equipment', 'Lunch Included']
    },
    {
      id: 48,
      name: 'Victoria Falls Sunset Dinner Cruise',
      category: 'luxury',
      duration: '4 hours',
      groupSize: '2-20 people',
      location: 'Victoria Falls',
      price: 180,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxury sunset dinner cruise on the Zambezi River with gourmet dining.',
      highlights: ['Sunset Views', 'Gourmet Dinner', 'Live Music', 'Premium Drinks']
    },
    {
      id: 49,
      name: 'Hwange Elephant Safari',
      category: 'wildlife',
      duration: '3 days',
      groupSize: '4-6 people',
      location: 'Hwange National Park',
      price: 680,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Specialized elephant viewing safari with expert guides and hides.',
      highlights: ['Elephant Viewing', 'Specialized Hides', 'Expert Guide', 'All Meals']
    },
    {
      id: 50,
      name: 'Victoria Falls Full Moon Tour',
      category: 'adventure',
      duration: '3 hours',
      groupSize: '2-12 people',
      location: 'Victoria Falls',
      price: 85,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Magical evening tour of Victoria Falls under the full moon.',
      highlights: ['Full Moon Views', 'Evening Tour', 'Local Guide', 'Refreshments']
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
