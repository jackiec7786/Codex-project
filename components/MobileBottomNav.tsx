'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Plus, LayoutDashboard, User } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const is = (p: string) => pathname === p || (p !== '/' && pathname.startsWith(p));

  return (
    <nav className="mobile-bottom-nav" aria-label="Bottom navigation">
      <div className="nav-grid">
        <Link href="/" className={`mobile-nav-item ${pathname === '/' ? 'active' : ''}`}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/listings" className={`mobile-nav-item ${is('/listings') && pathname !== '/listings/create' ? 'active' : ''}`}>
          <Search size={20} />
          <span>Browse</span>
        </Link>
        <Link href="/listings/create" className="mobile-nav-item">
          <div className="post-bubble"><Plus size={22} /></div>
          <span style={{ marginTop: 2 }}>Post</span>
        </Link>
        <Link href="/dashboard" className={`mobile-nav-item ${is('/dashboard') ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/profile" className={`mobile-nav-item ${is('/profile') ? 'active' : ''}`}>
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
