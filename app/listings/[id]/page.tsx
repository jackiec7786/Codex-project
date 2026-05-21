import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';
import {
  Heart, Share2, Flag, Phone, MessageCircle, MessageSquare,
  ChevronLeft, ChevronRight, MapPin, Calendar, Eye, Star
} from 'lucide-react';

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/listings">Listings</Link>
          <span className="sep">/</span>
          <Link href="/listings?category=electronics">Electronics</Link>
          <span className="sep">/</span>
          <span>iPhone 13 Pro 128GB</span>
        </div>

        <div className="detail-layout">
          <div>
            <div className="gallery-main">
              <button className="gallery-nav left" aria-label="Previous"><ChevronLeft size={18} /></button>
              📱
              <button className="gallery-nav right" aria-label="Next"><ChevronRight size={18} /></button>
              <div className="listing-badges">
                <span className="badge badge-featured">Featured</span>
                <span className="badge badge-verified">Verified</span>
              </div>
            </div>

            <div className="gallery-thumbs">
              <div className="gallery-thumb active">📱</div>
              <div className="gallery-thumb">📸</div>
              <div className="gallery-thumb">🔋</div>
              <div className="gallery-thumb">📦</div>
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
              <button className="btn btn-ghost"><Heart size={16} /> Save</button>
              <button className="btn btn-ghost"><Share2 size={16} /> Share</button>
              <button className="btn btn-ghost"><Flag size={16} /> Report</button>
            </div>

            <div style={{ marginTop: 28 }}>
              <div className="detail-header">
                <h1 className="detail-title">iPhone 13 Pro 128GB — Excellent Condition</h1>
                <div className="detail-price">XCD $1,650</div>
                <div className="detail-meta-row">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={14} /> St. George&apos;s, Grenada
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Calendar size={14} /> Posted 2 days ago
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Eye size={14} /> 247 views
                  </span>
                </div>
                <div className="detail-tags">
                  <span className="chip">Electronics</span>
                  <span className="chip">Smartphone</span>
                  <span className="chip">Apple</span>
                </div>
              </div>

              <div className="detail-description">
                Selling my iPhone 13 Pro 128GB in Sierra Blue. Excellent condition, no scratches or
                dents. Battery health 92%. Comes with original box, charger, and unused EarPods. Cash
                or bank transfer only. Serious buyers please. Available for viewing in St. George&apos;s.
              </div>

              <div className="detail-section">
                <h3>Details</h3>
                <div className="spec-row">
                  <div className="spec-label">Condition</div>
                  <div className="spec-value">Used – Excellent</div>
                </div>
                <div className="spec-row">
                  <div className="spec-label">Brand</div>
                  <div className="spec-value">Apple</div>
                </div>
                <div className="spec-row">
                  <div className="spec-label">Model</div>
                  <div className="spec-value">iPhone 13 Pro</div>
                </div>
                <div className="spec-row">
                  <div className="spec-label">Storage</div>
                  <div className="spec-value">128 GB</div>
                </div>
                <div className="spec-row">
                  <div className="spec-label">Color</div>
                  <div className="spec-value">Sierra Blue</div>
                </div>
                <div className="spec-row">
                  <div className="spec-label">Listing ID</div>
                  <div className="spec-value">#{params.id}</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="seller-card">
            <div className="seller-row">
              <div className="avatar">MJ</div>
              <div>
                <div className="seller-name">
                  Marcus James <span className="verified-tag">✓ Verified</span>
                </div>
                <div className="seller-meta">Member since 2023 · 14 listings</div>
                <div className="seller-rating">
                  <Star size={12} className="star" fill="currentColor" />
                  <span style={{ fontWeight: 700 }}>4.9</span>
                  <span style={{ color: 'var(--text-muted)' }}>(38 reviews)</span>
                </div>
              </div>
            </div>

            <div className="reply-time">
              <span>⚡</span> Usually replies within 1 hour
            </div>

            <div className="seller-actions">
              <a href="tel:+14731234567" className="btn btn-primary btn-block btn-lg">
                <Phone size={16} /> Call Seller
              </a>
              <a href="https://wa.me/14731234567" className="btn btn-whatsapp btn-block btn-lg">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link href="/messages" className="btn btn-outline-green btn-block">
                <MessageSquare size={16} /> Send Message
              </Link>
            </div>

            <div className="safety-tips">
              <h4>Safety Tips</h4>
              <ul>
                <li>Meet in a public place</li>
                <li>Inspect the item before buying</li>
                <li>Never send money in advance</li>
                <li>Trust your instincts</li>
              </ul>
              <Link href="/help" className="report-link">Report this listing</Link>
            </div>
          </aside>
        </div>

        <section className="section">
          <h2 className="section-title">Similar Listings</h2>
          <div className="listing-grid">
            {LATEST_LISTINGS.slice(0, 4).map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </section>
      </div>

      <div className="mobile-sticky-cta">
        <a href="tel:+14731234567" className="btn btn-primary"><Phone size={16} /> Call</a>
        <a href="https://wa.me/14731234567" className="btn btn-whatsapp"><MessageCircle size={16} /> WhatsApp</a>
      </div>

      <Footer />
    </>
  );
}
