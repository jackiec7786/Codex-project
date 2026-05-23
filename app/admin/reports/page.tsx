import { Filter, Search } from 'lucide-react';

const REPORTS = [
  {
    title: 'Honda Civic EX 2002', user: 'Admin User',
    reason: 'scam',
    desc: 'Seller asked for payment outside the platform and disappeared.',
    date: 'Nov 8, 2025', status: 'green',
  },
  {
    title: 'TEST LISTING 1234 1', user: 'Jaffer Shade',
    reason: 'inappropriate',
    desc: 'The images in this listing are offensive.',
    date: 'Nov 8, 2025', status: 'green',
  },
  {
    title: 'Suspicious vendor: QuickCash Loans', user: 'Sarah Williams',
    reason: 'prohibited content',
    desc: 'Offering high-interest loans, likely predatory lending operation.',
    date: 'Nov 6, 2025', status: 'yellow',
  },
];

export default function AdminReportsPage() {
  return (
    <>
      <div className="adm-page-head">
        <div>
          <h1 className="adm-page-title">Reports</h1>
          <p className="adm-page-sub">Triage user reports by severity and marketplace impact.</p>
        </div>
        <div className="adm-page-actions">
          <button className="adm-btn-ghost"><Filter size={14} /> Filter</button>
        </div>
      </div>

      <div className="adm-search">
        <Search size={16} />
        <input placeholder="Search reports by listing, user, or reason..." />
      </div>

      {REPORTS.map((r, i) => (
        <div key={i} className="adm-report-card">
          <div className="adm-report-head">
            <div>
              <div className="adm-report-title">{r.title}</div>
              <div className="adm-report-user">Reported by {r.user}</div>
            </div>
            <span className={`adm-pill ${r.status}`}>
              {r.status === 'green' ? 'resolved' : 'in review'}
            </span>
          </div>
          <div className="adm-report-reason">{r.reason}</div>
          <div className="adm-report-desc">{r.desc}</div>
          <div className="adm-report-date">{r.date}</div>
        </div>
      ))}
    </>
  );
}
