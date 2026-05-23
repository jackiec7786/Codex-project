import Link from 'next/link';

export default function CategoryHero({
  emoji,
  title,
  description,
  sellHref,
  sellLabel,
  browseHref = '/listings',
  browseLabel = 'Browse All',
  variant = 'dark',
}: {
  emoji: string;
  title: string;
  description: string;
  sellHref: string;
  sellLabel: string;
  browseHref?: string;
  browseLabel?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <section className={`category-hero category-hero-${variant}`}>
      <div className="category-hero-emoji">{emoji}</div>
      <h1 className="category-hero-title">{title}</h1>
      <p className="category-hero-desc">{description}</p>
      <div className="category-hero-actions">
        <Link href={sellHref} className="btn btn-primary btn-lg btn-block">
          {sellLabel}
        </Link>
        <Link href={browseHref} className="btn btn-outline-hero btn-lg btn-block">
          {browseLabel}
        </Link>
      </div>
    </section>
  );
}
