'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from './Providers';

export default function AuthForm() {
  const [mode, setMode] = useState('login'); const [err, setErr] = useState(null); const [busy, setBusy] = useState(false);
  const { setUser } = useApp(); const router = useRouter();
  async function go(e) {
    e.preventDefault(); setBusy(true); setErr(null);
    const body = Object.fromEntries(new FormData(e.target));
    const r = await fetch(`/api/auth/${mode}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const d = await r.json(); setBusy(false);
    if (!r.ok) return setErr(d.error);
    setUser(d.user); router.push('/online-store');
  }
  return (
    <div className="card authbox" style={{ overflow: 'hidden' }}>
      <div className="tabs"><button className={mode === 'login' ? 'on' : ''} onClick={() => setMode('login')}>Log In</button><button className={mode === 'register' ? 'on' : ''} onClick={() => setMode('register')}>Register</button></div>
      <form className="form" onSubmit={go}>
        <div className="fg">
          {mode === 'register' && <div className="full"><label>Name <i>*</i></label><input name="name" required /></div>}
          <div className="full"><label>Email <i>*</i></label><input type="email" name="email" required /></div>
          <div className="full"><label>Password <i>*</i></label><input type="password" name="password" minLength={6} required /></div>
        </div>
        <div className="fbar"><button className="btn" disabled={busy}>{mode === 'login' ? 'Log In' : 'Create Account'}</button></div>
        {err && <div className="msg err">{err}</div>}
      </form>
    </div>
  );
}
