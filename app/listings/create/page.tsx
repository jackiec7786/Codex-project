import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/data';
import { Upload, Check } from 'lucide-react';

export default function CreateListingPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="container" style={{ paddingBottom: 60 }}>
        <div className="wizard">
          <h2>Post a New Listing</h2>
          <p className="wizard-sub">Reach thousands of buyers across Grenada — it&apos;s free.</p>

          <div className="wizard-steps">
            <div className="wizard-step active">
              <div className="step-num">1</div><span>Category</span>
            </div>
            <div className="wizard-step-divider" />
            <div className="wizard-step">
              <div className="step-num">2</div><span>Details</span>
            </div>
            <div className="wizard-step-divider" />
            <div className="wizard-step">
              <div className="step-num">3</div><span>Photos</span>
            </div>
            <div className="wizard-step-divider" />
            <div className="wizard-step">
              <div className="step-num">4</div><span>Location</span>
            </div>
            <div className="wizard-step-divider" />
            <div className="wizard-step">
              <div className="step-num">5</div><span>Review</span>
            </div>
          </div>

          <h3 style={{ fontSize: 18, marginBottom: 8 }}>What are you selling?</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20 }}>
            Pick the category that best fits your item.
          </p>

          <div className="category-grid">
            {CATEGORIES.map((c, i) => (
              <div key={c.slug} className={`category-card ${i === 4 ? 'selected' : ''}`}>
                <div className="cat-emoji">{c.emoji}</div>
                <div className="cat-info">
                  <h4>{c.name}</h4>
                  <p>{i === 0 ? 'Farm products & supplies' :
                       i === 4 ? 'Phones, laptops, cameras' :
                       i === 14 ? 'Apartments, houses, land' :
                       i === 19 ? 'Cars, bikes, parts' : 'Various items'}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="wizard-actions">
            <Link href="/" className="btn btn-ghost">Cancel</Link>
            <button className="btn btn-secondary btn-lg">Continue →</button>
          </div>
        </div>

        {/* Step 2 preview */}
        <div className="wizard" style={{ marginTop: 32 }}>
          <h2 style={{ textAlign: 'left' }}>Listing Details</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 20 }}>
            Step 2 of 5 · Tell buyers about your item
          </p>

          <div className="form-group">
            <label>Title *</label>
            <input placeholder="e.g., iPhone 13 Pro 128GB – Excellent Condition" />
            <span className="hint">Be specific — include brand, model, and key feature.</span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price (XCD) *</label>
              <input placeholder="0.00" />
              <label className="checkbox-row" style={{ marginTop: 6 }}>
                <input type="checkbox" /> Contact for price
              </label>
            </div>
            <div className="form-group">
              <label>Condition</label>
              <select defaultValue="">
                <option value="" disabled>Choose...</option>
                <option>New</option>
                <option>Used – Like New</option>
                <option>Used – Good</option>
                <option>Used – Fair</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea placeholder="Describe the item, its condition, what's included, and any other details buyers should know..." />
          </div>

          <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 12 }}>Photos (up to 10)</h3>
          <div className="upload-zone">
            <div className="upload-icon"><Upload size={20} /></div>
            <p>Drag &amp; drop photos here, or <strong style={{ color: 'var(--brand-green)' }}>browse</strong></p>
            <p style={{ fontSize: 12, marginTop: 6 }}>JPG, PNG up to 5MB each</p>
          </div>

          <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 12 }}>Location &amp; Contact</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Parish</label>
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
              <label>Town / Area</label>
              <input placeholder="e.g., Grand Anse" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone (WhatsApp)</label>
              <input placeholder="+1 473 ___ ____" />
            </div>
            <div className="form-group">
              <label>Visibility</label>
              <select>
                <option>Show phone number</option>
                <option>Hide phone, chat only</option>
              </select>
            </div>
          </div>

          <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 12 }}>Boost your listing</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <label className="category-card" style={{ alignItems: 'flex-start' }}>
              <input type="radio" name="boost" defaultChecked style={{ marginTop: 4 }} />
              <div className="cat-info">
                <h4>Standard – Free</h4>
                <p>Visible in normal listings</p>
              </div>
            </label>
            <label className="category-card selected" style={{ alignItems: 'flex-start' }}>
              <input type="radio" name="boost" style={{ marginTop: 4 }} />
              <div className="cat-info">
                <h4>Featured – XCD $5/week</h4>
                <p>Top of category + homepage feature, 5x views</p>
              </div>
            </label>
          </div>

          <div className="wizard-actions">
            <button className="btn btn-ghost">← Back</button>
            <button className="btn btn-secondary btn-lg">
              <Check size={16} /> Publish Listing
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
