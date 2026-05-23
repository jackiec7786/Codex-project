export default function AdminPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Transactions</h1>
          <p className="adm-page-sub">Audit transaction history across the platform.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Export</button>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Transactions</div>
          <span className="adm-card-meta">XCD 4,820 this month</span>
        </div>
        <div className="adm-empty">
          <div className="adm-empty-icon">📋</div>
          Nothing here yet — items will appear as activity comes in.
        </div>
      </div>
    </>
  );
}
