import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { MessageSquare } from 'lucide-react';

export default function AdminReviewsPage() {
  return (
    <>
      <AdminHeader title="Reviews" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="PEOPLE"
          title="Reviews"
          description="Moderate buyer and seller reviews."
          icon={<MessageSquare size={26} />}
        />

        <div className="admin-card">
          <h2>Reviews</h2>
          <div className="admin-empty">No reviews flagged</div>
        </div>
      </div>
    </>
  );
}
