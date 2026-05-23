export default function AdminPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Reviews</h1>
          <p className="adm-page-sub">Moderate buyer and seller reviews.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Export</button>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Reviews</div>
          <span className="adm-card-meta">8 pending moderation</span>
        </div>
        <div className="adm-empty">
          <div className="adm-empty-icon">📋</div>
          Nothing here yet — items will appear as activity comes in.
        </div>
      </div>
    </>
  );
}
