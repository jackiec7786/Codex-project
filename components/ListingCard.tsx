import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
import type { Listing } from '@/lib/data';

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listings/${listing.id}`} className="listing-card">
      <div className={`listing-image ${listing.bg || 'gray-bg'}`}>
        <div className="listing-badges">
          {listing.featured && <span className="badge badge-featured">Featured</span>}
          {listing.isNew && <span className="badge badge-new">New</span>}
          {listing.verified && <span className="badge badge-verified">Verified</span>}
        </div>
        <div className="heart-btn" aria-label="Save">
          <Heart size={16} />
        </div>
        <span>{listing.emoji}</span>
      </div>
      <div className="listing-body">
        <div className="listing-title">{listing.title}</div>
        <div className={`listing-price ${listing.contactForPrice ? 'contact' : ''}`}>
          {listing.contactForPrice ? 'Contact for price' : `XCD ${listing.price}`}
          {listing.forRent && <span className="for-rent">For Rent</span>}
        </div>
        <div className="listing-location">
          <MapPin size={11} /> {listing.location}
        </div>
        <div className="listing-meta">{listing.postedAgo}</div>
        <div className="listing-cat-tag">{listing.category}</div>
      </div>
    </Link>
  );
}
