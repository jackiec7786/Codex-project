import Link from 'next/link';
import { Heart } from 'lucide-react';

export type ListingCardProps = {
  id?: string;
  title: string;
  price: string;
  location: string;
  emoji: string;
  bg?: 'green-bg' | 'gray-bg' | 'warm-bg' | 'sky-bg';
  badge?: 'featured' | 'new' | 'rent';
  forRent?: boolean;
};

export default function ListingCard({
  id = '1', title, price, location, emoji,
  bg = 'green-bg', badge, forRent,
}: ListingCardProps) {
  const badgeText = badge === 'featured' ? 'Featured' : badge === 'new' ? 'New' : badge === 'rent' ? 'For Rent' : '';
  return (
    <Link href={`/listing/${id}`} className="listing-card">
      <div className={`listing-image ${bg}`}>
        {badge && <span className={`listing-badge ${badge}`}>{badgeText}</span>}
        <button className="heart-btn" aria-label="Save"><Heart size={16} /></button>
        <span>{emoji}</span>
      </div>
      <div className="listing-body">
        <div className="listing-title">{title}</div>
        <div className="listing-price">
          {price}
          {forRent && <span className="for-rent">For Rent</span>}
        </div>
        <div className="listing-location">{location}</div>
      </div>
    </Link>
  );
}
