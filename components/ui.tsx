import Link from "next/link";
import Image from "next/image";

export const categories = [
  { icon: "⌕", name: "Services", meta: "24 listings", tone: "green" },
  { icon: "▣", name: "Electronics", meta: "186 listings", tone: "red" },
  { icon: "⌂", name: "Rentals", meta: "312 listings", tone: "green" },
  { icon: "◇", name: "For Sale", meta: "451 listings", tone: "gold" },
  { icon: "♧", name: "Home & Garden", meta: "98 listings", tone: "green" },
  { icon: "▰", name: "Vehicles", meta: "76 listings", tone: "red" },
  { icon: "▤", name: "Jobs", meta: "53 listings", tone: "green" }
];

export const listings = [
  { title: "2 Bed Apartment", price: "$1,800 /mo", location: "Grand Anse, Grenada", image: "/assets/listing-house-thumb.png", badge: "For Rent" },
  { title: "iPhone 13 Pro 128GB", price: "$1,650", location: "St. George's, Grenada", image: "/assets/listing-phone-thumb.png" },
  { title: "Sectional Sofa", price: "$850", location: "St. George's, Grenada", image: "/assets/listing-sofa-thumb.png" },
  { title: "House Cleaning Service", price: "$120", location: "St. George's, Grenada", image: "/assets/listing-cleaning-thumb.png" },
  { title: "Dining Table Set", price: "$450", location: "St. David's, Grenada", image: "/assets/listing-table-thumb.png" }
];

export const chats = [
  ["Jennifer", "Regarding iPhone 13 Pro", "9:30 AM", "2"],
  ["Michael", "Is the apartment still available?", "Yesterday", "1"],
  ["Carla", "Thanks! I'll come by tomorrow.", "May 18", ""],
  ["Jason", "Can you do it for $100?", "May 17", ""],
  ["Denise", "Service completed. Thanks!", "May 16", ""]
];

export function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-mark">◇</span>
      <span><strong>Spice</strong><em>Classifieds</em></span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/browse">Browse</Link>
        <Link href="/categories">Categories⌄</Link>
        <Link href="/post">Become a Seller</Link>
      </nav>
      <div className="header-actions">
        <span>◌</span><span>♡</span><span>♧</span>
        <button className="outline tiny">Log In</button>
        <button className="solid tiny">Sign Up</button>
      </div>
      <div className="mobile-header-icons"><span>♧</span><span>☰</span></div>
    </header>
  );
}

export function MobileTop({ title, back = false }: { title?: string; back?: boolean }) {
  return (
    <div className="mobile-top">
      <span>{back ? "←" : ""}</span>
      <strong>{title ?? ""}</strong>
      <span>{title ? "♡  ⇧" : ""}</span>
    </div>
  );
}

export function BottomNav({ active = "Home" }: { active?: string }) {
  const items = ["Home", "Saved", "Post", "Messages", "Profile"];
  return (
    <div className="bottom-nav">
      {items.map((item) => (
        <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={active === item ? "active" : ""}>
          <span>{item === "Home" ? "⌂" : item === "Saved" ? "♡" : item === "Post" ? "+" : item === "Messages" ? "▢" : "◯"}</span>
          <small>{item}</small>
        </Link>
      ))}
    </div>
  );
}

export function SearchBar({ simple = false }: { simple?: boolean }) {
  return (
    <div className={`searchbar ${simple ? "simple" : ""}`}>
      <span>⌕</span>
      <span className="muted">Search for anything...</span>
      {!simple && <><span className="divider" /><span>⌖ All of Grenada</span><button className="solid">Search</button></>}
    </div>
  );
}

export function CategoryStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`category-strip ${compact ? "compact" : ""}`}>
      {categories.slice(0, compact ? 5 : 7).map((c) => (
        <div className="category-pill" key={c.name}>
          <span className={`circle ${c.tone}`}>{c.icon}</span>
          <strong>{c.name}</strong>
          {!compact && <small>{c.meta}</small>}
        </div>
      ))}
      {!compact && <div className="category-pill"><span className="circle plain">···</span><strong>More</strong><small>View all</small></div>}
    </div>
  );
}

export function ListingCard({ item }: { item: typeof listings[number] }) {
  return (
    <article className="listing-card">
      <div className="thumb-wrap">
        <Image src={item.image} alt="" fill className="cover" />
        <span className="heart">♡</span>
      </div>
      <h3>{item.title}</h3>
      <p className="muted">{item.location}</p>
      <div className="price-row">
        <strong>{item.price}</strong>
        {item.badge && <span className="badge gold">{item.badge}</span>}
      </div>
    </article>
  );
}

export function FeaturedListings() {
  return (
    <section className="panel featured">
      <div className="section-title"><strong>Featured Listings</strong><Link href="/browse">View all</Link></div>
      <div className="cards-row">{listings.map((item) => <ListingCard key={item.title} item={item} />)}</div>
    </section>
  );
}

export function SideFilters() {
  return (
    <aside className="filters-card">
      <strong>Categories</strong>
      {["All Categories", "Services (24)", "Electronics (186)", "Rentals (312)", "For Sale (451)", "Home & Garden (98)", "Vehicles (76)", "Jobs (53)", "Other (40)"].map((item) => <p key={item}>⌾ {item}</p>)}
      <strong>Price Range</strong>
      <div className="price-inputs"><span>Min</span><span>Max</span></div>
      <div className="slider"><i /></div>
    </aside>
  );
}

export function ListingRows() {
  const rows = [
    { title: "Sectional Sofa - Like New", text: "Comfortable 3-piece sectional sofa in excellent condition.", price: "$850", image: "/assets/listing-sofa-thumb.png" },
    { title: "Samsung Galaxy S23 Ultra 256GB", text: "Unlocked. Comes with box and charger.", price: "$1,250", image: "/assets/listing-phone-thumb.png" },
    { title: "1 Bedroom Apartment - Grand Anse", text: "Beautiful 1 bed apartment near the beach. Water included.", price: "$1,400 /mo", image: "/assets/listing-house-thumb.png" }
  ];
  return (
    <div className="listing-rows">
      {rows.map((row) => (
        <article key={row.title} className="row-card">
          <div className="row-thumb"><Image src={row.image} alt="" fill className="cover" /></div>
          <div><h3>{row.title}</h3><p className="muted">St. George's, Grenada · 2 days ago</p><p>{row.text}</p><strong>{row.price}</strong></div>
          <span>♡</span>
        </article>
      ))}
    </div>
  );
}

export function SidebarProfile() {
  return (
    <aside className="seller-sidebar">
      <div className="seller-head">
        <div className="avatar palm">🌴</div>
        <div><strong>Alicia M.</strong><small>Member since 2022</small></div>
      </div>
      <div className="stars">★ 4.8 (24 reviews)</div>
      <p>◷ Typically replies within 1 hour</p>
      <button className="outline wide">View Seller Profile</button>
      <hr />
      <strong>Safety Tips</strong>
      <p>◌ Meet in a public place</p><p>◌ Check the item before you pay</p><p>◌ Never send money in advance</p>
      <Link href="/help" className="danger-link">Learn more</Link>
    </aside>
  );
}

export function DashboardSidebar() {
  return (
    <aside className="dashboard-side">
      <div className="dash-user"><div className="avatar palm">🌴</div><div><strong>Alicia M.</strong><small>View Profile</small></div></div>
      <button className="gold-button">＋ Post an Ad</button>
      {["Dashboard", "My Listings", "Saved Items", "Messages", "My Orders", "Reviews", "Account Settings", "Log Out"].map((item) => <p key={item}>◫ {item}</p>)}
    </aside>
  );
}
