'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Vendor = {
  id: string;
  name: string;
  initials: string;
  description: string;
  rating: number;
  reviews: number;
  logoBg: string; // gradient for the logo circle
};

const VENDORS: Vendor[] = [
  {
    id: 'mendiwala',
    name: 'Mendiwala Enterprise',
    initials: 'M',
    description:
      'Mendiwala Enterprise Household Items • Home Appliances • Electrical Services "Cash if you have it. Credit if you want it."',
    rating: 5.0,
    reviews: 1,
    logoBg: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
  },
  {
    id: 'telligent',
    name: 'Telligent LTD',
    initials: 'TL',
    description:
      'Electrical & IT solutions across Grenada. Installation, repair, and consulting for homes and businesses. Anywhere — we come to you.',
    rating: 4.9,
    reviews: 38,
    logoBg: 'linear-gradient(135deg, #0F7A5A, #1ea372)',
  },
  {
    id: 'grenada-fresh',
    name: 'Grenada Fresh Co.',
    initials: 'GF',
    description:
      'Farm-to-table produce, spices, and homemade goods sourced directly from St. Andrew\'s farmers. Fresh weekly deliveries island-wide.',
    rating: 5.0,
    reviews: 24,
    logoBg: 'linear-gradient(135deg, #DC2626, #f06464)',
  },
  {
    id: 'caribbean-motors',
    name: 'Caribbean Motors',
    initials: 'CM',
    description:
      'Trusted used vehicles, parts, and servicing in St. George\'s. Financing available. Trade-ins welcome.',
    rating: 4.8,
    reviews: 67,
    logoBg: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
  },
];

export default function FeaturedVendorsCarousel() {
  const [index, setIndex] = useState(0);
  const total = VENDORS.length;
  const v = VENDORS[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="vendor-carousel">
      <button
        className="vendor-carousel-nav left"
        onClick={prev}
        aria-label="Previous vendor"
      >
        <ChevronLeft size={18} />
      </button>

      <Link href={`/vendors/${v.id}`} className="vendor-carousel-card">
        <div className="vendor-carousel-logo" style={{ background: v.logoBg }}>
          {v.initials}
        </div>
        <h3 className="vendor-carousel-name">{v.name}</h3>
        <p className="vendor-carousel-desc">{v.description}</p>
        <div className="vendor-carousel-rating">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={16}
                fill={s <= Math.round(v.rating) ? '#FBBF24' : 'none'}
                color="#FBBF24"
              />
            ))}
          </div>
          <span className="rating-text">
            {v.rating.toFixed(1)} ({v.reviews} {v.reviews === 1 ? 'review' : 'reviews'})
          </span>
        </div>
      </Link>

      <button
        className="vendor-carousel-nav right"
        onClick={next}
        aria-label="Next vendor"
      >
        <ChevronRight size={18} />
      </button>

      <div className="vendor-carousel-dots" aria-hidden="true">
        {VENDORS.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
