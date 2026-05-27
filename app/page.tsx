import Link from 'next/link';
import Image from 'next/image';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import FeaturedVendorsCarousel from '@/components/FeaturedVendorsCarousel';
import { CATEGORIES, FEATURED_LISTINGS, LATEST_LISTINGS } from '@/lib/data';
import {
  Plus, ArrowRight, MoreHorizontal,
  ShieldCheck, Zap, Users,
} from 'lucide-react';
import {
  VehiclesIcon, ElectronicsIcon, RealEstateIcon, ServicesIcon,
  JobsIcon, HomeGardenIcon, ForSaleIcon, SGUIcon, FarmToTableIcon,
} from '@/components/CategoryIcons';

/* 8-category strip — custom Caribbean-flavored icons */
const HOMEPAGE_CATS = [
  { label: 'Services',     listings: 24,  color: 'green',  Icon: ServicesIcon,    href: '/category/services' },
  { label: 'Electronics',  listings: 186, color: 'red',    Icon: ElectronicsIcon, href: '/category/electronics' },
  { label: 'Real Estate',  listings: 312, color: 'green',  Icon: RealEstateIcon,  href: '/category/real-estate' },
  { label: 'For Sale',     listings: 451, color: 'yellow', Icon: ForSaleIcon,     href: '/listings' },
  { label: 'Home & Garden', listings: 98, color: 'green',  Icon: HomeGardenIcon,  href: '/category/home-garden' },
  { label: 'Vehicles',     listings: 76,  color: 'red',    Icon: VehiclesIcon,    href: '/category/vehicles' },
  { label: 'Jobs',         listings: 53,  color: 'green',  Icon: JobsIcon,        href: '/category/jobs' },
  { label: 'SGU',          listings: 47,  color: 'red',    Icon: SGUIcon,         href: '/category/sgu' },
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

      {/* Hero: full banner image with real CTA buttons overlaid on the cream area */}
      <section className="hero-banner-wrap">
        <div className="hero-banner-stage">
          <Image
            src="/hero-banner.webp"
            alt="Find it. List it. Love Local. — Grenada's trusted marketplace"
            width={1983}
            height={793}
            priority
            className="hero-banner-img"
          />
          <div className="hero-banner-cta">
            <Link href="/listings" className="btn btn-primary btn-lg">Browse Categories</Link>
            <Link href="/listings/create" className="btn btn-yellow btn-lg">
              <Plus size={16} /> Post an Ad
            </Link>
          </div>
        </div>
      </section>

      {/* Round colored category strip */}
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
                    {`${c.listings} listings`}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Vendors carousel */}
      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <h2>Featured Vendors</h2>
            <Link href="/vendors">View All</Link>
          </div>
          <FeaturedVendorsCarousel />
        </div>
      </section>

      {/* Featured Listings - 5 column row to match screenshot */}
      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <h2>Featured Listings</h2>
            <Link href="/listings?featured=true">View all</Link>
          </div>
          <div className="listing-grid cols-5">
            {FEATURED_LISTINGS.map((l) => <ListingCard key={l.id} listing={l} />)}
            {LATEST_LISTINGS.slice(0, 1).map((l) => <ListingCard key={l.id} listing={l} />)}
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
