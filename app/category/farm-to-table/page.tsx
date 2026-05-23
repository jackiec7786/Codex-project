import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import MobileBottomNav from '@/components/MobileBottomNav';
import { Search, MapPin, ChevronDown, Clock, SlidersHorizontal } from 'lucide-react';

const QUICKPICKS = [
  { label: 'Fresh Fruits',     emoji: '🥭' },
  { label: 'Handmade Goods',   emoji: '🧺' },
  { label: 'Herbs & Spices',   emoji: '🌿' },
  { label: 'Organic Veggies',  emoji: '🥬' },
  { label: 'Honey & Preserves', emoji: '🍯' },
  { label: 'Local Eggs',       emoji: '🥚' },
];

const PARISHES = [
  'All Parishes', "St. George's", 'St. David\'s', 'St. Andrew\'s',
  'St. Patrick\'s', 'St. John\'s', 'St. Mark\'s', 'Carriacou',
];

export default function FarmToTablePage() {
  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <section className="farm-hero">
        <div className="farm-hero-tag">
          🌾 Farm to Table Marketplace
        </div>
        <h1 className="farm-hero-title">
          Fresh, Local, Direct from <span className="accent">Grenadian Farmers</span> 🇬🇩
        </h1>
        <p className="farm-hero-desc">
          Discover the freshest produce, organic foods, and handmade goods directly from
          trusted local farmers and artisans across the Spice Isle.
        </p>
      </section>

      <div className="farm-search-card">
        <div className="farm-search-input">
          <Search size={18} />
          <input placeholder="Search fresh produce, organic foods..." />
        </div>
        <div className="farm-parish-select">
          <MapPin size={18} />
          <select defaultValue="">
            <option value="">Parish</option>
            {PARISHES.map((p) => <option key={p}>{p}</option>)}
          </select>
          <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
        </div>
        <button className="farm-search-btn">Search</button>
      </div>

      <div className="farm-quickpicks">
        {QUICKPICKS.map((q) => (
          <div key={q.label} className="farm-quickpick">
            <span className="emoji">{q.emoji}</span>
            {q.label}
          </div>
        ))}
      </div>

      <div className="farm-section-head">
        <h2 className="farm-section-title">
          <span className="leaf">🌿</span> Farm Fresh Listings
        </h2>
        <p className="farm-section-sub">Direct from local farmers and artisans</p>

        <div className="farm-section-meta">
          <span className="count">0 fresh listings found</span>
          <span className="farm-updated-badge">
            <Clock size={12} /> Updated daily
          </span>
          <button className="farm-filter-btn">
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>
      </div>

      <div className="container">
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          background: 'var(--surface)',
          border: '2px dashed var(--brand-green-light)',
          borderRadius: 16,
          margin: '0 0 40px',
        }}>
          🌾 No fresh listings posted yet today.<br />
          Local farmers — <a href="/listings/create?category=farm-to-table" style={{ color: 'var(--brand-green)', fontWeight: 700 }}>list your harvest</a>.
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
}
