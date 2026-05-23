import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Search, Plus, SlidersHorizontal, ChevronDown, Tag, Store } from 'lucide-react';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import type { Listing } from '@/lib/data';

export type Subcat = {
  label: string;
  icon: string; // emoji
  count?: number;
};

export type StandardCategoryProps = {
  slug: string;
  name: string;
  Icon: LucideIcon;
  color: 'green' | 'red' | 'yellow';
  totalListings: number;
  verifiedSellers: number;
  updatedAgo: string;
  subcats: Subcat[];
  featured: Listing[];
  listings: Listing[];
  postCtaLabel: string;
  sellCtaTitle: string;
  sellCtaDesc: string;
};

export default function StandardCategory({
  slug, name, Icon, color, totalListings, verifiedSellers, updatedAgo,
  subcats, featured, listings, postCtaLabel, sellCtaTitle, sellCtaDesc,
}: StandardCategoryProps) {
  return (
    <div className="cat-page">
      <AnnounceBar />
      <Header />

      {/* Compact header strip */}
      <section className="cat-strip-header">
        <div className="container">
          <div className={`cat-strip-header-icon ${color}`}>
            <Icon size={26} strokeWidth={2.2} />
          </div>
          <div className="cat-strip-header-text">
            <h1 className="cat-strip-header-title">{name}</h1>
            <div className="cat-strip-header-meta">
              <strong>{totalListings.toLocaleString()}</strong>&nbsp;listings
              <span className="dot">·</span>
              <strong>{verifiedSellers}</strong>&nbsp;verified sellers
              <span className="dot">·</span>
              Updated {updatedAgo}
            </div>
          </div>
        </div>
      </section>

      {/* Search + Post CTA */}
      <section className="cat-action-row">
        <div className="container cat-action-inner">
          <div className="cat-action-search">
            <Search size={18} />
            <input placeholder={`Search ${name.toLowerCase()}...`} />
          </div>
          <Link href={`/listings/create?category=${slug}`} className="cat-action-post">
            <Plus size={16} /> {postCtaLabel}
          </Link>
        </div>
      </section>

      {/* Subcategory chip scroller */}
      <section className="cat-subchips">
        <div className="container">
          <div className="cat-subchips-inner">
            <button className="cat-subchip active">
              <div className="cat-subchip-icon"><Tag size={14} /></div>
              All {name}
            </button>
            {subcats.map((sub) => (
              <button key={sub.label} className="cat-subchip">
                <div className="cat-subchip-icon">{sub.icon}</div>
                {sub.label}
                {sub.count !== undefined && (
                  <span style={{ color: 'inherit', opacity: 0.7, fontWeight: 600, marginLeft: 2 }}>
                    {sub.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured strip */}
      {featured.length > 0 && (
        <section className="cat-featured-strip">
          <div className="container">
            <div className="cat-featured-strip-head">
              <h2>
                <span>Featured in {name}</span>
                <span className="badge badge-featured">5x views</span>
              </h2>
              <Link href={`/listings?category=${slug}&featured=true`}>View all featured →</Link>
            </div>
            <div className="cat-featured-scroller">
              {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </div>
        </section>
      )}

      {/* Filter bar + main listings grid */}
      <section className="container">
        <div className="cat-filter-bar">
          <div className="cat-filter-count">
            Showing <strong>{listings.length}</strong> of <strong>{totalListings.toLocaleString()}</strong> {name.toLowerCase()}
          </div>
          <div className="cat-filter-actions">
            <button className="cat-filter-btn">
              Newest <ChevronDown size={14} />
            </button>
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
            <h3>No {name.toLowerCase()} listed yet</h3>
            <p>Be the first to post in this category — your listing gets prime placement.</p>
            <Link href={`/listings/create?category=${slug}`} className="btn btn-primary">
              <Plus size={16} /> {postCtaLabel}
            </Link>
          </div>
        )}

        {/* Sell-yours footer CTA */}
        <div className="cat-sell-cta">
          <div className="cat-sell-cta-icon">
            <Store size={28} />
          </div>
          <div className="cat-sell-cta-text">
            <h3>{sellCtaTitle}</h3>
            <p>{sellCtaDesc}</p>
          </div>
          <Link href={`/listings/create?category=${slug}`} className="btn btn-primary btn-lg">
            {postCtaLabel}
          </Link>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
