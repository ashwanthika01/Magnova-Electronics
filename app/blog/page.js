import Link from 'next/link';
import Icon from '@/components/Icon';
import SubscribeForm from '@/components/SubscribeForm';
import { Banner, Crumbs, H2 } from '@/components/PageBanner';
import { getDb } from '@/lib/db';
import { BLOG_CATEGORIES } from '@/lib/data';
export const metadata = { title: 'Blog' };
export const dynamic = 'force-dynamic';

const PER = 6;
const ICONS = ['layers', 'gear', 'cpu', 'wrench', 'factory', 'trend', 'chat'];
const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

export default function Blog({ searchParams }) {
  const cat = BLOG_CATEGORIES.includes(searchParams.category) ? searchParams.category : '';
  const q = (searchParams.q || '').trim();
  const page = Math.max(1, parseInt(searchParams.page, 10) || 1);
  const where = []; const args = [];
  if (cat) { where.push('category=?'); args.push(cat); }
  if (q) { where.push('(title LIKE ? OR excerpt LIKE ?)'); args.push(`%${q}%`, `%${q}%`); }
  const W = where.length ? 'WHERE ' + where.join(' AND ') : '';
  const db = getDb();
  const total = db.prepare(`SELECT COUNT(*) c FROM blog_posts ${W}`).get(...args).c;
  const posts = db.prepare(`SELECT * FROM blog_posts ${W} ORDER BY published_at DESC LIMIT ? OFFSET ?`).all(...args, PER, (page - 1) * PER);
  const pages = Math.max(1, Math.ceil(total / PER));
  const href = (o) => { const p = new URLSearchParams({ ...(cat && { category: cat }), ...(q && { q }), ...o }); return `/blog?${p}`; };
  return (
    <>
      <Banner title="Magnova Blog" sub="Technical Insights | Application Notes | Industry Updates" />
      <Crumbs trail={[['Blog']]} />
      <section className="sec"><div className="wrap bl">
        <aside className="card box cat" style={{ marginTop: 0 }}><h3>Blog Categories</h3>
          <Link href="/blog" className={!cat ? 'on' : ''}><Icon name="grid" size={18} />All Articles</Link>
          {BLOG_CATEGORIES.map((c, i) => <Link key={c} href={href({ category: c, page: 1 }).replace(/&?page=1/, '')} className={cat === c ? 'on' : ''}><Icon name={ICONS[i]} size={18} />{c}</Link>)}</aside>
        <div>
          <div className="row" style={{ marginBottom: 18 }}><h2 className="h2" style={{ margin: 0 }}>Latest Articles</h2>
            <form className="search" action="/blog">{cat && <input type="hidden" name="category" value={cat} />}<input name="q" defaultValue={q} placeholder="Search articles..." /><button aria-label="Search"><Icon name="search" size={17} className="" /></button></form></div>
          {posts.length ? <div className="grid g3">{posts.map((p) => (
            <Link href={`/blog/${p.slug}`} key={p.id} className="card post"><img src={p.image} alt={p.title} />
              <div className="bd"><h3>{p.title}</h3><p>{p.excerpt}</p>
                <div className="meta"><span><Icon name="calendar" size={13} className="" /> {fmtDate(p.published_at)}</span><span><Icon name="clock" size={13} className="" /> {p.read_minutes} min read</span><b style={{ marginLeft: 'auto', color: 'var(--orange)' }}>Read More ›</b></div></div></Link>))}</div>
            : <p>No articles found.</p>}
          {pages > 1 && <div className="pg">{Array.from({ length: pages }, (_, i) => i + 1).map((n) => n === page ? <span key={n} className="on">{n}</span> : <Link key={n} href={href({ page: n })}>{n}</Link>)}</div>}
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 34 }}><div className="cta" style={{ borderRadius: 14 }}><div className="wrap sub" style={{ padding: 24 }}>
        <Icon name="mail" size={38} className="" /><div><h2 style={{ fontStyle: 'normal', fontSize: 24 }}>Subscribe to Our Blog</h2><p>Get the latest technical articles, application notes and industry updates from Magnova.</p></div><SubscribeForm /></div></div></div></section>
    </>
  );
}
