import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { STORE_PRODUCTS, BLOG_POSTS } from './seed-data';

const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'data', 'magnova.db');

function init() {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  db.exec(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL DEFAULT 'product',          -- product | contact | assistance
      product_category TEXT, application TEXT,
      name TEXT NOT NULL, company TEXT, email TEXT NOT NULL, phone TEXT,
      quantity TEXT, delivery_date TEXT, requirement TEXT NOT NULL,
      file_path TEXT, status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE, created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL, email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL, salt TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS store_products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE, name TEXT NOT NULL, category TEXT NOT NULL,
      spec TEXT, price INTEGER NOT NULL, stock INTEGER NOT NULL DEFAULT 0,
      image TEXT, popularity INTEGER DEFAULT 0,
      inductance_mh REAL, current_a REAL, power_w REAL
    );
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER REFERENCES users(id),
      name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL, address TEXT NOT NULL,
      items TEXT NOT NULL, total INTEGER NOT NULL, status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE, title TEXT NOT NULL, excerpt TEXT NOT NULL, body TEXT NOT NULL,
      category TEXT NOT NULL, image TEXT, published_at TEXT NOT NULL, read_minutes INTEGER NOT NULL
    );
  `);
  if (db.prepare('SELECT COUNT(*) c FROM store_products').get().c === 0) {
    const ins = db.prepare(`INSERT INTO store_products (slug,name,category,spec,price,stock,image,popularity,inductance_mh,current_a,power_w)
      VALUES (@slug,@name,@category,@spec,@price,@stock,@image,@popularity,@inductance_mh,@current_a,@power_w)`);
    db.transaction((rows) => rows.forEach((r) => ins.run(r)))(STORE_PRODUCTS);
  }
  if (db.prepare('SELECT COUNT(*) c FROM blog_posts').get().c === 0) {
    const ins = db.prepare(`INSERT INTO blog_posts (slug,title,excerpt,body,category,image,published_at,read_minutes)
      VALUES (@slug,@title,@excerpt,@body,@category,@image,@published_at,@read_minutes)`);
    db.transaction((rows) => rows.forEach((r) => ins.run(r)))(BLOG_POSTS);
  }
  return db;
}

// reuse one connection across hot reloads / route handlers
export function getDb() {
  if (!globalThis.__magnovaDb) globalThis.__magnovaDb = init();
  return globalThis.__magnovaDb;
}
