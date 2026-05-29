import Link from 'next/link';
import { Anchor, Search, ChevronDown, SlidersHorizontal, Plus, Ship, Sun, Users } from 'lucide-react';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';

const QUICK_ACTIONS = [
  { label: 'Stays',          icon: '🏠', count: 22, href: '/listings?location=carriacou&category=real-estate' },
  { label: 'Boats & Ferries', icon: '⛵', count: 14, href: '/listings?location=carriacou&category=vehicles' },
  { label: 'Local Services', icon: '🔧', count: 18, href: '/listings?location=carriacou&category=services' },
  { label: 'Land for Sale',  icon: '🌴', count: 9,  href: '/listings?location=carriacou&type=land' },
  { label: 'Jobs',           icon: '💼', count: 6,  href: '/listings?location=carriacou&category=jobs' },
];

const HIGHLIGHTS = [
  { color: 'red',    Icon: Ship,   title: 'Daily ferries from Grenada',  desc: 'Osprey Lines runs to Hillsborough multiple times daily.' },
  { color: 'yellow', Icon: Sun,    title: 'Carriacou + Petite Martinique', desc: 'All sister-island listings in one place — both islands covered.' },
  { color: 'green',  Icon: Users,  title: 'Tight-knit local community',  desc: 'Verified residents and trusted Kayak vendors only.' },
];

export default function CarriacouPage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="cat-page">
      <AnnounceBar />
      <Header />

      <section className="cat-carriacou-hero">
        <div className="container cat-carriacou-hero-inner">
          <div className="bespoke-hero-tag">
            <Anchor size={14} /> Carriacou &amp; Petite Martinique
          </div>
          <h1 className="bespoke-hero-title">
            Listings from the <span className="accent">sister islands</span>
          </h1>
          <p className="bespoke-hero-desc">
            Stays, boats, services, and everything else from Carriacou and Petite Martinique —
            in one place, by people who actually live there.
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

      <section className="cat-action-row">
        <div className="container cat-action-inner">
          <div className="cat-action-search">
            <Search size={18} />
            <input placeholder="Search Carriacou listings..." />
          </div>
          <Link href="/listings/create?location=carriacou" className="cat-action-post">
            <Plus size={16} /> Post from the islands
          </Link>
        </div>
      </section>

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

      <section className="container">
        <div className="cat-filter-bar">
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Anchor size={20} color="var(--brand-red)" />
              Latest from Carriacou
            </h2>
          </div>
          <div className="cat-filter-actions">
            <button className="cat-filter-btn">
              Both islands <ChevronDown size={14} />
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
            <div className="cat-empty-icon">⛵</div>
            <h3>No island listings yet</h3>
            <p>Be the first to post from Carriacou or Petite Martinique.</p>
          </div>
        )}

        <div className="cat-sell-cta" style={{ background: 'linear-gradient(135deg, var(--brand-red-light) 0%, var(--surface) 100%)' }}>
          <div className="cat-sell-cta-icon" style={{ background: 'var(--brand-red)', color: 'white' }}>
            <Anchor size={28} />
          </div>
          <div className="cat-sell-cta-text">
            <h3>Living on Carriacou or Petite Martinique?</h3>
            <p>Reach mainland Grenadians and visitors — your listings get featured in the island hub.</p>
          </div>
          <Link href="/listings/create?location=carriacou" className="btn btn-primary btn-lg">
            Post a listing
          </Link>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
