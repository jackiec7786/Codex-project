import Header from '@/components/Header';
import { Wrench, Monitor, Home as HomeIcon, Tag, Sprout, Car, Briefcase, MoreHorizontal } from 'lucide-react';

const STEPS = ['Category', 'Details', 'Location', 'Photos', 'Review'];
const CATS = [
  { name: 'Services', desc: 'Offer your professional skills', icon: <Wrench size={18} />, color: 'green' },
  { name: 'Electronics', desc: 'Phones, computers, appliances & more', icon: <Monitor size={18} />, color: 'red' },
  { name: 'Rentals', desc: 'Apartments, houses, vehicles & more', icon: <HomeIcon size={18} />, color: 'green' },
  { name: 'For Sale', desc: "Everything else you're selling", icon: <Tag size={18} />, color: 'yellow' },
  { name: 'Home & Garden', desc: 'Furniture, décor, plants & more', icon: <Sprout size={18} />, color: 'green' },
  { name: 'Vehicles', desc: 'Cars, bikes, boats and more', icon: <Car size={18} />, color: 'red' },
  { name: 'Jobs', desc: 'Find or post job opportunities', icon: <Briefcase size={18} />, color: 'green' },
  { name: 'Other', desc: 'Something else', icon: <MoreHorizontal size={18} />, color: 'gray' },
];

export default function PostAdPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="wizard">
          <h2>Post a New Ad</h2>

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
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 20 }}>
            Choose a category that best fits your item or service.
          </p>

          <div className="category-grid">
            {CATS.map((c) => (
              <div key={c.name} className="category-card">
                <div className={`cat-icon ${c.color}`}>{c.icon}</div>
                <div className="cat-info">
                  <h4>{c.name}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="wizard-actions">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-secondary">Continue</button>
          </div>
        </div>
      </main>
    </>
  );
}
