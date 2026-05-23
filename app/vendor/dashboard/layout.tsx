'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import {
  LayoutDashboard, Package, MessageCircle, Zap, BarChart3, Store, Settings, Plus, Menu, X, ChevronRight,
} from 'lucide-react';

const NAV = [
  { label: 'Overview',   href: '/vendor/dashboard',             Icon: LayoutDashboard },
  { label: 'My Listings', href: '/vendor/dashboard/listings',    Icon: Package,        badge: 12 },
  { label: 'Messages',   href: '/vendor/dashboard/messages',     Icon: MessageCircle,  badge: 3 },
  { label: 'Boost Center', href: '/vendor/dashboard/boost',      Icon: Zap },
  { label: 'Analytics',  href: '/vendor/dashboard/analytics',    Icon: BarChart3 },
  { label: 'Storefront', href: '/vendor/dashboard/storefront',   Icon: Store },
  { label: 'Settings',   href: '/vendor/dashboard/settings',     Icon: Settings },
];

export default function VendorDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentPage = NAV.find((n) => n.href === pathname) ?? NAV[0];

  return (
    <div className="vendor-shell">
      {/* Sidebar (desktop) */}
      <aside className="vendor-sidebar">
        <Link href="/" className="vendor-sidebar-brand">
          <div className="brand-logo" />
          <div className="brand-text">
            <span className="b1">Spice</span>
            <span className="b2">Classifieds</span>
          </div>
        </Link>

        <div className="vendor-sidebar-profile">
          <div className="vendor-sidebar-avatar">TL</div>
          <div>
            <div className="vendor-sidebar-name">Telligent LTD</div>
            <Link href="/vendors/telligent" className="vendor-sidebar-view">
              View Storefront →
            </Link>
          </div>
        </div>

        <Link href="/listings/create" className="vendor-sidebar-cta">
          <Plus size={16} /> Post a Listing
        </Link>

        <nav className="vendor-sidebar-nav">
          {NAV.map((n) => {
            const Icon = n.Icon;
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`vendor-sidebar-link ${active ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{n.label}</span>
                {n.badge !== undefined && <span className="vendor-sidebar-badge">{n.badge}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="vendor-sidebar-foot">
          <div className="vendor-plan-card">
            <div className="vendor-plan-label">PRO PLAN</div>
            <div className="vendor-plan-meta">Renews Jan 17, 2026</div>
            <Link href="/vendor/dashboard/settings" className="vendor-plan-link">Manage →</Link>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="vendor-main">
        <header className="vendor-mobile-header">
          <button className="vendor-mobile-menu" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
          <div className="vendor-mobile-title">{currentPage.label}</div>
          <Link href="/listings/create" className="vendor-mobile-post" aria-label="Post listing">
            <Plus size={22} />
          </Link>
        </header>

        {children}
      </main>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="vendor-drawer" onClick={() => setDrawerOpen(false)}>
          <div className="vendor-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="vendor-drawer-head">
              <div className="vendor-sidebar-profile" style={{ margin: 0, border: 'none', padding: 0 }}>
                <div className="vendor-sidebar-avatar">TL</div>
                <div>
                  <div className="vendor-sidebar-name">Telligent LTD</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Pro plan</div>
                </div>
              </div>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close"><X size={22} /></button>
            </div>

            <Link href="/listings/create" className="vendor-sidebar-cta" onClick={() => setDrawerOpen(false)}>
              <Plus size={16} /> Post a Listing
            </Link>

            <nav className="vendor-sidebar-nav">
              {NAV.map((n) => {
                const Icon = n.Icon;
                const active = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`vendor-sidebar-link ${active ? 'active' : ''}`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{n.label}</span>
                    {n.badge !== undefined && <span className="vendor-sidebar-badge">{n.badge}</span>}
                    <ChevronRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-faint)' }} />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
