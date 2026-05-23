export default function AdminPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Listings</h1>
          <p className="adm-page-sub">Inspect and manage all marketplace listings.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Export</button>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Listings</div>
          <span className="adm-card-meta">1,247 total listings</span>
        </div>
        <div className="adm-empty">
          <div className="adm-empty-icon">📋</div>
          Nothing here yet — items will appear as activity comes in.
        </div>
      </div>
    </>
  );
}
