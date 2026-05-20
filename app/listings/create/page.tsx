import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import { CATEGORIES } from '@/lib/data';

const STEPS = ['Category', 'Details', 'Photos', 'Location', 'Review'];

export default function CreateListingPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="wizard">
          <h2>Post Your Ad — Free</h2>

          <div className="wizard-steps">
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`wizard-step ${i === 0 ? 'active' : ''}`}>
                  <span className="step-num">{i + 1}</span>
                  <span>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="wizard-step-divider" />}
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, marginBottom: 6 }}>What are you listing?</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 24 }}>
            Choose a category that best fits your item or service.
          </p>

          <div className="category-pick-grid">
            {CATEGORIES.map((c) => (
              <div key={c.slug} className="category-pick-card">
                <div className="emoji">{c.emoji}</div>
                <div className="name">{c.name}</div>
              </div>
            ))}
          </div>

          <div className="wizard-actions">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-primary">Continue →</button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
