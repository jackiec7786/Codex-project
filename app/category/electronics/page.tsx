import StandardCategory from '@/components/StandardCategory';
import { ElectronicsIcon } from '@/components/CategoryIcons';
import { LATEST_LISTINGS, FEATURED_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'Accessories', icon: '🔌', count: 54 },
  { label: 'Audio & Video', icon: '🎧', count: 38 },
  { label: 'Cameras', icon: '📷', count: 22 },
  { label: 'Computers', icon: '💻', count: 61 },
  { label: 'Phones', icon: '📱', count: 74 },
  { label: 'TVs', icon: '📺', count: 38 },
];

export default function CategoryPage() {
  return (
    <StandardCategory
      slug="electronics"
      name="Electronics"
      Icon={ElectronicsIcon}
      color="red"
      totalListings={287}
      verifiedSellers={19}
      updatedAgo="1h ago"
      subcats={SUBCATS}
      featured={FEATURED_LISTINGS.slice(0, 4)}
      listings={LATEST_LISTINGS.slice(0, 4)}
      postCtaLabel="Sell Electronics"
      sellCtaTitle="Got electronics to sell?"
      sellCtaDesc="List for free in under 2 minutes — verified buyers reach out within hours."
    />
  );
}
