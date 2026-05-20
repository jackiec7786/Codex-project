import Link from 'next/link';
import { MessageCircle, Heart, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <div className="brand-logo">SC</div>
          <div className="brand-text">
            <span>Spice</span>
            <span>Classifieds</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/browse">Categories ▾</Link>
          <Link href="/post-ad">Become a Seller</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/messages" className="icon-btn"><MessageCircle size={18} /></Link>
          <Link href="/saved" className="icon-btn"><Heart size={18} /></Link>
          <Link href="/notifications" className="icon-btn">
            <Bell size={18} />
            <span className="dot" />
          </Link>
          <Link href="/login" className="btn btn-outline">Log In</Link>
          <Link href="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
