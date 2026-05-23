import StandardCategory from '@/components/StandardCategory';
import { Briefcase } from 'lucide-react';
import { LATEST_LISTINGS, FEATURED_LISTINGS } from '@/lib/data';

const SUBCATS = [
  { label: 'Full-Time', icon: '🕘', count: 42 },
  { label: 'Part-Time', icon: '⏰', count: 18 },
  { label: 'Contract', icon: '📋', count: 12 },
  { label: 'Remote', icon: '🏝️', count: 8 },
  { label: 'Internships', icon: '🎓', count: 9 },
];

export default function CategoryPage() {
  return (
    <StandardCategory
      slug="jobs"
      name="Jobs"
      Icon={Briefcase}
      color="yellow"
      totalListings={89}
      verifiedSellers={22}
      updatedAgo="8h ago"
      subcats={SUBCATS}
      featured={FEATURED_LISTINGS.slice(0, 4)}
      listings={LATEST_LISTINGS.slice(0, 0)}
      postCtaLabel="Post a Job"
      sellCtaTitle="Hiring in Grenada?"
      sellCtaDesc="Reach qualified candidates fast — most listings get applicants within 24 hours."
    />
  );
}
