import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getDb } from './db';

export const COOKIE = 'mg_session';
export function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  return { salt, hash: crypto.scryptSync(password, salt, 64).toString('hex') };
}
export function verifyPassword(password, salt, hash) {
  const a = Buffer.from(crypto.scryptSync(password, salt, 64).toString('hex'));
  const b = Buffer.from(hash);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
export function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  getDb().prepare('INSERT INTO sessions (token,user_id) VALUES (?,?)').run(token, userId);
  return token;
}
export function currentUser() {
  const token = cookies().get(COOKIE)?.value;
  if (!token) return null;
  return getDb().prepare(`SELECT u.id,u.name,u.email FROM sessions s JOIN users u ON u.id=s.user_id
    WHERE s.token=? AND s.created_at > datetime('now','-7 days')`).get(token) || null;
}
export const cookieOpts = { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7, secure: process.env.NODE_ENV === 'production' };
