import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Zap, BarChart3, Crown } from 'lucide-react';

export default function VendorApplyPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container" style={{ paddingBottom: 60 }}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/vendors">Vendors</Link>
          <span className="sep">/</span>
          <span>Become a Vendor</span>
        </div>

        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>Become a Verified Vendor</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 540, margin: '0 auto' }}>
            Get a verified storefront, unlimited listings, and analytics. Grow your Grenadian business with SpiceClassifieds.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }} className="vendor-benefit-grid">
          {[
            { i: <ShieldCheck size={20} />, t: 'Verified Badge', d: 'Build trust with the blue checkmark on every listing.' },
            { i: <Zap size={20} />, t: '5x More Views', d: 'Featured placement on category and search pages.' },
            { i: <BarChart3 size={20} />, t: 'Sales Analytics', d: 'Track views, leads, and conversions in real time.' },
            { i: <Crown size={20} />, t: 'Premium Support', d: 'Priority response within 1 hour, dedicated account help.' },
          ].map((b) => (
            <div key={b.t} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: 20
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'var(--brand-green-light)', color: 'var(--brand-green)',
                display: 'grid', placeItems: 'center', marginBottom: 12,
              }}>{b.i}</div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{b.t}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{b.d}</div>
            </div>
          ))}
        </div>

        <div className="wizard">
          <h2>Tell us about your business</h2>
          <p className="wizard-sub">We&apos;ll review your application within 1-2 business days.</p>

          <div className="form-row">
            <div className="form-group">
              <label>Business name *</label>
              <input placeholder="e.g., Grenada Fresh Co." />
            </div>
            <div className="form-group">
              <label>Primary category *</label>
              <select defaultValue="">
                <option value="" disabled>Choose...</option>
                <option>Farm to Table</option>
                <option>Real Estate</option>
                <option>Electronics</option>
                <option>Vehicles</option>
                <option>Services</option>
                <option>Food &amp; Drink</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Contact name *</label>
              <input placeholder="Full name" />
            </div>
            <div className="form-group">
              <label>WhatsApp / Phone *</label>
              <input placeholder="+1 473 ___ ____" />
            </div>
          </div>

          <div className="form-group">
            <label>Business email *</label>
            <input type="email" placeholder="you@business.com" />
          </div>

          <div className="form-group">
            <label>Tell us about your business *</label>
            <textarea placeholder="What do you sell? How long have you been in business? What makes you unique?" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Parish *</label>
              <select defaultValue="">
                <option value="" disabled>Choose a parish...</option>
                <option>St. George&apos;s</option>
                <option>St. David&apos;s</option>
                <option>St. Andrew&apos;s</option>
                <option>St. Patrick&apos;s</option>
                <option>St. John&apos;s</option>
                <option>St. Mark&apos;s</option>
                <option>Carriacou</option>
              </select>
            </div>
            <div className="form-group">
              <label>Estimated listings per month</label>
              <select>
                <option>1-5</option>
                <option>6-20</option>
                <option>21-50</option>
                <option>50+</option>
              </select>
            </div>
          </div>

          <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 12 }}>Choose a plan</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <label className="category-card" style={{ alignItems: 'flex-start' }}>
              <input type="radio" name="plan" defaultChecked style={{ marginTop: 4 }} />
              <div className="cat-info">
                <h4>Starter — XCD $50/mo</h4>
                <p>Verified badge, up to 20 listings, basic analytics</p>
              </div>
            </label>
            <label className="category-card selected" style={{ alignItems: 'flex-start' }}>
              <input type="radio" name="plan" style={{ marginTop: 4 }} />
              <div className="cat-info">
                <h4>Pro — XCD $150/mo</h4>
                <p>Unlimited listings, 5 featured slots, premium analytics</p>
              </div>
            </label>
          </div>

          <label className="checkbox-row" style={{ marginTop: 20 }}>
            <input type="checkbox" /> I agree to the <Link href="/help" style={{ color: 'var(--brand-green)', marginLeft: 4 }}> vendor terms &amp; conditions</Link>
          </label>

          <div className="wizard-actions">
            <Link href="/" className="btn btn-ghost">Cancel</Link>
            <button className="btn btn-secondary btn-lg">Submit Application</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
