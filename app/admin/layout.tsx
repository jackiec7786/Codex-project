'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { Menu, X, LayoutGrid, Shield, Flag, Sparkles, MoreHorizontal } from 'lucide-react';
import { ADMIN_MENU_GROUPS } from '@/lib/admin-data';

const BOTTOM_TABS = [
  { label: 'Today',   href: '/admin',                Icon: LayoutGrid },
  { label: 'Queue',   href: '/admin/queue',          Icon: Shield },
  { label: 'Reports', href: '/admin/reports',        Icon: Flag },
  { label: 'Money',   href: '/admin/subscriptions',  Icon: Sparkles },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentItem = ADMIN_MENU_GROUPS
    .flatMap((g) => g.items)
    .find((i) => i.href === pathname);
  const currentTitle = currentItem?.title ?? 'Admin';

  const Sidebar = ({ onLink }: { onLink?: () => void }) => (
    <>
      <Link href="/" className="adm-sidebar-brand" onClick={onLink}>
        <div className="brand-logo" />
        <div className="brand-text">
          <span className="b1">Spice</span>
          <span className="b2">Classifieds</span>
        </div>
      </Link>

      <div className="adm-sidebar-badge">
        <Shield size={12} /> ADMIN
      </div>

      {ADMIN_MENU_GROUPS.map((group) => (
        <div key={group.label} className="adm-sidebar-group">
          <div className="adm-sidebar-group-label">{group.label}</div>
          {group.items.map((item) => {
            const Icon = item.Icon;
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`adm-sidebar-link ${active ? 'active' : ''}`}
                onClick={onLink}
              >
                <Icon size={16} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      ))}

      <div className="adm-sidebar-foot">
        <div className="adm-sidebar-foot-avatar">JD</div>
        <div>
          <div className="adm-sidebar-foot-name">Jackie</div>
          <div className="adm-sidebar-foot-role">Site owner</div>
        </div>
      </div>
    </>
  );

  return (
    <div className="adm-shell">
      <aside className="adm-sidebar">
        <Sidebar />
      </aside>

      <main className="adm-main">
        <header className="adm-mobile-bar">
          <button className="adm-mobile-menu" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="adm-mobile-title">{currentTitle}</div>
          <div className="adm-mobile-avatar">JD</div>
        </header>

        {children}
      </main>

      <nav className="adm-bottom-nav" aria-label="Admin navigation">
        {BOTTOM_TABS.map((t) => {
          const Icon = t.Icon;
          const active = t.href === pathname;
          return (
            <Link key={t.label} href={t.href} className={`adm-bn-tab ${active ? 'active' : ''}`}>
              <Icon size={18} />
              <span>{t.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setDrawerOpen(true)}
          className={`adm-bn-tab ${drawerOpen ? 'active' : ''}`}
        >
          <MoreHorizontal size={18} />
          <span>More</span>
        </button>
      </nav>

      {drawerOpen && (
        <div className="adm-drawer" onClick={() => setDrawerOpen(false)}>
          <div className="adm-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="adm-drawer-head">
              <div style={{ fontSize: 17, fontWeight: 800 }}>Admin menu</div>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <Sidebar onLink={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
