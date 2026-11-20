'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Icon from './Icon';
import { useApp } from './Providers';
import { NAV, PRODUCTS } from '@/lib/data';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { count, user, logout } = useApp();
  const on = (h) => (h === '/' ? path === '/' : path.startsWith(h) || (h === '/contact' && ['/enquiry', '/assistance'].includes(path)));
  return (
    <header className="hdr">
      <div className="wrap">
        <Link href="/" className="logo" aria-label="Magnova home"><img src="/images/logo.png" alt="Magnova" /></Link>
        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {NAV.map((n) => n.children ? (
            <div key={n.href}>
              <Link href={n.href} className={`lnk ${on(n.href) ? 'on' : ''}`}>{n.label} <Icon name="down" size={14} className="" /></Link>
              <div className="dd">{PRODUCTS.map((p) => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>)}</div>
            </div>
          ) : <Link key={n.href} href={n.href} className={`lnk ${on(n.href) ? 'on' : ''}`}>{n.label}</Link>)}
        </nav>
        <div className="icons">
          <Link href="/cart" aria-label="Cart"><Icon name="cart" className="" />{count > 0 && <span className="badge">{count}</span>}</Link>
          {user ? <button onClick={logout} title="Log out"><Icon name="user" className="" /><span className="uname">{user.name.split(' ')[0]} · Log out</span></button>
            : <Link href="/login"><Icon name="user" className="" /><span className="uname">Log In</span></Link>}
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><Icon name={open ? 'x' : 'menu'} className="" /></button>
        </div>
      </div>
    </header>
  );
}
