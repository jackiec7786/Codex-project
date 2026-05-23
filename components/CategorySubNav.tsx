'use client';

import { useState } from 'react';

export type SubcatItem = { label: string; emoji?: string; slug: string };

export default function CategorySubNav({ items, initial = 0 }: { items: SubcatItem[]; initial?: number }) {
  const [active, setActive] = useState(initial);

  return (
    <div className="category-subnav-wrap">
      <div className="category-subnav">
        {items.map((item, i) => (
          <button
            key={item.slug}
            className={`category-subnav-pill ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {item.emoji && <span className="emoji">{item.emoji}</span>}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
