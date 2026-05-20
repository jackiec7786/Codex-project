import Link from 'next/link';
import { Home, Search, Plus, LayoutDashboard, User } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav">
      <Link href="/" className="mobile-nav-item active">
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link href="/listings" className="mobile-nav-item">
        <Search size={20} />
        <span>Browse</span>
      </Link>
      <Link href="/listings/create" className="mobile-nav-item center" aria-label="Post Ad">
        <Plus size={26} />
        <span>Post</span>
      </Link>
      <Link href="/dashboard" className="mobile-nav-item">
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </Link>
      <Link href="/profile" className="mobile-nav-item">
        <User size={20} />
        <span>Profile</span>
      </Link>
    </nav>
  );
}
