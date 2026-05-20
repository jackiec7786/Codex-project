import Header from '@/components/Header';
import { Search, ShieldCheck, Tag, Settings, CreditCard, UserCog, LifeBuoy } from 'lucide-react';

const TOPICS = [
  { icon: <ShieldCheck size={18} />, color: 'green', title: 'Buying Safely', desc: 'Tips for a secure shopping experience' },
  { icon: <Tag size={18} />, color: 'yellow', title: 'Selling Tips', desc: 'How to sell faster and safer' },
  { icon: <Settings size={18} />, color: 'red', title: 'Managing Your Ads', desc: 'Edit, renew or remove your listings' },
  { icon: <CreditCard size={18} />, color: 'green', title: 'Payments', desc: 'Payment methods and safety' },
  { icon: <UserCog size={18} />, color: 'yellow', title: 'Account & Settings', desc: 'Update your profile and preferences' },
  { icon: <LifeBuoy size={18} />, color: 'red', title: 'Contact Us', desc: 'Get in touch with our support team' },
];

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="help-hero">
          <div>
            <h1>Help Center</h1>
            <p style={{ color: 'var(--text-muted)' }}>How can we help you today?</p>
            <div className="help-search">
              <Search size={16} />
              <input placeholder="Search help articles..." />
            </div>
          </div>
          <div className="help-illustration">🛟</div>
        </div>

        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Popular Topics</h3>
        <div className="help-topics-grid">
          {TOPICS.map((t) => (
            <div key={t.title} className="help-topic-card">
              <div className={`cat-icon ${t.color}`}>{t.icon}</div>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--brand-green)', fontWeight: 600 }}>
          View all help articles →
        </div>
      </main>
    </>
  );
}
