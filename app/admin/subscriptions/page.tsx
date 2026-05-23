import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Sparkles } from 'lucide-react';

const PROCESSED = [
  { name: 'Spice Classifieds Store', plan: 'Pro', amount: 'XCD 25', date: '1/17/2026', status: 'approved' },
  {
    name: 'Spice Classifieds Store', plan: 'Pro', amount: 'XCD 25', date: '1/16/2026', status: 'rejected',
    note: 'Auto-rejected duplicate pending subscription request.',
  },
  { name: 'Spice Classifieds Store', plan: 'Pro', amount: 'XCD 50', date: '11/18/2025', status: 'approved' },
];

export default function AdminSubscriptionsPage() {
  return (
    <>
      <AdminHeader title="Subscriptions" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="FINANCE"
          title="Subscriptions"
          description="Approve vendor subscription requests with payment context."
          icon={<Sparkles size={26} />}
        />

        <div className="admin-card">
          <div style={{ color: 'var(--brand-green)', fontSize: 13, fontWeight: 800, letterSpacing: '0.15em', marginBottom: 12 }}>
            PENDING SUBSCRIPTION REQUESTS
          </div>
          <div className="admin-empty">No pending subscription requests</div>
        </div>

        <div className="admin-card">
          <div style={{ color: 'var(--brand-green)', fontSize: 13, fontWeight: 800, letterSpacing: '0.15em', marginBottom: 12 }}>
            PROCESSED REQUESTS
          </div>
          {PROCESSED.map((s, i) => (
            <div key={i} className="admin-sub-row">
              <div className="admin-sub-row-info">
                <div className="admin-sub-row-name">{s.name}</div>
                <div className="admin-sub-row-meta">{s.plan} · {s.amount} · {s.date}</div>
                {s.note && <div className="admin-sub-row-note">Note: {s.note}</div>}
              </div>
              <span className={`admin-sub-status ${s.status}`}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
