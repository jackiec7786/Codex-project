import Link from 'next/link';
import {
  Eye, MessageSquare, DollarSign, Star, TrendingUp, TrendingDown,
  MessageCircle, Heart, Zap, ChevronDown,
} from 'lucide-react';

const TOP_LISTINGS = [
  { emoji: '🏠', name: '2 Bed Apartment in Grand Anse', views: 412, leads: 8, status: 'featured' },
  { emoji: '📱', name: 'iPhone 13 Pro 128GB', views: 247, leads: 5, status: 'active' },
  { emoji: '⚡', name: 'Electrical Installation Service', views: 189, leads: 12, status: 'active' },
  { emoji: '🛋️', name: 'Sectional Sofa - Like New', views: 156, leads: 3, status: 'active' },
];

const ATTENTION = [
  { Icon: MessageCircle, color: 'red',   title: '3 new buyer messages', sub: 'Reply within 1 hour to maintain top response rating', time: '12m' },
  { Icon: Heart,         color: 'green', title: '8 new saves on your listings', sub: 'Sectional Sofa and iPhone are trending', time: '2h' },
  { Icon: Zap,           color: '',      title: 'Boost expires in 2 days', sub: 'Renew "2 Bed Apartment" featured slot', time: '1d' },
];

export default function VendorOverviewPage() {
  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">Welcome back, Telligent 👋</h1>
          <p className="vendor-page-sub">Here&apos;s how your storefront performed today.</p>
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
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +18% vs last month</span>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon yellow"><MessageSquare size={18} /></div>
          <div className="vendor-kpi-label">Leads This Month</div>
          <div className="vendor-kpi-value">142</div>
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +24% vs last month</span>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon green"><DollarSign size={18} /></div>
          <div className="vendor-kpi-label">Revenue (XCD)</div>
          <div className="vendor-kpi-value">$4,820</div>
          <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +12% vs last month</span>
        </div>
        <div className="vendor-kpi">
          <div className="vendor-kpi-icon red"><Star size={18} /></div>
          <div className="vendor-kpi-label">Avg. Rating</div>
          <div className="vendor-kpi-value">4.9</div>
          <span className="vendor-kpi-delta down"><TrendingDown size={12} /> -0.1 vs last month</span>
        </div>
      </div>

      <div className="vendor-two-col">
        <div className="vendor-card">
          <div className="vendor-card-head">
            <div className="vendor-card-title">Views over time</div>
            <span className="vendor-kpi-delta up"><TrendingUp size={12} /> +18%</span>
          </div>
          <div className="vendor-chart">
            <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="v-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,160 L40,140 L80,120 L120,130 L160,90 L200,80 L240,70 L280,85 L320,55 L360,40 L400,30 L400,200 L0,200 Z" fill="url(#v-grad)" />
              <path d="M0,160 L40,140 L80,120 L120,130 L160,90 L200,80 L240,70 L280,85 L320,55 L360,40 L400,30" fill="none" stroke="#0F7A5A" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        <div className="vendor-card">
          <div className="vendor-card-head">
            <div className="vendor-card-title">Needs attention</div>
          </div>
          {ATTENTION.map((a) => {
            const Icon = a.Icon;
            return (
              <div key={a.title} className="vendor-attention">
                <div className={`vendor-attention-icon ${a.color}`}><Icon size={16} /></div>
                <div className="vendor-attention-text">
                  <div className="vendor-attention-title">{a.title}</div>
                  <div className="vendor-attention-sub">{a.sub}</div>
                </div>
                <div className="vendor-attention-time">{a.time}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div className="vendor-card-title">Top performing listings</div>
          <Link href="/vendor/dashboard/listings" className="vendor-card-link">View all →</Link>
        </div>
        {TOP_LISTINGS.map((l) => (
          <div key={l.name} className="vendor-listing-row">
            <div className="vendor-listing-thumb">{l.emoji}</div>
            <div>
              <div className="vendor-listing-name">{l.name}</div>
              <div className="vendor-listing-meta">{l.leads} leads this month</div>
            </div>
            <div className="vendor-listing-stat">
              <strong>{l.views.toLocaleString()}</strong>
              <span>VIEWS</span>
            </div>
            <span className={`vendor-status ${l.status}`}>{l.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}
