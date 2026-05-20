import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import Link from 'next/link';
import { Search, MapPin, Plus, Sparkles, Store, HeartHandshake, ArrowRight } from 'lucide-react';
import { CATEGORIES, LISTINGS, POPULAR_SEARCHES } from '@/lib/data';

const FAQS = [
  { q: 'How do I post a listing on SpiceClassifieds?', a: "Click 'Post Your Ad for Free', sign in or create a free account, fill in your listing details, and publish. Your listing goes live immediately." },
  { q: 'What can I buy or sell here?', a: 'Almost anything — cars, electronics, real estate and rentals, furniture, clothing, jobs, local services, farm-to-table produce, pets, and more.' },
  { q: 'How do buyers contact sellers?', a: 'Buyers can message sellers via WhatsApp, phone call, or the built-in chat — all directly from the listing page.' },
  { q: 'Is it free to use?', a: 'Posting a basic listing is free. Featured listings get more visibility for a small fee. Verified vendor storefronts are available through subscription plans.' },
  { q: 'Can SGU students find housing here?', a: 'Yes. The SGU Student Hub has listings specifically for student housing, roommates, textbooks, rides, and services near St. George\u2019s University.' },
];

export default function HomePage() {
  const featured = LISTINGS.filter((l) => l.featured);
  const latest = LISTINGS.filter((l) => !l.featured).slice(0, 8);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-eyebrow">🇬🇩 Grenada&apos;s #1 Marketplace</span>
            <h1>
              Grenada Classifieds —<br />
              Buy, Sell &amp; Rent <span className="accent">Locally</span> <span className="flag">🇬🇩</span>
            </h1>
            <p className="hero-sub">
              SpiceClassifieds is Grenada&apos;s local marketplace for{' '}
              <Link href="/listings?category=vehicles">cars</Link>,{' '}
              <Link href="/listings?category=real-estate">rentals</Link>,{' '}
              <Link href="/listings?category=jobs">jobs</Link>,{' '}
              <Link href="/listings?category=services">services</Link>, and everyday goods.
              Free to post. No stress. Just locals doing business.
            </p>

            <div className="search-bar">
              <div className="field">
                <Search size={16} />
                <input placeholder="What are you looking for?" />
              </div>
              <div className="divider" />
              <div className="field">
                <MapPin size={16} />
                <input placeholder="All of Grenada" />
              </div>
              <button className="btn btn-primary">Search</button>
            </div>

            <div className="hero-actions">
              <Link href="/listings/create" className="btn btn-primary btn-lg">
                <Plus size={16} /> Post Your Ad for Free
              </Link>
              <Link href="/vendor/apply" className="btn btn-outline btn-lg">
                <Store size={16} /> Set Up a Vendor Profile
              </Link>
            </div>

            <div className="hero-promo">
              🎉 <strong>Featured Listings get 5x more views.</strong> Boost your ad for as little as XCD 5/week —{' '}
              <Link href="/vendor/dashboard">spotlight your items now</Link>.
            </div>
          </div>

          <div className="hero-illustration">
            <div className="hero-illustration-content">
              <div className="island-emoji">🏝️</div>
              <div>Buy. Sell. Support Local.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Browse by Category</h2>
              <div className="sub">All 20 categories across the Spice Isle</div>
            </div>
            <Link href="/listings" className="see-all">View all →</Link>
          </div>

          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/listings?category=${c.slug}`} className="cat-card">
                <div className="cat-emoji">{c.emoji}</div>
                <div className="cat-name">{c.name}</div>
                {c.count > 0 ? (
                  <div className="cat-count has-ads">{c.count} ads</div>
                ) : (
                  <div className="cat-count">Browse →</div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <h2><Sparkles size={22} style={{ display: 'inline', color: 'var(--brand)', verticalAlign: '-4px' }} /> Featured Listings</h2>
              <div className="sub">Boosted ads that get 5x more views</div>
            </div>
            <Link href="/listings?featured=true" className="see-all">See all featured →</Link>
          </div>
          <div className="listing-grid cols-4">
            {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
            {featured.length < 4 && latest.slice(0, 4 - featured.length).map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      {/* FEATURE BANNERS — Farm-to-Table + SGU Hub */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="feature-banners">
            <Link href="/listings?category=farm-to-table" className="feature-banner farm">
              <h3>🌿 Farm-to-Table Fresh</h3>
              <p>Shop local produce, spices &amp; homemade goods directly from Grenadian farmers.</p>
              <span className="feature-cta">Discover Fresh Finds <ArrowRight size={14} /></span>
            </Link>
            <Link href="/listings?category=sgu" className="feature-banner sgu">
              <h3>🎓 SGU Student Hub</h3>
              <p>Housing, textbooks, rides &amp; more — all in one place for SGU students.</p>
              <span className="feature-cta">Explore SGU Hub <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST LISTINGS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>🆕 Latest Listings</h2>
              <div className="sub">Fresh ads posted across Grenada</div>
            </div>
            <Link href="/listings" className="see-all">Browse all listings →</Link>
          </div>
          <div className="listing-grid cols-4">
            {latest.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      {/* POPULAR SEARCHES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>Popular Searches in Grenada</h2>
          </div>
          <div className="search-chips">
            {POPULAR_SEARCHES.map((s) => (
              <Link key={s.label} href={s.href} className="search-chip">{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Frequently Asked Questions</h2>
              <div className="sub">Everything you need to know to get started</div>
            </div>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary className="faq-q">{f.q}<span>+</span></summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-strip">
            <h2>Ready to Start Selling?</h2>
            <p>Join thousands of sellers on SpiceClassifieds across Grenada.</p>
            <div className="cta-feats">
              <div className="cta-feat">✓ Verified Store</div>
              <div className="cta-feat">✓ Boost Sales</div>
              <div className="cta-feat"><HeartHandshake size={16} /> Local Support</div>
            </div>
            <div className="cta-buttons">
              <Link href="/listings/create" className="btn btn-primary btn-lg">Post Your First Listing</Link>
              <Link href="/vendors" className="btn btn-outline btn-lg">Browse Vendors</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
