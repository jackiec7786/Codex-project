import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Heart, Eye, ShieldCheck, Zap } from 'lucide-react';

const NOTIFS = [
  { i: <MessageCircle size={16} />, t: 'New message from Marcus', x: 'About your iPhone 13 Pro listing', time: '2 hours ago', unread: true },
  { i: <Heart size={16} />,         t: 'Someone saved your listing', x: 'Sectional Sofa - Like New got 3 new saves', time: '5 hours ago', unread: true },
  { i: <Eye size={16} />,           t: 'Your listing is trending', x: 'iPhone 13 Pro got 50+ views today', time: '8 hours ago', unread: false },
  { i: <ShieldCheck size={16} />,   t: 'Listing approved', x: 'Vintage Dress Collection is now live', time: '1 day ago', unread: false },
  { i: <Zap size={16} />,           t: 'Boost ending soon', x: 'Your Featured listing expires in 2 days', time: '2 days ago', unread: false },
];

export default function NotificationsPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="notif-list">
          <div className="notif-header">
            <h2>Notifications</h2>
            <button className="btn btn-ghost" style={{ fontSize: 13 }}>Mark all as read</button>
          </div>
          {NOTIFS.map((n) => (
            <div key={n.t} className="notif-item">
              <div className="notif-icon">{n.i}</div>
              <div className="notif-body">
                <div className="title">{n.t}</div>
                <div className="text">{n.x}</div>
                <div className="time">{n.time}</div>
              </div>
              {n.unread && <div className="notif-unread" />}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
