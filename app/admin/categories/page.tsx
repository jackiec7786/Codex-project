import { Plus, Search } from 'lucide-react';

const ROWS = [
  { name: 'Agriculture', slug: 'agriculture', child: false, count: 24 },
  { name: 'Crops',       slug: 'crops',       child: true,  count: 8 },
  { name: 'Equipment',   slug: 'equipment-agriculture', child: true, count: 3 },
  { name: 'Feed',        slug: 'feed', child: true, count: 2 },
  { name: 'Land',        slug: 'land-agriculture', child: true, count: 4 },
  { name: 'Livestock',   slug: 'livestock', child: true, count: 5 },
  { name: 'Seeds',       slug: 'seeds', child: true, count: 2 },
  { name: 'Electronics', slug: 'electronics', child: false, count: 287 },
  { name: 'Phones',      slug: 'phones', child: true, count: 74 },
  { name: 'Computers',   slug: 'computers', child: true, count: 61 },
  { name: 'Vehicles',    slug: 'vehicles', child: false, count: 412 },
];

export default function AdminCategoriesPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Categories</h1>
          <p className="adm-page-sub">Keep browsing structure clear for buyers and sellers.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-primary">
            <Plus size={14} /> Add category
          </button>
        </div>
      </div>

      <div className="adm-search">
        <Search size={16} />
        <input placeholder="Search categories..." />
      </div>

      <div className="adm-table">
        <div className="adm-table-head" style={{ gridTemplateColumns: '1.5fr 1.5fr 80px 60px' }}>
          <div>Name</div>
          <div>Slug</div>
          <div style={{ textAlign: 'right' }}>Listings</div>
          <div></div>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.slug}
            className={`adm-table-row ${r.child ? 'child' : ''}`}
            style={{ gridTemplateColumns: '1.5fr 1.5fr 80px 60px' }}
          >
            <div style={{ fontWeight: r.child ? 500 : 700 }}>
              {r.child && <span style={{ color: 'var(--text-faint)', marginRight: 6 }}>↳</span>}
              {r.name}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'monospace' }}>{r.slug}</div>
            <div style={{ textAlign: 'right', fontWeight: 700, color: 'var(--text)' }}>{r.count}</div>
            <div style={{ textAlign: 'right' }}>
              <button className="adm-user-action" aria-label="Edit">⋯</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
