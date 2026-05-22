import Link from 'next/link';
import Image from 'next/image';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { CATEGORIES, FEATURED_LISTINGS, LATEST_LISTINGS } from '@/lib/data';
import {
  Search, MapPin, Plus, ArrowRight,
  Wrench, Smartphone, Home as HomeIcon, Tag, Leaf, Car, Briefcase, MoreHorizontal,
  ShieldCheck, Zap, Users, GraduationCap,
} from 'lucide-react';

/* 8-category strip matching the reference screenshot style.
   Picked to keep SpiceClassifieds differentiators (SGU + Farm-to-Table)
   visible above the fold instead of buried behind "More". */
const HOMEPAGE_CATS = [
  { label: 'Services',     listings: 24,  color: 'green',  Icon: Wrench,        href: '/listings?category=services' },
  { label: 'Electronics',  listings: 186, color: 'red',    Icon: Smartphone,    href: '/listings?category=electronics' },
  { label: 'Rentals',      listings: 312, color: 'green',  Icon: HomeIcon,      href: '/listings?category=real-estate' },
  { label: 'For Sale',     listings: 451, color: 'yellow', Icon: Tag,           href: '/listings' },
  { label: 'Farm to Table', listings: 38, color: 'green',  Icon: Leaf,          href: '/listings?category=farm-to-table' },
  { label: 'Vehicles',     listings: 76,  color: 'red',    Icon: Car,           href: '/listings?category=vehicles' },
  { label: 'SGU Hub',      listings: 22,  color: 'green',  Icon: GraduationCap, href: '/listings?category=sgu' },
  { label: 'More',         listings: 0,   color: 'gray',   Icon: MoreHorizontal, href: '/listings', isMore: true },
];

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

      {/* Hero: two-column. Real HTML text + buttons on left, illustration on right */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="hero-red">Find it.</span>
                <span className="hero-green">List it.</span>
                <span className="hero-green">Love Local.</span>
              </h1>
              <p className="hero-sub">
                Grenada&apos;s trusted marketplace for local services, rentals, electronics and more.
              </p>

              <div className="hero-search">
                <div className="field">
                  <Search size={16} />
                  <input placeholder="Search for anything..." />
                </div>
                <div className="divider desktop-only" />
                <div className="field desktop-only">
                  <MapPin size={16} />
                  <input placeholder="All of Grenada" />
                </div>
                <Link href="/listings" className="btn btn-secondary">Search</Link>
              </div>

              <div className="hero-cta-row">
                <Link href="/listings" className="btn btn-primary btn-lg">Browse Categories</Link>
                <Link href="/listings/create" className="btn btn-yellow btn-lg">
                  <Plus size={16} /> Post an Ad
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <Image
                src="/hero-illustration.webp"
                alt="Caribbean scene with palm tree, mountains, and Grenadian coastal village"
                width={1428}
                height={793}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Round colored category strip - 8 items */}
      <section className="cat-strip-wrap">
        <div className="container">
          <div className="cat-strip">
            {HOMEPAGE_CATS.map((c) => {
              const Icon = c.Icon;
              return (
                <Link key={c.label} href={c.href} className="cat-circle-card">
                  <div className={`cat-circle cat-circle-${c.color}`}>
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <div className="cat-circle-label">{c.label}</div>
                  <div className="cat-circle-count">
                    {c.isMore ? 'View all' : `${c.listings} listings`}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Listings - 5 column row */}
      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <h2>Featured Listings</h2>
            <Link href="/listings?featured=true">View all →</Link>
          </div>
          <div className="listing-grid cols-5">
            {FEATURED_LISTINGS.map((l) => <ListingCard key={l.id} listing={l} />)}
            {LATEST_LISTINGS.slice(0, 1).map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      {/* Latest Listings */}
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
