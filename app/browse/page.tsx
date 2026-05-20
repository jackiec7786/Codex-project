import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

const RESULTS = [
  { id: '1', title: 'Sectional Sofa - Like New', price: '$850', location: "St. George's, Grenada • 1 day ago", emoji: '🛋️', bg: 'gray-bg' as const },
  { id: '2', title: 'Samsung Galaxy S23 Ultra 256GB', price: '$1,250', location: "St. David's, Grenada • 2 days ago", emoji: '📱', bg: 'green-bg' as const },
  { id: '3', title: '1 Bedroom Apartment - Grand Anse', price: '$1,400/mo', location: 'Grand Anse, Grenada • 2 days ago', emoji: '🏡', bg: 'warm-bg' as const, forRent: true },
  { id: '4', title: 'iPhone 13 Pro 128GB', price: '$1,650', location: "St. George's", emoji: '📱', bg: 'green-bg' as const },
  { id: '5', title: 'House Cleaning Service', price: '$120', location: "St. George's", emoji: '🧹', bg: 'sky-bg' as const },
  { id: '6', title: 'Dining Table Set', price: '$450', location: "St. David's", emoji: '🪑', bg: 'warm-bg' as const },
];

const CATEGORIES = [
  ['All Categories', ''], ['Services', '(242)'], ['Electronics', '(186)'],
  ['Rentals', '(312)'], ['For Sale', '(451)'], ['Home & Garden', '(98)'],
  ['Vehicles', '(76)'], ['Jobs', '(53)'], ['Other', '(40)'],
];

export default function BrowsePage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="browse-search-bar" style={{ marginTop: 24 }}>
          <div className="field"><Search size={16} /><input placeholder="Search anything..." /></div>
          <div className="field" style={{ borderLeft: '1px solid var(--border)' }}>
            <MapPin size={16} /><input placeholder="All of Grenada" />
          </div>
          <button className="filter-pill"><SlidersHorizontal size={14} /> Filters</button>
        </div>

        <div className="browse-layout" style={{ paddingTop: 0 }}>
          <aside className="sidebar">
            <div className="sidebar-title">Categories</div>
            <ul className="sidebar-list">
              {CATEGORIES.map(([name, count], i) => (
                <li key={name} className={i === 0 ? 'active' : ''}>
                  <span style={{ color: 'inherit' }}>{name}</span>
                  <span>{count}</span>
                </li>
              ))}
            </ul>

            <div className="sidebar-title">Price Range</div>
            <div className="price-range">
              <input placeholder="Min" />
              <input placeholder="Max" />
              <button className="btn btn-secondary" style={{ padding: '8px 14px' }}>Go</button>
            </div>

            <label className="checkbox-row"><input type="checkbox" /> For Rent</label>
            <label className="checkbox-row"><input type="checkbox" /> For Sale</label>
            <label className="checkbox-row"><input type="checkbox" /> Accepts Delivery</label>

            <div className="clear-filters">Clear Filters</div>
          </aside>

          <div>
            <div className="browse-toolbar">
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>342 results</strong>
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                Sort by: <strong style={{ color: 'var(--text)' }}>Most Recent ▾</strong>
              </div>
            </div>

            <div className="listing-grid">
              {RESULTS.map((r) => <ListingCard key={r.id} {...r} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
