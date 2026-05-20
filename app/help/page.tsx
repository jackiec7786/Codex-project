import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';
import { Search, ShieldCheck, Tag, Settings, CreditCard, UserCog, LifeBuoy, Store, MessageCircle, Sparkles } from 'lucide-react';

const TOPICS = [
  { icon: <ShieldCheck size={20} />, title: 'Buying Safely', desc: 'Tips for a secure shopping experience' },
  { icon: <Tag size={20} />, title: 'Selling Tips', desc: 'How to sell faster and safer' },
  { icon: <Settings size={20} />, title: 'Managing Your Ads', desc: 'Edit, renew or remove your listings' },
  { icon: <CreditCard size={20} />, title: 'Payments', desc: 'Payment methods and safety on SpiceClassifieds' },
  { icon: <UserCog size={20} />, title: 'Account & Settings', desc: 'Update your profile and preferences' },
  { icon: <Store size={20} />, title: 'Becoming a Vendor', desc: 'Get verified and grow your storefront' },
  { icon: <Sparkles size={20} />, title: 'Boosting Listings', desc: 'Featured ads and how they work' },
  { icon: <MessageCircle size={20} />, title: 'Messaging Buyers', desc: 'Chat, WhatsApp, and phone contact' },
  { icon: <LifeBuoy size={20} />, title: 'Contact Support', desc: 'Get in touch with our local team' },
];

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="help-hero">
          <h1>Help Center</h1>
          <p>How can we help you today? Search our guides or browse popular topics below.</p>
          <div className="help-search">
            <Search size={16} />
            <input placeholder="Search help articles..." />
            <button className="btn btn-primary btn-sm">Search</button>
          </div>
        </div>

        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Popular Topics</h3>
        <div className="help-topics-grid">
          {TOPICS.map((t) => (
            <div key={t.title} className="help-topic-card">
              <div className="topic-icon">{t.icon}</div>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>Still need help?</p>
          <Link href="/support" className="btn btn-primary btn-lg">Contact Support</Link>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
