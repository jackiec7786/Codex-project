import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { FEATURED_LISTINGS, LATEST_LISTINGS } from '@/lib/data';

export default function SavedPage() {
  const saved = [...FEATURED_LISTINGS.slice(0, 2), ...LATEST_LISTINGS.slice(0, 4)];

  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container saved-page">
        <div className="saved-header">
          <h1>Saved Listings</h1>
          <div className="count">{saved.length} items you&apos;ve hearted</div>
        </div>

        {saved.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>💔</div>
            <h3 style={{ marginBottom: 8 }}>No saved listings yet</h3>
            <p style={{ color: 'var(--text-muted)' }}>Tap the heart on any listing to save it here.</p>
          </div>
        ) : (
          <div className="listing-grid">
            {saved.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
