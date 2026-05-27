import {
  VehiclesIcon, ElectronicsIcon, RealEstateIcon, ServicesIcon,
  JobsIcon, HomeGardenIcon, FarmToTableIcon, SGUIcon,
  ForSaleIcon, ForRentIcon, PetsIcon, SportsIcon, FreeStuffIcon,
} from '@/components/CategoryIcons';
import Header from '@/components/Header';

const ICONS = [
  { name: 'Vehicles',       Icon: VehiclesIcon,     color: 'red' },
  { name: 'Electronics',    Icon: ElectronicsIcon,  color: 'red' },
  { name: 'Real Estate',    Icon: RealEstateIcon,   color: 'green' },
  { name: 'Services',       Icon: ServicesIcon,     color: 'green' },
  { name: 'Jobs',           Icon: JobsIcon,         color: 'green' },
  { name: 'Home & Garden',  Icon: HomeGardenIcon,   color: 'green' },
  { name: 'Farm to Table',  Icon: FarmToTableIcon,  color: 'green' },
  { name: 'SGU',            Icon: SGUIcon,          color: 'red' },
  { name: 'For Sale',       Icon: ForSaleIcon,      color: 'yellow' },
  { name: 'For Rent',       Icon: ForRentIcon,      color: 'yellow' },
  { name: 'Pets',           Icon: PetsIcon,         color: 'yellow' },
  { name: 'Sports',         Icon: SportsIcon,       color: 'red' },
  { name: 'Free Stuff',     Icon: FreeStuffIcon,    color: 'green' },
];

const colorMap = {
  green:  { bg: 'var(--brand-green)', tint: 'var(--brand-green-light)', fg: 'var(--brand-green)' },
  red:    { bg: 'var(--brand-red)',   tint: 'var(--brand-red-light)',   fg: 'var(--brand-red)' },
  yellow: { bg: 'var(--brand-yellow)', tint: 'var(--brand-yellow-light)', fg: '#d4940c' },
} as const;

export default function IconPreviewPage() {
  return (
    <>
      <Header />

      <div className="container" style={{ padding: '32px 16px 60px' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          Category icon set
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: 14 }}>
          Custom Caribbean-flavored icons. 2px stroke, rounded caps, 24×24 viewbox. Scales cleanly at all sizes.
        </p>

        {/* Big colored circles (homepage style) */}
        <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Colored circles · homepage strip
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 16,
          marginBottom: 48,
        }}>
          {ICONS.map(({ name, Icon, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div key={name} style={{ textAlign: 'center', padding: 16, background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: c.bg,
                  color: color === 'yellow' ? 'var(--text)' : 'white',
                  display: 'grid', placeItems: 'center',
                  margin: '0 auto 12px',
                }}>
                  <Icon size={32} strokeWidth={2.2} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{name}</div>
              </div>
            );
          })}
        </div>

        {/* Tinted backgrounds (vendor dashboard kpi style) */}
        <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Tinted squares · dashboard tiles
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 12,
          marginBottom: 48,
        }}>
          {ICONS.map(({ name, Icon, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: c.tint,
                  color: c.fg,
                  display: 'grid', placeItems: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{name}</div>
              </div>
            );
          })}
        </div>

        {/* Stroke icons only (small inline use) */}
        <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Plain stroke · inline / nav
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 12,
          marginBottom: 48,
        }}>
          {ICONS.map(({ name, Icon }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, color: 'var(--text)' }}>
              <Icon size={18} />
              <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
            </div>
          ))}
        </div>

        {/* Size comparison */}
        <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Size scale
        </h2>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 24 }}>
          {ICONS.slice(0, 4).map(({ name, Icon }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 100, fontSize: 13, fontWeight: 700, color: 'var(--text-muted)' }}>{name}</div>
              <Icon size={16} />
              <Icon size={20} />
              <Icon size={24} />
              <Icon size={32} />
              <Icon size={48} />
              <div style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-faint)' }}>16 · 20 · 24 · 32 · 48 px</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
