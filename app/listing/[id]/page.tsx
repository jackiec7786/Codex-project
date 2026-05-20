import Header from '@/components/Header';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart, Share2, MapPin, Eye, Clock, MessageCircle, Phone, HardDrive, Battery, Palette, ShieldCheck } from 'lucide-react';

export default function ListingDetailPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="breadcrumb" style={{ marginTop: 24 }}>
          <Link href="/">Home</Link><span className="sep">/</span>
          <Link href="/browse">Electronics</Link><span className="sep">/</span>
          <Link href="/browse">Phones</Link><span className="sep">/</span>
          <span>iPhone 13 Pro 128GB</span>
        </div>

        <div className="detail-layout" style={{ paddingTop: 0 }}>
          <div>
            <div className="gallery-main">
              <button className="gallery-nav left"><ChevronLeft size={20} /></button>
              📱
              <button className="gallery-nav right"><ChevronRight size={20} /></button>
            </div>
            <div className="gallery-thumbs">
              <div className="gallery-thumb active">📱</div>
              <div className="gallery-thumb">📱</div>
              <div className="gallery-thumb">📱</div>
              <div className="gallery-thumb">+3</div>
            </div>
          </div>

          <div>
            <div className="row-between" style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost"><Heart size={16} /> Save</button>
                <button className="btn btn-ghost"><Share2 size={16} /> Share</button>
              </div>
            </div>

            <h1 className="detail-title">iPhone 13 Pro 128GB</h1>
            <div className="detail-price">$1,650</div>
            <div className="condition-tag">Excellent condition</div>

            <div className="detail-meta-row"><MapPin size={14} /> St. George&apos;s, Grenada <Eye size={14} style={{ marginLeft: 12 }} /> 128 views</div>
            <div className="detail-meta-row"><Clock size={14} /> Posted 2 days ago</div>

            <p className="detail-description">
              iPhone 13 Pro 128GB in excellent condition. Always protected with a case and screen protector.
              Battery health: 87%. Comes with original box, charger and cable.
            </p>

            <div className="spec-table">
              <div className="spec-row">
                <div className="spec-icon"><HardDrive size={14} /></div>
                <div>Storage</div>
                <div className="spec-value">128GB</div>
              </div>
              <div className="spec-row">
                <div className="spec-icon"><Battery size={14} /></div>
                <div>Battery Health</div>
                <div className="spec-value">87%</div>
              </div>
              <div className="spec-row">
                <div className="spec-icon"><Palette size={14} /></div>
                <div>Color</div>
                <div className="spec-value">Alpine Green</div>
              </div>
              <div className="spec-row">
                <div className="spec-icon"><ShieldCheck size={14} /></div>
                <div>Condition</div>
                <div className="spec-value">Excellent</div>
              </div>
            </div>
          </div>

          <aside className="seller-card" style={{ gridColumn: '2', gridRow: '1', alignSelf: 'start' }}>
            <div className="seller-row">
              <div className="avatar">A</div>
              <div>
                <div className="seller-name">Alicia M.</div>
                <div className="seller-meta">Member since 2022</div>
                <div className="seller-rating"><span className="star">★</span> 4.8 (24 reviews)</div>
              </div>
            </div>

            <div className="reply-time">
              <Clock size={14} /> Typically replies within 1 hour
            </div>

            <div className="seller-actions">
              <button className="btn btn-secondary btn-block"><MessageCircle size={16} /> Message Seller</button>
              <button className="btn btn-outline btn-block"><Phone size={16} /> Call Seller</button>
            </div>

            <div className="safety-tips">
              <h4>Safety Tips</h4>
              <ul>
                <li>Meet in a public place</li>
                <li>Check the item before you pay</li>
                <li>Never send money in advance</li>
              </ul>
              <Link href="#" className="report-link">Report this listing</Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
