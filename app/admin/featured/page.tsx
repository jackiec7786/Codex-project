import { Plus } from 'lucide-react';

export default function AdminFeaturedPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Featured listings</h1>
          <p className="adm-page-sub">Manage promoted inventory and premium placement quality.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-primary">
            <Plus size={14} /> Add featured listing
          </button>
        </div>
      </div>

      <div className="adm-kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot red" /> Active featured</div>
          <div className="adm-kpi-value">12</div>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot yellow" /> Pending requests</div>
          <div className="adm-kpi-value">0</div>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot green" /> Revenue this week</div>
          <div className="adm-kpi-value">XCD 280</div>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Pricing</div>
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Price (XCD)</label>
          <input type="number" defaultValue="5.00" step="0.01" />
          <div className="adm-form-hint">Cost per featured listing slot</div>
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Default duration</label>
          <select defaultValue="7">
            <option value="7">7 days</option>
            <option value="14">14 days</option>
            <option value="30">30 days</option>
          </select>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Pending featured requests</div>
        </div>
        <div className="adm-empty">
          <div className="adm-empty-icon">⭐</div>
          No pending featured requests
        </div>
      </div>
    </>
  );
}
