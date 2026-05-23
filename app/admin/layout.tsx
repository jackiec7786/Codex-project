import type { ReactNode } from 'react';
import AdminBottomNav from '@/components/AdminBottomNav';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="admin-shell">
      {children}
      <AdminBottomNav />
    </div>
  );
}
