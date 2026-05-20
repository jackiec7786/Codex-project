import Link from 'next/link';
import { Heart, MapPin, ShieldCheck } from 'lucide-react';
import type { Listing } from '@/lib/data';

export default function ListingCard({ listing }: { listing: Listing }) {
  const isContactPrice = listing.price === 'Contact for price';
  return (
    <Link href={`/listings/${listing.id}`} className="listing-card">
      <div className={`listing-image ${listing.bg}`}>
        <div className="badge-row">
          {listing.featured && <span className="listing-badge badge-featured">Featured</span>}
          {listing.isNew && <span className="listing-badge badge-new">New</span>}
          {listing.forRent && <span className="listing-badge badge-rent">For Rent</span>}
        </div>
        <button className="heart-btn" aria-label="Save"><Heart size={16} /></button>
        <span>{listing.emoji}</span>
      </div>
      <div className="listing-body">
        <div className="listing-title">{listing.title}</div>
        <div className="listing-price">
          {isContactPrice ? <span className="contact">Contact for price</span> : listing.price}
        </div>
        <div className="listing-meta-row">
          <MapPin size={12} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {listing.location}
          </span>
        </div>
        <div className="listing-meta-row" style={{ marginTop: 4 }}>
          <span>{listing.posted}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
          <span className="listing-cat-tag">{listing.category}</span>
          {listing.verified && (
            <span className="listing-cat-tag" style={{ color: 'var(--accent-green)', background: 'var(--accent-green-light)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
              <ShieldCheck size={10} /> Verified
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
