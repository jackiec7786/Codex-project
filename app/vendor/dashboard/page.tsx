import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  LayoutDashboard, List, MessageCircle, Heart, BarChart3,
  Settings, Plus, Eye, MessageSquare, Star, TrendingUp, Zap
} from 'lucide-react';

export default function VendorDashboardPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="dashboard-layout">
          <aside className="dash-sidebar">
            <div className="avatar" style={{ width: 64, height: 64, fontSize: 22 }}>TL</div>
            <div className="dash-user-name">Telligent LTD</div>
            <Link href="/profile" className="dash-view-profile">View Storefront</Link>
            <Link href="/listings/create" className="dash-post-ad-btn">
              <Plus size={16} /> Post New Listing
            </Link>
            <ul className="dash-nav">
              <li className="active"><LayoutDashboard size={16} /> Overview</li>
              <li><List size={16} /> My Listings <span className="badge-count">12</span></li>
              <li><MessageCircle size={16} /> Messages <span className="badge-count">3</span></li>
              <li><Heart size={16} /> Favorites</li>
              <li><BarChart3 size={16} /> Analytics</li>
              <li><Zap size={16} /> Boost Center</li>
              <li><Settings size={16} /> Settings</li>
            </ul>
          </aside>

          <div>
            <div className="dash-header">
              <h1 className="dash-title">Vendor Dashboard</h1>
              <div className="dash-period">Last 30 days ▾</div>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div>
                  <div className="stat-value">12</div>
                  <div className="stat-label">Active Listings</div>
                </div>
                <div className="stat-icon green"><List size={18} /></div>
              </div>
              <div className="stat-card">
                <div>
                  <div className="stat-value">3,847</div>
                  <div className="stat-label">Total Views</div>
                </div>
                <div className="stat-icon blue"><Eye size={18} /></div>
              </div>
              <div className="stat-card">
                <div>
                  <div className="stat-value">142</div>
                  <div className="stat-label">Leads This Month</div>
                </div>
                <div className="stat-icon yellow"><MessageSquare size={18} /></div>
              </div>
              <div className="stat-card">
                <div>
                  <div className="stat-value">4.9</div>
                  <div className="stat-label">Avg. Rating</div>
                </div>
                <div className="stat-icon red"><Star size={18} /></div>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Views over time</h3>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--brand-green)', fontWeight: 700, fontSize: 13 }}>
                  <TrendingUp size={14} /> +18% vs last month
                </span>
              </div>
              <div className="chart-placeholder">
                <svg className="chart-svg" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,140 L40,120 L80,100 L120,110 L160,80 L200,70 L240,60 L280,75 L320,45 L360,30 L400,20 L400,180 L0,180 Z" fill="url(#grad)" />
                  <path d="M0,140 L40,120 L80,100 L120,110 L160,80 L200,70 L240,60 L280,75 L320,45 L360,30 L400,20" fill="none" stroke="#0F7A5A" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Your top listings</h3>
                <Link href="/listings" style={{ color: 'var(--brand-red)', fontWeight: 600, fontSize: 13 }}>View all</Link>
              </div>

              {[
                { e: '🏠', t: '2 Bed Apartment in Grand Anse', v: 412, m: '8 messages', s: 'featured' },
                { e: '📱', t: 'iPhone 13 Pro 128GB', v: 247, m: '5 messages', s: 'active' },
                { e: '⚡', t: 'Electrical Installation Service', v: 189, m: '12 messages', s: 'active' },
                { e: '🛋️', t: 'Sectional Sofa - Like New', v: 156, m: '3 messages', s: 'active' },
                { e: '🚗', t: 'Honda Civic 2018 — One Owner', v: 0, m: 'Not published', s: 'draft' },
              ].map((row) => (
                <div key={row.t} className="dash-listing-row">
                  <div className="dash-listing-thumb">{row.e}</div>
                  <div className="dash-listing-info">
                    <div className="title">{row.t}</div>
                    <div className="meta">{row.v} views · {row.m}</div>
                  </div>
                  <span className={`status-pill ${row.s}`}>{row.s}</span>
                </div>
              ))}
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Boost Center</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 16 }}>
                Featured listings get up to 5x more views and stay at the top of category pages.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {[
                  { p: '1 week', x: '$5', d: 'Try it out' },
                  { p: '4 weeks', x: '$15', d: 'Most popular', highlight: true },
                  { p: '12 weeks', x: '$36', d: 'Best value' },
                ].map((pkg) => (
                  <div key={pkg.p} style={{
                    background: pkg.highlight ? 'var(--brand-green-light)' : 'var(--surface)',
                    border: pkg.highlight ? '1.5px solid var(--brand-green)' : '1px solid var(--border)',
                    borderRadius: 12, padding: 18, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>{pkg.p}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--brand-green)' }}>XCD {pkg.x}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 12 }}>{pkg.d}</div>
                    <button className={pkg.highlight ? 'btn btn-secondary btn-block' : 'btn btn-outline-green btn-block'}>
                      Boost a listing
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
