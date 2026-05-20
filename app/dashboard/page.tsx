import Header from '@/components/Header';
import { Plus, LayoutDashboard, List, Bookmark, MessageCircle, ShoppingBag, Star, BarChart3, Settings, LogOut, Eye, Star as StarIcon, MessageSquare, DollarSign } from 'lucide-react';

const STATS = [
  { value: '23', label: 'Active Listings', icon: <StarIcon size={16} />, color: 'yellow' },
  { value: '12', label: 'Sold Items', icon: <ShoppingBag size={16} />, color: 'green' },
  { value: '45', label: 'Profile Views', icon: <Eye size={16} />, color: 'red' },
  { value: '$3,450', label: 'Total Earnings', icon: <DollarSign size={16} />, color: 'purple' },
];

const TOP_LISTINGS = [
  { title: '2 Bed Apartment - Grand Anse', meta: '342 views', emoji: '🏡' },
  { title: 'iPhone 13 Pro 128GB', meta: '128 views', emoji: '📱' },
  { title: 'Sectional Sofa - Like New', meta: '87 views', emoji: '🛋️' },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="dashboard-layout">
          <aside className="dash-sidebar">
            <div className="avatar">A</div>
            <div className="dash-user-name">Alicia M.</div>
            <a className="dash-view-profile" href="/profile">View Profile</a>

            <button className="dash-post-ad-btn"><Plus size={16} /> Post an Ad</button>

            <ul className="dash-nav">
              <li className="active"><LayoutDashboard size={16} /> Dashboard</li>
              <li><List size={16} /> My Listings</li>
              <li><Bookmark size={16} /> Saved Items</li>
              <li><MessageCircle size={16} /> Messages <span className="badge">3</span></li>
              <li><ShoppingBag size={16} /> Orders</li>
              <li><Star size={16} /> Reviews</li>
              <li><BarChart3 size={16} /> Analytics</li>
              <li><Settings size={16} /> Settings</li>
              <li><LogOut size={16} /> Log Out</li>
            </ul>
          </aside>

          <div>
            <div className="dash-header">
              <h1 className="dash-title">Dashboard</h1>
              <div className="dash-period">May 12 — Jun 12 ▾</div>
            </div>

            <h3 style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12, fontWeight: 600 }}>Overview</h3>
            <div className="stat-grid">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                  <div className={`stat-icon ${s.color}`}>{s.icon}</div>
                </div>
              ))}
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Views Over Time</h3>
              </div>
              <div className="chart-placeholder">
                <svg className="chart-svg" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(15,122,90,0.25)" />
                      <stop offset="100%" stopColor="rgba(15,122,90,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,140 C60,120 100,80 160,90 C220,100 260,60 320,55 C380,50 440,90 500,70 C540,55 580,40 600,30 L600,200 L0,200 Z" fill="url(#g)" />
                  <path d="M0,140 C60,120 100,80 160,90 C220,100 260,60 320,55 C380,50 440,90 500,70 C540,55 580,40 600,30" stroke="var(--brand-green)" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
              <div className="row-between" style={{ marginTop: 12, fontSize: 11, color: 'var(--text-muted)' }}>
                <span>May 12</span><span>May 19</span><span>May 26</span><span>Jun 2</span><span>Jun 9</span>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Top Performing Listings</h3>
                <a href="/browse" style={{ color: 'var(--brand-green)', fontSize: 13, fontWeight: 600 }}>View all analytics →</a>
              </div>
              {TOP_LISTINGS.map((l) => (
                <div key={l.title} className="dash-listing-row">
                  <div className="dash-listing-thumb">{l.emoji}</div>
                  <div className="dash-listing-info">
                    <div className="title">{l.title}</div>
                    <div className="meta">{l.meta}</div>
                  </div>
                  <span className="status-pill active">Active</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
