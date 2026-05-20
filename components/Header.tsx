import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <>
      <div className="announce-bar">
        Welcome to SpiceClassifieds — Grenada&apos;s local marketplace. Free to post.
      </div>
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand">
            <div className="brand-logo">SC</div>
            <div className="brand-text">
              <span className="spice">Spice</span>Classifieds
            </div>
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/listings">Browse Listings</Link>
            <Link href="/listings?category=services">Services</Link>
            <Link href="/vendors">Vendors</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/listings" className="icon-btn" aria-label="Search">
              <Search size={18} />
            </Link>
            <Link href="/sign-in" className="btn btn-outline btn-sm">Sign In</Link>
            <Link href="/listings/create" className="btn btn-primary btn-sm">+ Post Ad</Link>
            <button className="icon-btn mobile-menu-btn" aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
