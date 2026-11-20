'use client';
import { useMemo, useState } from 'react';
import Icon from './Icon';
import { useApp } from './Providers';
import { STORE_CATEGORIES } from '@/lib/data';

const RANGES = {
  inductance_mh: ['Inductance', [['Below 1 mH', 0, 1], ['1 – 10 mH', 1, 10], ['Above 10 mH', 10, 1e9]]],
  current_a: ['Current Rating', [['Up to 5 A', 0, 5], ['5 – 20 A', 5.0001, 20], ['Above 20 A', 20.0001, 1e9]]],
  power_w: ['Power Rating', [['Up to 100 W', 0, 100], ['100 – 500 W', 100.0001, 500], ['Above 500 W', 500.0001, 1e9]]],
};
const fmt = (n) => '₹' + n.toLocaleString('en-IN');

function Card({ p }) {
  const { add } = useApp();
  const [q, setQ] = useState(1); const [done, setDone] = useState(false);
  return (
    <div className="card sp">
      <div className="im"><img src={p.image} alt={p.name} /></div>
      <h3 style={{ fontSize: 16 }}>{p.name}</h3>
      <div style={{ fontSize: 13.5, color: 'var(--muted)' }}>{p.spec}</div>
      <div className="price">{fmt(p.price)} <small>(Incl. GST)</small></div>
      {p.stock > 0 ? <div className="stock"><Icon name="check" size={14} className="" /> In Stock</div> : <div className="stock out">Out of Stock</div>}
      <div className="qty"><button onClick={() => setQ(Math.max(1, q - 1))} aria-label="Decrease">−</button><span>{q}</span><button onClick={() => setQ(Math.min(p.stock || 1, q + 1))} aria-label="Increase">+</button></div>
      <button className="btn sm" disabled={p.stock < 1} onClick={() => { add(p, q); setDone(true); setTimeout(() => setDone(false), 1400); }}>
        <Icon name="cart" size={16} className="" /> {done ? 'Added ✓' : 'Add to Cart'}</button>
    </div>
  );
}

export default function StoreClient({ products }) {
  const [cats, setCats] = useState([]); const [f, setF] = useState({}); const [sort, setSort] = useState('popular'); const [view, setView] = useState('grid');
  const list = useMemo(() => {
    let r = products.filter((p) => !cats.length || cats.includes(p.category));
    for (const [k, v] of Object.entries(f)) { if (!v) continue; const [, lo, hi] = RANGES[k][1][v - 1]; r = r.filter((p) => p[k] != null && p[k] >= lo && p[k] <= hi); }
    const by = { popular: (a, b) => b.popularity - a.popularity, low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price, name: (a, b) => a.name.localeCompare(b.name) };
    return [...r].sort(by[sort]);
  }, [products, cats, f, sort]);
  const toggle = (c) => setCats((x) => (x.includes(c) ? x.filter((y) => y !== c) : [...x, c]));
  return (
    <div className="store">
      <aside className="side">
        <div className="hd">Categories</div>
        <div className="bd">
          <label><input type="checkbox" checked={!cats.length} onChange={() => setCats([])} /> All Products</label>
          {STORE_CATEGORIES.map((c) => <label key={c}><input type="checkbox" checked={cats.includes(c)} onChange={() => toggle(c)} /> {c}</label>)}
        </div>
        <div className="hd">Filter</div>
        <div className="bd">
          {Object.entries(RANGES).map(([k, [label, opts]]) => (
            <div key={k}><div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
              <select value={f[k] || ''} onChange={(e) => setF({ ...f, [k]: Number(e.target.value) })}><option value="">Select Range</option>{opts.map((o, i) => <option key={o[0]} value={i + 1}>{o[0]}</option>)}</select></div>
          ))}
          <button className="btn ghost sm" onClick={() => { setF({}); setCats([]); }}><Icon name="refresh" size={15} className="" /> Reset Filters</button>
        </div>
      </aside>
      <div>
        <div className="row" style={{ marginBottom: 16 }}>
          <h2 className="h2" style={{ margin: 0 }}>All Products</h2>
          <div className="row" style={{ gap: 10, fontSize: 14 }}>Sort By:
            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: 7, borderRadius: 7, border: '1px solid #e2cdbc' }}><option value="popular">Popular</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="name">Name</option></select>
            <button className="btn sm" onClick={() => setView('grid')} aria-label="Grid" style={{ padding: 8, opacity: view === 'grid' ? 1 : .5 }}><Icon name="grid" size={16} className="" /></button>
            <button className="btn sm" onClick={() => setView('list')} aria-label="List" style={{ padding: 8, opacity: view === 'list' ? 1 : .5 }}><Icon name="list" size={16} className="" /></button>
          </div>
        </div>
        {list.length ? <div className={`grid ${view === 'grid' ? 'g4' : 'list'}`} style={view === 'grid' ? { gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))' } : {}}>{list.map((p) => <Card key={p.id} p={p} />)}</div>
          : <p>No products match your filters.</p>}
      </div>
    </div>
  );
}
