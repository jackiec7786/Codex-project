import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-logo">SC</div>
              <div className="brand-text"><span className="spice">Spice</span>Classifieds</div>
            </div>
            <p>Grenada&apos;s premier marketplace for buying, selling, and renting. Connecting communities across the Spice Isle.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/listings">Browse Listings</Link></li>
              <li><Link href="/listings/create">Post an Ad</Link></li>
              <li><Link href="/vendor/apply">Become a Vendor</Link></li>
              <li><Link href="/listings?category=services">Services</Link></li>
              <li><Link href="/listings?category=farm-to-table">Farm to Table</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><Link href="/listings?category=electronics">Electronics</Link></li>
              <li><Link href="/listings?category=vehicles">Vehicles</Link></li>
              <li><Link href="/listings?category=real-estate">Real Estate</Link></li>
              <li><Link href="/listings?category=jobs">Jobs</Link></li>
              <li><Link href="/listings?category=agriculture">Farm &amp; Agri.</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>📍 St. George&apos;s, Grenada</li>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/support">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bot">
          <div>© 2025 SpiceClassifieds. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/help">Help</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
