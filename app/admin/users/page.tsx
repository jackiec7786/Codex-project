import { Search, MoreHorizontal, ShieldCheck } from 'lucide-react';

const USERS = [
  { name: 'Trey Mendez',       email: 'treylonmendes1@gmail.com',                  listings: 0, joined: 'May 22, 2026', initials: 'TM', color: 'green',  verified: false },
  { name: 'Theophilus Bethel', email: 'theophilusbethel@bethelmarineservices.com', listings: 0, joined: 'May 21, 2026', initials: 'TB', color: 'red',    verified: true  },
  { name: 'Kemba ManWarren',   email: 'nnekaiahwills15@gmail.com',                 listings: 1, joined: 'May 21, 2026', initials: 'KM', color: 'yellow', verified: false },
  { name: 'Danyelle Kingston', email: 'danyelle.kingston@example.com',             listings: 3, joined: 'May 19, 2026', initials: 'DK', color: 'green',  verified: true  },
  { name: 'Marcus James',      email: 'marcus.j@example.com',                      listings: 12, joined: 'Apr 12, 2026', initials: 'MJ', color: 'red',    verified: true  },
];

export default function AdminUsersPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Users</h1>
          <p className="adm-page-sub">Review accounts, verification signals, and permissions.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost">Export CSV</button>
        </div>
      </div>

      <div className="adm-kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot blue" /> Total users</div>
          <div className="adm-kpi-value">2,184</div>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot green" /> Verified</div>
          <div className="adm-kpi-value">1,432</div>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot yellow" /> New today</div>
          <div className="adm-kpi-value">1</div>
        </div>
        <div className="adm-kpi">
          <div className="adm-kpi-label"><span className="dot red" /> Banned</div>
          <div className="adm-kpi-value">3</div>
        </div>
      </div>

      <div className="adm-card" style={{ padding: 0 }}>
        <div style={{ padding: '16px 18px' }}>
          <div className="adm-search" style={{ margin: 0 }}>
            <Search size={16} />
            <input placeholder="Search by name, email, or ID..." />
          </div>
        </div>
        {USERS.map((u) => (
          <div key={u.email} className="adm-user-row">
            <div className={`adm-user-avatar ${u.color}`}>{u.initials}</div>
            <div className="adm-user-info">
              <div className="adm-user-name">
                {u.name}
                {u.verified && <ShieldCheck size={13} style={{ color: '#1E88E5' }} />}
              </div>
              <div className="adm-user-meta">{u.email}</div>
              <div style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 2 }}>
                {u.listings} {u.listings === 1 ? 'listing' : 'listings'} · Joined {u.joined}
              </div>
            </div>
            <button className="adm-user-action" aria-label="More"><MoreHorizontal size={16} /></button>
          </div>
        ))}
      </div>
    </>
  );
}
