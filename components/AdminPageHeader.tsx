import type { ReactNode } from 'react';

export default function AdminPageHeader({
  section,
  title,
  description,
  icon,
}: {
  section: string;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="admin-page-header">
      <div className="admin-page-header-icon">{icon}</div>
      <div>
        <div className="admin-page-header-section">{section}</div>
        <h1 className="admin-page-header-title">{title}</h1>
        <p className="admin-page-header-desc">{description}</p>
      </div>
    </div>
  );
}
