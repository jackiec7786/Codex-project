import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Join SpiceClassifieds 🇬🇩</h1>
          <p className="sub">Free to sign up. Free to post. Locally trusted.</p>

          <div className="form-group">
            <label>Full Name</label>
            <input placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Phone (optional)</label>
            <input placeholder="+1 473 ..." />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>

          <label className="checkbox-row" style={{ marginBottom: 12 }}>
            <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy.
          </label>

          <button className="btn btn-primary btn-block btn-lg">Create Account</button>

          <div className="auth-divider">or continue with</div>
          <button className="btn btn-outline btn-block">Continue with Google</button>

          <div className="auth-foot">
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </div>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
