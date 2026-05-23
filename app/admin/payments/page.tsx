import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { CreditCard } from 'lucide-react';

export default function AdminPaymentsPage() {
  return (
    <>
      <AdminHeader title="Payments" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="FINANCE"
          title="Payments"
          description="Monitor payment flow and resolve disputes."
          icon={<CreditCard size={26} />}
        />

        <div className="admin-card">
          <h2>Payments</h2>
          <div className="admin-empty">No payments to review</div>
        </div>
      </div>
    </>
  );
}
