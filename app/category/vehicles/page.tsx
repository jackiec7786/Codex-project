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
  { label: 'All Vehicles', slug: 'all' },
  { label: 'ATVs',  emoji: '🏁', slug: 'atvs' },
  { label: 'Boats', emoji: '⛵', slug: 'boats' },
  { label: 'Cars',  emoji: '🚗', slug: 'cars' },
  { label: 'Motorcycles', emoji: '🏍️', slug: 'motorcycles' },
  { label: 'Trucks', emoji: '🚚', slug: 'trucks' },
  { label: 'Parts', emoji: '🔧', slug: 'parts' },
];

export default function VehiclesCategoryPage() {
  const listings = LATEST_LISTINGS.slice(0, 2);

  return (
    <div className="category-page-wrap">
      <AnnounceBar />
      <Header />

      <CategoryHero
        emoji="🚗"
        title="Vehicles"
        description="Find your next ride or sell your current vehicle to trusted buyers in your area"
        sellHref="/listings/create?category=vehicles"
        sellLabel="Sell Your Vehicles"
        browseHref="/listings?category=vehicles"
      />

      <CategorySubNav items={SUBCATS} />
      <CategorySearchPanel />
      <CategoryToolbar resultsCount={2} searchTime="20ms" activeChip="Category: Vehicles" />

      <div className="container">
        <div className="listing-grid">
          {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
}
