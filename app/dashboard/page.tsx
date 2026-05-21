import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  LayoutDashboard, List, MessageCircle, Heart, Bell, Settings,
  Plus, Eye, MessageSquare, Star, TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="dashboard-layout">
          <aside className="dash-sidebar">
            <div className="avatar">JD</div>
            <div className="dash-user-name">Jane Doe</div>
            <Link href="/profile" className="dash-view-profile">View Profile</Link>
            <Link href="/listings/create" className="dash-post-ad-btn">
              <Plus size={16} /> Post an Ad
            </Link>
            <ul className="dash-nav">
              <li className="active"><LayoutDashboard size={16} /> Overview</li>
              <li><List size={16} /> My Listings <span className="badge-count">4</span></li>
              <li><MessageCircle size={16} /> Messages <span className="badge-count">2</span></li>
              <li><Heart size={16} /> Saved</li>
              <li><Bell size={16} /> Notifications</li>
              <li><Settings size={16} /> Settings</li>
            </ul>
          </aside>

          <div>
            <div className="dash-header">
              <h1 className="dash-title">Welcome back, Jane 👋</h1>
              <div className="dash-period">Last 30 days ▾</div>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div>
                  <div className="stat-value">4</div>
                  <div className="stat-label">Active Listings</div>
                </div>
                <div className="stat-icon green"><List size={18} /></div>
              </div>
              <div className="stat-card">
                <div>
                  <div className="stat-value">1,247</div>
                  <div className="stat-label">Total Views</div>
                </div>
                <div className="stat-icon blue"><Eye size={18} /></div>
              </div>
              <div className="stat-card">
                <div>
                  <div className="stat-value">38</div>
                  <div className="stat-label">Leads This Month</div>
                </div>
                <div className="stat-icon yellow"><MessageSquare size={18} /></div>
              </div>
              <div className="stat-card">
                <div>
                  <div className="stat-value">4.8</div>
                  <div className="stat-label">Avg. Rating</div>
                </div>
                <div className="stat-icon red"><Star size={18} /></div>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Listing performance</h3>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--brand-green)', fontWeight: 700, fontSize: 13 }}>
                  <TrendingUp size={14} /> +12% vs last month
                </span>
              </div>
              <div className="chart-placeholder">
                <svg className="chart-svg" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad-user" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L50,120 L100,130 L150,90 L200,100 L250,70 L300,60 L350,80 L400,40 L400,180 L0,180 Z" fill="url(#grad-user)" />
                  <path d="M0,150 L50,120 L100,130 L150,90 L200,100 L250,70 L300,60 L350,80 L400,40" fill="none" stroke="#0F7A5A" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Your listings</h3>
                <Link href="/listings/create" className="btn btn-secondary" style={{ fontSize: 13, padding: '8px 14px' }}>
                  <Plus size={14} /> New Listing
                </Link>
              </div>
              {[
                { e: '📱', t: 'iPhone 13 Pro 128GB', v: 412, m: '8 messages', s: 'featured' },
                { e: '🛋️', t: 'Sectional Sofa - Like New', v: 247, m: '5 messages', s: 'active' },
                { e: '👗', t: 'Vintage Dress Collection', v: 89, m: '2 messages', s: 'active' },
                { e: '📚', t: 'University Textbooks Bundle', v: 0, m: 'Not published', s: 'draft' },
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
                <h3>Recent activity</h3>
              </div>
              {[
                { t: 'New message from Marcus', s: 'About iPhone 13 Pro', when: '2 hours ago' },
                { t: 'Your listing got 23 new views', s: 'Sectional Sofa - Like New', when: '5 hours ago' },
                { t: 'Listing approved', s: 'Vintage Dress Collection is now live', when: '1 day ago' },
              ].map((a) => (
                <div key={a.t} className="dash-listing-row">
                  <div className="dash-listing-thumb">🔔</div>
                  <div className="dash-listing-info">
                    <div className="title">{a.t}</div>
                    <div className="meta">{a.s} · {a.when}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
