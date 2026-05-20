import Header from '@/components/Header';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Welcome back</h1>
          <p className="sub">Log in to your SpiceClassifieds account.</p>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button className="btn btn-primary btn-block btn-lg">Log In</button>

          <div className="auth-divider">or continue with</div>
          <button className="btn btn-outline btn-block">Continue with Google</button>

          <div className="auth-foot">
            Don&apos;t have an account? <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
