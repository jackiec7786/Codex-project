import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Star, ChevronDown, Plus } from 'lucide-react';

export default function AdminFeaturedPage() {
  return (
    <>
      <AdminHeader title="Featured" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="CONTENT"
          title="Featured listings"
          description="Manage promoted inventory and premium placement quality."
          icon={<Star size={26} />}
        />

        <div className="admin-card">
          <h2>Featured Listing Settings</h2>

          <div className="admin-form-row admin-featured-settings">
            <label className="admin-form-label">Price (XCD)</label>
            <input type="number" defaultValue="5.00" step="0.01" />
          </div>

          <div className="admin-form-row admin-featured-settings">
            <label className="admin-form-label">Duration (days)</label>
            <button className="admin-select-pill">
              7 days <ChevronDown size={16} />
            </button>
          </div>

          <div style={{ marginTop: 20 }}>
            <button className="admin-btn-primary">Save Settings</button>
          </div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F1A26', margin: '24px 4px 12px' }}>
          Pending Featured Requests
        </h2>
        <div className="admin-empty">No pending featured requests found</div>

        <div style={{ marginTop: 24, color: 'var(--brand-green)', fontSize: 13, fontWeight: 800, letterSpacing: '0.15em', marginBottom: 12, paddingLeft: 4 }}>
          ADD NEW FEATURED LISTING
        </div>
        <div className="admin-card">
          <div className="admin-form-row">
            <label className="admin-form-label">Listing ID</label>
            <input type="text" placeholder="Paste listing ID..." />
          </div>
          <div className="admin-form-row">
            <label className="admin-form-label">Duration</label>
            <button className="admin-select-pill">
              7 days <ChevronDown size={16} />
            </button>
          </div>
          <button className="admin-btn-primary">
            <Plus size={16} /> Add Featured Listing
          </button>
        </div>
      </div>
    </>
  );
}
