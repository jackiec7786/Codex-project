import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Bug } from 'lucide-react';

export default function AdminBugsPage() {
  return (
    <>
      <AdminHeader title="Bugs" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="TRUST"
          title="Bug reports"
          description="Track product issues reported by users and staff."
          icon={<Bug size={26} />}
        />

        <div className="admin-card">
          <h2>Bug reports</h2>
          <div className="admin-empty">No open bug reports</div>
        </div>
      </div>
    </>
  );
}
