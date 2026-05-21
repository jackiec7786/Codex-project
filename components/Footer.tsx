import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="brand-logo" />
              <div className="brand-text">
                <span className="b1">Spice</span>
                <span className="b2">Classifieds</span>
              </div>
            </div>
            <p className="footer-tag">
              Grenada&apos;s premier marketplace for buying, selling, and renting. Connecting communities across the Spice Isle.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/listings">Browse Listings</Link>
            <Link href="/listings/create">Post an Ad</Link>
            <Link href="/vendor/apply">Become a Vendor</Link>
            <Link href="/listings?category=services">Services</Link>
            <Link href="/listings?category=farm-to-table">Farm to Table</Link>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <Link href="/listings?category=electronics">Electronics</Link>
            <Link href="/listings?category=vehicles">Vehicles</Link>
            <Link href="/listings?category=real-estate">Real Estate</Link>
            <Link href="/listings?category=jobs">Jobs</Link>
            <Link href="/listings?category=agriculture">Farm &amp; Agri.</Link>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, padding: '6px 0' }}>
              <MapPin size={14} /> St. George&apos;s, Grenada
            </div>
            <Link href="/help">Help Center</Link>
            <Link href="/support">Contact Support</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2025 SpiceClassifieds. All rights reserved.</div>
          <div className="links">
            <Link href="/help">Help Center</Link>
            <Link href="/support">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
