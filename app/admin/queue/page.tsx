'use client';

import { useState } from 'react';
import { Filter, ChevronRight } from 'lucide-react';

const PENDING = [
  { type: 'Listing', title: 'Honda Civic EX 2002', user: 'Roy Andrews', reason: 'Flagged: scam', time: '2 hours ago', severity: 'red' },
  { type: 'Listing', title: 'iPhone 13 Pro - URGENT', user: 'Jamal Phillips', reason: 'Flagged: counterfeit', time: '5 hours ago', severity: 'yellow' },
  { type: 'Vendor',  title: 'Caribbean Motors',     user: 'New application', reason: 'Awaiting business doc verification', time: '1 day ago', severity: 'gray' },
];

const TABS = [
  { id: 'pending',  label: 'Pending',   count: 3 },
  { id: 'review',   label: 'In Review', count: 1 },
  { id: 'approved', label: 'Approved',  count: 142 },
  { id: 'rejected', label: 'Rejected',  count: 18 },
];

export default function AdminQueuePage() {
  const [active, setActive] = useState('pending');

  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Moderation queue</h1>
          <p className="adm-page-sub">Handle flagged and safety-sensitive work first.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost"><Filter size={14} /> Filter</button>
        </div>
      </div>

      <div className="adm-tab-row">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`adm-tab ${active === t.id ? 'active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label} <span className="count">{t.count}</span>
          </button>
        ))}
      </div>

      {active === 'pending' ? (
        <div className="adm-card" style={{ padding: 0 }}>
          {PENDING.map((p, i) => (
            <div key={i} className="adm-list-row">
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flex: 1 }}>
                <span className={`adm-pill ${p.severity}`}>{p.type}</span>
                <div>
                  <div className="adm-list-name">{p.title}</div>
                  <div className="adm-list-meta">{p.user} · {p.reason}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>{p.time}</span>
                <ChevronRight size={16} style={{ color: 'var(--text-faint)' }} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="adm-empty">
          <div className="adm-empty-icon">✓</div>
          No items in {active} status
        </div>
      )}
    </>
  );
}
