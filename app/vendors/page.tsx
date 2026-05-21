import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Star, MapPin, ShieldCheck } from 'lucide-react';

const VENDORS = [
  { id: 'tg', name: 'Telligent LTD',     cat: 'Electrical & IT Services', listings: 12, rating: 4.9, parish: 'St. George\'s', initials: 'TL' },
  { id: 'gf', name: 'Grenada Fresh Co.', cat: 'Farm to Table',            listings: 28, rating: 5.0, parish: 'St. Andrew\'s', initials: 'GF' },
  { id: 'is', name: 'Island Spice',      cat: 'Food & Drink',             listings: 9,  rating: 4.7, parish: 'Carriacou',     initials: 'IS' },
  { id: 'cm', name: 'Caribbean Motors',  cat: 'Vehicles',                 listings: 34, rating: 4.8, parish: 'St. George\'s', initials: 'CM' },
  { id: 'gh', name: 'Grenada Homes',     cat: 'Real Estate',              listings: 18, rating: 4.6, parish: 'Grand Anse',    initials: 'GH' },
  { id: 'sg', name: 'SGU Connect',       cat: 'Student Services',         listings: 22, rating: 4.9, parish: 'True Blue',     initials: 'SC' },
];

export default function VendorsPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <section className="vendor-hero">
        <div className="container">
          <h1>Trusted Vendors in Grenada</h1>
          <p>Discover verified local businesses across the Spice Isle.</p>
          <div className="row" style={{
            background: 'white', borderRadius: 12, padding: 8, gap: 8,
            maxWidth: 480, margin: '0 auto'
          }}>
            <div className="field" style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 8, padding: '8px 14px' }}>
              <Search size={16} color="#9A9A9A" />
              <input placeholder="Search vendors..." style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 14 }} />
            </div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="chip-row" style={{ marginBottom: 24 }}>
          <button className="chip" style={{ background: 'var(--brand-green)', color: 'white', borderColor: 'var(--brand-green)' }}>All</button>
          <button className="chip">Farm to Table</button>
          <button className="chip">Electronics</button>
          <button className="chip">Real Estate</button>
          <button className="chip">Vehicles</button>
          <button className="chip">Services</button>
          <button className="chip">Food &amp; Drink</button>
        </div>

        <div className="vendor-grid">
          {VENDORS.map((v) => (
            <Link key={v.id} href={`/vendors/${v.id}`} className="vendor-card">
              <div className="vendor-cover" />
              <div className="vendor-card-body">
                <div className="vendor-avatar">
                  <div>{v.initials}</div>
                </div>
                <div className="vendor-name">
                  {v.name} <ShieldCheck size={14} style={{ display: 'inline', color: '#1E88E5', marginLeft: 4, verticalAlign: 'middle' }} />
                </div>
                <div className="vendor-cat">{v.cat}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--text-muted)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Star size={12} style={{ color: 'var(--brand-yellow)' }} fill="currentColor" />
                    {v.rating}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={12} /> {v.parish}
                  </span>
                </div>
                <div className="vendor-stats">
                  <div className="vendor-stat">
                    <strong>{v.listings}</strong>
                    Listings
                  </div>
                  <div className="vendor-stat">
                    <strong>2yr</strong>
                    On platform
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="cta-banner" style={{ marginTop: 48 }}>
          <h2>Run a business in Grenada?</h2>
          <p>Get a verified vendor storefront and reach thousands of local buyers.</p>
          <Link href="/vendor/apply" className="btn btn-primary btn-lg">Become a Vendor →</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
