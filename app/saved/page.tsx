import Image from "next/image";
import { BottomNav, Header, listings } from "../../components/ui";

export default function SavedPage() {
  return (
    <>
      <div className="desktop shell saved-shell">
        <Header />
        <main className="panel saved-panel">
          <h2>Saved Items</h2>
          <p className="muted">4 items</p>
          <div className="cards-row">{listings.slice(1,5).map((item) => <article className="listing-card" key={item.title}><div className="thumb-wrap"><Image src={item.image} alt="" fill className="cover" /><span className="heart">♥</span></div><h3>{item.title}</h3><strong>{item.price}</strong><p className="muted">{item.location}</p></article>)}</div>
        </main>
      </div>

      <div className="mobile mobile-page saved-mobile">
        <div className="mobile-top"><span></span><strong>Saved</strong><span></span></div>
        <div className="saved-tabs"><b>Listings</b><span>Searches</span></div>
        <section className="saved-list">
          {[
            ["MacBook Air M1", "$1,200", "/assets/listing-phone-thumb.png"],
            ["1 Bed Apartment", "$1,200 /mo", "/assets/listing-house-thumb.png"],
            ["Dining Table Set", "$450", "/assets/listing-table-thumb.png"],
            ["House Cleaning Service", "$120", "/assets/listing-cleaning-thumb.png"]
          ].map(([title, price, image]) => <article key={title}><div className="mini-img"><Image src={image} alt="" fill className="cover" /></div><div><strong>{title}</strong><b>{price}</b><small>St. George&apos;s</small></div><span>♥</span></article>)}
        </section>
        <BottomNav active="Saved" />
      </div>
    </>
  );
}
