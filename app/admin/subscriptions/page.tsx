const PROCESSED = [
  { name: 'Spice Classifieds Store', plan: 'Pro', amount: 'XCD 25', date: 'Jan 17, 2026', status: 'green',  label: 'approved' },
  { name: 'Telligent LTD',           plan: 'Pro', amount: 'XCD 25', date: 'Jan 16, 2026', status: 'red',    label: 'rejected', note: 'Auto-rejected duplicate pending subscription request.' },
  { name: 'Caribbean Motors',        plan: 'Pro', amount: 'XCD 50', date: 'Nov 18, 2025', status: 'green',  label: 'approved' },
  { name: 'Grenada Fresh Co.',       plan: 'Pro', amount: 'XCD 25', date: 'Nov 15, 2025', status: 'green',  label: 'approved' },
];

export default function AdminSubscriptionsPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Subscriptions</h1>
          <p className="adm-page-sub">Approve vendor subscription requests with payment context.</p>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Pending requests</div>
          <span className="adm-card-meta">0 awaiting</span>
        </div>
        <div className="adm-empty">
          <div className="adm-empty-icon">💳</div>
          No pending subscription requests
        </div>
      </div>

      <div className="adm-card" style={{ padding: 0 }}>
        <div className="adm-card-head" style={{ padding: '18px 22px 0', marginBottom: 0 }}>
          <div className="adm-card-title">Processed requests</div>
          <span className="adm-card-meta">Last 30 days</span>
        </div>
        <div style={{ padding: '8px 0' }}>
          {PROCESSED.map((s, i) => (
            <div key={i} className="adm-list-row">
              <div>
                <div className="adm-list-name">{s.name}</div>
                <div className="adm-list-meta">{s.plan} · {s.amount} · {s.date}</div>
                {s.note && <div className="adm-list-note">{s.note}</div>}
              </div>
              <span className={`adm-pill ${s.status}`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
