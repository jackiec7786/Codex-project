import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Tag, Plus } from 'lucide-react';

const CAT_ROWS = [
  { name: 'Agriculture', slug: 'agriculture', child: false },
  { name: 'Crops', slug: 'crops', child: true },
  { name: 'Equipment', slug: 'equipment-agriculture', child: true },
  { name: 'Feed', slug: 'feed', child: true },
  { name: 'Land', slug: 'land-agriculture', child: true },
  { name: 'Livestock', slug: 'livestock', child: true },
  { name: 'Seeds', slug: 'seeds', child: true },
  { name: 'Electronics', slug: 'electronics', child: false },
  { name: 'Vehicles', slug: 'vehicles', child: false },
  { name: 'Real Estate', slug: 'real-estate', child: false },
];

export default function AdminCategoriesPage() {
  return (
    <>
      <AdminHeader title="Categories" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="CONTENT"
          title="Categories"
          description="Keep browsing structure clear for buyers and sellers."
          icon={<Tag size={26} />}
        />

        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
            <h2 style={{ margin: 0 }}>Category Management</h2>
            <button className="admin-btn-add">
              <Plus size={16} /> Add New Category
            </button>
          </div>

          <div className="admin-cat-table">
            <div className="admin-cat-table-head">
              <div>NAME</div>
              <div>SLUG</div>
            </div>
            {CAT_ROWS.map((r) => (
              <div key={r.slug} className={`admin-cat-table-row ${r.child ? 'child' : ''}`}>
                <div style={{ fontWeight: r.child ? 500 : 700 }}>{r.name}</div>
                <div style={{ color: 'var(--text-muted)' }}>{r.slug}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
