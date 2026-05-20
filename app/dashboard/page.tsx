import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';
import { Plus, LayoutDashboard, List, Bookmark, MessageCircle, Star, Settings, LogOut, Eye, ShoppingBag, DollarSign, Heart } from 'lucide-react';

const STATS = [
  { value: '5', label: 'Active Listings', icon: <List size={16} />, color: 'orange' as const },
  { value: '12', label: 'Saved Items', icon: <Heart size={16} />, color: 'green' as const },
  { value: '342', label: 'Profile Views', icon: <Eye size={16} />, color: 'yellow' as const },
  { value: 'XCD 1,250', label: 'Total Earnings', icon: <DollarSign size={16} />, color: 'purple' as const },
];

const MY_LISTINGS = [
  { title: '10K diamond ring, size 6.5', meta: '87 views • 3 messages', emoji: '💍', status: 'active' as const },
  { title: 'Himalayan Pink Salt 5LB', meta: '34 views • 1 message', emoji: '🧂', status: 'active' as const },
  { title: 'Autoparts and Accessories', meta: '128 views • Sold', emoji: '🔧', status: 'sold' as const },
];

export default function DashboardPage() {
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
                <div className="role">Member since 2024</div>
              </div>
            </div>

            <Link href="/listings/create" className="dash-post-ad-btn">
              <Plus size={16} /> Post New Ad
            </Link>

            <ul className="dash-nav">
              <li className="active"><LayoutDashboard size={16} /> Dashboard</li>
              <li><List size={16} /> My Listings</li>
              <li><Bookmark size={16} /> Saved Items</li>
              <li><MessageCircle size={16} /> Messages <span className="nav-badge">3</span></li>
              <li><ShoppingBag size={16} /> Orders</li>
              <li><Star size={16} /> Reviews</li>
              <li><Settings size={16} /> Settings</li>
              <li><LogOut size={16} /> Log Out</li>
            </ul>
          </aside>

          <div>
            <div className="dash-header">
              <h1 className="dash-title">Welcome back, Jackie 👋</h1>
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

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>Views Over Time</h3>
              </div>
              <div className="chart-placeholder">
                <svg className="chart-svg" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,107,53,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,107,53,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,140 C60,120 100,80 160,90 C220,100 260,60 320,55 C380,50 440,90 500,70 C540,55 580,40 600,30 L600,200 L0,200 Z" fill="url(#g)" />
                  <path d="M0,140 C60,120 100,80 160,90 C220,100 260,60 320,55 C380,50 440,90 500,70 C540,55 580,40 600,30" stroke="var(--brand)" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
            </div>

            <div className="dash-section">
              <div className="dash-section-header">
                <h3>My Listings</h3>
                <Link href="/listings/create" className="see-all">+ New listing</Link>
              </div>
              {MY_LISTINGS.map((l) => (
                <div key={l.title} className="dash-listing-row">
                  <div className="dash-listing-thumb">{l.emoji}</div>
                  <div className="dash-listing-info">
                    <div className="title">{l.title}</div>
                    <div className="meta">{l.meta}</div>
                  </div>
                  <span className={`status-pill ${l.status}`}>
                    {l.status === 'active' ? 'Active' : l.status === 'sold' ? 'Sold' : 'Pending'}
                  </span>
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
