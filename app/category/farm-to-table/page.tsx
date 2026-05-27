import Link from 'next/link';
import { Search, MapPin, Clock, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { FarmToTableIcon } from '@/components/CategoryIcons';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';

const QUICK_PICKS = [
  { label: 'Fresh Fruits', icon: '🥭' },
  { label: 'Handmade Goods', icon: '🧺' },
  { label: 'Herbs & Spices', icon: '🌿' },
  { label: 'Organic Veggies', icon: '🥬' },
  { label: 'Honey & Preserves', icon: '🍯' },
  { label: 'Local Eggs', icon: '🥚' },
  { label: 'Fresh Fish', icon: '🐟' },
];

export default function FarmToTablePage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="cat-page">
      <AnnounceBar />
      <Header />

      {/* Green editorial hero */}
      <section className="cat-farm-hero">
        <div className="container cat-farm-hero-inner">
          <div className="cat-farm-hero-tag">
            <FarmToTableIcon size={14} /> Farm to Table Marketplace
          </div>
          <h1 className="cat-farm-hero-title">
            Fresh, local, direct from <span className="accent">Grenadian farmers</span>
          </h1>
          <p className="cat-farm-hero-desc">
            Discover the freshest produce, organic foods, and handmade goods directly from
            trusted local farmers and artisans across the Spice Isle.
          </p>

          <div className="cat-farm-hero-search">
            <input placeholder="Search produce, herbs, handmade goods..." />
            <select defaultValue="">
              <option value="">All parishes</option>
              <option>St. George&apos;s</option>
              <option>St. David&apos;s</option>
              <option>St. Andrew&apos;s</option>
              <option>St. Patrick&apos;s</option>
              <option>St. John&apos;s</option>
              <option>St. Mark&apos;s</option>
              <option>Carriacou</option>
            </select>
            <button className="btn btn-primary">
              <Search size={16} /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Quick picks */}
      <section className="cat-farm-picks">
        <div className="container">
          <div className="cat-farm-picks-scroller">
            {QUICK_PICKS.map((q) => (
              <button key={q.label} className="cat-farm-pick">
                <span style={{ fontSize: 18 }}>{q.icon}</span> {q.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main listings */}
      <section className="container">
        <div className="cat-filter-bar">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: 4, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <FarmToTableIcon size={20} color="var(--brand-green)" />
              Farm-fresh listings
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginLeft: 14, padding: '4px 10px', background: 'var(--brand-green-light)', color: 'var(--brand-green)', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
              <Clock size={12} /> Updated daily
            </div>
          </div>
          <div className="cat-filter-actions">
            <button className="cat-filter-btn">
              Newest <ChevronDown size={14} />
            </button>
            <button className="cat-filter-btn">
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>
        </div>

        {listings.length > 0 ? (
          <div className="listing-grid">
            {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        ) : (
          <div className="cat-empty">
            <div className="cat-empty-icon">🌾</div>
            <h3>No fresh listings posted today</h3>
            <p>Check back tomorrow — local farmers post fresh inventory daily.</p>
          </div>
        )}

        {/* Farmer CTA */}
        <div className="cat-sell-cta" style={{ background: 'linear-gradient(135deg, var(--brand-yellow-light) 0%, var(--surface) 100%)' }}>
          <div className="cat-sell-cta-icon" style={{ background: 'var(--brand-green)', color: 'white' }}>
            <FarmToTableIcon size={28} />
          </div>
          <div className="cat-sell-cta-text">
            <h3>Are you a farmer or artisan?</h3>
            <p>List your harvest, handmade goods, or preserves. No commission — keep 100% of your sales.</p>
          </div>
          <Link href="/listings/create?category=farm-to-table" className="btn btn-secondary btn-lg">
            List your harvest
          </Link>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
