export type Category = {
  slug: string;
  name: string;
  emoji: string;
  ads?: number;
};

export const CATEGORIES: Category[] = [
  { slug: 'agriculture',   name: 'Agriculture',     emoji: '🌿' },
  { slug: 'art-crafts',    name: 'Art & Crafts',    emoji: '🎨', ads: 1 },
  { slug: 'baby-kids',     name: 'Baby & Kids',     emoji: '👶' },
  { slug: 'books-media',   name: 'Books & Media',   emoji: '📚' },
  { slug: 'electronics',   name: 'Electronics',     emoji: '📱', ads: 4 },
  { slug: 'farm-to-table', name: 'Farm to Table',   emoji: '🌾' },
  { slug: 'fashion',       name: 'Fashion',         emoji: '👗', ads: 5 },
  { slug: 'food-drink',    name: 'Food & Drink',    emoji: '🍽️', ads: 1 },
  { slug: 'health-beauty', name: 'Health & Beauty', emoji: '💄' },
  { slug: 'home-garden',   name: 'Home & Garden',   emoji: '🏡', ads: 4 },
  { slug: 'jobs',          name: 'Jobs',            emoji: '💼' },
  { slug: 'music',         name: 'Music',           emoji: '🎵' },
  { slug: 'other',         name: 'Other',           emoji: '📦', ads: 10 },
  { slug: 'pets',          name: 'Pets',            emoji: '🐕' },
  { slug: 'real-estate',   name: 'Real Estate',     emoji: '🏠', ads: 4 },
  { slug: 'sgu',           name: 'SGU Students',    emoji: '🎓' },
  { slug: 'services',      name: 'Services',        emoji: '🔧', ads: 3 },
  { slug: 'sports',        name: 'Sports',          emoji: '⚽' },
  { slug: 'travel',        name: 'Travel',          emoji: '✈️' },
  { slug: 'vehicles',      name: 'Vehicles',        emoji: '🚗', ads: 2 },
];

export type Listing = {
  id: string;
  title: string;
  price: string;
  contactForPrice?: boolean;
  forRent?: boolean;
  location: string;
  postedAgo: string;
  category: string;
  emoji: string;
  bg?: 'green-bg' | 'gray-bg' | 'warm-bg' | 'sky-bg' | 'red-bg';
  featured?: boolean;
  isNew?: boolean;
  verified?: boolean;
};

export const FEATURED_LISTINGS: Listing[] = [
  {
    id: '49',
    title: 'Domestic Rental In a Quiet House',
    price: '$1,000', forRent: true,
    location: 'At the property',
    postedAgo: '1 week ago',
    category: 'Real Estate',
    emoji: '🏡', bg: 'warm-bg',
    featured: true,
  },
  {
    id: '41',
    title: 'Apartment for rent',
    price: '$2,500', forRent: true,
    location: 'Grand Anse',
    postedAgo: '3 weeks ago',
    category: 'Real Estate',
    emoji: '🏢', bg: 'sky-bg',
    featured: true,
  },
  {
    id: '38',
    title: 'iPhone 13 Pro 128GB - Excellent',
    price: '$1,650',
    location: "St. George's",
    postedAgo: '2 days ago',
    category: 'Electronics',
    emoji: '📱', bg: 'green-bg',
    featured: true,
  },
  {
    id: '37',
    title: 'Sectional Sofa - Like New',
    price: '$850',
    location: "St. George's",
    postedAgo: '1 day ago',
    category: 'Home & Garden',
    emoji: '🛋️', bg: 'gray-bg',
    featured: true,
  },
];

export const LATEST_LISTINGS: Listing[] = [
  {
    id: '53',
    title: 'Premier Cook & Bake Stove',
    price: 'Contact for price', contactForPrice: true,
    location: "Woodlands, St. George's, Grenada",
    postedAgo: '1 day ago',
    category: 'Home & Garden',
    emoji: '🍳', bg: 'red-bg',
    isNew: true, verified: true,
  },
  {
    id: '54',
    title: 'Oster Blender',
    price: 'Contact for price', contactForPrice: true,
    location: "Woodlands, St. George's, Grenada",
    postedAgo: '1 day ago',
    category: 'Home & Garden',
    emoji: '🥤', bg: 'green-bg',
    isNew: true, verified: true,
  },
  {
    id: '52',
    title: 'Nano - Car paint restoration',
    price: 'Contact for price', contactForPrice: true,
    location: 'Woolwich Road, St. George',
    postedAgo: '1 day ago',
    category: 'Services',
    emoji: '🚙', bg: 'gray-bg',
  },
  {
    id: '51',
    title: '10K diamond ring, size 6.5',
    price: '$2,000',
    location: 'Grand Anse',
    postedAgo: '1 day ago',
    category: 'Fashion',
    emoji: '💍', bg: 'warm-bg',
    isNew: true,
  },
  {
    id: '50',
    title: 'Himalayan Pink Salt 5LB',
    price: '$50',
    location: "Sauteurs, Grenville, St. George's",
    postedAgo: '2 days ago',
    category: 'Food & Drink',
    emoji: '🧂', bg: 'red-bg',
  },
  {
    id: '43',
    title: 'Autoparts and Accessories',
    price: '$999',
    location: 'No delivery',
    postedAgo: '3 weeks ago',
    category: 'Other',
    emoji: '🔧', bg: 'gray-bg',
    isNew: true,
  },
  {
    id: '42',
    title: 'Telligent LTD — Electrical & IT solutions',
    price: '$149.99',
    location: 'Anywhere, We come to you',
    postedAgo: '3 weeks ago',
    category: 'Services',
    emoji: '⚡', bg: 'sky-bg',
  },
  {
    id: '40',
    title: 'Royal Palms in Grenada',
    price: 'Contact for price', contactForPrice: true,
    location: 'Lance aux Epines, Calliste, Brothers Estate',
    postedAgo: '3 weeks ago',
    category: 'Home & Garden',
    emoji: '🌴', bg: 'green-bg',
    isNew: true, verified: true,
  },
];
