import Image from "next/image";
import { Header, ListingRows, SearchBar, SideFilters } from "../../components/ui";

export default function BrowsePage() {
  return (
    <div className="desktop shell browse-shell">
      <Header />
      <section className="panel browse-toolbar"><SearchBar /><button className="outline">Filters</button><span>342 results</span><span>Sort by: Most Recent⌄</span></section>
      <main className="browse-grid">
        <SideFilters />
        <ListingRows />
        <section className="map-card panel">
          <div className="map-bg">
            <span className="pin p1">●</span><span className="pin p2">●</span><span className="pin p3">●</span>
            <strong>Grenada Map</strong>
          </div>
        </section>
      </main>
    </div>
  );
}
