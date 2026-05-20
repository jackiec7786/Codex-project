import { Header } from "../../components/ui";

export default function HelpPage() {
  return (
    <div className="desktop shell help-shell">
      <Header />
      <main className="panel help-card">
        <h1>Help Center</h1>
        <p>How can we help you today?</p>
        <div className="search-mini wide">⌕ Search help articles...</div>
        <div className="help-grid">{["Buying Safely","Selling Tips","Manage Your Ads","Payments","Account & Settings","Contact Us"].map((x) => <article key={x}><strong>{x}</strong><p>Helpful guidance and support.</p></article>)}</div>
      </main>
    </div>
  );
}
