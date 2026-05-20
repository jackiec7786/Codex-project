// Real categories from spiceclassifieds.com (20 total)
export const CATEGORIES = [
  { slug: 'agriculture',   name: 'Agriculture',   emoji: '🌿', count: 0 },
  { slug: 'art-crafts',    name: 'Art & Crafts',  emoji: '🎨', count: 1 },
  { slug: 'baby-kids',     name: 'Baby & Kids',   emoji: '👶', count: 0 },
  { slug: 'books-media',   name: 'Books & Media', emoji: '📚', count: 0 },
  { slug: 'electronics',   name: 'Electronics',   emoji: '📱', count: 4 },
  { slug: 'farm-to-table', name: 'Farm to Table', emoji: '🌾', count: 0 },
  { slug: 'fashion',       name: 'Fashion',       emoji: '👗', count: 5 },
  { slug: 'food-drink',    name: 'Food & Drink',  emoji: '🍽️', count: 1 },
  { slug: 'health-beauty', name: 'Health & Beauty', emoji: '💄', count: 0 },
  { slug: 'home-garden',   name: 'Home & Garden', emoji: '🏡', count: 4 },
  { slug: 'jobs',          name: 'Jobs',          emoji: '💼', count: 0 },
  { slug: 'music',         name: 'Music',         emoji: '🎵', count: 0 },
  { slug: 'other',         name: 'Other',         emoji: '📦', count: 10 },
  { slug: 'pets',          name: 'Pets',          emoji: '🐕', count: 0 },
  { slug: 'real-estate',   name: 'Real Estate',   emoji: '🏠', count: 4 },
  { slug: 'sgu',           name: 'SGU Students',  emoji: '🎓', count: 0 },
  { slug: 'services',      name: 'Services',      emoji: '🔧', count: 3 },
  { slug: 'sports',        name: 'Sports',        emoji: '⚽', count: 0 },
  { slug: 'travel',        name: 'Travel',        emoji: '✈️', count: 0 },
  { slug: 'vehicles',      name: 'Vehicles',      emoji: '🚗', count: 2 },
];

export type Listing = {
  id: number;
  title: string;
  price: string;          // "XCD 1,000" | "Contact for price" | "XCD 2,500/mo"
  location: string;
  posted: string;
  category: string;
  emoji: string;
  bg: string;
  forRent?: boolean;
  featured?: boolean;
  verified?: boolean;
  isNew?: boolean;
};

// Real listings observed on the live site
export const LISTINGS: Listing[] = [
  { id: 49, title: 'Domestic Rental In a Quiet House', price: 'XCD 1,000', location: 'At the property', posted: '1 week ago', category: 'Real Estate', emoji: '🏡', bg: 'warm-bg', forRent: true, featured: true },
  { id: 41, title: 'Apartment for rent', price: 'XCD 2,500', location: 'Grand Anse', posted: '3 weeks ago', category: 'Real Estate', emoji: '🏠', bg: 'sky-bg', forRent: true, featured: true },
  { id: 53, title: 'Premier Cook & Bake Stove', price: 'Contact for price', location: "Woodlands, St. George's", posted: '1 day ago', category: 'Home & Garden', emoji: '🔥', bg: 'warm-bg', verified: true, isNew: true },
  { id: 54, title: 'Oster Blender', price: 'Contact for price', location: "Woodlands, St. George's", posted: '1 day ago', category: 'Home & Garden', emoji: '🥤', bg: 'gray-bg', verified: true, isNew: true },
  { id: 52, title: 'Nano - Car paint restoration', price: 'Contact for price', location: 'Woolwich Road, St. George', posted: '1 day ago', category: 'Services', emoji: '🚗', bg: 'sky-bg' },
  { id: 51, title: '10K diamond ring, size 6.5', price: 'XCD 2,000', location: 'Grand Anse', posted: '1 day ago', category: 'Fashion', emoji: '💍', bg: 'warm-bg', isNew: true },
  { id: 50, title: 'Himalayan Pink Salt 5LB', price: 'XCD 50', location: 'Sauteurs, Grenville, Grand Anse', posted: '2 days ago', category: 'Food & Drink', emoji: '🧂', bg: 'warm-bg' },
  { id: 43, title: 'Autoparts and Accessories', price: 'XCD 999', location: 'No delivery', posted: '3 weeks ago', category: 'Other', emoji: '🔧', bg: 'gray-bg', isNew: true },
  { id: 42, title: 'Telligent LTD — Electrical & IT Solutions', price: 'XCD 149.99', location: 'Anywhere, we come to you', posted: '3 weeks ago', category: 'Services', emoji: '⚡', bg: 'sky-bg' },
  { id: 40, title: 'Royal Palms in Grenada', price: 'Contact for price', location: 'Lance aux Epines, St. George', posted: '3/9/2026', category: 'Home & Garden', emoji: '🌴', bg: 'green-bg', verified: true, isNew: true },
];

export const POPULAR_SEARCHES = [
  { label: '🚗 Cars for Sale',         href: '/listings?category=vehicles' },
  { label: '🏠 Apartments for Rent',   href: '/listings?category=real-estate' },
  { label: '💼 Jobs in Grenada',       href: '/listings?category=jobs' },
  { label: '🔧 Local Services',        href: '/listings?category=services' },
  { label: '🎓 SGU Student Housing',   href: '/listings?category=sgu' },
  { label: '📋 All Classifieds',       href: '/listings' },
];
