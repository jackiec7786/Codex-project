import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';
import { Search, ShieldCheck, Store } from 'lucide-react';

const VENDORS = [
  { id: 1, name: 'Telligent LTD', emoji: '⚡', category: 'Electrical & IT Solutions', location: "St. George's", listings: 8, rating: '4.9', banner: '' },
  { id: 2, name: 'Royal Palms Grenada', emoji: '🌴', category: 'Home & Garden', location: 'Lance aux Epines', listings: 12, rating: '5.0', banner: 'b2' },
  { id: 3, name: 'Spice Isle Auto', emoji: '🚗', category: 'Vehicles & Parts', location: "St. George's", listings: 24, rating: '4.7', banner: 'b3' },
  { id: 4, name: 'Grand Anse Realty', emoji: '🏠', category: 'Real Estate', location: 'Grand Anse', listings: 18, rating: '4.8', banner: 'b4' },
  { id: 5, name: 'Farm Fresh GND', emoji: '🌾', category: 'Farm to Table', location: "St. Andrew's", listings: 15, rating: '4.9', banner: 'b2' },
  { id: 6, name: 'Island Threads', emoji: '👗', category: 'Fashion', location: "St. George's", listings: 32, rating: '4.6', banner: '' },
];

export default function VendorsPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 60 }}>
        <div className="section-head">
          <div>
            <h2><Store size={22} style={{ display: 'inline', color: 'var(--brand)', verticalAlign: '-4px' }} /> Verified Vendors</h2>
            <div className="sub">Browse trusted storefronts from local Grenadian businesses</div>
          </div>
          <Link href="/vendor/apply" className="btn btn-primary">Become a Vendor</Link>
        </div>

        <div className="search-bar" style={{ maxWidth: 'none', marginBottom: 24, marginTop: 16 }}>
          <div className="field"><Search size={16} /><input placeholder="Search vendors by name or category..." /></div>
          <button className="btn btn-primary">Search</button>
        </div>

        <div className="filter-row">
          <button className="filter-pill active">All Vendors</button>
          <button className="filter-pill">Verified</button>
          <button className="filter-pill">New This Month</button>
          <button className="filter-pill">Top Rated</button>
          <button className="filter-pill">Featured</button>
        </div>

        <div className="vendor-grid">
          {VENDORS.map((v) => (
            <Link key={v.id} href={`/vendors/${v.id}`} className="vendor-card">
              <div className={`vendor-banner ${v.banner}`} />
              <div className="vendor-content">
                <div className="vendor-avatar">{v.emoji}</div>
                <div className="vendor-name">
                  {v.name}
                  <ShieldCheck size={14} style={{ color: 'var(--accent-green)' }} />
                </div>
                <div className="vendor-meta">{v.category} • {v.location}</div>
                <div className="vendor-stats">
                  <div><strong>{v.listings}</strong>Listings</div>
                  <div><strong>★ {v.rating}</strong>Rating</div>
                  <div><strong>Active</strong>Status</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button className="btn btn-outline btn-lg">Load More Vendors</button>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
