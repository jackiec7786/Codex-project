import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';
import { Plus, LayoutDashboard, List, Sparkles, BarChart3, Store, MessageCircle, Settings, Eye, ShoppingBag, DollarSign, Star, TrendingUp } from 'lucide-react';

const STATS = [
  { value: '12', label: 'Active Listings', icon: <List size={16} />, color: 'orange' },
  { value: '3,420', label: 'Total Views', icon: <Eye size={16} />, color: 'green' },
  { value: '47', label: 'Messages', icon: <MessageCircle size={16} />, color: 'yellow' },
  { value: 'XCD 8,450', label: 'Earnings (30d)', icon: <DollarSign size={16} />, color: 'purple' },
];

const BOOST_PLANS = [
  { name: 'Spotlight', price: 'XCD 5/week', perks: ['Top of category', '5x more views', 'Featured badge'] },
  { name: 'Premium', price: 'XCD 15/week', perks: ['Homepage feature', '10x more views', 'Priority in search'], featured: true },
  { name: 'Pro', price: 'XCD 40/month', perks: ['Verified storefront', 'All boost features', 'Analytics dashboard'] },
];

export default function VendorDashboardPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="dashboard-layout">
          <aside className="dash-sidebar">
            <div className="dash-user">
              <div className="avatar">J</div>
              <div>
                <div className="name">Jackie M.</div>
                <div className="role">Verified Vendor</div>
              </div>
            </div>

            <Link href="/listings/create" className="dash-post-ad-btn">
              <Plus size={16} /> Post New Ad
            </Link>

            <ul className="dash-nav">
              <li className="active"><LayoutDashboard size={16} /> Vendor Dashboard</li>
              <li><Store size={16} /> My Storefront</li>
              <li><List size={16} /> My Listings</li>
              <li><Sparkles size={16} /> Boost &amp; Promote</li>
              <li><MessageCircle size={16} /> Messages <span className="nav-badge">4</span></li>
              <li><BarChart3 size={16} /> Analytics</li>
              <li><Settings size={16} /> Settings</li>
            </ul>
          </aside>

          <div>
            <div className="dash-header">
              <div>
                <h1 className="dash-title">Vendor Dashboard</h1>
                <div style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 4 }}>
                  Manage your storefront, boost listings, and grow your business.
                </div>
              </div>
              <div className="dash-period">Last 30 days ▾</div>
            </div>

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

            {/* Boost plans */}
            <div className="dash-section">
              <div className="dash-section-header">
                <h3><Sparkles size={16} style={{ display: 'inline', color: 'var(--brand)', verticalAlign: '-3px' }} /> Boost Your Listings</h3>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Featured ads get 5x more views</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {BOOST_PLANS.map((p) => (
                  <div key={p.name} style={{
                    padding: 20,
                    border: p.featured ? '2px solid var(--brand)' : '1px solid var(--border)',
                    borderRadius: 12,
                    background: p.featured ? 'var(--brand-light)' : 'var(--surface)',
                    position: 'relative'
                  }}>
                    {p.featured && (
                      <div style={{ position: 'absolute', top: -10, right: 16, background: 'var(--brand)', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 12 }}>
                        POPULAR
                      </div>
                    )}
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{p.name}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--brand)', margin: '4px 0 12px' }}>{p.price}</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
                      {p.perks.map((perk) => (
                        <li key={perk} style={{ padding: '4px 0' }}>✓ {perk}</li>
                      ))}
                    </ul>
                    <button className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'} btn-block`} style={{ marginTop: 16 }}>
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3><TrendingUp size={16} style={{ display: 'inline', color: 'var(--accent-green)', verticalAlign: '-3px' }} /> Views Over Time</h3>
              </div>
              <div className="chart-placeholder">
                <svg className="chart-svg" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,107,53,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,107,53,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,140 C60,120 100,80 160,90 C220,100 260,60 320,55 C380,50 440,90 500,70 C540,55 580,40 600,30 L600,200 L0,200 Z" fill="url(#grad)" />
                  <path d="M0,140 C60,120 100,80 160,90 C220,100 260,60 320,55 C380,50 440,90 500,70 C540,55 580,40 600,30" stroke="var(--brand)" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Top Listings</h3>
                <Link href="/listings" className="see-all">View all →</Link>
              </div>
              {[
                { title: 'Royal Palms in Grenada', meta: '342 views • 12 messages', emoji: '🌴', status: 'active' },
                { title: 'Premier Cook & Bake Stove', meta: '189 views • 5 messages', emoji: '🔥', status: 'active' },
                { title: 'Oster Blender', meta: '76 views • 2 messages', emoji: '🥤', status: 'pending' },
              ].map((l) => (
                <div key={l.title} className="dash-listing-row">
                  <div className="dash-listing-thumb">{l.emoji}</div>
                  <div className="dash-listing-info">
                    <div className="title">{l.title}</div>
                    <div className="meta">{l.meta}</div>
                  </div>
                  <span className={`status-pill ${l.status}`}>{l.status === 'active' ? 'Active' : 'Pending'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
