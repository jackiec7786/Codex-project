import Image from "next/image";
import { DashboardSidebar, Header, chats } from "../../components/ui";

export default function DashboardPage() {
  return (
    <div className="desktop shell dashboard-page">
      <Header />
      <main className="dashboard-grid panel">
        <DashboardSidebar />
        <section className="dashboard-main">
          <h2>Dashboard</h2>
          <div className="stats"><article><b>23</b><span>Active Listings</span></article><article><b>12</b><span>Messages</span></article><article><b>45</b><span>Profile Views</span></article><article><b>6</b><span>Saved Items</span></article></div>
          <div className="dash-columns">
            <section className="panel inner">
              <div className="section-title"><strong>Recent Messages</strong><span>View all</span></div>
              {chats.slice(0,4).map(([name,msg,time,badge]) => <article className="dash-msg" key={name}><span className="avatar tiny">{name[0]}</span><div><strong>{name}</strong><p>{msg}</p></div><small>{time}</small>{badge && <b>{badge}</b>}</article>)}
            </section>
            <section className="panel inner">
              <div className="section-title"><strong>My Listings</strong><span>View all</span></div>
              {[
                ["2 Bed Apartment", "$1,800 /mo", "/assets/listing-house-thumb.png"],
                ["iPhone 13 Pro 128GB", "$1,650", "/assets/listing-phone-thumb.png"],
                ["Sectional Sofa", "$850", "/assets/listing-sofa-thumb.png"]
              ].map(([t,p,img]) => <article className="dash-listing" key={t}><div><Image src={img} alt="" fill className="cover" /></div><section><strong>{t}</strong><b>{p}</b><small>◌ 87 views　▢ 3 messages</small></section><span>⋯</span></article>)}
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
