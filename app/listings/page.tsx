import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { CATEGORIES, FEATURED_LISTINGS, LATEST_LISTINGS } from '@/lib/data';
import { Search, MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function ListingsPage() {
  const all = [...FEATURED_LISTINGS, ...LATEST_LISTINGS];

  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>All Listings</span>
        </div>

        <div className="browse-search-bar">
          <div className="field">
            <Search size={16} />
            <input placeholder="Search listings..." />
          </div>
          <div className="field desktop-only">
            <MapPin size={16} />
            <input placeholder="All of Grenada" />
          </div>
          <button className="btn btn-secondary">Search</button>
        </div>

        <div className="browse-toolbar">
          <div className="results-count">
            Showing <strong>{all.length}</strong> of <strong>312</strong> listings
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="mobile-filter-btn">
              <SlidersHorizontal size={16} /> Filters
            </button>
            <button className="sort-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Sort: Newest first <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="browse-layout">
          <aside className="sidebar">
            <div className="sidebar-title">Categories</div>
            <ul className="sidebar-list">
              <li className="active">All Listings <span>489</span></li>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16 }}>{c.emoji}</span>
                    {c.name}
                  </span>
                  {c.ads !== undefined && <span>{c.ads}</span>}
                </li>
              ))}
            </ul>

            <div className="sidebar-title">Price (XCD)</div>
            <div className="price-range">
              <input placeholder="Min" />
              <input placeholder="Max" />
            </div>

            <div className="sidebar-title">Location</div>
            <ul className="sidebar-list">
              <li>All Parishes</li>
              <li>St. George&apos;s</li>
              <li>Grand Anse</li>
              <li>St. David&apos;s</li>
              <li>St. Andrew&apos;s</li>
              <li>St. Patrick&apos;s</li>
              <li>St. John&apos;s</li>
              <li>St. Mark&apos;s</li>
              <li>Carriacou</li>
            </ul>

            <div className="sidebar-title">Type</div>
            <label className="checkbox-row"><input type="checkbox" /> Featured only</label>
            <label className="checkbox-row"><input type="checkbox" /> Verified sellers</label>
            <label className="checkbox-row"><input type="checkbox" /> For rent</label>
            <label className="checkbox-row"><input type="checkbox" /> Has photos</label>

            <div className="clear-filters">Clear all filters</div>
          </aside>

          <div>
            <div className="listing-grid cols-3">
              {all.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
              <button className="btn btn-ghost">‹ Prev</button>
              <button className="btn btn-secondary">1</button>
              <button className="btn btn-ghost">2</button>
              <button className="btn btn-ghost">3</button>
              <button className="btn btn-ghost">Next ›</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
