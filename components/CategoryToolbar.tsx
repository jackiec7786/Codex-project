import { X, Bookmark, SlidersHorizontal } from 'lucide-react';

export default function CategoryToolbar({
  resultsCount,
  searchTime,
  activeChip,
}: {
  resultsCount: number;
  searchTime?: string;
  activeChip?: string;
}) {
  return (
    <div className="category-toolbar">
      <div className="category-toolbar-meta">
        {resultsCount} {resultsCount === 1 ? 'result' : 'results'} found
        {searchTime && <span> in {searchTime}</span>}
      </div>
      <div className="category-toolbar-buttons">
        <button className="category-toolbar-btn">
          <X size={16} /> Clear Filters
        </button>
        <button className="category-toolbar-btn">
          <Bookmark size={16} /> Save Search
        </button>
        <button className="category-toolbar-btn has-dot">
          <SlidersHorizontal size={16} /> Filters
          <span className="dot" />
        </button>
      </div>
      {activeChip && (
        <div className="category-active-chip">
          {activeChip} <X size={14} />
        </div>
      )}
    </div>
  );
}
