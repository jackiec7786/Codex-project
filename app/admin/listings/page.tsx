import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Package } from 'lucide-react';

export default function AdminListingsPage() {
  return (
    <>
      <AdminHeader title="Listings" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="CONTENT"
          title="Listings"
          description="Inspect and manage all marketplace listings."
          icon={<Package size={26} />}
        />

        <div className="admin-card">
          <h2>Listings</h2>
          <div className="admin-empty">No listings to review</div>
        </div>
      </div>
    </>
  );
}
