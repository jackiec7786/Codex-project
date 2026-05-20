import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react';

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1 style={{ fontSize: 32, marginBottom: 8 }}>Contact Support</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
            We&apos;re a small local team based in St. George&apos;s. Reach us any way that works for you.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { icon: <Mail size={20} />, label: 'Email', value: 'support@spiceclassifieds.com' },
              { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: '+1 473 ••• ••••' },
              { icon: <Phone size={20} />, label: 'Phone', value: '+1 473 ••• ••••' },
              { icon: <MapPin size={20} />, label: 'Location', value: "St. George's, Grenada" },
            ].map((c) => (
              <div key={c.label} className="dash-section" style={{ margin: 0, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--brand-light)', color: 'var(--brand)', display: 'grid', placeItems: 'center', marginBottom: 12 }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>{c.label}</div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>{c.value}</div>
              </div>
            ))}
          </div>

          <div className="auth-card" style={{ maxWidth: 'none' }}>
            <h2 style={{ fontSize: 20, marginBottom: 20 }}>Send us a message</h2>
            <div className="form-group">
              <label>Your Name</label>
              <input placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>General question</option>
                <option>Report a listing</option>
                <option>Vendor application</option>
                <option>Account issue</option>
                <option>Bug report</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="How can we help?" />
            </div>
            <button className="btn btn-primary btn-block btn-lg">Send Message</button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
