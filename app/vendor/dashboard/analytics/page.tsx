import { Eye, MessageSquare, DollarSign, TrendingUp, ChevronDown } from 'lucide-react';

const TOP = [
  { emoji: '🏠', name: '2 Bed Apartment in Grand Anse',  views: 412, leads: 8,  rate: '1.9%' },
  { emoji: '⚡', name: 'Electrical Installation Service', views: 189, leads: 12, rate: '6.3%' },
  { emoji: '📱', name: 'iPhone 13 Pro 128GB',            views: 247, leads: 5,  rate: '2.0%' },
  { emoji: '🛋️', name: 'Sectional Sofa - Like New',      views: 156, leads: 3,  rate: '1.9%' },
];

const TRAFFIC_SOURCES = [
  { source: 'Direct search', percent: 42, color: 'var(--brand-green)' },
  { source: 'Category browse', percent: 28, color: 'var(--brand-red)' },
  { source: 'Homepage featured', percent: 19, color: 'var(--brand-yellow)' },
  { source: 'External links', percent: 11, color: '#9CA3AF' },
];

export default function VendorAnalyticsPage() {
  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">Analytics</h1>
          <p className="vendor-page-sub">Performance breakdown across views, leads, and revenue.</p>
        </div>
        <button className="vendor-period-pill">
          Last 30 days <ChevronDown size={14} />
        </button>
      </div>

      <div className="vendor-kpi-grid">
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon blue"><Eye size={18} /></div>
          <div className="vendor-kpi-label">Total Views</div>
          <div className="vendor-kpi-value">3,847</div>
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +18%</span>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon yellow"><MessageSquare size={18} /></div>
          <div className="vendor-kpi-label">Leads</div>
          <div className="vendor-kpi-value">142</div>
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +24%</span>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon green"><DollarSign size={18} /></div>
          <div className="vendor-kpi-label">Revenue</div>
          <div className="vendor-kpi-value">XCD 4,820</div>
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +12%</span>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon red"><TrendingUp size={18} /></div>
          <div className="vendor-kpi-label">Conversion</div>
          <div className="vendor-kpi-value">3.7%</div>
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +0.4pt</span>
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div className="vendor-card-title">Views &amp; leads — last 30 days</div>
        </div>
        <div className="vendor-chart" style={{ height: 260 }}>
          <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="va-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,200 L40,180 L80,170 L120,140 L160,150 L200,110 L240,120 L280,90 L320,70 L360,80 L400,40 L400,240 L0,240 Z" fill="url(#va-grad)" />
            <path d="M0,200 L40,180 L80,170 L120,140 L160,150 L200,110 L240,120 L280,90 L320,70 L360,80 L400,40" fill="none" stroke="#0F7A5A" strokeWidth="2.5" />
            <path d="M0,220 L40,215 L80,212 L120,205 L160,208 L200,195 L240,200 L280,185 L320,175 L360,180 L400,160" fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--text-muted)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--brand-green)' }} /> Views
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 14, height: 2, background: 'var(--brand-red)' }} /> Leads
          </span>
        </div>
      </div>

      <div className="vendor-two-col">
        <div className="vendor-card">
          <div className="vendor-card-head">
            <div className="vendor-card-title">Top performing listings</div>
          </div>
          {TOP.map((l) => (
            <div key={l.name} className="vendor-listing-row">
              <div className="vendor-listing-thumb">{l.emoji}</div>
              <div>
                <div className="vendor-listing-name">{l.name}</div>
                <div className="vendor-listing-meta">{l.views} views · {l.leads} leads</div>
              </div>
              <div className="vendor-listing-stat">
                <strong>{l.rate}</strong>
                <span>CONV.</span>
              </div>
            </div>
          ))}
        </div>

        <div className="vendor-card">
          <div className="vendor-card-head">
            <div className="vendor-card-title">Traffic sources</div>
          </div>
          {TRAFFIC_SOURCES.map((s) => (
            <div key={s.source} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                <span style={{ fontWeight: 700 }}>{s.source}</span>
                <span style={{ color: 'var(--text-muted)' }}>{s.percent}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--bg)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.percent}%`, background: s.color, borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
