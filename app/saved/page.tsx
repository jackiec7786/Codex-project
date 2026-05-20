import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ListingCard from '@/components/ListingCard';
import { LISTINGS } from '@/lib/data';

export default function SavedPage() {
  const saved = LISTINGS.slice(0, 6);
  return (
    <>
      <Header />
      <main className="container saved-page">
        <div className="saved-header">
          <h1>Saved Items ❤️</h1>
          <div className="count">{saved.length} items you&apos;ve favorited</div>
        </div>
        <div className="listing-grid cols-4">
          {saved.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
