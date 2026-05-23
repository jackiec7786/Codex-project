import { Zap, TrendingUp, Eye, Crown } from 'lucide-react';

const ACTIVE_BOOSTS = [
  { emoji: '🏠', name: '2 Bed Apartment in Grand Anse', expires: '2 days left', views: 412, baseline: 89 },
  { emoji: '📱', name: 'iPhone 13 Pro 128GB',           expires: '12 days left', views: 247, baseline: 51 },
];

export default function VendorBoostPage() {
  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">Boost Center</h1>
          <p className="vendor-page-sub">Featured listings get up to 5x more views and homepage placement.</p>
        </div>
      </div>

      <div className="vendor-kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 28 }}>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon red"><Zap size={18} /></div>
          <div className="vendor-kpi-label">Active boosts</div>
          <div className="vendor-kpi-value">2</div>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon blue"><Eye size={18} /></div>
          <div className="vendor-kpi-label">Extra views (boosted)</div>
          <div className="vendor-kpi-value">519</div>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon green"><TrendingUp size={18} /></div>
          <div className="vendor-kpi-label">Avg. uplift</div>
          <div className="vendor-kpi-value">4.6x</div>
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div className="vendor-card-title">Active boosts</div>
        </div>
        {ACTIVE_BOOSTS.map((b) => (
          <div key={b.name} className="vendor-listing-row">
            <div className="vendor-listing-thumb">{b.emoji}</div>
            <div>
              <div className="vendor-listing-name">{b.name}</div>
              <div className="vendor-listing-meta">
                {b.views} views vs {b.baseline} baseline · {b.expires}
              </div>
            </div>
            <span className="vendor-status featured">Featured</span>
            <button className="btn btn-outline-green" style={{ padding: '6px 14px', fontSize: 13 }}>Extend</button>
          </div>
        ))}
      </div>

      <div className="vendor-card-head" style={{ marginTop: 24, marginBottom: 16 }}>
        <div className="vendor-card-title">Boost a new listing</div>
      </div>

      <div className="vendor-boost-grid">
        <div className="vendor-boost-card">
          <div className="vendor-boost-duration">1 Week</div>
          <div className="vendor-boost-price">XCD 5<small>/listing</small></div>
          <ul className="vendor-boost-features">
            <li>Featured badge</li>
            <li>Top of category page</li>
            <li>3-5x more views</li>
          </ul>
          <button className="btn btn-outline-green btn-block">Choose</button>
        </div>

        <div className="vendor-boost-card popular">
          <div className="vendor-boost-tag">Most Popular</div>
          <div className="vendor-boost-duration">4 Weeks</div>
          <div className="vendor-boost-price">XCD 15<small>/listing</small></div>
          <ul className="vendor-boost-features">
            <li>Featured badge</li>
            <li>Top of category &amp; homepage</li>
            <li>5x more views</li>
            <li>Save XCD 5 vs weekly</li>
          </ul>
          <button className="btn btn-secondary btn-block">Choose</button>
        </div>

        <div className="vendor-boost-card">
          <div className="vendor-boost-duration">12 Weeks</div>
          <div className="vendor-boost-price">XCD 36<small>/listing</small></div>
          <ul className="vendor-boost-features">
            <li>Featured badge</li>
            <li>Top of category &amp; homepage</li>
            <li>5x more views</li>
            <li>Save XCD 24 vs weekly</li>
          </ul>
          <button className="btn btn-outline-green btn-block">Choose</button>
        </div>
      </div>

      <div className="vendor-card" style={{ marginTop: 24, background: 'linear-gradient(135deg, var(--brand-yellow-light) 0%, var(--bg) 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--brand-yellow)', color: 'var(--text)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Crown size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Upgrade to Pro Annual</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
              Get 5 featured slots per month included + priority support. Save XCD 200/year vs monthly.
            </div>
            <button className="btn btn-yellow">View Pro Plans</button>
          </div>
        </div>
      </div>
    </>
  );
}
