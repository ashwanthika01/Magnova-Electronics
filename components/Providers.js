'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

export default function Providers({ children }) {
  const [cart, setCart] = useState([]);       // [{id,name,spec,price,image,qty,stock}]
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try { setCart(JSON.parse(localStorage.getItem('magnova_cart') || '[]')); } catch {}
    fetch('/api/auth/me').then((r) => r.json()).then((d) => setUser(d.user)).catch(() => {});
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem('magnova_cart', JSON.stringify(cart)); }, [cart, ready]);

  const add = useCallback((p, qty = 1) => setCart((c) => {
    const ex = c.find((i) => i.id === p.id);
    if (ex) return c.map((i) => (i.id === p.id ? { ...i, qty: Math.min(p.stock, i.qty + qty) } : i));
    return [...c, { id: p.id, name: p.name, spec: p.spec, price: p.price, image: p.image, stock: p.stock, qty }];
  }), []);
  const setQty = (id, qty) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(i.stock, qty)) } : i)));
  const remove = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const clear = () => setCart([]);
  const logout = async () => { await fetch('/api/auth/logout', { method: 'POST' }); setUser(null); };

  return <Ctx.Provider value={{ cart, add, setQty, remove, clear, user, setUser, logout, count: cart.reduce((n, i) => n + i.qty, 0) }}>{children}</Ctx.Provider>;
}
