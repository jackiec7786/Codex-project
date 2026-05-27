import StandardCategory from '@/components/StandardCategory';
import { VehiclesIcon } from '@/components/CategoryIcons';
import { LATEST_LISTINGS, FEATURED_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'ATVs', icon: '🏁', count: 12 },
  { label: 'Boats', icon: '⛵', count: 24 },
  { label: 'Cars', icon: '🚗', count: 186 },
  { label: 'Motorcycles', icon: '🏍️', count: 58 },
  { label: 'Trucks', icon: '🚚', count: 47 },
  { label: 'Parts', icon: '🔧', count: 85 },
];

export default function CategoryPage() {
  return (
    <StandardCategory
      slug="vehicles"
      name="Vehicles"
      Icon={VehiclesIcon}
      color="green"
      totalListings={412}
      verifiedSellers={28}
      updatedAgo="2h ago"
      subcats={SUBCATS}
      featured={FEATURED_LISTINGS.slice(0, 4)}
      listings={LATEST_LISTINGS.slice(0, 4)}
      postCtaLabel="Sell a Vehicle"
      sellCtaTitle="Selling a vehicle?"
      sellCtaDesc="Reach 312 active buyers actively searching in Grenada this week."
    />
  );
}
