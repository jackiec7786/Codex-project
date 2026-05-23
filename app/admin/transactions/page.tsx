import AdminHeader from '@/components/AdminHeader';
import AdminPageHeader from '@/components/AdminPageHeader';
import { Receipt } from 'lucide-react';

export default function AdminTransactionsPage() {
  return (
    <>
      <AdminHeader title="Transactions" />

      <div className="admin-page-content">
        <AdminPageHeader
          section="FINANCE"
          title="Transactions"
          description="Audit transaction history across the platform."
          icon={<Receipt size={26} />}
        />

        <div className="admin-card">
          <h2>Transactions</h2>
          <div className="admin-empty">No transactions in this window</div>
        </div>
      </div>
    </>
  );
}
