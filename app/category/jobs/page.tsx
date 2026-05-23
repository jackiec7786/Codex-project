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
  { label: 'All Jobs', slug: 'all' },
  { label: 'Full-Time', emoji: '🕘', slug: 'full-time' },
  { label: 'Part-Time', emoji: '⏰', slug: 'part-time' },
  { label: 'Contract', emoji: '📋', slug: 'contract' },
  { label: 'Remote', emoji: '🏝️', slug: 'remote' },
  { label: 'Internships', emoji: '🎓', slug: 'internships' },
];

export default function CategoryPage() {
  const listings = LATEST_LISTINGS.slice(0, 0);

  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <CategoryHero
        emoji="💼"
        title="Jobs"
        description="Discover career opportunities across Grenada or find your next hire"
        sellHref="/listings/create?category=jobs"
        sellLabel="Post a Job"
        browseHref="/listings?category=jobs"
      />

      <CategorySubNav items={SUBCATS} />
      <CategorySearchPanel />
      <CategoryToolbar resultsCount={0} searchTime="15ms" activeChip="Category: Jobs" />

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
            No listings yet. Be the first — <a href="/listings/create?category=jobs" style={{ color: 'var(--brand-red)', fontWeight: 700 }}>post one now</a>.
          </div>
        )}
      </div>

      <MobileBottomNav />
    </div>
  );
}
