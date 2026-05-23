import StandardCategory from '@/components/StandardCategory';
import { Sprout } from 'lucide-react';
import { LATEST_LISTINGS, FEATURED_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'Furniture', icon: '🛋️', count: 82 },
  { label: 'Appliances', icon: '🍳', count: 54 },
  { label: 'Decor', icon: '🖼️', count: 38 },
  { label: 'Garden', icon: '🌱', count: 29 },
  { label: 'Tools', icon: '🔨', count: 31 },
];

export default function CategoryPage() {
  return (
    <StandardCategory
      slug="home-garden"
      name="Home & Garden"
      Icon={Sprout}
      color="green"
      totalListings={234}
      verifiedSellers={31}
      updatedAgo="3h ago"
      subcats={SUBCATS}
      featured={FEATURED_LISTINGS.slice(0, 4)}
      listings={LATEST_LISTINGS.slice(0, 4)}
      postCtaLabel="Sell Home & Garden"
      sellCtaTitle="Refreshing your home?"
      sellCtaDesc="Turn your unused furniture, decor, and appliances into cash with local buyers."
    />
  );
}
