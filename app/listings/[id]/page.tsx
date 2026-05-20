import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart, Share2, MapPin, Eye, Clock, MessageCircle, Phone, ShieldCheck, Flag } from 'lucide-react';

export default function ListingDetailPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="breadcrumb" style={{ marginTop: 24 }}>
          <Link href="/">Home</Link><span className="sep">/</span>
          <Link href="/listings">Listings</Link><span className="sep">/</span>
          <Link href="/listings?category=real-estate">Real Estate</Link><span className="sep">/</span>
          <span>Domestic Rental In a Quiet House</span>
        </div>

        <div className="detail-layout">
          <div>
            <div className="gallery-main">
              <button className="gallery-nav left" aria-label="Previous"><ChevronLeft size={20} /></button>
              🏡
              <button className="gallery-nav right" aria-label="Next"><ChevronRight size={20} /></button>
            </div>
            <div className="gallery-thumbs">
              <div className="gallery-thumb active">🏡</div>
              <div className="gallery-thumb">🛋️</div>
              <div className="gallery-thumb">🛏️</div>
              <div className="gallery-thumb">🚿</div>
            </div>

            <div className="detail-actions" style={{ marginTop: 20 }}>
              <button className="btn btn-ghost"><Heart size={16} /> Save</button>
              <button className="btn btn-ghost"><Share2 size={16} /> Share</button>
              <button className="btn btn-ghost" style={{ color: 'var(--text-muted)', marginLeft: 'auto' }}>
                <Flag size={14} /> Report
              </button>
            </div>

            <h1 className="detail-title">Domestic Rental In a Quiet House</h1>
            <div className="detail-price">XCD 1,000<span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 600, marginLeft: 6 }}>/month</span></div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <span className="condition-tag">For Rent</span>
              <span className="condition-tag" style={{ background: 'var(--brand-light)', color: 'var(--brand)' }}>Featured</span>
              <span className="condition-tag">Real Estate</span>
            </div>

            <div className="detail-meta-row" style={{ marginTop: 12 }}>
              <span><MapPin size={14} style={{ verticalAlign: '-2px' }} /> At the property, St. George&apos;s</span>
              <span><Eye size={14} style={{ verticalAlign: '-2px' }} /> 187 views</span>
              <span><Clock size={14} style={{ verticalAlign: '-2px' }} /> Posted 1 week ago</span>
            </div>

            <p className="detail-description">
              Quiet, comfortable domestic rental in a peaceful neighborhood. Fully furnished with all
              essentials. Suitable for working professionals or small families. Easy access to local
              amenities, shops, and transportation. Utilities negotiable. Contact for viewing.
            </p>

            <h3 style={{ fontSize: 16, marginTop: 28, marginBottom: 4 }}>Details</h3>
            <div className="spec-grid">
              <div className="spec-card"><div className="label">Type</div><div className="value">House Rental</div></div>
              <div className="spec-card"><div className="label">Furnished</div><div className="value">Yes</div></div>
              <div className="spec-card"><div className="label">Bedrooms</div><div className="value">2</div></div>
              <div className="spec-card"><div className="label">Bathrooms</div><div className="value">1</div></div>
              <div className="spec-card"><div className="label">Parish</div><div className="value">St. George&apos;s</div></div>
              <div className="spec-card"><div className="label">Available</div><div className="value">Immediately</div></div>
            </div>
          </div>

          <aside className="seller-card">
            <div className="seller-row">
              <div className="avatar">J</div>
              <div>
                <div className="seller-name">Jackie M.</div>
                <div className="seller-meta">Member since 2024</div>
                <div className="seller-rating"><span className="star">★</span> 4.9 (12 reviews)</div>
                <div className="verified-tag" style={{ marginTop: 4 }}>
                  <ShieldCheck size={12} /> Verified Vendor
                </div>
              </div>
            </div>

            <div className="reply-time">
              <Clock size={14} /> Typically replies within 1 hour
            </div>

            <div className="seller-actions">
              <button className="btn btn-primary btn-block">
                <MessageCircle size={16} /> Message Seller
              </button>
              <button className="btn btn-outline btn-block">
                <Phone size={16} /> Show Phone Number
              </button>
              <button className="btn btn-green btn-block">
                💬 WhatsApp
              </button>
            </div>

            <div className="safety-tips">
              <h4>Safety Tips</h4>
              <ul>
                <li>Meet in a public place when possible</li>
                <li>Inspect the property before paying</li>
                <li>Never wire money or send deposits in advance</li>
                <li>Trust your instincts</li>
              </ul>
              <Link href="/support" className="report-link">Report this listing</Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
