import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import MobileBottomNav from '@/components/MobileBottomNav';
import CategoryHero from '@/components/CategoryHero';
import CategorySubNav from '@/components/CategorySubNav';
import CategorySearchPanel from '@/components/CategorySearchPanel';
import CategoryToolbar from '@/components/CategoryToolbar';

const SUBCATS = [
  { label: 'All Categories', slug: 'all' },
  { label: 'Deals',     emoji: '📦', slug: 'deals' },
  { label: 'Housing',   emoji: '📦', slug: 'housing' },
  { label: 'Jobs',      emoji: '📦', slug: 'jobs' },
  { label: 'Rides',     emoji: '🚗', slug: 'rides' },
  { label: 'Textbooks', emoji: '📚', slug: 'textbooks' },
  { label: 'Services',  emoji: '🔧', slug: 'services' },
];

export default function SGUCategoryPage() {
  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <CategoryHero
        emoji="🎓"
        title="SGU Students 🎓"
        description="Everything you need for student life in Grenada. From housing and textbooks to rides and services — connect with fellow SGU students."
        sellHref="/listings/create?category=sgu"
        sellLabel="Post for SGU Community"
        browseHref="/listings?category=sgu"
        variant="light"
      />

      <CategorySubNav items={SUBCATS} />
      <CategorySearchPanel />
      <CategoryToolbar resultsCount={0} searchTime="25ms" activeChip="Category: sgu" />

      <div className="container">
        <div style={{
          padding: '32px 20px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          background: 'var(--surface)',
          border: '2px dashed var(--border)',
          borderRadius: 16,
          margin: '0 0 40px',
        }}>
          No listings match your filters yet.<br />
          Be the first — <a href="/listings/create?category=sgu" style={{ color: 'var(--brand-red)', fontWeight: 700 }}>post for the SGU community</a>.
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
}
