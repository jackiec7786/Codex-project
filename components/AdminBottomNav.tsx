'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Shield, Flag, Sparkles, MoreHorizontal } from 'lucide-react';

const TABS = [
  { label: 'Today',   href: '/admin',                Icon: LayoutGrid },
  { label: 'Queue',   href: '/admin/queue',          Icon: Shield },
  { label: 'Reports', href: '/admin/reports',        Icon: Flag },
  { label: 'Money',   href: '/admin/subscriptions',  Icon: Sparkles },
  { label: 'More',    href: '/admin/menu',           Icon: MoreHorizontal },
];

export default function AdminBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="admin-bottom-nav" aria-label="Admin navigation">
      {TABS.map((t) => {
        const Icon = t.Icon;
        const isActive = pathname === t.href;
        return (
          <Link
            key={t.label}
            href={t.href}
            className={`admin-tab ${isActive ? 'active' : ''}`}
          >
            <div className="admin-tab-icon"><Icon size={20} /></div>
            <span>{t.label}</span>
            {isActive && <div className="admin-tab-indicator" />}
          </Link>
        );
      })}
    </nav>
  );
}
