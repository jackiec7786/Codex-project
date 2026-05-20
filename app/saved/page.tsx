import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';

const SAVED = [
  { id: '1', title: 'Samsung Galaxy S23 Ultra', price: '$1,250', location: "St. George's", emoji: '📱', bg: 'green-bg' as const },
  { id: '2', title: 'House for Rent - Morne Rouge', price: '$1,500/mo', location: 'Morne Rouge', emoji: '🏡', bg: 'warm-bg' as const, badge: 'rent' as const, forRent: true },
  { id: '3', title: 'Dining Table Set', price: '$450', location: "St. David's", emoji: '🪑', bg: 'warm-bg' as const },
  { id: '4', title: 'Office Cleaning Service', price: '$150', location: "St. George's", emoji: '🧹', bg: 'sky-bg' as const },
];

export default function SavedPage() {
  return (
    <>
      <Header />
      <main className="container saved-page">
        <div className="saved-header">
          <h1>Saved Items</h1>
          <div className="count">4 items</div>
        </div>
        <div className="saved-grid">
          {SAVED.map((l) => <ListingCard key={l.id} {...l} />)}
        </div>
      </main>
    </>
  );
}
