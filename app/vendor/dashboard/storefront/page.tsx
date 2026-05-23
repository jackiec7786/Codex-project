import Link from 'next/link';
import { Eye, Edit2, ShieldCheck, Star, MapPin } from 'lucide-react';

export default function VendorStorefrontPage() {
  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">Storefront</h1>
          <p className="vendor-page-sub">This is what buyers see when they visit your shop.</p>
        </div>
        <Link href="/vendors/telligent" className="btn btn-outline-green">
          <Eye size={16} /> Preview public page
        </Link>
      </div>

      <div className="vendor-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="vendor-storefront-banner">
          <div className="vendor-storefront-avatar">TL</div>
          <button style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(255,255,255,0.92)', color: 'var(--text)',
            border: 'none', borderRadius: 10, padding: '8px 14px',
            fontWeight: 700, fontSize: 13, display: 'inline-flex',
            alignItems: 'center', gap: 6, cursor: 'pointer',
          }}>
            <Edit2 size={14} /> Change banner
          </button>
        </div>
        <div style={{ padding: '0 24px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800 }}>
              Telligent LTD <ShieldCheck size={18} style={{ display: 'inline', color: '#1E88E5', verticalAlign: 'middle', marginLeft: 4 }} />
            </h2>
            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--text-muted)', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Star size={14} style={{ color: 'var(--brand-yellow)' }} fill="currentColor" /> 4.9 (38 reviews)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <MapPin size={14} /> St. George&apos;s
              </span>
            </div>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, marginBottom: 16 }}>
            Electrical &amp; IT solutions across Grenada. Installation, repair, and consulting for homes and businesses.
            Anywhere — we come to you.
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            <div><strong style={{ fontSize: 18 }}>12</strong> <span style={{ color: 'var(--text-muted)' }}>Active</span></div>
            <div><strong style={{ fontSize: 18 }}>87</strong> <span style={{ color: 'var(--text-muted)' }}>Sold</span></div>
            <div><strong style={{ fontSize: 18 }}>1h</strong> <span style={{ color: 'var(--text-muted)' }}>Response</span></div>
          </div>
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div className="vendor-card-title">Edit storefront</div>
        </div>

        <div className="vendor-settings-row">
          <label className="vendor-settings-label">Business name</label>
          <input type="text" defaultValue="Telligent LTD" />
        </div>

        <div className="vendor-settings-row">
          <label className="vendor-settings-label">Tagline</label>
          <input type="text" defaultValue="Electrical & IT solutions across Grenada" />
          <div className="vendor-settings-hint">Shown under your name on the storefront and in search results.</div>
        </div>

        <div className="vendor-settings-row">
          <label className="vendor-settings-label">About your business</label>
          <textarea rows={4} defaultValue="Electrical & IT solutions across Grenada. Installation, repair, and consulting for homes and businesses. Anywhere — we come to you." />
        </div>

        <div className="vendor-settings-row">
          <label className="vendor-settings-label">Primary category</label>
          <select defaultValue="services">
            <option value="services">Services</option>
            <option value="electronics">Electronics</option>
            <option value="home-garden">Home &amp; Garden</option>
          </select>
        </div>

        <div className="vendor-settings-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label className="vendor-settings-label">Parish</label>
            <select defaultValue="st-georges">
              <option value="st-georges">St. George&apos;s</option>
              <option value="st-davids">St. David&apos;s</option>
              <option value="st-andrews">St. Andrew&apos;s</option>
            </select>
          </div>
          <div>
            <label className="vendor-settings-label">Service area</label>
            <select defaultValue="island">
              <option value="island">All of Grenada</option>
              <option value="parish">My parish only</option>
              <option value="local">Within 10km</option>
            </select>
          </div>
        </div>

        <div className="vendor-settings-row">
          <label className="vendor-settings-label">Business hours</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            <input type="text" defaultValue="Mon-Fri" />
            <input type="text" defaultValue="8:00 AM" />
            <input type="text" defaultValue="5:00 PM" />
          </div>
          <div className="vendor-settings-hint">Buyers see these on your storefront. Tell them when to expect responses.</div>
        </div>

        <button className="btn btn-secondary btn-lg" style={{ marginTop: 16 }}>Save Changes</button>
      </div>
    </>
  );
}
