import Header from '@/components/Header';
import { MessageCircle, Eye, Tag, Star } from 'lucide-react';

const NOTIFS = [
  { icon: <MessageCircle size={16} />, title: 'New message from Michael', text: 'Apartment still available?', time: '2m ago', unread: true },
  { icon: <Eye size={16} />, title: 'Your ad is getting views!', text: 'iPhone 13 Pro 128GB has 25 new views.', time: '1h ago', unread: true },
  { icon: <MessageCircle size={16} />, title: 'New reply from Carla', text: "Thanks! I'll come by tomorrow.", time: '3h ago' },
  { icon: <Tag size={16} />, title: 'Your ad is live', text: '2 Bed Apartment - Grand Anse is now live.', time: '5h ago' },
  { icon: <Star size={16} />, title: 'New review received', text: 'You received a 5-star review.', time: '1d ago' },
];

export default function NotificationsPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="notif-list">
          <div className="notif-header">
            <h2>Notifications</h2>
            <a href="#" style={{ color: 'var(--brand-green)', fontSize: 13, fontWeight: 600 }}>Mark all as read</a>
          </div>
          {NOTIFS.map((n, i) => (
            <div key={i} className="notif-item">
              <div className="notif-icon">{n.icon}</div>
              <div className="notif-body">
                <div className="title">{n.title}</div>
                <div className="text">{n.text}</div>
                <div className="time">{n.time}</div>
              </div>
              {n.unread && <div className="notif-unread" />}
            </div>
          ))}
          <div style={{ padding: 16, textAlign: 'center' }}>
            <a href="#" style={{ color: 'var(--brand-green)', fontSize: 13, fontWeight: 600 }}>View all notifications</a>
          </div>
        </div>
      </main>
    </>
  );
}
