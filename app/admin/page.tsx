import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';
import { ShieldAlert, Flag, Clock, Bug, Package, Users, ChevronRight } from 'lucide-react';

const ATTENTION_ITEMS = [
  { title: 'Flagged reports', desc: 'Reported listings and users', count: 0, href: '/admin/reports', Icon: Flag },
  { title: 'Payment approvals', desc: 'Vendor subscriptions awaiting approval', count: 0, href: '/admin/subscriptions', Icon: Clock },
  { title: 'Bug reports', desc: 'Open product issues', count: 0, href: '/admin/bugs', Icon: Bug },
];

export default function AdminTodayPage() {
  return (
    <>
      <AdminHeader title="Today" />

      <div className="admin-page-content">
        <div className="admin-status-card">
          <div className="admin-status-icon"><ShieldAlert size={28} /></div>
          <div>
            <div className="admin-status-label">TODAY</div>
            <h1 className="admin-status-title">Queues are stable</h1>
            <p className="admin-status-desc">Start with reports and payments. Metrics can wait.</p>
          </div>
        </div>

        <div className="admin-section-title">
          <h2>Needs attention</h2>
          <span className="admin-section-title-meta">Priority order</span>
        </div>

        {ATTENTION_ITEMS.map((item) => {
          const Icon = item.Icon;
          return (
            <Link key={item.title} href={item.href} className="admin-attention-row">
              <div className="admin-attention-icon"><Icon size={20} /></div>
              <div className="admin-attention-content">
                <div className="admin-attention-title">{item.title}</div>
                <div className="admin-attention-desc">{item.desc}</div>
              </div>
              <div className="admin-attention-count">{item.count}</div>
              <ChevronRight size={20} className="admin-attention-chevron" />
            </Link>
          );
        })}

        <div className="admin-metric-grid" style={{ marginTop: 24 }}>
          <div className="admin-metric-card">
            <div className="admin-metric-icon"><Package size={20} /></div>
            <div className="admin-metric-label">Listings</div>
            <div className="admin-metric-sublabel">Created today</div>
            <div className="admin-metric-value">0</div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon"><Users size={20} /></div>
            <div className="admin-metric-label">Users</div>
            <div className="admin-metric-sublabel">Registered today</div>
            <div className="admin-metric-value">1</div>
          </div>
        </div>

        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F1A26', letterSpacing: '-0.02em', margin: '24px 4px 16px' }}>
          Marketplace health
        </h2>
        <div className="admin-card">
          <h3>Active listings this week</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 16 }}>
            Steady inventory growth across all categories.
          </p>
          <div style={{ height: 160, borderRadius: 12, background: 'linear-gradient(180deg, var(--brand-green-light) 0%, transparent 100%)', padding: 12 }}>
            <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="adm-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,130 L50,110 L100,115 L150,80 L200,90 L250,60 L300,55 L350,70 L400,30 L400,160 L0,160 Z" fill="url(#adm-grad)" />
              <path d="M0,130 L50,110 L100,115 L150,80 L200,90 L250,60 L300,55 L350,70 L400,30" fill="none" stroke="#0F7A5A" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
