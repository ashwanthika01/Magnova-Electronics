'use client';
import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState(''); const [msg, setMsg] = useState(null);
  async function go(e) {
    e.preventDefault();
    const r = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    const d = await r.json();
    setMsg(r.ok ? 'Thanks for subscribing!' : d.error); if (r.ok) setEmail('');
  }
  return <form onSubmit={go}><input type="email" required placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} /><button className="btn">Subscribe</button>{msg && <span style={{ marginLeft: 10, alignSelf: 'center' }}>{msg}</span>}</form>;
}
