'use client';

import { useState } from 'react';
import { CreditCard, Bell, ShieldCheck, AlertCircle } from 'lucide-react';

export default function VendorSettingsPage() {
  const [notif, setNotif] = useState({ messages: true, leads: true, weekly: true, marketing: false });

  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">Settings</h1>
          <p className="vendor-page-sub">Account, payments, notifications, and verification.</p>
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head" style={{ alignItems: 'flex-start' }}>
          <div>
            <div className="vendor-card-title">Current plan</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Renews Jan 17, 2026</div>
          </div>
          <span className="vendor-status featured">Pro</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Listings</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Unlimited</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Featured slots</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>5/month</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Monthly cost</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>XCD 150</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-secondary">Change plan</button>
          <button className="btn btn-ghost" style={{ color: 'var(--brand-red)' }}>Cancel subscription</button>
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <CreditCard size={18} color="var(--brand-green)" />
            <div className="vendor-card-title">Payment method</div>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 16, background: 'var(--bg)', borderRadius: 12, marginBottom: 12,
        }}>
          <div>
            <div style={{ fontWeight: 700 }}>•••• 4242</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Visa · expires 09/2027</div>
          </div>
          <button className="btn btn-outline-green" style={{ padding: '6px 14px', fontSize: 13 }}>Update</button>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          DCash and WiPay are coming soon for Caribbean vendors.
        </div>
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Bell size={18} color="var(--brand-green)" />
            <div className="vendor-card-title">Notifications</div>
          </div>
        </div>
        {[
          { key: 'messages', label: 'New buyer messages', sub: 'Email + push' },
          { key: 'leads',    label: 'New leads &amp; saves', sub: 'Push only' },
          { key: 'weekly',   label: 'Weekly performance report', sub: 'Email · every Monday' },
          { key: 'marketing', label: 'Tips &amp; product updates', sub: 'Email · occasional' },
        ].map((n) => (
          <div key={n.key} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 0', borderBottom: '1px solid var(--border)',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: n.label }} />
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{n.sub}</div>
            </div>
            <div
              className={`admin-toggle ${notif[n.key as keyof typeof notif] ? 'on' : ''}`}
              onClick={() => setNotif({ ...notif, [n.key]: !notif[n.key as keyof typeof notif] })}
              role="switch"
            />
          </div>
        ))}
      </div>

      <div className="vendor-card">
        <div className="vendor-card-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShieldCheck size={18} color="#1E88E5" />
            <div className="vendor-card-title">Verification</div>
          </div>
          <span className="vendor-status active">Verified</span>
        </div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55 }}>
          Your business has been verified. Buyers see a blue checkmark next to your name on every listing.
          To re-verify or update business documents, contact support.
        </div>
      </div>

      <div className="vendor-card" style={{ borderColor: 'var(--brand-red-light)' }}>
        <div className="vendor-card-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <AlertCircle size={18} color="var(--brand-red)" />
            <div className="vendor-card-title" style={{ color: 'var(--brand-red)' }}>Danger zone</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
          Deactivating your vendor account hides all listings and pauses your subscription.
          Your data is kept for 90 days in case you change your mind.
        </div>
        <button className="btn btn-outline-red">Deactivate vendor account</button>
      </div>
    </>
  );
}
