import Link from 'next/link';
import { Search, Plus, MoreHorizontal } from 'lucide-react';

const ALL_LISTINGS = [
  { emoji: '🏠', name: '2 Bed Apartment in Grand Anse',           price: 'XCD 1,800/mo', views: 412, leads: 8, status: 'featured' },
  { emoji: '📱', name: 'iPhone 13 Pro 128GB',                     price: 'XCD 1,650',    views: 247, leads: 5, status: 'active' },
  { emoji: '⚡', name: 'Electrical Installation Service',          price: 'Contact',      views: 189, leads: 12, status: 'active' },
  { emoji: '🛋️', name: 'Sectional Sofa - Like New',               price: 'XCD 850',      views: 156, leads: 3, status: 'active' },
  { emoji: '🚗', name: 'Honda Civic 2018 — One Owner',            price: 'XCD 28,000',   views: 0,   leads: 0, status: 'draft' },
  { emoji: '🪴', name: 'Indoor Plants Bundle',                    price: 'XCD 120',      views: 78,  leads: 2, status: 'paused' },
  { emoji: '🖼️', name: 'Vintage Wall Art (Set of 3)',             price: 'XCD 200',      views: 45,  leads: 1, status: 'sold' },
];

export default function VendorListingsPage() {
  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">My Listings</h1>
          <p className="vendor-page-sub">Manage your 12 active listings, drafts, and archived items.</p>
        </div>
        <Link href="/listings/create" className="btn btn-primary">
          <Plus size={16} /> New Listing
        </Link>
      </div>

      <div className="vendor-filterbar">
        <button className="vendor-filter-pill active">All (12)</button>
        <button className="vendor-filter-pill">Active (8)</button>
        <button className="vendor-filter-pill">Featured (2)</button>
        <button className="vendor-filter-pill">Paused (1)</button>
        <button className="vendor-filter-pill">Drafts (1)</button>
        <button className="vendor-filter-pill">Sold (3)</button>
        <div className="vendor-search">
          <Search size={16} color="var(--text-faint)" />
          <input placeholder="Search your listings..." />
        </div>
      </div>

      <div className="vendor-card" style={{ padding: '8px 24px' }}>
        {ALL_LISTINGS.map((l) => (
          <div key={l.name} className="vendor-listing-row">
            <div className="vendor-listing-thumb">{l.emoji}</div>
            <div>
              <div className="vendor-listing-name">{l.name}</div>
              <div className="vendor-listing-meta">{l.price} · {l.views} views · {l.leads} leads</div>
            </div>
            <span className={`vendor-status ${l.status}`}>{l.status}</span>
            <button aria-label="More" style={{ color: 'var(--text-faint)', padding: 6 }}>
              <MoreHorizontal size={18} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
