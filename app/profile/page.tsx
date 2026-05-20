import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { LISTINGS } from '@/lib/data';

export default function ProfilePage() {
  const userListings = LISTINGS.slice(0, 4);
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 24, paddingBottom: 60 }}>
        <div className="profile-banner">
          <div className="profile-avatar-wrap">
            <div className="avatar">J</div>
            <div className="profile-name">
              Jackie M. <ShieldCheck size={16} style={{ color: 'var(--accent-green)', display: 'inline', verticalAlign: '-2px' }} />
              <div className="meta">
                Member since 2024 • <span style={{ color: 'var(--accent-yellow)' }}>★</span> 4.9 (12 reviews) • St. George&apos;s
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', right: 20, bottom: 16, display: 'flex', gap: 8 }}>
            <button className="btn btn-outline btn-sm" style={{ background: 'rgba(255,255,255,0.95)' }}>
              <MessageCircle size={14} /> Message
            </button>
            <button className="btn btn-primary btn-sm">Edit Profile</button>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat"><div className="value">5</div><div className="label">Active Listings</div></div>
          <div className="profile-stat"><div className="value">8</div><div className="label">Sold Items</div></div>
          <div className="profile-stat"><div className="value">12</div><div className="label">Reviews</div></div>
          <div className="profile-stat"><div className="value">98%</div><div className="label">Response Rate</div></div>
          <div className="profile-stat"><div className="value">&lt; 1 hr</div><div className="label">Reply Time</div></div>
        </div>

        <div className="profile-tabs">
          <div className="profile-tab active">My Listings</div>
          <div className="profile-tab">Sold</div>
          <div className="profile-tab">Reviews (12)</div>
          <div className="profile-tab">About</div>
        </div>

        <div className="listing-grid cols-4">
          {userListings.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
