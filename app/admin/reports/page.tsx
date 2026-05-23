import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Flag, Filter } from 'lucide-react';

const REPORTS = [
  {
    title: 'Honda Civic EX 2002', user: 'Admin User',
    reason: 'scam',
    desc: 'Seller asked for payment outside the platform and disappeared.',
    date: 'November 8th, 2025', status: 'resolved',
  },
  {
    title: 'TEST LISTING 1234 1', user: 'Jaffer Shade',
    reason: 'inappropriate',
    desc: 'The images in this listing are offensive.',
    date: 'November 8th, 2025', status: 'resolved',
  },
];

export default function AdminReportsPage() {
  return (
    <>
      <AdminHeader title="Reports" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="TRUST"
          title="Reports"
          description="Triage user reports by severity and marketplace impact."
          icon={<Flag size={26} />}
        />

        <div className="admin-card">
          <h2>Reports Management</h2>

          <button className="admin-filter-pill">
            <Filter size={16} /> Filter
          </button>

          {REPORTS.map((r) => (
            <div key={r.title} className="admin-report-card">
              <div className="admin-report-head">
                <div>
                  <div className="admin-report-title">{r.title}</div>
                  <div className="admin-report-user">{r.user}</div>
                </div>
                <span className={`admin-report-status ${r.status}`}>{r.status}</span>
              </div>
              <div className="admin-report-body">
                <div className="admin-report-reason">Reason: {r.reason}</div>
                <div className="admin-report-desc">{r.desc}</div>
              </div>
              <div className="admin-report-date">{r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
