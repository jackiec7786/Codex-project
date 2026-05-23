import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { LifeBuoy } from 'lucide-react';

export default function AdminSupportPage() {
  return (
    <>
      <AdminHeader title="Support" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="TRUST"
          title="Support"
          description="Respond to customer support tickets."
          icon={<LifeBuoy size={26} />}
        />

        <div className="admin-card">
          <h2>Support</h2>
          <div className="admin-empty">No open support tickets</div>
        </div>
      </div>
    </>
  );
}
