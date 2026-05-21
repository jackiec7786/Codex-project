import Link from 'next/link';
import Image from 'next/image';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { CATEGORIES, FEATURED_LISTINGS, LATEST_LISTINGS } from '@/lib/data';
import { Search, MapPin, ShieldCheck, Zap, Users, ArrowRight, Plus } from 'lucide-react';

const POPULAR = [
  { label: 'Cars for Sale', emoji: '🚗', href: '/listings?category=vehicles' },
  { label: 'Apartments for Rent', emoji: '🏠', href: '/listings?category=real-estate' },
  { label: 'Jobs in Grenada', emoji: '💼', href: '/listings?category=jobs' },
  { label: 'Local Services', emoji: '🔧', href: '/listings?category=services' },
  { label: 'SGU Student Housing', emoji: '🎓', href: '/listings?category=sgu' },
  { label: 'All Classifieds', emoji: '📋', href: '/listings' },
];

const FAQS = [
  { q: 'How do I post a listing on SpiceClassifieds?', a: "Click 'Post an Ad', sign in or create a free account, fill in your listing details, and publish. Your listing goes live immediately." },
  { q: 'What can I buy or sell here?', a: 'Almost anything — cars, electronics, real estate and rentals, furniture, clothing, jobs, local services, farm-to-table produce, pets, and more.' },
  { q: 'How do buyers contact sellers?', a: 'Buyers can message sellers via WhatsApp, phone call, or the built-in chat — all directly from the listing page.' },
  { q: 'Is it free to use?', a: 'Posting a basic listing is free. Featured listings get more visibility for a small fee. Verified vendor storefronts are available through subscription plans.' },
  { q: 'Can SGU students find housing here?', a: "Yes. The SGU Student Hub has listings specifically for student housing, roommates, textbooks, rides, and services near St. George's University." },
];

export default function HomePage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      {/* Banner - now without the fake buttons */}
      <section className="hero-banner">
        <Image
          src="/hero-banner.webp"
          alt="Find it. List it. Love Local. — Grenada's trusted marketplace"
          width={1983}
          height={793}
          priority
          className="hero-banner-img"
        />
      </section>

      {/* Real working buttons below the banner */}
      <section className="hero-actions-row">
        <div className="container">
          <div className="hero-search">
            <div className="field">
              <Search size={16} />
              <input placeholder="Search for cars, apartments, jobs..." />
            </div>
            <div className="divider desktop-only" />
            <div className="field desktop-only">
              <MapPin size={16} />
              <input placeholder="All of Grenada" />
            </div>
            <Link href="/listings" className="btn btn-secondary">Search</Link>
          </div>

          <div className="hero-quick-actions">
            <Link href="/listings" className="btn btn-primary btn-lg">Browse Categories</Link>
            <Link href="/listings/create" className="btn btn-yellow btn-lg">
              <Plus size={16} /> Post an Ad
            </Link>
          </div>

          <div className="hero-boost-wrap">
            <div className="hero-boost-banner">
              🎉 Featured Listings Get 5x More Views! &nbsp;Boost your ad from XCD 5/week –{' '}
              <Link href="/vendor/dashboard">spotlight your items</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Browse by Category</h2>
            <Link href="/listings">View all →</Link>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/listings?category=${c.slug}`} className="cat-card">
                <div className="cat-emoji">{c.emoji}</div>
                <div className="cat-info">
                  <div className="cat-name">{c.name}</div>
                  {c.ads !== undefined && (
                    <div className="cat-count has-ads">{c.ads} {c.ads === 1 ? 'ad' : 'ads'}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Featured Listings</h2>
            <Link href="/listings?featured=true">See all featured →</Link>
          </div>
          <div className="listing-grid">
            {FEATURED_LISTINGS.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Latest Listings <span style={{ fontSize: 13, color: 'var(--brand-green)', marginLeft: 8, fontWeight: 600 }}>🆕 Fresh</span></h2>
            <Link href="/listings">Browse All →</Link>
          </div>
          <div className="listing-grid">
            {LATEST_LISTINGS.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-blocks">
            <Link href="/listings?category=farm-to-table" className="feature-block farm">
              <h3>🌿 Farm-to-Table Fresh</h3>
              <p>Shop local produce, spices &amp; homemade goods directly from Grenadian farmers.</p>
              <span className="feature-cta">Discover Fresh Finds <ArrowRight size={14} /></span>
              <span className="feature-emoji">🌾</span>
            </Link>
            <Link href="/listings?category=sgu" className="feature-block sgu">
              <h3>🎓 SGU Student Hub</h3>
              <p>Housing, textbooks, rides &amp; more, all in one place.</p>
              <span className="feature-cta">Explore SGU Hub <ArrowRight size={14} /></span>
              <span className="feature-emoji">🎓</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Searches in Grenada</h2>
          <div className="chip-row">
            {POPULAR.map((p) => (
              <Link key={p.label} href={p.href} className="chip">
                <span>{p.emoji}</span> {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((f) => (
              <div key={f.q} className="faq-item">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="cta-banner">
          <h2>Ready to Start Selling?</h2>
          <p>Join thousands of sellers on Spice Classifieds.</p>
          <div className="cta-banner-features">
            <div className="cta-feature"><ShieldCheck size={18} /> Verified Store</div>
            <div className="cta-feature"><Zap size={18} /> Boost Sales</div>
            <div className="cta-feature"><Users size={18} /> Support</div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/listings/create" className="btn btn-primary btn-lg">Post Your First Listing</Link>
            <Link href="/vendors" className="btn btn-outline-white btn-lg">Browse Vendors</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
