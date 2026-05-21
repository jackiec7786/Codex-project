import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import { Search, MoreVertical, Send, Paperclip } from 'lucide-react';

const CONVERSATIONS = [
  { id: '1', n: 'Marcus James',  p: 'Is the iPhone still available?',     t: 'now',    u: true,  i: 'MJ' },
  { id: '2', n: 'Sarah Williams', p: "I'll take it. When can I see it?",   t: '12m',    u: true,  i: 'SW' },
  { id: '3', n: 'David Thomas',   p: 'Thanks for the quick reply!',        t: '2h',     u: false, i: 'DT' },
  { id: '4', n: 'Grenada Fresh',  p: 'Your order is ready for pickup.',    t: '1d',     u: false, i: 'GF' },
  { id: '5', n: 'Lisa Chen',      p: 'Can you do XCD $1,500?',             t: '2d',     u: false, i: 'LC' },
  { id: '6', n: 'Andre Phillips', p: 'Apartment viewing tomorrow at 3?',   t: '3d',     u: false, i: 'AP' },
];

export default function MessagesPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container" style={{ paddingTop: 0 }}>
        <div className="messages-layout">
          <aside className="msg-list">
            <div className="msg-list-header">
              <h2>Messages</h2>
              <div className="msg-search">
                <Search size={14} />
                <input placeholder="Search messages..." />
              </div>
            </div>
            <div className="msg-items">
              {CONVERSATIONS.map((c, i) => (
                <div key={c.id} className={`msg-item ${i === 0 ? 'active' : ''}`}>
                  <div className="avatar">{c.i}</div>
                  <div className="msg-content">
                    <div className="msg-top">
                      <div className="msg-name">{c.n}</div>
                      <div className="msg-time">{c.t}</div>
                    </div>
                    <div className="msg-preview">{c.p}</div>
                  </div>
                  {c.u && <div className="unread-dot" />}
                </div>
              ))}
            </div>
          </aside>

          <div className="chat-pane">
            <div className="chat-header">
              <div className="user-row">
                <div className="avatar">MJ</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Marcus James</div>
                  <div style={{ fontSize: 12, color: 'var(--brand-green)' }}>● Online</div>
                </div>
              </div>
              <button className="icon-btn"><MoreVertical size={18} /></button>
            </div>

            <div className="chat-listing-pill">
              <div className="thumb">📱</div>
              <div className="info">
                <div className="title">iPhone 13 Pro 128GB</div>
                <div className="price">XCD $1,650</div>
              </div>
              <button className="btn btn-outline-green" style={{ padding: '6px 12px', fontSize: 12 }}>View listing</button>
            </div>

            <div className="chat-stream">
              <div className="chat-bubble them">
                Hi! Is the iPhone 13 Pro still available?
                <div className="chat-time">10:32 AM</div>
              </div>
              <div className="chat-bubble you">
                Yes, still available! In excellent condition with 92% battery health.
                <div className="chat-time">10:34 AM</div>
              </div>
              <div className="chat-bubble them">
                Great. Can you do XCD $1,500?
                <div className="chat-time">10:35 AM</div>
              </div>
              <div className="chat-bubble you">
                I can do $1,600 cash. It comes with the original box and unused EarPods.
                <div className="chat-time">10:37 AM</div>
              </div>
              <div className="chat-bubble them">
                Deal. When can I see it?
                <div className="chat-time">10:38 AM</div>
              </div>
            </div>

            <div className="chat-input-row">
              <button className="icon-btn" aria-label="Attach"><Paperclip size={18} /></button>
              <input placeholder="Type a message..." />
              <button className="chat-send" aria-label="Send"><Send size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
