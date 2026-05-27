import StandardCategory from '@/components/StandardCategory';
import { RealEstateIcon } from '@/components/CategoryIcons';
import { LATEST_LISTINGS, FEATURED_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'Houses', icon: '🏡', count: 62 },
  { label: 'Apartments', icon: '🏢', count: 88 },
  { label: 'Land', icon: '🌾', count: 24 },
  { label: 'Commercial', icon: '🏬', count: 12 },
  { label: 'Short Term', icon: '🏖️', count: 12 },
];

export default function CategoryPage() {
  return (
    <StandardCategory
      slug="real-estate"
      name="Real Estate"
      Icon={RealEstateIcon}
      color="green"
      totalListings={198}
      verifiedSellers={34}
      updatedAgo="4h ago"
      subcats={SUBCATS}
      featured={FEATURED_LISTINGS.slice(0, 4)}
      listings={LATEST_LISTINGS.slice(0, 3)}
      postCtaLabel="List Property"
      sellCtaTitle="Got property to rent or sell?"
      sellCtaDesc="Reach buyers and tenants across all 7 parishes — listings included with verification."
    />
  );
}
