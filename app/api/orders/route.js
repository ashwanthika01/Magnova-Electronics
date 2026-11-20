import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { currentUser } from '@/lib/auth';
export const runtime = 'nodejs';

export async function POST(req) {
  const db = getDb();
  const b = await req.json().catch(() => ({}));
  const s = (k) => String(b[k] || '').trim();
  if (!s('name') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s('email')) || !s('phone') || !s('address'))
    return NextResponse.json({ error: 'Please complete all delivery details.' }, { status: 400 });
  if (!Array.isArray(b.items) || !b.items.length) return NextResponse.json({ error: 'Your cart is empty.' }, { status: 400 });

  // prices always come from the database, never from the client
  let total = 0; const lines = [];
  for (const it of b.items) {
    const p = db.prepare('SELECT id,name,spec,price,stock FROM store_products WHERE id=?').get(Number(it.id));
    const qty = Math.max(1, Math.min(999, parseInt(it.qty, 10) || 1));
    if (!p) return NextResponse.json({ error: 'A product in your cart is no longer available.' }, { status: 400 });
    if (qty > p.stock) return NextResponse.json({ error: `Only ${p.stock} in stock for ${p.name}.` }, { status: 400 });
    total += p.price * qty; lines.push({ id: p.id, name: p.name, spec: p.spec, price: p.price, qty });
  }
  const user = currentUser();
  const info = db.transaction(() => {
    for (const l of lines) db.prepare('UPDATE store_products SET stock=stock-? WHERE id=?').run(l.qty, l.id);
    return db.prepare('INSERT INTO orders (user_id,name,email,phone,address,items,total) VALUES (?,?,?,?,?,?,?)')
      .run(user?.id ?? null, s('name'), s('email'), s('phone'), s('address'), JSON.stringify(lines), total);
  })();
  return NextResponse.json({ ok: true, orderId: info.lastInsertRowid, total });
}
