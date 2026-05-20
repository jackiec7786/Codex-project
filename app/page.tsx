import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';
import Link from 'next/link';
import { Search, MapPin, Wrench, Monitor, Home as HomeIcon, Tag, Sprout, Car, Briefcase, MoreHorizontal, Plus } from 'lucide-react';

const CATS = [
  { name: 'Services', count: '642 listings', icon: <Wrench size={22} />, color: 'green' },
  { name: 'Electronics', count: '186 listings', icon: <Monitor size={22} />, color: 'red' },
  { name: 'Rentals', count: '312 listings', icon: <HomeIcon size={22} />, color: 'green' },
  { name: 'For Sale', count: '451 listings', icon: <Tag size={22} />, color: 'yellow' },
  { name: 'Home & Garden', count: '98 listings', icon: <Sprout size={22} />, color: 'green' },
  { name: 'Vehicles', count: '76 listings', icon: <Car size={22} />, color: 'red' },
  { name: 'Jobs', count: '53 listings', icon: <Briefcase size={22} />, color: 'green' },
];

const FEATURED = [
  { id: '1', title: 'iPhone 13 Pro 128GB', price: '$1,650', location: "St. George's", emoji: '📱', bg: 'green-bg' as const, badge: 'featured' as const },
  { id: '2', title: '2 Bed Apartment - Grand Anse', price: '$1,800/mo', location: 'Grand Anse', emoji: '🏡', bg: 'warm-bg' as const, badge: 'new' as const, forRent: true },
  { id: '3', title: 'Sectional Sofa - Like New', price: '$850', location: "St. George's", emoji: '🛋️', bg: 'gray-bg' as const },
  { id: '4', title: 'House Cleaning Service', price: '$120', location: "St. George's", emoji: '🧹', bg: 'sky-bg' as const },
  { id: '5', title: 'Dining Table Set', price: '$450', location: "St. David's", emoji: '🪑', bg: 'warm-bg' as const },
  { id: '6', title: 'Samsung Galaxy S23 Ultra', price: '$1,250', location: "St. George's", emoji: '📱', bg: 'green-bg' as const },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>
              <span>Find it.</span>
              <span>List it.</span>
              <span>Love Local.</span>
            </h1>
            <p className="hero-sub">
              Grenada&apos;s trusted marketplace for local services, rentals, electronics and more.
            </p>

            <div className="hero-search">
              <div className="field">
                <Search size={16} />
                <input placeholder="What are you looking for?" />
              </div>
              <div className="divider" />
              <div className="field">
                <MapPin size={16} />
                <input placeholder="All of Grenada" />
              </div>
              <button className="btn btn-secondary">Search</button>
            </div>

            <div className="hero-actions">
              <Link href="/browse" className="btn btn-primary btn-lg">Browse Categories</Link>
              <Link href="/post-ad" className="btn btn-yellow btn-lg">
                <Plus size={16} /> Post an Ad
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="hero-illustration-content">
              <div className="island-emoji">🏝️</div>
              <div>Buy. Sell. Support Local.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Categories</h2>
          <div className="cat-grid">
            {CATS.map((c) => (
              <Link key={c.name} href="/browse" className="cat-card">
                <div className={`cat-icon ${c.color}`}>{c.icon}</div>
                <div className="cat-name">{c.name}</div>
                <div className="cat-count">{c.count}</div>
              </Link>
            ))}
            <Link href="/browse" className="cat-card">
              <div className="cat-icon gray"><MoreHorizontal size={22} /></div>
              <div className="cat-name">More</div>
              <div className="cat-count">View all</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-between" style={{ marginBottom: 24 }}>
            <h2 className="section-title" style={{ margin: 0 }}>Featured Listings</h2>
            <Link href="/browse" style={{ color: 'var(--brand-red)', fontWeight: 600, fontSize: 14 }}>View all →</Link>
          </div>
          <div className="listing-grid">
            {FEATURED.map((l) => <ListingCard key={l.id} {...l} />)}
          </div>
        </div>
      </section>
    </>
  );
}
