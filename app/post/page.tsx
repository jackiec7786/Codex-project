import { BottomNav, Header, categories } from "../../components/ui";

export default function PostPage() {
  return (
    <>
      <div className="desktop shell post-shell">
        <Header />
        <main className="panel post-card">
          <h2>Post a New Ad</h2>
          <div className="stepper"><b>1 Category</b><i /> <span>2 Details</span><i /> <span>3 Location</span><i /> <span>4 Photos</span><i /> <span>5 Review</span></div>
          <h3>What are you listing?</h3>
          <p className="muted">Choose a category that best fits your item or service.</p>
          <div className="category-grid">{categories.slice(0,7).map((c) => <article key={c.name}><span className={`circle ${c.tone}`}>{c.icon}</span><div><strong>{c.name}</strong><p>{c.name === "Services" ? "Offer your professional skills" : c.name === "Electronics" ? "Phones, computers, appliances & more" : c.name === "Rentals" ? "Apartments, houses, vehicles & more" : "Everything else you're selling"}</p></div></article>)}</div>
          <div className="between"><button className="outline">Cancel</button><button className="solid">Continue</button></div>
        </main>
      </div>

      <div className="mobile mobile-page mobile-post">
        <div className="mobile-top"><span>←</span><strong>Post a Listing</strong><span /></div>
        <div className="mobile-progress"><b /><b /><i /><i /><i /><i /><i /></div>
        <h2>What are you listing?</h2>
        <p>Choose a category to get started.</p>
        <section className="mobile-list">
          {categories.slice(0,4).map((c) => <article key={c.name}><span className={`circle ${c.tone}`}>{c.icon}</span><div><strong>{c.name}</strong><p>{c.name === "Services" ? "Offer your professional skills" : c.name === "Electronics" ? "Phones, computers, appliances & more" : c.name === "Rentals" ? "Apartments, houses, vehicles & more" : "Items you want to sell"}</p></div><b>›</b></article>)}
        </section>
        <BottomNav active="Post" />
      </div>
    </>
  );
}
