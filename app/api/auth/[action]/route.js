import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getDb } from '@/lib/db';
import { COOKIE, cookieOpts, createSession, currentUser, hashPassword, verifyPassword } from '@/lib/auth';
export const runtime = 'nodejs';

export async function GET(_req, { params }) {
  if (params.action === 'me') return NextResponse.json({ user: currentUser() });
  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function POST(req, { params }) {
  const db = getDb();
  const body = await req.json().catch(() => ({}));
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  if (params.action === 'logout') {
    const t = cookies().get(COOKIE)?.value;
    if (t) db.prepare('DELETE FROM sessions WHERE token=?').run(t);
    const res = NextResponse.json({ ok: true });
    res.cookies.delete(COOKIE);
    return res;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6)
    return NextResponse.json({ error: 'Enter a valid email and a password of at least 6 characters.' }, { status: 400 });

  let user;
  if (params.action === 'register') {
    const name = String(body.name || '').trim();
    if (!name) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    if (db.prepare('SELECT 1 FROM users WHERE email=?').get(email)) return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 });
    const { salt, hash } = hashPassword(password);
    const id = db.prepare('INSERT INTO users (name,email,password_hash,salt) VALUES (?,?,?,?)').run(name, email, hash, salt).lastInsertRowid;
    user = { id, name, email };
  } else if (params.action === 'login') {
    const row = db.prepare('SELECT * FROM users WHERE email=?').get(email);
    if (!row || !verifyPassword(password, row.salt, row.password_hash)) return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 });
    user = { id: row.id, name: row.name, email: row.email };
  } else return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const res = NextResponse.json({ user });
  res.cookies.set(COOKIE, createSession(user.id), cookieOpts);
  return res;
}
