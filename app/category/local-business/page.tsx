import Link from 'next/link';
import { Briefcase, Search, ChevronDown, SlidersHorizontal, Plus, ShieldCheck, TrendingUp, Award } from 'lucide-react';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';

const QUICK_ACTIONS = [
  { label: 'Storefronts', icon: '🏪', count: 87,  href: '/vendors' },
  { label: 'B2B Supplies', icon: '📦', count: 54, href: '/listings?category=services&type=b2b' },
  { label: 'Hire Staff',   icon: '👥', count: 42, href: '/category/jobs' },
  { label: 'Office Space', icon: '🏢', count: 18, href: '/listings?category=real-estate&type=commercial' },
  { label: 'Equipment',    icon: '⚙️', count: 76, href: '/category/electronics' },
];

const HIGHLIGHTS = [
  { color: 'green',  Icon: ShieldCheck, title: 'Verified vendors',          desc: 'Every storefront is reviewed for legitimacy before listing.' },
  { color: 'yellow', Icon: TrendingUp,  title: 'Reach 12k+ buyers weekly',  desc: 'Your business gets shown to the largest local marketplace audience.' },
  { color: 'red',    Icon: Award,       title: 'Pro plan included tools',   desc: 'Featured slots, analytics, and priority support — all included.' },
];

export default function LocalBusinessPage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="cat-page">
      <AnnounceBar />
      <Header />

      <section className="cat-biz-hero">
        <div className="container cat-biz-hero-inner">
          <div className="bespoke-hero-tag">
            <Briefcase size={14} /> Local Business
          </div>
          <h1 className="bespoke-hero-title">
            Grow your business in <span className="accent">Grenada</span> — locally, loudly
          </h1>
          <p className="bespoke-hero-desc">
            Storefronts, B2B suppliers, commercial space, and hiring — built for the people
            actually running Grenadian businesses.
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
            <input placeholder="Search businesses, suppliers, services..." />
          </div>
          <Link href="/vendor/apply" className="cat-action-post">
            <Plus size={16} /> List your business
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
              <Briefcase size={20} color="var(--brand-green)" />
              Featured local businesses
            </h2>
          </div>
          <div className="cat-filter-actions">
            <button className="cat-filter-btn">
              By industry <ChevronDown size={14} />
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
            <div className="cat-empty-icon">🏪</div>
            <h3>No business listings yet</h3>
            <p>Be the first local business to list.</p>
          </div>
        )}

        <div className="cat-sell-cta" style={{ background: 'linear-gradient(135deg, var(--brand-green-light) 0%, var(--surface) 100%)' }}>
          <div className="cat-sell-cta-icon" style={{ background: 'var(--brand-green)', color: 'white' }}>
            <Briefcase size={28} />
          </div>
          <div className="cat-sell-cta-text">
            <h3>Running a Grenadian business?</h3>
            <p>Apply for a verified vendor storefront. Pro plans from XCD 25/month — first month free.</p>
          </div>
          <Link href="/vendor/apply" className="btn btn-secondary btn-lg">
            Apply as vendor
          </Link>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
