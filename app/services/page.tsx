import { BottomNav, MobileTop, SearchBar } from "../../components/ui";

export default function ServicesPage() {
  const rows = [["⌕","Plumbing","24 listings"],["ϟ","Electrical","18 listings"],["♨","Cleaning","31 listings"],["♧","Landscaping","15 listings"],["▤","Moving Services","12 listings"],["▱","Car Repair","20 listings"]];
  return (
    <div className="mobile mobile-page services-screen">
      <MobileTop title="Services" back />
      <SearchBar simple />
      <div className="tabs"><span>All</span><i>Home Services</i><i>Business</i><i>Beauty</i><i>More</i></div>
      <section className="services-list">{rows.map(([icon,title,meta]) => <article key={title}><span>{icon}</span><div><strong>{title}</strong><p>{meta}</p></div><b>›</b></article>)}</section>
      <BottomNav active="Home" />
    </div>
  );
}
