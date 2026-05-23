'use client';

import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Shield } from 'lucide-react';

const TABS = ['Pending', 'In Review', 'Approved', 'Rejected'];

export default function AdminQueuePage() {
  const [active, setActive] = useState('Pending');

  return (
    <>
      <AdminHeader title="Queue" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="TRUST"
          title="Moderation"
          description="Handle flagged and safety-sensitive work first."
          icon={<Shield size={26} />}
        />

        <div className="admin-card">
          <h2>Content Moderation Queue</h2>

          <div className="admin-tabs">
            {TABS.map((t) => (
              <button
                key={t}
                className={`admin-tab-pill ${active === t ? 'active' : ''}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="admin-empty">
            No items in {active.toLowerCase()} status
          </div>
        </div>
      </div>
    </>
  );
}
