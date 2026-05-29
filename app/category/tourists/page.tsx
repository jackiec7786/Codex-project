import Link from 'next/link';
import { Plane, Search, ChevronDown, SlidersHorizontal, Plus, MapPin, Calendar, Phone } from 'lucide-react';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';

const QUICK_ACTIONS = [
  { label: 'Short Stays',  icon: '🏖️', count: 62, href: '/listings?category=real-estate&type=short-term' },
  { label: 'Car Rentals',  icon: '🚙', count: 24, href: '/listings?category=vehicles&type=rental' },
  { label: 'Tours',        icon: '🗺️', count: 38, href: '/category/services?type=tours' },
  { label: 'Beach Gear',   icon: '🏄', count: 17, href: '/listings?category=home-garden&type=beach' },
  { label: 'Services',     icon: '🤝', count: 45, href: '/category/services' },
];

const HIGHLIGHTS = [
  { color: 'blue',   Icon: MapPin,  title: 'All 7 parishes covered',     desc: 'Find stays from Grand Anse to Carriacou — coast to coast.' },
  { color: 'yellow', Icon: Calendar, title: 'Daily, weekly, monthly',     desc: 'Flexible booking from one-night to multi-month stays.' },
  { color: 'green',  Icon: Phone,   title: 'Verified hosts',              desc: 'Every host responds within 24h. Direct contact, no middlemen.' },
];

export default function TouristsPage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="cat-page">
      <AnnounceBar />
      <Header />

      <section className="cat-tourist-hero">
        <div className="container cat-tourist-hero-inner">
          <div className="bespoke-hero-tag">
            <Plane size={14} /> Tourists &amp; Expats
          </div>
          <h1 className="bespoke-hero-title">
            Welcome to the <span className="accent-light">Spice Isle</span> — your trusted local marketplace
          </h1>
          <p className="bespoke-hero-desc">
            Short-term stays, car rentals, tours, and everything else visitors and expats need —
            from people who actually live here.
          </p>

          <div className="bespoke-quick-grid">
            {QUICK_ACTIONS.map((a) => (
              <Link key={a.label} href={a.href} className="bespoke-quick">
                <div className="bespoke-quick-icon">{a.icon}</div>
                <div className="bespoke-quick-label">{a.label}</div>
                <div className="bespoke-quick-count">{a.count} listings</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search + post */}
      <section className="cat-action-row">
        <div className="container cat-action-inner">
          <div className="cat-action-search">
            <Search size={18} />
            <input placeholder="Search stays, rentals, tours..." />
          </div>
          <Link href="/listings/create?category=tourists" className="cat-action-post">
            <Plus size={16} /> List your place
          </Link>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="container">
        <div className="bespoke-highlights">
          {HIGHLIGHTS.map((h) => {
            const Icon = h.Icon;
            return (
              <div key={h.title} className="bespoke-highlight">
                <div className={`bespoke-highlight-icon ${h.color}`}>
                  <Icon size={18} />
                </div>
                <div className="bespoke-highlight-title">{h.title}</div>
                <div className="bespoke-highlight-desc">{h.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main listings */}
      <section className="container">
        <div className="cat-filter-bar">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Plane size={20} color="#0891B2" />
              Picks for visitors
            </h2>
          </div>
          <div className="cat-filter-actions">
            <button className="cat-filter-btn">
              All parishes <ChevronDown size={14} />
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
            <div className="cat-empty-icon">🏝️</div>
            <h3>No tourist listings yet</h3>
            <p>Be the first host to list a short-term stay or rental.</p>
          </div>
        )}

        {/* Host CTA */}
        <div className="cat-sell-cta" style={{ background: 'linear-gradient(135deg, #E0F2FE 0%, var(--surface) 100%)' }}>
          <div className="cat-sell-cta-icon" style={{ background: '#0891B2', color: 'white' }}>
            <Plane size={28} />
          </div>
          <div className="cat-sell-cta-text">
            <h3>Hosting visitors or expats?</h3>
            <p>List your property, vehicle, or service. Reach the 500K+ visitors who come to Grenada each year.</p>
          </div>
          <Link href="/listings/create?category=tourists" className="btn btn-primary btn-lg">
            List your place
          </Link>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
