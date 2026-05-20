import Header from '@/components/Header';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Join SpiceClassifieds</h1>
          <p className="sub">Create your account in seconds.</p>

          <div className="form-group">
            <label>Full Name</label>
            <input placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>

          <button className="btn btn-primary btn-block btn-lg">Create Account</button>

          <div className="auth-divider">or continue with</div>
          <button className="btn btn-outline btn-block">Continue with Google</button>

          <div className="auth-foot">
            Already have an account? <Link href="/login">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
