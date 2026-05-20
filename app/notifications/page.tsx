import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import { MessageCircle, Eye, Tag, Star, ShieldCheck, Sparkles } from 'lucide-react';

const NOTIFS = [
  { icon: <MessageCircle size={16} />, title: 'New message from Andre P.', text: 'Is the rental still available?', time: '2m ago', unread: true },
  { icon: <Eye size={16} />, title: 'Your listing is trending', text: 'Royal Palms in Grenada has 25 new views today.', time: '1h ago', unread: true },
  { icon: <ShieldCheck size={16} />, title: 'Vendor application approved', text: 'You are now a Verified Vendor on SpiceClassifieds.', time: '3h ago', unread: true },
  { icon: <Sparkles size={16} />, title: 'Boost expiring soon', text: 'Your Featured boost on 10K diamond ring expires in 2 days.', time: '5h ago' },
  { icon: <Tag size={16} />, title: 'Your ad is live', text: 'Premier Cook & Bake Stove is now live across Grenada.', time: '1d ago' },
  { icon: <Star size={16} />, title: 'New review received', text: 'Andre P. left you a 5-star review.', time: '2d ago' },
];

export default function NotificationsPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="notif-list">
          <div className="notif-header">
            <h2>Notifications</h2>
            <a href="#" style={{ color: 'var(--brand)', fontSize: 13, fontWeight: 600 }}>Mark all as read</a>
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
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
