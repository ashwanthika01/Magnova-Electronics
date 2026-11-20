'use client';
import Link from 'next/link';
import { useState } from 'react';
import Icon from './Icon';
import { useApp } from './Providers';

const fmt = (n) => '₹' + n.toLocaleString('en-IN');

export default function CartClient() {
  const { cart, setQty, remove, clear, user } = useApp();
  const [busy, setBusy] = useState(false); const [msg, setMsg] = useState(null); const [done, setDone] = useState(null);
  const total = cart.reduce((n, i) => n + i.price * i.qty, 0);

  async function place(e) {
    e.preventDefault(); setBusy(true); setMsg(null);
    const f = Object.fromEntries(new FormData(e.target));
    const r = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, items: cart.map((i) => ({ id: i.id, qty: i.qty })) }) });
    const d = await r.json(); setBusy(false);
    if (!r.ok) return setMsg(d.error);
    setDone(d); clear();
  }
  if (done) return <div className="card form" style={{ textAlign: 'center' }}><Icon name="check" size={44} /><h2>Order #{done.orderId} placed</h2><p>Total {fmt(done.total)}. Our team will contact you to confirm payment and delivery.</p><br /><Link className="btn" href="/online-store">Continue Shopping</Link></div>;
  if (!cart.length) return <div className="card form" style={{ textAlign: 'center' }}><h2>Your cart is empty</h2><br /><Link className="btn" href="/online-store">Browse Online Store</Link></div>;
  return (
    <div className="two r">
      <div>
        <table className="ctab"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th /></tr></thead>
          <tbody>{cart.map((i) => (
            <tr key={i.id}><td><b>{i.name}</b><br /><small>{i.spec}</small></td><td>{fmt(i.price)}</td>
              <td><div className="qty"><button onClick={() => setQty(i.id, i.qty - 1)}>−</button><span>{i.qty}</span><button onClick={() => setQty(i.id, i.qty + 1)}>+</button></div></td>
              <td>{fmt(i.price * i.qty)}</td><td><button onClick={() => remove(i.id)} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#a11' }}>Remove</button></td></tr>))}</tbody></table>
        <p className="price" style={{ textAlign: 'right', marginTop: 14 }}>Total: {fmt(total)} <small>(Incl. GST)</small></p>
      </div>
      <form className="card form" onSubmit={place}>
        <h3 style={{ marginBottom: 14 }}>Delivery Details</h3>
        <div className="fg">
          <div className="full"><label>Name <i>*</i></label><input name="name" required defaultValue={user?.name || ''} key={user?.id} /></div>
          <div><label>Email <i>*</i></label><input type="email" name="email" required defaultValue={user?.email || ''} key={'e' + user?.id} /></div>
          <div><label>Phone <i>*</i></label><input name="phone" required /></div>
          <div className="full"><label>Delivery Address <i>*</i></label><textarea name="address" rows={3} required /></div>
        </div>
        <div className="fbar"><button className="btn" disabled={busy}><Icon name="card" className="" /> {busy ? 'Placing…' : 'Place Order'}</button></div>
        {msg && <div className="msg err">{msg}</div>}
      </form>
    </div>
  );
}
