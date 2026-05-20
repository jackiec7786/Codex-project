import Header from '@/components/Header';
import MobileBottomNav from '@/components/MobileBottomNav';
import { Search, Plus, Send, MoreVertical, Phone } from 'lucide-react';

const CONVOS = [
  { name: 'Andre P.', preview: 'Is the rental still available?', time: '9:30 AM', initial: 'A', unread: true, active: true },
  { name: 'Michelle L.', preview: 'Can I view the stove tomorrow?', time: 'Yesterday', initial: 'M', unread: true },
  { name: 'Carl B.', preview: 'Thanks! I will WhatsApp you.', time: '2 days ago', initial: 'C' },
  { name: 'Denise R.', preview: 'Is the price negotiable?', time: '3 days ago', initial: 'D' },
  { name: 'Telligent LTD', preview: 'Service appointment confirmed.', time: '1 week ago', initial: 'T' },
];

export default function MessagesPage() {
  return (
    <>
      <Header />
      <div className="messages-layout">
        <aside className="msg-list">
          <div className="msg-list-header">
            <div className="row-between">
              <h2>Messages</h2>
              <button className="icon-btn" aria-label="New message"><Plus size={18} /></button>
            </div>
            <div className="msg-search">
              <Search size={14} />
              <input placeholder="Search messages" />
            </div>
          </div>
          <div className="msg-items">
            {CONVOS.map((c) => (
              <div key={c.name} className={`msg-item ${c.active ? 'active' : ''}`}>
                <div className="avatar">{c.initial}</div>
                <div className="msg-content">
                  <div className="msg-top">
                    <div className="msg-name">{c.name}</div>
                    <div className="msg-time">{c.time}</div>
                  </div>
                  <div className="msg-preview">{c.preview}</div>
                </div>
                {c.unread && <div className="unread-dot" />}
              </div>
            ))}
          </div>
        </aside>

        <div className="chat-pane">
          <div className="chat-header">
            <div className="user-row">
              <div className="avatar">A</div>
              <div>
                <div style={{ fontWeight: 700 }}>Andre P.</div>
                <div style={{ fontSize: 12, color: 'var(--accent-green)' }}>● Active now</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button className="icon-btn"><Phone size={18} /></button>
              <button className="icon-btn"><MoreVertical size={18} /></button>
            </div>
          </div>

          <div className="chat-listing-pill">
            <div className="thumb">🏡</div>
            <div className="info">
              <div className="title">Domestic Rental In a Quiet House</div>
              <div className="price">XCD 1,000/mo</div>
            </div>
            <button className="btn btn-outline btn-sm">View Listing</button>
          </div>

          <div className="chat-stream">
            <div className="chat-bubble them">
              Hi! Is the rental still available?
              <div className="chat-time">9:30 AM</div>
            </div>
            <div className="chat-bubble you">
              Hi Andre! Yes, it is. Are you interested in a viewing?
              <div className="chat-time">9:31 AM</div>
            </div>
            <div className="chat-bubble them">
              Yes please. Can I come by this weekend?
              <div className="chat-time">9:32 AM</div>
            </div>
            <div className="chat-bubble you">
              Saturday afternoon works. Around 3pm?
              <div className="chat-time">9:33 AM</div>
            </div>
            <div className="chat-bubble them">
              Perfect. See you then.
              <div className="chat-time">9:34 AM</div>
            </div>
          </div>

          <div className="chat-input-row">
            <input placeholder="Type a message..." />
            <button className="chat-send" aria-label="Send"><Send size={18} /></button>
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </>
  );
}
