import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import MobileBottomNav from '@/components/MobileBottomNav';
import CategoryHero from '@/components/CategoryHero';
import CategorySubNav from '@/components/CategorySubNav';
import CategorySearchPanel from '@/components/CategorySearchPanel';
import CategoryToolbar from '@/components/CategoryToolbar';
import ListingCard from '@/components/ListingCard';
import { LATEST_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'All Real Estate', slug: 'all' },
  { label: 'Houses', emoji: '🏡', slug: 'houses' },
  { label: 'Apartments', emoji: '🏢', slug: 'apartments' },
  { label: 'Land', emoji: '🌾', slug: 'land' },
  { label: 'Commercial', emoji: '🏬', slug: 'commercial' },
  { label: 'Short Term', emoji: '🏖️', slug: 'short-term' },
];

export default function CategoryPage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <CategoryHero
        emoji="🏠"
        title="Real Estate"
        description="Find your next home or list your property for rent or sale across Grenada"
        sellHref="/listings/create?category=real-estate"
        sellLabel="Sell Your Property"
        browseHref="/listings?category=real-estate"
      />

      <CategorySubNav items={SUBCATS} />
      <CategorySearchPanel />
      <CategoryToolbar resultsCount={4} searchTime="15ms" activeChip="Category: Real Estate" />

      <div className="container">
        {listings.length > 0 ? (
          <div className="listing-grid">
            {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        ) : (
          <div style={{
            padding: '40px 20px', textAlign: 'center',
            color: 'var(--text-muted)',
            background: 'var(--surface)',
            border: '2px dashed var(--border)', borderRadius: 16, margin: '0 0 40px',
          }}>
            No listings yet. Be the first — <a href="/listings/create?category=real-estate" style={{ color: 'var(--brand-red)', fontWeight: 700 }}>post one now</a>.
          </div>
        )}
      </div>

      <MobileBottomNav />
    </div>
  );
}
