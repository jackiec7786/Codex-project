import Link from 'next/link';
import {
  Eye, Users, Package, DollarSign, TrendingUp, ChevronRight,
} from 'lucide-react';

const ATTENTION = [
  { priority: 'high', title: 'Flagged reports',     sub: '2 listings reported as scam in last 24h',     count: 2, href: '/admin/reports' },
  { priority: 'high', title: 'Payment approvals',   sub: 'Vendor subscriptions awaiting manual review', count: 3, href: '/admin/subscriptions' },
  { priority: 'med',  title: 'Vendor applications', sub: 'New storefronts need verification',           count: 5, href: '/admin/vendors' },
  { priority: 'med',  title: 'Bug reports',         sub: 'Open product issues from users',              count: 1, href: '/admin/bugs' },
  { priority: 'low',  title: 'Pending reviews',     sub: 'Reviews waiting for moderation',              count: 8, href: '/admin/reviews' },
];

const ACTIVITY = [
  { color: '',       text: <><strong>Kemba ManWarren</strong> verified as vendor</>,                 time: '12 min ago' },
  { color: 'red',    text: <>Listing <strong>Honda Civic 2002</strong> reported (3rd time)</>,       time: '34 min ago' },
  { color: 'yellow', text: <>Featured slot purchased — <strong>Apartment Grand Anse</strong></>,    time: '2 hours ago' },
  { color: '',       text: <>New vendor application from <strong>Caribbean Motors</strong></>,       time: '4 hours ago' },
  { color: '',       text: <>Daily backup completed successfully</>,                                 time: '6 hours ago' },
];

export default function AdminTodayPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Today</h1>
          <p className="adm-page-sub">Saturday, May 23 · 19 items need your attention</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Export</button>
          <Link href="/admin/queue" className="adm-btn-primary">
            Open queue <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      <div className="adm-status-banner warning">
        <div className="adm-status-banner-dot" />
        <div className="adm-status-banner-text">
          <div className="adm-status-banner-title">5 high-priority items in your queue</div>
          <div className="adm-status-banner-sub">Start with flagged reports and payment approvals — both block buyers.</div>
        </div>
      </div>

      <div className="adm-kpi-grid">
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot blue" /> Active listings</div>
          <div className="adm-kpi-value">1,247</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +18% vs last month</span>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot green" /> Users today</div>
          <div className="adm-kpi-value">847</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +12% vs last month</span>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot yellow" /> Vendor signups</div>
          <div className="adm-kpi-value">34</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +8% vs last month</span>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot red" /> Revenue (MTD)</div>
          <div className="adm-kpi-value">XCD 4,820</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +24% vs last month</span>
        </div>
      </div>

      <div className="adm-two-col">
        <div className="adm-card">
          <div className="adm-card-head">
            <div className="adm-card-title">Needs attention</div>
            <span className="adm-card-meta">Priority order</span>
          </div>
          {ATTENTION.map((a) => (
            <Link key={a.title} href={a.href} className="adm-attention-row">
              <span className={`adm-attention-pill ${a.priority}`}>{a.priority}</span>
              <div className="adm-attention-text">
                <div className="adm-attention-title">{a.title}</div>
                <div className="adm-attention-sub">{a.sub}</div>
              </div>
              <div className="adm-attention-count">{a.count}</div>
              <ChevronRight size={16} style={{ color: 'var(--text-faint)' }} />
            </Link>
          ))}
        </div>

        <div className="adm-card">
          <div className="adm-card-head">
            <div className="adm-card-title">Recent activity</div>
            <span className="adm-card-meta">Live</span>
          </div>
          {ACTIVITY.map((a, i) => (
            <div key={i} className="adm-activity-row">
              <div className={`adm-activity-dot ${a.color}`} />
              <div className="adm-activity-text">
                <div>{a.text}</div>
                <div className="adm-activity-time">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Marketplace health — last 30 days</div>
          <span className="adm-kpi-delta up"><TrendingUp size={11} /> +18%</span>
        </div>
        <div style={{ height: 220, padding: '8px 0' }}>
          <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="adm-today-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F7A5A" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0F7A5A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 L40,150 L80,140 L120,110 L160,120 L200,90 L240,100 L280,75 L320,55 L360,65 L400,30 L400,200 L0,200 Z" fill="url(#adm-today-grad)" />
            <path d="M0,160 L40,150 L80,140 L120,110 L160,120 L200,90 L240,100 L280,75 L320,55 L360,65 L400,30" fill="none" stroke="#0F7A5A" strokeWidth="2.2" />
          </svg>
        </div>
      </div>
    </>
  );
}
