import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { FEATURED_LISTINGS } from '@/lib/data';
import { Edit2, MapPin, Calendar, ShieldCheck, Star } from 'lucide-react';

export default function ProfilePage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        {/* Profile hero - clean structure, no overlap */}
        <div className="profile-hero">
          <div className="profile-hero-banner">
            <button className="profile-edit-btn">
              <Edit2 size={14} /> Edit Profile
            </button>
          </div>

          <div className="profile-hero-body">
            <div className="profile-hero-avatar">JD</div>

            <div className="profile-hero-info">
              <h1 className="profile-hero-name">
                Jane Doe
                <ShieldCheck size={18} className="profile-hero-verified" />
              </h1>
              <div className="profile-hero-meta">
                <span><MapPin size={14} /> Grand Anse, Grenada</span>
                <span><Calendar size={14} /> Member since Mar 2023</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <div className="value">14</div>
            <div className="label">Active Listings</div>
          </div>
          <div className="profile-stat">
            <div className="value">87</div>
            <div className="label">Sold</div>
          </div>
          <div className="profile-stat">
            <div className="value">
              4.8 <Star size={14} style={{ display: 'inline', color: 'var(--brand-yellow)', verticalAlign: 'baseline' }} fill="currentColor" />
            </div>
            <div className="label">Rating (38 reviews)</div>
          </div>
          <div className="profile-stat">
            <div className="value">1h</div>
            <div className="label">Avg. Response</div>
          </div>
        </div>

        <div className="profile-tabs">
          <div className="profile-tab active">Active Listings (14)</div>
          <div className="profile-tab">Reviews (38)</div>
          <div className="profile-tab">About</div>
          <div className="profile-tab">Sold</div>
        </div>

        <div className="listing-grid">
          {FEATURED_LISTINGS.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </div>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
