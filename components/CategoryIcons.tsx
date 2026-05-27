import type { SVGProps } from 'react';

// Shared base props for the icon style
const baseProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const wrap = (size?: number, rest?: SVGProps<SVGSVGElement>) => ({
  ...baseProps,
  ...(size ? { width: size, height: size } : {}),
  ...rest,
});

// ---------- Vehicles: car with a slight Caribbean lean ----------
export function VehiclesIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M4 14h16l-2-5a2 2 0 0 0-1.9-1.4H7.9A2 2 0 0 0 6 9l-2 5z" />
      <path d="M4 14v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1" />
      <path d="M16 17v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3" />
      <circle cx="7.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
  );
}

// ---------- Electronics: phone with rounded corners ----------
export function ElectronicsIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <rect x="6" y="3" width="12" height="18" rx="2.5" />
      <path d="M11 18h2" />
      <path d="M9 6h6" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// ---------- Real Estate: house with palm-leaf accent ----------
export function RealEstateIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5h4v5" />
      <path d="M16 5c1 -1.5 2 -2 3 -2" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// ---------- Services: wrench with star (trusted provider) ----------
export function ServicesIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M14.7 6.3a4 4 0 1 1-3 7.4l-7 7-2.4-2.4 7-7a4 4 0 0 1 5.4-5z" />
      <path d="M14.7 6.3l2.6 2.6" strokeWidth="1.4" />
      <path d="M17 3.5l.5 1.2 1.3.2-.9.9.2 1.3-1.1-.6-1.1.6.2-1.3-.9-.9 1.3-.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ---------- Jobs: briefcase with notification dot ----------
export function JobsIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" strokeWidth="1.4" opacity="0.6" />
      <circle cx="18.5" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ---------- Home & Garden: sprout from a pot ----------
export function HomeGardenIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M7 15h10l-1 5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
      <path d="M12 15v-4" />
      <path d="M12 11c-2-1-3-3-3-5 2 0 3 1 3 3" />
      <path d="M12 11c2-1 3-3 3-5-2 0-3 1-3 3" />
    </svg>
  );
}

// ---------- Farm-to-Table: nutmeg with stem (the spice isle nut) ----------
export function FarmToTableIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M12 4c-1 0-1 1-1 2v1" />
      <path d="M12 4c1 0 1 1 1 2v1" />
      <ellipse cx="12" cy="14" rx="6" ry="7" />
      <path d="M9 11c1.5 1 4.5 1 6 0" strokeWidth="1.3" opacity="0.6" />
      <path d="M8 14c2 1.5 6 1.5 8 0" strokeWidth="1.3" opacity="0.6" />
      <path d="M9 17c1.5 1 4.5 1 6 0" strokeWidth="1.3" opacity="0.6" />
    </svg>
  );
}

// ---------- SGU: grad cap on top of a palm/island base ----------
export function SGUIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M2 9l10-4 10 4-10 4z" />
      <path d="M6 11v4c0 1 2.5 2 6 2s6-1 6-2v-4" />
      <path d="M22 9v5" strokeWidth="1.4" />
      <circle cx="22" cy="15.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ---------- For Sale: price tag with hole ----------
export function ForSaleIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  );
}

// ---------- For Rent: key with house outline ----------
export function ForRentIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <circle cx="8" cy="15" r="4" />
      <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
      <path d="M11 12l9-9" />
      <path d="M15 4h5v5" />
      <path d="M17 6l2 2" strokeWidth="1.4" />
    </svg>
  );
}

// ---------- Pets ----------
export function PetsIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <circle cx="5.5" cy="9" r="1.8" />
      <circle cx="9.5" cy="5.5" r="1.8" />
      <circle cx="14.5" cy="5.5" r="1.8" />
      <circle cx="18.5" cy="9" r="1.8" />
      <path d="M8 14a4 4 0 0 1 8 0c0 2-1 2-1 4s-1 3-3 3-3-1-3-3-1-2-1-4z" />
    </svg>
  );
}

// ---------- Sports & Outdoors ----------
export function SportsIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" strokeWidth="1.4" />
      <path d="M3 12h18" strokeWidth="1.4" />
      <path d="M5.6 5.6l12.8 12.8" strokeWidth="1.4" opacity="0.6" />
      <path d="M18.4 5.6L5.6 18.4" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// ---------- Free Stuff: gift box ----------
export function FreeStuffIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...wrap(size, rest)}>
      <rect x="3" y="9" width="18" height="12" rx="1.5" />
      <path d="M3 13h18" strokeWidth="1.4" />
      <path d="M12 9v12" strokeWidth="1.4" />
      <path d="M12 9c-1-2-3-3-4-2.5s0 2.5 4 2.5z" />
      <path d="M12 9c1-2 3-3 4-2.5s0 2.5-4 2.5z" />
    </svg>
  );
}

// ---------- Convenience map for dynamic lookups ----------
export const CATEGORY_ICONS = {
  vehicles:       VehiclesIcon,
  electronics:    ElectronicsIcon,
  'real-estate':  RealEstateIcon,
  services:       ServicesIcon,
  jobs:           JobsIcon,
  'home-garden':  HomeGardenIcon,
  'farm-to-table': FarmToTableIcon,
  sgu:            SGUIcon,
  'for-sale':     ForSaleIcon,
  'for-rent':     ForRentIcon,
  pets:           PetsIcon,
  sports:         SportsIcon,
  'free-stuff':   FreeStuffIcon,
} as const;
