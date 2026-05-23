import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Store } from 'lucide-react';

export default function AdminVendorsPage() {
  return (
    <>
      <AdminHeader title="Vendors" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="PEOPLE"
          title="Vendors"
          description="Manage verified storefronts and vendor accounts."
          icon={<Store size={26} />}
        />

        <div className="admin-card">
          <h2>Vendors</h2>
          <div className="admin-empty">No vendor accounts yet</div>
        </div>
      </div>
    </>
  );
}
