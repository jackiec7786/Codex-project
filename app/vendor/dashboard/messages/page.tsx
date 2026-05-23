import { Search } from 'lucide-react';

const MESSAGES = [
  { initials: 'MJ', name: 'Marcus James',  preview: 'Is the iPhone still available? Can I come see it tomorrow?', time: '12m', unread: 2 },
  { initials: 'SW', name: 'Sarah Williams', preview: "I'll take the sofa. When can I pick it up?", time: '1h', unread: 1 },
  { initials: 'DT', name: 'David Thomas',   preview: 'Thanks for the quick reply — that price works.', time: '3h', unread: 0 },
  { initials: 'LC', name: 'Lisa Chen',      preview: 'Can you do XCD $1,500 for the iPhone?', time: '1d', unread: 0 },
  { initials: 'AP', name: 'Andre Phillips', preview: 'Apartment viewing tomorrow at 3pm works for me.', time: '2d', unread: 0 },
  { initials: 'KM', name: 'Kemba M.',       preview: 'Do you offer installation service for the Bay area too?', time: '3d', unread: 0 },
];

export default function VendorMessagesPage() {
  return (
    <>
      <div className="vendor-page-head">
        <div>
          <h1 className="vendor-page-title">Messages</h1>
          <p className="vendor-page-sub">3 unread · Average response time: 1 hour</p>
        </div>
      </div>

      <div className="vendor-filterbar">
        <button className="vendor-filter-pill active">All (24)</button>
        <button className="vendor-filter-pill">Unread (3)</button>
        <button className="vendor-filter-pill">Archived</button>
        <div className="vendor-search">
          <Search size={16} color="var(--text-faint)" />
          <input placeholder="Search messages..." />
        </div>
      </div>

      <div className="vendor-card" style={{ padding: '8px 24px' }}>
        {MESSAGES.map((m) => (
          <div key={m.name} className="vendor-msg-row">
            <div className="vendor-msg-avatar">{m.initials}</div>
            <div>
              <div className="vendor-msg-name">{m.name}</div>
              <div className="vendor-msg-preview">{m.preview}</div>
            </div>
            <div className="vendor-msg-aside">
              <span className="vendor-msg-time">{m.time}</span>
              {m.unread > 0 && <span className="vendor-msg-unread">{m.unread}</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
