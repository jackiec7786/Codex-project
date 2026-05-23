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
  { label: 'All Electronics', slug: 'all' },
  { label: 'Accessories', emoji: '🔌', slug: 'accessories' },
  { label: 'Audio & Video', emoji: '🎧', slug: 'audio-video' },
  { label: 'Cameras', emoji: '📷', slug: 'cameras' },
  { label: 'Computers', emoji: '💻', slug: 'computers' },
  { label: 'Phones', emoji: '📱', slug: 'phones' },
  { label: 'TVs', emoji: '📺', slug: 'tvs' },
];

export default function ElectronicsCategoryPage() {
  const listings = LATEST_LISTINGS.slice(0, 4);

  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <CategoryHero
        emoji="📱"
        title="Electronics"
        description="Discover the latest gadgets, devices, and tech accessories from trusted sellers in your community"
        sellHref="/listings/create?category=electronics"
        sellLabel="Sell Electronics"
        browseHref="/listings?category=electronics"
      />

      <CategorySubNav items={SUBCATS} />
      <CategorySearchPanel />
      <CategoryToolbar resultsCount={4} searchTime="11ms" activeChip="Category: Electronics" />

      <div className="container">
        <div className="listing-grid">
          {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
}
