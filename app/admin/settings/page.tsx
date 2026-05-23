'use client';

import { useState } from 'react';

export default function AdminSettingsPage() {
  const [announceOn, setAnnounceOn] = useState(true);

  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Settings</h1>
          <p className="adm-page-sub">Update platform configuration and admin controls.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-primary">Save changes</button>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Site-wide announcement</div>
          <div
            className={`adm-toggle ${announceOn ? 'on' : ''}`}
            onClick={() => setAnnounceOn(!announceOn)}
            role="switch"
            aria-checked={announceOn}
          />
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Announcement message</label>
          <input type="text" defaultValue="Welcome to Spice Classifieds! Enjoy our new features." />
          <div className="adm-form-hint">Shown as a banner at the top of every page</div>
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Announcement type</label>
          <select defaultValue="info">
            <option value="info">Info (blue)</option>
            <option value="success">Success (green)</option>
            <option value="warning">Warning (yellow)</option>
            <option value="danger">Danger (red)</option>
          </select>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Contact &amp; defaults</div>
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Contact email</label>
          <input type="email" defaultValue="hello@spiceclassifieds.com" />
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Default currency</label>
          <select defaultValue="XCD">
            <option>XCD</option>
            <option>USD</option>
          </select>
        </div>
        <div className="adm-form-row">
          <label className="adm-form-label">Default parish</label>
          <select defaultValue="st-georges">
            <option value="st-georges">St. George&apos;s</option>
            <option value="st-davids">St. David&apos;s</option>
            <option value="st-andrews">St. Andrew&apos;s</option>
          </select>
        </div>
      </div>
    </>
  );
}
