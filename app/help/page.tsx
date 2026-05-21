import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, ShoppingCart, Store, CreditCard, ShieldCheck, MessageCircle, Settings } from 'lucide-react';

const TOPICS = [
  { i: <ShoppingCart size={18} />, t: 'Buying', d: 'Searching, contacting sellers, safe meetups.' },
  { i: <Store size={18} />,        t: 'Selling', d: 'How to post listings, photos, pricing tips.' },
  { i: <CreditCard size={18} />,   t: 'Payments', d: 'Cash, bank transfer, and Featured listing fees.' },
  { i: <ShieldCheck size={18} />,  t: 'Safety', d: 'How to spot scams and report suspicious listings.' },
  { i: <MessageCircle size={18} />, t: 'Messages', d: 'How to chat with buyers and sellers.' },
  { i: <Settings size={18} />,     t: 'Account', d: 'Sign-in, profile, notifications, and settings.' },
];

const FAQS = [
  { q: 'How do I post a listing?', a: "Click 'Post an Ad' on the homepage, choose a category, fill in your details and photos, set a price, and publish. Your listing goes live immediately and is free." },
  { q: 'How do I message a seller?', a: 'Tap the green WhatsApp button, the red Call button, or "Send Message" on any listing. WhatsApp opens a chat in your phone with the seller pre-filled.' },
  { q: 'What does the verified badge mean?', a: 'Verified sellers have submitted ID and proof of business and are part of the Vendor program. Look for the blue checkmark beside the name.' },
  { q: 'How do Featured listings work?', a: 'Featured listings appear at the top of category pages and on the homepage. They get up to 5x more views. Boost any listing from XCD $5/week.' },
  { q: 'How do I report a listing?', a: 'Tap "Report" on any listing or contact support. We review all reports within 24 hours.' },
];

export default function HelpPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="help-hero">
          <h1>How can we help?</h1>
          <p>Browse common topics or search for what you need.</p>
          <div className="help-search">
            <Search size={16} />
            <input placeholder="Search articles..." />
            <button className="btn btn-secondary">Search</button>
          </div>
        </div>

        <div className="help-topics-grid">
          {TOPICS.map((t) => (
            <div key={t.t} className="help-topic-card">
              <div className="help-icon">{t.i}</div>
              <div>
                <h4>{t.t}</h4>
                <p>{t.d}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="section">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((f) => (
              <div key={f.q} className="faq-item">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-banner">
          <h2>Still need help?</h2>
          <p>Our support team usually replies within a few hours.</p>
          <Link href="/support" className="btn btn-primary btn-lg">Contact Support</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
