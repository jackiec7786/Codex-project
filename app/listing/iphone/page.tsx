import Image from "next/image";
import { Header, SidebarProfile, MobileTop, BottomNav } from "../../../components/ui";

export default function IPhonePage() {
  return (
    <>
      <div className="desktop shell detail-shell">
        <Header />
        <main className="panel detail-grid">
          <section className="detail-gallery">
            <p className="crumbs">Home　›　Electronics　›　Phones　›　iPhone 13 Pro 128GB</p>
            <div className="gallery-main"><Image src="/assets/phone-main.png" alt="" fill className="contain" /></div>
            <div className="thumbs"><span><Image src="/assets/phone-main.png" alt="" fill className="cover" /></span><span><Image src="/assets/phone-card.png" alt="" fill className="cover" /></span><span><Image src="/assets/listing-phone-thumb.png" alt="" fill className="cover" /></span><span>+3</span></div>
          </section>
          <section className="detail-copy">
            <h1>iPhone 13 Pro 128GB</h1>
            <h2>$1,650</h2>
            <span className="badge green">Excellent condition</span>
            <div className="meta-row">⌖ St. George&apos;s, Grenada　　◌ 128 views</div>
            <p className="muted">Posted 2 days ago</p>
            <p>iPhone 13 Pro 128GB in excellent condition. Always protected with a case and screen protector. Battery health: 87%. Comes with original box, charger and cable.</p>
            <div className="facts"><div>▣ <span>Storage</span><strong>128GB</strong></div><div>▣ <span>Battery Health</span><strong>87%</strong></div><div>● <span>Color</span><strong>Alpine Green</strong></div><div>◌ <span>Condition</span><strong>Excellent</strong></div></div>
            <div className="button-row stretch"><button className="solid">▢ Message Seller</button><button className="outline">◔ Call Seller</button></div>
          </section>
          <SidebarProfile />
        </main>
      </div>

      <div className="mobile mobile-page mobile-detail">
        <MobileTop back />
        <div className="mobile-detail-image"><Image src="/assets/phone-main.png" alt="" fill className="contain" /></div>
        <div className="dots"><b /> <i /> <i /> <i /></div>
        <section className="mobile-detail-copy">
          <h1>iPhone 13 Pro</h1>
          <div className="mobile-price"><strong>$1,650</strong><span className="badge green">Excellent condition</span></div>
          <div className="meta-row">⌖ St. George&apos;s, Grenada <small>2 days ago</small></div>
          <h3>Description</h3>
          <p>iPhone 13 Pro 128GB in excellent condition. Always protected with a case and screen protector. Battery health: 87%. Comes with original box, charger and cable.</p>
          <div className="mobile-facts"><span>▣ 128GB<br /><small>Storage</small></span><span>▣ 87%<br /><small>Battery Health</small></span><span>● Alpine Green<br /><small>Color</small></span></div>
        </section>
        <div className="mobile-cta"><button className="outline">▢ Message</button><button className="solid">◔ Call</button></div>
      </div>
    </>
  );
}
