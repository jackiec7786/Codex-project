import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MessageCircle, Phone, Clock } from 'lucide-react';

export default function SupportPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container">
        <div className="help-hero">
          <h1>Contact Support</h1>
          <p>We&apos;re here to help. Reach out and we&apos;ll get back to you fast.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }} className="help-topics-grid">
          {[
            { i: <MessageCircle size={18} />, t: 'WhatsApp', d: '+1 473 555 0100', cta: 'Chat now' },
            { i: <Mail size={18} />,           t: 'Email',    d: 'support@spiceclassifieds.com', cta: 'Send email' },
            { i: <Phone size={18} />,          t: 'Phone',    d: '+1 473 555 0100', cta: 'Call us' },
          ].map((m) => (
            <div key={m.t} className="help-topic-card">
              <div className="help-icon">{m.i}</div>
              <div>
                <h4>{m.t}</h4>
                <p>{m.d}</p>
                <Link href="#" style={{ color: 'var(--brand-red)', fontWeight: 700, fontSize: 13 }}>{m.cta} →</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 32, maxWidth: 720, margin: '0 auto'
        }}>
          <h2 style={{ fontSize: 22, marginBottom: 6 }}>Send us a message</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Clock size={14} /> Average response time: 4 hours
          </p>

          <div className="form-row">
            <div className="form-group">
              <label>Your name</label>
              <input placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" />
            </div>
          </div>

          <div className="form-group">
            <label>What can we help with?</label>
            <select defaultValue="">
              <option value="" disabled>Choose a topic...</option>
              <option>Trouble posting a listing</option>
              <option>Account issue</option>
              <option>Payment / Featured listings</option>
              <option>Report a listing or user</option>
              <option>Vendor application</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us what's going on..." />
          </div>

          <button className="btn btn-secondary btn-lg">Send Message</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
