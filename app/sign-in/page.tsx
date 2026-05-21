import Link from 'next/link';
import AnnounceBar from '@/components/AnnounceBar';
import Header from '@/components/Header';

export default function SignInPage() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <div className="auth-page">
        <div className="auth-card">
          <h1>Welcome back</h1>
          <p className="sub">Sign in to manage your listings and messages.</p>

          <div className="form-group">
            <label>Email or phone</label>
            <input type="text" placeholder="you@email.com or +1 473..." />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <Link href="#" style={{ display: 'block', textAlign: 'right', fontSize: 12, color: 'var(--brand-green)', fontWeight: 600, marginTop: 6 }}>
              Forgot password?
            </Link>
          </div>

          <button className="btn btn-primary btn-block btn-lg">Sign In</button>

          <div className="auth-divider">OR</div>

          <button className="btn btn-outline-green btn-block">Continue with Google</button>

          <div className="auth-foot">
            Don&apos;t have an account? <Link href="/sign-up">Sign up free</Link>
          </div>
        </div>
      </div>
    </>
  );
}
