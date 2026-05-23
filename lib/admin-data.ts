import {
  LayoutGrid, SlidersHorizontal, Package, Star, Tag,
  Users, Store, MessageSquare,
  Shield, Flag, Bug, LifeBuoy, ShieldCheck,
  CreditCard, Receipt, Sparkles,
  Megaphone, BarChart3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type AdminMenuItem = {
  title: string;
  href: string;
  Icon: LucideIcon;
};

export type AdminMenuGroup = {
  label: string;
  items: AdminMenuItem[];
};

export const ADMIN_MENU_GROUPS: AdminMenuGroup[] = [
  {
    label: 'PLATFORM',
    items: [
      { title: 'Today',    href: '/admin',          Icon: LayoutGrid },
      { title: 'Settings', href: '/admin/settings', Icon: SlidersHorizontal },
    ],
  },
  {
    label: 'CONTENT',
    items: [
      { title: 'Listings',   href: '/admin/listings',   Icon: Package },
      { title: 'Featured',   href: '/admin/featured',   Icon: Star },
      { title: 'Categories', href: '/admin/categories', Icon: Tag },
    ],
  },
  {
    label: 'PEOPLE',
    items: [
      { title: 'Users',    href: '/admin/users',    Icon: Users },
      { title: 'Vendors',  href: '/admin/vendors',  Icon: Store },
      { title: 'Reviews',  href: '/admin/reviews',  Icon: MessageSquare },
    ],
  },
  {
    label: 'TRUST',
    items: [
      { title: 'Queue',   href: '/admin/queue',   Icon: Shield },
      { title: 'Reports', href: '/admin/reports', Icon: Flag },
      { title: 'Bugs',    href: '/admin/bugs',    Icon: Bug },
      { title: 'Support', href: '/admin/support', Icon: LifeBuoy },
      { title: 'Verify',  href: '/admin/verify',  Icon: ShieldCheck },
    ],
  },
  {
    label: 'FINANCE',
    items: [
      { title: 'Payments',      href: '/admin/payments',      Icon: CreditCard },
      { title: 'Transactions',  href: '/admin/transactions',  Icon: Receipt },
      { title: 'Subscriptions', href: '/admin/subscriptions', Icon: Sparkles },
    ],
  },
  {
    label: 'GROWTH',
    items: [
      { title: 'Advertisements', href: '/admin/advertisements', Icon: Megaphone },
      { title: 'Analytics',      href: '/admin/analytics',      Icon: BarChart3 },
    ],
  },
];
