import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Users, Search, MoreHorizontal } from 'lucide-react';

const USERS = [
  { name: 'Trey Mendez',         email: 'treylonmendes1@gmail.com',                listings: 0, joined: '5/22/2026', initials: 'TM' },
  { name: 'Theophilus Bethel',   email: 'theophilusbethel@bethelmarineservices.com', listings: 0, joined: '5/21/2026', initials: 'TB', orange: true },
  { name: 'Kemba ManWarren',     email: 'nnekaiahwills15@gmail.com',                listings: 1, joined: '5/21/2026', initials: 'KM' },
  { name: 'Danyelle Kingston',   email: 'danyelle.kingston@example.com',            listings: 3, joined: '5/19/2026', initials: 'DK' },
];

export default function AdminUsersPage() {
  return (
    <>
      <AdminHeader title="Users" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="PEOPLE"
          title="Users"
          description="Review accounts, verification signals, and permissions."
          icon={<Users size={26} />}
        />

        <div className="admin-card">
          <h2>User Management</h2>

          <div className="admin-card-search">
            <Search size={18} color="var(--text-faint)" />
            <input placeholder="Search users..." />
          </div>

          {USERS.map((u) => (
            <div key={u.email} className="admin-user-row">
              <div className={`admin-user-avatar ${u.orange ? 'orange' : ''}`}>{u.initials}</div>
              <div className="admin-user-info">
                <div className="admin-user-name">{u.name}</div>
                <div className="admin-user-email">{u.email}</div>
                <div className="admin-user-meta">{u.listings} {u.listings === 1 ? 'listing' : 'listings'} · Joined {u.joined}</div>
              </div>
              <button className="admin-user-actions" aria-label="More"><MoreHorizontal size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
