import Image from "next/image";
import { BottomNav, MobileTop } from "../../../components/ui";

export default function ApartmentPage() {
  return (
    <div className="mobile mobile-page mobile-detail property-detail">
      <MobileTop back />
      <div className="property-image"><Image src="/assets/house-detail.png" alt="" fill className="cover" /><span>1/12</span></div>
      <div className="dots"><b /> <i /> <i /> <i /></div>
      <section className="mobile-detail-copy">
        <h1>2 Bed Apartment</h1>
        <div className="mobile-price"><strong>$1,800 <em>/mo</em></strong><span className="badge gold">For Rent</span></div>
        <div className="meta-row">⌖ Grand Anse, Grenada <small>5 days ago</small></div>
        <div className="property-facts"><span>▱<b>2</b><small>Bedrooms</small></span><span>♨<b>1</b><small>Bathrooms</small></span><span>⌁<b>850</b><small>Sq Ft</small></span><span>▣<b>1</b><small>Parking</small></span></div>
        <h3>Description</h3>
        <p>Spacious 2 bedroom apartment in a quiet neighborhood. Close to the beach, shops and public transport. Water included. Available June 1st.</p>
      </section>
      <div className="mobile-cta"><button className="outline">▢ Message Landlord</button><button className="solid">◔ Call</button></div>
    </div>
  );
}
