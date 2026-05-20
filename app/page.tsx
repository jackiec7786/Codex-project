import Image from "next/image";
import Link from "next/link";
import { BottomNav, CategoryStrip, FeaturedListings, Header, Logo, SearchBar } from "../components/ui";

export default function HomePage() {
  return (
    <>
      <div className="desktop shell home-shell">
        <Header />
        <main className="hero-panel panel">
          <div className="hero-copy">
            <h1><span>Find it.</span><b>List it.</b><em>Love Local.</em></h1>
            <p>Grenada&apos;s trusted marketplace for local services, rentals, electronics and more.</p>
            <SearchBar />
            <div className="button-row"><button className="solid">Browse Categories</button><button className="gold-button">＋ Post an Ad</button></div>
          </div>
          <div className="hero-art"><Image src="/assets/hero-scene.png" alt="" fill className="cover" /></div>
        </main>
        <section className="panel category-panel"><CategoryStrip /></section>
        <FeaturedListings />
      </div>

      <div className="mobile mobile-page landing-home">
        <section className="splash">
          <Logo />
          <h1><span>Find it.</span><b>List it.</b><em>Love Local.</em></h1>
          <p>Grenada&apos;s trusted marketplace for local services, rentals, electronics and more.</p>
          <div className="splash-art"><Image src="/assets/hero-scene.png" alt="" fill className="cover" /></div>
        </section>
        <div className="stack-buttons"><button className="solid wide big">Get Started</button><button className="outline wide big">Browse Listings</button></div>
      </div>

      <div className="mobile mobile-page mobile-home-preview">
        <header className="mobile-brand-header"><Logo /><div>♧　☰</div></header>
        <SearchBar simple />
        <CategoryStrip compact />
        <section className="mobile-promo">
          <Image src="/assets/promo-banner.png" alt="" fill className="cover" />
        </section>
        <div className="dots"><b /> <i /> <i /></div>
        <FeaturedListings />
        <BottomNav active="Home" />
      </div>
    </>
  );
}
