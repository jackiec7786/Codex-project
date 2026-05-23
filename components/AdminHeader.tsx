'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShieldCheck, X, Search } from 'lucide-react';
import { ADMIN_MENU_GROUPS } from '@/lib/admin-data';

export default function AdminHeader({ title }: { title: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="admin-header">
        <Link href="/admin" className="admin-brand">
          <div className="brand-logo" />
          <div className="brand-text">
            <span className="b1">Spice</span>
            <span className="b2">Classifieds</span>
          </div>
        </Link>
        <button className="admin-title-pill" onClick={() => setMenuOpen(true)}>
          <div className="admin-title-icon"><ShieldCheck size={18} /></div>
          <span>{title}</span>
        </button>
        <Link href="/profile" className="admin-avatar" aria-label="Profile">
          <div />
        </Link>
      </header>

      {menuOpen && (
        <div className="admin-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="admin-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="admin-menu-head">
              <div>
                <h2>Admin menu</h2>
                <p>Search or jump to any workspace.</p>
              </div>
              <button className="admin-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="admin-menu-search">
              <Search size={18} />
              <input placeholder="Search sections" />
            </div>

            <div className="admin-menu-groups">
              {ADMIN_MENU_GROUPS.map((group) => (
                <div key={group.label} className="admin-menu-group">
                  <div className="admin-menu-group-label">{group.label}</div>
                  <div className="admin-menu-items">
                    {group.items.map((item) => {
                      const Icon = item.Icon;
                      const isActive = item.title === title;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`admin-menu-item ${isActive ? 'active' : ''}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="admin-menu-item-icon"><Icon size={18} /></div>
                          <span>{item.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
