import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { FEATURED_LISTINGS } from '@/lib/data';
import { Edit2, MapPin, Calendar, ShieldCheck, Star } from 'lucide-react';

export default function ProfilePage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="profile-banner">
          <div className="profile-avatar-wrap">
            <div className="avatar">JD</div>
            <div className="profile-name">
              Jane Doe <ShieldCheck size={18} style={{ display: 'inline', color: '#1E88E5', verticalAlign: 'middle' }} />
              <div className="meta">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginRight: 12 }}>
                  <MapPin size={12} /> Grand Anse, Grenada
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={12} /> Member since Mar 2023
                </span>
              </div>
            </div>
          </div>
          <button className="profile-edit-btn">
            <Edit2 size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} /> Edit Profile
          </button>
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
            <div className="value">4.8 <Star size={14} style={{ display: 'inline', color: 'var(--brand-yellow)', verticalAlign: 'baseline' }} fill="currentColor" /></div>
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
    </>
  );
}
