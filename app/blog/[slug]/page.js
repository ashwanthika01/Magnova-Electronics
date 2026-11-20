import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Banner, Crumbs, Cta } from '@/components/PageBanner';
import { getDb } from '@/lib/db';
export const dynamic = 'force-dynamic';

export default function Post({ params }) {
  const p = getDb().prepare('SELECT * FROM blog_posts WHERE slug=?').get(params.slug);
  if (!p) notFound();
  return (
    <>
      <Banner title="Magnova Blog" sub={p.category} />
      <Crumbs trail={[['Blog', '/blog'], [p.title]]} />
      <article className="art">
        <h1 style={{ fontSize: 34 }}>{p.title}</h1>
        <div className="meta" style={{ marginTop: 8 }}>{new Date(p.published_at + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} · {p.read_minutes} min read · {p.category}</div>
        <img src={p.image} alt={p.title} />
        <p><b>{p.excerpt}</b></p>
        {p.body.split('\n\n').map((t, i) => <p key={i}>{t}</p>)}
        <Link href="/blog" style={{ color: 'var(--orange)', fontWeight: 700 }}>‹ Back to all articles</Link>
      </article>
      <Cta title="Have a Requirement?" text="Get in touch with our team for customised magnetic solutions." />
    </>
  );
}
