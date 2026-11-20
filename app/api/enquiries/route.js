import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const runtime = 'nodejs';
const MAX = 10 * 1024 * 1024;
const OK_EXT = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.dwg'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const f = await req.formData();
    const g = (k) => String(f.get(k) || '').trim();
    const type = ['product', 'contact', 'assistance'].includes(g('type')) ? g('type') : 'product';
    const data = { name: g('name'), email: g('email'), requirement: g('requirement') };
    if (!data.name || !data.requirement) return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    if (!EMAIL.test(data.email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    if (type !== 'assistance' && !g('phone')) return NextResponse.json({ error: 'Mobile number is required.' }, { status: 400 });

    let filePath = null;
    const file = f.get('file');
    if (file && typeof file === 'object' && file.size > 0) {
      const ext = path.extname(file.name).toLowerCase();
      if (!OK_EXT.includes(ext)) return NextResponse.json({ error: 'Unsupported file type.' }, { status: 400 });
      if (file.size > MAX) return NextResponse.json({ error: 'File is larger than 10 MB.' }, { status: 400 });
      const dir = path.join(process.cwd(), 'uploads');
      await fs.mkdir(dir, { recursive: true });
      const safe = `${Date.now()}-${path.basename(file.name).replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      await fs.writeFile(path.join(dir, safe), Buffer.from(await file.arrayBuffer()));
      filePath = `uploads/${safe}`;
    }
    const phone = g('phone') && g('country_code') ? `${g('country_code')} ${g('phone')}` : g('phone');
    const info = getDb().prepare(`INSERT INTO enquiries (type,product_category,application,name,company,email,phone,quantity,delivery_date,requirement,file_path)
      VALUES (?,?,?,?,?,?,?,?,?,?,?)`).run(type, g('product_category'), g('application'), data.name, g('company'), data.email,
      phone, g('quantity'), g('delivery_date'), data.requirement, filePath);
    return NextResponse.json({ ok: true, id: info.lastInsertRowid });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
