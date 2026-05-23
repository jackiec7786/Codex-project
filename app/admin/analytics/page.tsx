import { TrendingUp } from 'lucide-react';

export default function AdminAnalyticsPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Analytics</h1>
          <p className="adm-page-sub">Platform-wide engagement and growth metrics.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Last 30 days</button>
          <button className="adm-btn-primary">Export</button>
        </div>
      </div>

      <div className="adm-kpi-grid">
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot blue" /> Active listings</div>
          <div className="adm-kpi-value">1,247</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +18%</span>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot green" /> New users</div>
          <div className="adm-kpi-value">847</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +12%</span>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot yellow" /> Vendor signups</div>
          <div className="adm-kpi-value">34</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +8%</span>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot red" /> Total revenue</div>
          <div className="adm-kpi-value">XCD 4,820</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +24%</span>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Listings created — last 30 days</div>
        </div>
        <div style={{ height: 240, padding: '8px 0' }}>
          <svg viewBox="0 0 400 220" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="ana-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,170 L40,160 L80,150 L120,120 L160,130 L200,100 L240,110 L280,80 L320,60 L360,70 L400,40 L400,220 L0,220 Z" fill="url(#ana-grad)" />
            <path d="M0,170 L40,160 L80,150 L120,120 L160,130 L200,100 L240,110 L280,80 L320,60 L360,70 L400,40" fill="none" stroke="#0F7A5A" strokeWidth="2.2" />
          </svg>
        </div>
      </div>
    </>
  );
}
