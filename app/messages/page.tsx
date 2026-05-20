import Header from '@/components/Header';
import { Search, Plus, Send, MoreVertical } from 'lucide-react';

const CONVOS = [
  { name: 'Alicia M.', preview: 'Regarding iPhone 13 Pro', time: '9:30 AM', initial: 'A', unread: true, active: true },
  { name: 'Michael', preview: 'Apartment still available?', time: 'Yesterday', initial: 'M', unread: true },
  { name: 'Carla', preview: "Thanks! I'll come by tomorrow.", time: 'May 18', initial: 'C' },
  { name: 'Jason', preview: 'Can you do it for $100?', time: 'May 17', initial: 'J' },
  { name: 'Denise', preview: 'Service completed. Thanks!', time: 'May 16', initial: 'D' },
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
              <button className="icon-btn"><Plus size={18} /></button>
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
            <div style={{ padding: 16, textAlign: 'center', fontSize: 13 }}>
              <a href="#" style={{ color: 'var(--brand-green)', fontWeight: 600 }}>View all conversations</a>
            </div>
          </div>
        </aside>

        <div className="chat-pane">
          <div className="chat-header">
            <div className="user-row">
              <div className="avatar">A</div>
              <div>
                <div style={{ fontWeight: 600 }}>Alicia M.</div>
                <div style={{ fontSize: 12, color: 'var(--brand-green)' }}>Active</div>
              </div>
            </div>
            <button className="icon-btn"><MoreVertical size={18} /></button>
          </div>

          <div className="chat-listing-pill">
            <div className="thumb">📱</div>
            <div className="info">
              <div className="title">iPhone 13 Pro 128GB</div>
              <div className="price">$1,650</div>
            </div>
          </div>

          <div className="chat-stream">
            <div className="chat-bubble them">
              Hi! Is the iPhone still available?
              <div className="chat-time">9:30 AM</div>
            </div>
            <div className="chat-bubble you">
              Yes, it is! Are you interested?
              <div className="chat-time" style={{ color: 'rgba(255,255,255,0.7)' }}>9:31 AM</div>
            </div>
            <div className="chat-bubble them">
              Yes. Can we meet in St. George&apos;s tomorrow?
              <div className="chat-time">9:32 AM</div>
            </div>
            <div className="chat-bubble you">
              Sure, I&apos;m available after 3PM.
              <div className="chat-time" style={{ color: 'rgba(255,255,255,0.7)' }}>9:33 AM</div>
            </div>
            <div className="chat-bubble them">
              Great! I&apos;ll see you then.
              <div className="chat-time">9:34 AM</div>
            </div>
          </div>

          <div className="chat-input-row">
            <input placeholder="Type a message..." />
            <button className="chat-send"><Send size={18} /></button>
          </div>
        </div>
      </div>
    </>
  );
}
