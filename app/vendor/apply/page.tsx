import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import { Store, ShieldCheck, TrendingUp, MessageCircle } from 'lucide-react';

const PERKS = [
  { icon: <ShieldCheck size={20} />, title: 'Verified Badge', desc: 'Stand out with a trust badge on every listing.' },
  { icon: <TrendingUp size={20} />, title: 'Boosted Visibility', desc: 'Your listings get priority placement in search.' },
  { icon: <Store size={20} />, title: 'Custom Storefront', desc: 'A branded vendor page with all your listings.' },
  { icon: <MessageCircle size={20} />, title: 'Priority Support', desc: 'Direct line to SpiceClassifieds team.' },
];

export default function VendorApplyPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 60 }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'inline-flex', padding: 16, borderRadius: 16, background: 'var(--brand-light)', color: 'var(--brand)', marginBottom: 16 }}>
              <Store size={32} />
            </div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>Become a Verified Vendor</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
              Set up a branded storefront, get a verified badge, and reach more local buyers across Grenada.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {PERKS.map((p) => (
              <div key={p.title} className="dash-section" style={{ margin: 0, padding: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--brand-light)', color: 'var(--brand)', display: 'grid', placeItems: 'center', marginBottom: 12 }}>
                  {p.icon}
                </div>
                <h4 style={{ fontSize: 15, marginBottom: 4 }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="auth-card" style={{ maxWidth: 'none' }}>
            <h2 style={{ fontSize: 20, marginBottom: 20 }}>Application Form</h2>

            <div className="form-group">
              <label>Business Name</label>
              <input placeholder="e.g. Royal Palms Grenada" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select>
                <option>Select a category</option>
                <option>Real Estate</option>
                <option>Vehicles</option>
                <option>Services</option>
                <option>Home &amp; Garden</option>
                <option>Farm to Table</option>
              </select>
            </div>
            <div className="form-group">
              <label>Business Description</label>
              <textarea rows={4} placeholder="Tell us about your business..." />
            </div>
            <div className="form-group">
              <label>Phone / WhatsApp</label>
              <input placeholder="+1 473 ..." />
            </div>
            <div className="form-group">
              <label>Parish</label>
              <select>
                <option>Select parish</option>
                <option>St. George&apos;s</option>
                <option>St. Andrew&apos;s</option>
                <option>St. David&apos;s</option>
                <option>St. John&apos;s</option>
                <option>St. Mark&apos;s</option>
                <option>St. Patrick&apos;s</option>
                <option>Carriacou</option>
                <option>Petite Martinique</option>
              </select>
            </div>

            <button className="btn btn-primary btn-block btn-lg" style={{ marginTop: 8 }}>Submit Application</button>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 12 }}>
              We review every application within 1–2 business days.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
