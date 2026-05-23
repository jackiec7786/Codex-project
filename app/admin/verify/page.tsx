import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { ShieldCheck } from 'lucide-react';

export default function AdminVerifyPage() {
  return (
    <>
      <AdminHeader title="Verify" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="TRUST"
          title="Verification"
          description="Review verification submissions for ID and business proofs."
          icon={<ShieldCheck size={26} />}
        />

        <div className="admin-card">
          <h2>Verification</h2>
          <div className="admin-empty">No pending verification requests</div>
        </div>
      </div>
    </>
  );
}
