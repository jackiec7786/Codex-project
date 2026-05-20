import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Welcome back 👋</h1>
          <p className="sub">Sign in to your SpiceClassifieds account.</p>

          <div className="form-group">
            <label>Email or Phone</label>
            <input type="text" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div style={{ textAlign: 'right', marginBottom: 16 }}>
            <Link href="#" style={{ color: 'var(--brand)', fontSize: 13, fontWeight: 500 }}>Forgot password?</Link>
          </div>

          <button className="btn btn-primary btn-block btn-lg">Sign In</button>

          <div className="auth-divider">or continue with</div>
          <button className="btn btn-outline btn-block">Continue with Google</button>

          <div className="auth-foot">
            New to SpiceClassifieds? <Link href="/sign-up">Create an account</Link>
          </div>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
