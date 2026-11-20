import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
export const runtime = 'nodejs';

export async function POST(req) {
  const { email } = await req.json().catch(() => ({}));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  getDb().prepare('INSERT OR IGNORE INTO subscribers (email) VALUES (?)').run(email.trim().toLowerCase());
  return NextResponse.json({ ok: true });
}
