import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';

const LISTINGS = [
  { id: '1', title: 'iPhone 13 Pro 128GB', price: '$1,650', location: '128 views • 2 days ago', emoji: '📱', bg: 'green-bg' as const },
  { id: '2', title: '2 Bed Apartment - Grand Anse', price: '$1,800/mo', location: '40 views • 1 message', emoji: '🏡', bg: 'warm-bg' as const, forRent: true },
  { id: '3', title: 'Sectional Sofa - Like New', price: '$850', location: '99 views • 32 days ago', emoji: '🛋️', bg: 'gray-bg' as const },
  { id: '4', title: 'Dining Table Set', price: '$450', location: '44 views • 0 messages', emoji: '🪑', bg: 'warm-bg' as const },
];

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 24, paddingBottom: 60 }}>
        <div className="profile-banner">
          <div className="profile-avatar-wrap">
            <div className="avatar">A</div>
            <div className="profile-name">
              Alicia M.
              <div className="meta">Member since 2022 • <span style={{ color: 'var(--brand-yellow)' }}>★</span> 4.8 (24 reviews)</div>
            </div>
          </div>
          <button className="btn btn-outline" style={{ position: 'absolute', right: 20, bottom: 16, background: 'rgba(255,255,255,0.9)' }}>Edit Profile</button>
        </div>

        <div className="profile-stats">
          <div className="profile-stat"><div className="value">23</div><div className="label">Listings</div></div>
          <div className="profile-stat"><div className="value">12</div><div className="label">Sold Items</div></div>
          <div className="profile-stat"><div className="value">45</div><div className="label">Reviews</div></div>
          <div className="profile-stat"><div className="value">98%</div><div className="label">Response Rate</div></div>
        </div>

        <div className="profile-tabs">
          <div className="profile-tab active">My Listings</div>
          <div className="profile-tab">Saved Items</div>
          <div className="profile-tab">Reviews</div>
          <div className="profile-tab">About</div>
        </div>

        <div className="listing-grid">
          {LISTINGS.map((l) => <ListingCard key={l.id} {...l} />)}
        </div>
      </main>
    </>
  );
}
