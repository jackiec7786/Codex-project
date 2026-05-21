import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';

export default function SignUpPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="auth-page">
        <div className="auth-card">
          <h1>Create your account</h1>
          <p className="sub">Free, no credit card required. Start buying and selling in Grenada.</p>

          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@email.com" />
          </div>

          <div className="form-group">
            <label>Phone (WhatsApp)</label>
            <input type="tel" placeholder="+1 473 ___ ____" />
            <span className="hint">We&apos;ll only share this on listings you create.</span>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>

          <label className="checkbox-row">
            <input type="checkbox" />
            I agree to the <Link href="/help" style={{ color: 'var(--brand-green)', marginLeft: 4, fontWeight: 600 }}>terms &amp; privacy policy</Link>
          </label>

          <button className="btn btn-primary btn-block btn-lg" style={{ marginTop: 16 }}>
            Create Account
          </button>

          <div className="auth-divider">OR</div>

          <button className="btn btn-outline-green btn-block">Continue with Google</button>

          <div className="auth-foot">
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
