import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Megaphone } from 'lucide-react';

export default function AdminAdvertisementsPage() {
  return (
    <>
      <AdminHeader title="Advertisements" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="GROWTH"
          title="Advertisements"
          description="Manage paid ad placements and campaigns."
          icon={<Megaphone size={26} />}
        />

        <div className="admin-card">
          <h2>Advertisements</h2>
          <div className="admin-empty">No active advertisements</div>
        </div>
      </div>
    </>
  );
}
