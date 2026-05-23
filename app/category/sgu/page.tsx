import Link from 'next/link';
import { GraduationCap, Home, Users, BookOpen, Car, Search, ChevronDown, SlidersHorizontal, Plus } from 'lucide-react';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';

const QUICK_ACTIONS = [
  { label: 'Housing',    icon: '🏠', count: 47 },
  { label: 'Roommates',  icon: '👥', count: 18 },
  { label: 'Textbooks',  icon: '📚', count: 32 },
  { label: 'Rides',      icon: '🚗', count: 12 },
];

export default function SGUPage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="cat-page">
      <AnnounceBar />
      <Header />

      {/* Red SGU hero */}
      <section className="cat-sgu-hero">
        <div className="container cat-sgu-hero-inner">
          <div className="cat-sgu-hero-tag">
            <GraduationCap size={14} /> SGU Student Hub
          </div>
          <h1 className="cat-sgu-hero-title">
            Everything you need for <span className="accent">student life in Grenada</span>
          </h1>
          <p className="cat-sgu-hero-desc">
            Housing, roommates, textbooks, rides, and trusted local services — built for SGU students by students.
          </p>

          <div className="cat-sgu-quick-grid">
            {QUICK_ACTIONS.map((a) => (
              <Link key={a.label} href={`/listings?category=sgu&sub=${a.label.toLowerCase()}`} className="cat-sgu-quick">
                <div className="cat-sgu-quick-icon">{a.icon}</div>
                <div className="cat-sgu-quick-label">{a.label}</div>
                <div className="cat-sgu-quick-count">{a.count} listings</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search + post action row */}
      <section className="cat-action-row">
        <div className="container cat-action-inner">
          <div className="cat-action-search">
            <Search size={18} />
            <input placeholder="Search SGU listings..." />
          </div>
          <Link href="/listings/create?category=sgu" className="cat-action-post">
            <Plus size={16} /> Post for SGU
          </Link>
        </div>
      </section>

      {/* Main listings */}
      <section className="container">
        <div className="cat-filter-bar">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <GraduationCap size={20} color="var(--brand-red)" />
              All SGU listings
            </h2>
          </div>
          <div className="cat-filter-actions">
            <button className="cat-filter-btn">
              Newest <ChevronDown size={14} />
            </button>
            <button className="cat-filter-btn">
              Near True Blue <ChevronDown size={14} />
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
            <div className="cat-empty-icon">🎓</div>
            <h3>No SGU listings yet</h3>
            <p>Be the first to post — your listing reaches the entire SGU community.</p>
            <Link href="/listings/create?category=sgu" className="btn btn-primary">
              <Plus size={16} /> Post for SGU
            </Link>
          </div>
        )}

        {/* Community CTA */}
        <div className="cat-sell-cta" style={{ background: 'linear-gradient(135deg, var(--brand-red-light) 0%, var(--surface) 100%)' }}>
          <div className="cat-sell-cta-icon" style={{ background: 'var(--brand-red)', color: 'white' }}>
            <GraduationCap size={28} />
          </div>
          <div className="cat-sell-cta-text">
            <h3>Moving on or graduating?</h3>
            <p>Sell furniture, textbooks, and gear to incoming students — keep everything in the SGU community.</p>
          </div>
          <Link href="/listings/create?category=sgu" className="btn btn-primary btn-lg">
            Post for SGU
          </Link>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
