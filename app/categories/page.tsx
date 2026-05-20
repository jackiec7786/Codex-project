import { BottomNav, MobileTop, categories } from "../../components/ui";

export default function CategoriesPage() {
  return (
    <div className="mobile mobile-page list-screen">
      <MobileTop title="Categories" back />
      <section className="mobile-list">
        {categories.slice(0,4).map((c) => <article key={c.name}><span className={`circle ${c.tone}`}>{c.icon}</span><div><strong>{c.name}</strong><p>{c.name === "Services" ? "Professional help for your everyday needs" : c.name === "Electronics" ? "Phones, laptops, appliances & more" : c.name === "Rentals" ? "Apartments, houses, vehicles & more" : "Everything else you are looking for"}</p></div><b>›</b></article>)}
      </section>
      <BottomNav active="Home" />
    </div>
  );
}
