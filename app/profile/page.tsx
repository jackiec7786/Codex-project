import { BottomNav, Header } from "../../components/ui";

export default function ProfilePage() {
  return (
    <>
      <div className="desktop shell profile-shell">
        <Header />
        <main className="panel desktop-profile">
          <div className="profile-cover"></div>
          <section className="profile-bar">
            <div className="avatar large">🌴</div><div><h2>Alicia M.</h2><p>Member since 2022　★ 4.8 (24 reviews)</p></div>
            <div className="profile-stats"><b>23<small>Listings</small></b><b>12<small>Sold Items</small></b><b>45<small>Reviews</small></b><b>98%<small>Response Rate</small></b></div>
          </section>
          <section className="my-listings"><h3>My Listings</h3><p>iPhone 13 Pro 128GB　$1,650　Active</p><p>2 Bed Apartment　$1,800/mo　Active</p><p>Sectional Sofa　$850　Active</p></section>
        </main>
      </div>

      <div className="mobile mobile-page profile-mobile">
        <section className="profile-top">
          <div className="avatar large">🌴</div><div><strong>Alicia M.</strong><p>St. George&apos;s, Grenada</p><button className="outline tiny">Edit Profile</button></div>
        </section>
        <div className="profile-number-row"><b>23<small>Listings</small></b><b>12<small>Saved</small></b><b>8<small>Reviews</small></b></div>
        <section className="profile-menu"><p>▣ My Listings　›</p><p>◩ My Posted Ads　›</p><p>⚙ Account Settings　›</p><p>? Help & Support　›</p><p className="danger-link">⇥ Log Out</p></section>
        <BottomNav active="Profile" />
      </div>
    </>
  );
}
