export default function CategorySearchPanel({
  placeholder = 'Search for anything...',
}: {
  placeholder?: string;
}) {
  return (
    <div className="category-search-panel">
      <div className="category-search-row">
        <input className="category-search-input" placeholder={placeholder} />
        <button className="btn btn-primary category-search-btn">Search</button>
      </div>
    </div>
  );
}
