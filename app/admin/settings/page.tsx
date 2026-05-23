'use client';

import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function AdminSettingsPage() {
  const [announceOn, setAnnounceOn] = useState(true);

  return (
    <>
      <AdminHeader title="Settings" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="PLATFORM"
          title="Settings"
          description="Update platform configuration and admin controls."
          icon={<SlidersHorizontal size={26} />}
        />

        <div className="admin-card">
          <h2>Site Settings</h2>

          <div className="admin-form-row">
            <label className="admin-form-label">Announcement Enabled</label>
            <div
              className={`admin-toggle ${announceOn ? 'on' : ''}`}
              onClick={() => setAnnounceOn(!announceOn)}
              role="switch"
              aria-checked={announceOn}
              tabIndex={0}
            />
            <div className="admin-form-hint">Enable or disable a site-wide announcement banner</div>
          </div>

          <div className="admin-form-row">
            <label className="admin-form-label">Announcement Message</label>
            <input
              type="text"
              defaultValue="Welcome to Spice Classifieds! Enjoy our new featu"
            />
            <div className="admin-form-hint">Message for the site-wide announcement banner</div>
          </div>

          <div className="admin-form-row">
            <label className="admin-form-label">Announcement Type</label>
            <button className="admin-select-pill">
              Info <ChevronDown size={16} />
            </button>
            <div className="admin-form-hint">Type of announcement (info, warning, success, danger)</div>
          </div>

          <div className="admin-form-row">
            <label className="admin-form-label">Contact Email</label>
            <input type="email" defaultValue="hello@spiceclassifieds.com" />
            <div className="admin-form-hint">Primary contact email shown in the site footer</div>
          </div>

          <div className="admin-form-row">
            <label className="admin-form-label">Default Currency</label>
            <button className="admin-select-pill">
              XCD <ChevronDown size={16} />
            </button>
            <div className="admin-form-hint">Default currency shown on listings</div>
          </div>

          <div style={{ marginTop: 20 }}>
            <button className="admin-btn-primary">Save Settings</button>
          </div>
        </div>
      </div>
    </>
  );
}
