'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MessageCircle, Heart, Bell, Menu, X, Plus } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand" aria-label="SpiceClassifieds home">
            <div className="brand-logo" />
            <div className="brand-text">
              <span className="b1">Spice</span>
              <span className="b2">Classifieds</span>
            </div>
          </Link>

          <nav className="nav-links desktop-only">
            <Link href="/">Home</Link>
            <Link href="/listings">Browse</Link>
            <Link href="/listings?category=services">Services</Link>
            <Link href="/vendors">Vendors</Link>
            <Link href="/vendor/apply">Become a Seller</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/messages" className="icon-btn desktop-only" aria-label="Messages">
              <MessageCircle size={18} />
            </Link>
            <Link href="/saved" className="icon-btn desktop-only" aria-label="Saved">
              <Heart size={18} />
            </Link>
            <Link href="/notifications" className="icon-btn desktop-only" aria-label="Notifications">
              <Bell size={18} />
              <span className="dot" />
            </Link>
            <Link href="/sign-in" className="btn btn-outline-green desktop-only">Log In</Link>
            <Link href="/sign-up" className="btn btn-primary desktop-only">Sign Up</Link>

            <button className="mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-drawer" onClick={() => setOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="row-between" style={{ marginBottom: 24 }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>Menu</div>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Link href="/" style={navItemStyle} onClick={() => setOpen(false)}>Home</Link>
              <Link href="/listings" style={navItemStyle} onClick={() => setOpen(false)}>Browse Listings</Link>
              <Link href="/listings?category=services" style={navItemStyle} onClick={() => setOpen(false)}>Services</Link>
              <Link href="/vendors" style={navItemStyle} onClick={() => setOpen(false)}>Vendors</Link>
              <Link href="/listings/create" style={navItemStyle} onClick={() => setOpen(false)}>
                <Plus size={14} style={{ display: 'inline', marginRight: 6 }} /> Post an Ad
              </Link>
              <Link href="/dashboard" style={navItemStyle} onClick={() => setOpen(false)}>Dashboard</Link>
              <Link href="/messages" style={navItemStyle} onClick={() => setOpen(false)}>Messages</Link>
              <Link href="/saved" style={navItemStyle} onClick={() => setOpen(false)}>Saved</Link>
              <Link href="/notifications" style={navItemStyle} onClick={() => setOpen(false)}>Notifications</Link>
              <Link href="/help" style={navItemStyle} onClick={() => setOpen(false)}>Help Center</Link>
              <div style={{ height: 1, background: 'var(--border)', margin: '12px 0' }} />
              <Link href="/sign-in" style={navItemStyle} onClick={() => setOpen(false)}>Log In</Link>
              <Link href="/sign-up" style={{ ...navItemStyle, color: 'var(--brand-red)', fontWeight: 700 }} onClick={() => setOpen(false)}>Sign Up</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

const navItemStyle: React.CSSProperties = {
  display: 'block',
  padding: '12px 14px',
  borderRadius: 8,
  fontSize: 15,
  fontWeight: 500,
};
