import StandardCategory from '@/components/StandardCategory';
import { ServicesIcon } from '@/components/CategoryIcons';
import { LATEST_LISTINGS, FEATURED_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'Home Services', icon: '🏠', count: 38 },
  { label: 'Auto', icon: '🚗', count: 24 },
  { label: 'Tech & IT', icon: '💻', count: 31 },
  { label: 'Cleaning', icon: '🧹', count: 22 },
  { label: 'Tutoring', icon: '📚', count: 18 },
  { label: 'Beauty', icon: '💅', count: 23 },
];

export default function CategoryPage() {
  return (
    <StandardCategory
      slug="services"
      name="Services"
      Icon={ServicesIcon}
      color="green"
      totalListings={156}
      verifiedSellers={47}
      updatedAgo="6h ago"
      subcats={SUBCATS}
      featured={FEATURED_LISTINGS.slice(0, 4)}
      listings={LATEST_LISTINGS.slice(0, 3)}
      postCtaLabel="Offer Service"
      sellCtaTitle="Offer a service?"
      sellCtaDesc="Be discovered by people looking for trusted local providers across Grenada."
    />
  );
}
