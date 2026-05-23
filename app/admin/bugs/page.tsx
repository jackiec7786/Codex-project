export default function AdminPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Bug reports</h1>
          <p className="adm-page-sub">Track product issues reported by users and staff.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Export</button>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Bug reports</div>
          <span className="adm-card-meta">1 open bug report</span>
        </div>
        <div className="adm-empty">
          <div className="adm-empty-icon">📋</div>
          Nothing here yet — items will appear as activity comes in.
        </div>
      </div>
    </>
  );
}
