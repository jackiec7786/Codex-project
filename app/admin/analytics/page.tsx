import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { BarChart3 } from 'lucide-react';

export default function AdminAnalyticsPage() {
  return (
    <>
      <AdminHeader title="Analytics" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="GROWTH"
          title="Analytics"
          description="Platform-wide engagement and growth metrics."
          icon={<BarChart3 size={26} />}
        />

        <div className="admin-metric-grid">
          {[
            { label: 'Active listings',  value: '1,247', sub: '+18% vs last month' },
            { label: 'New users',        value: '847',   sub: '+12% vs last month' },
            { label: 'Vendor signups',   value: '34',    sub: '+8% vs last month' },
            { label: 'Total revenue',    value: 'XCD 4,820', sub: '+24% vs last month' },
          ].map((m) => (
            <div key={m.label} className="admin-metric-card">
              <div className="admin-metric-icon"><BarChart3 size={18} /></div>
              <div className="admin-metric-label">{m.label}</div>
              <div className="admin-metric-sublabel">{m.sub}</div>
              <div className="admin-metric-value" style={{ width: 'auto', height: 'auto', borderRadius: 8, padding: '4px 12px', background: 'transparent', fontSize: 22 }}>{m.value}</div>
            </div>
          ))}
        </div>

        <div className="admin-card">
          <h3>Listings created — last 30 days</h3>
          <div style={{ height: 200, borderRadius: 12, background: 'linear-gradient(180deg, var(--brand-green-light) 0%, transparent 100%)', padding: 12, marginTop: 12 }}>
            <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="ana-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,150 L40,140 L80,130 L120,100 L160,110 L200,80 L240,90 L280,70 L320,50 L360,60 L400,30 L400,200 L0,200 Z" fill="url(#ana-grad)" />
              <path d="M0,150 L40,140 L80,130 L120,100 L160,110 L200,80 L240,90 L280,70 L320,50 L360,60 L400,30" fill="none" stroke="#0F7A5A" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
