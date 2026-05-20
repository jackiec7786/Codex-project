import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES, LISTINGS } from '@/lib/data';

const PARISHES = [
  "St. George's", "St. Andrew's", "St. David's", "St. John's",
  "St. Mark's", "St. Patrick's", 'Carriacou', 'Petite Martinique',
];

export default function ListingsPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 24, paddingBottom: 60 }}>
        <div className="search-bar" style={{ maxWidth: 'none', marginTop: 0, marginBottom: 24 }}>
          <div className="field"><Search size={16} /><input placeholder="Search anything..." /></div>
          <div className="divider" />
          <div className="field"><MapPin size={16} /><input placeholder="All of Grenada" /></div>
          <button className="btn btn-primary">Search</button>
        </div>

        <div className="filter-row">
          <button className="filter-pill"><SlidersHorizontal size={14} /> All Filters</button>
          <button className="filter-pill active">All Categories</button>
          <button className="filter-pill">For Sale</button>
          <button className="filter-pill">For Rent</button>
          <button className="filter-pill">Featured</button>
          <button className="filter-pill">Verified Vendors</button>
          <button className="filter-pill">Newest First</button>
        </div>

        <div className="browse-layout">
          <aside className="sidebar">
            <div className="sidebar-title">Categories</div>
            <ul className="sidebar-list">
              <li className="active">
                <span>All Categories</span>
                <span className="badge-count">{LISTINGS.length}</span>
              </li>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <span>{c.emoji} {c.name}</span>
                  {c.count > 0 && <span className="badge-count">{c.count}</span>}
                </li>
              ))}
            </ul>

            <div className="sidebar-title">Price Range (XCD)</div>
            <div className="price-range">
              <input placeholder="Min" />
              <input placeholder="Max" />
            </div>

            <div className="sidebar-title" style={{ marginTop: 20 }}>Listing Type</div>
            <label className="checkbox-row"><input type="checkbox" /> For Sale</label>
            <label className="checkbox-row"><input type="checkbox" /> For Rent</label>
            <label className="checkbox-row"><input type="checkbox" /> Wanted</label>

            <div className="sidebar-title" style={{ marginTop: 20 }}>Parish</div>
            {PARISHES.slice(0, 6).map((p) => (
              <label key={p} className="checkbox-row"><input type="checkbox" /> {p}</label>
            ))}

            <div className="sidebar-title" style={{ marginTop: 20 }}>Other</div>
            <label className="checkbox-row"><input type="checkbox" /> Featured only</label>
            <label className="checkbox-row"><input type="checkbox" /> Verified vendors</label>
            <label className="checkbox-row"><input type="checkbox" /> Has photos</label>

            <div className="clear-filters">Clear all filters</div>
          </aside>

          <div>
            <div className="browse-toolbar">
              <div className="count">
                <strong>{LISTINGS.length} results</strong> across Grenada
              </div>
              <select style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface)', fontSize: 13 }}>
                <option>Most Recent</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Featured First</option>
              </select>
            </div>

            <div className="listing-grid">
              {LISTINGS.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>

            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button className="btn btn-outline btn-lg">Load More Listings</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
