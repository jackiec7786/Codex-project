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
  { label: 'All Services', slug: 'all' },
  { label: 'Home Services', emoji: '🏠', slug: 'home-services' },
  { label: 'Auto', emoji: '🚗', slug: 'auto' },
  { label: 'Tech & IT', emoji: '💻', slug: 'tech-and-it' },
  { label: 'Cleaning', emoji: '🧹', slug: 'cleaning' },
  { label: 'Tutoring', emoji: '📚', slug: 'tutoring' },
];

export default function CategoryPage() {
  const listings = LATEST_LISTINGS.slice(0, 3);

  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <CategoryHero
        emoji="🔧"
        title="Services"
        description="Find trusted local professionals for any job — or offer your own services"
        sellHref="/listings/create?category=services"
        sellLabel="Offer Service"
        browseHref="/listings?category=services"
      />

      <CategorySubNav items={SUBCATS} />
      <CategorySearchPanel />
      <CategoryToolbar resultsCount={3} searchTime="15ms" activeChip="Category: Services" />

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
            No listings yet. Be the first — <a href="/listings/create?category=services" style={{ color: 'var(--brand-red)', fontWeight: 700 }}>post one now</a>.
          </div>
        )}
      </div>

      <MobileBottomNav />
    </div>
  );
}
