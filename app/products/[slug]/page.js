import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import ProductGallery from '@/components/ProductGallery';
import { Banner, Crumbs } from '@/components/PageBanner';
import { PRODUCTS } from '@/lib/data';

export const generateStaticParams = () => PRODUCTS.map((p) => ({ slug: p.slug }));
export const generateMetadata = ({ params }) => ({ title: PRODUCTS.find((p) => p.slug === params.slug)?.name });

export default function ProductPage({ params }) {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <>
      <Banner title={p.name} sub={p.tags.join('  |  ')} />
      <Crumbs trail={[['Products', '/products'], [p.name]]} />
      <section className="sec"><div className="wrap pd">
        <ProductGallery images={p.images} alt={p.name} />
        <div>
          <h2>{p.name}</h2>
          {p.intro.map((t) => <p key={t} style={{ marginBottom: 8 }}>{t}</p>)}
          <div className="card box"><h3>Key Features</h3>
            <div className="hl">{p.highlights.map(([i, t]) => <div key={t}><Icon name={i} size={28} />{t}</div>)}</div>
            {p.features && <ul className="chk" style={{ marginTop: 14 }}>{p.features.map((f) => <li key={f}><Icon name="check" size={18} />{f}</li>)}</ul>}</div>
          <div className="card box"><h3>{p.slug === 'toroidal-transformers' ? 'Technical Specifications (Typical Range)' : 'Typical Specifications'}</h3>
            <table className="spec"><tbody>{p.specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table></div>
          <div className="card box"><h3>{p.slug === 'toroidal-transformers' ? 'Typical Applications' : 'Applications'}</h3>
            <ul className="chk">{p.apps.map((a) => <li key={a}><Icon name="check" size={18} />{a}</li>)}</ul></div>
        </div>
      </div>
      {p.custom && <div className="wrap"><div className="card box"><h3>Customisation Options</h3><p style={{ marginBottom: 12 }}>We offer application-specific toroidal transformers with flexible customisation:</p>
        <div className="cust">{p.custom.map(([i, t]) => <div key={t}><Icon name={i} size={26} />{t}</div>)}</div></div></div>}
      <div className="wrap grid g2" style={{ marginTop: 24 }}>
        <div style={{ textAlign: 'center' }}><Link className="btn" style={{ fontSize: 18, padding: '14px 40px' }} href={`/enquiry?product=${encodeURIComponent(p.name)}`}><Icon name="mail" className="" /> Enquiry Now <Icon name="right" size={16} className="" /></Link></div>
        <div className="card row" style={{ padding: 18, justifyContent: 'flex-start', gap: 14 }}><Icon name="headset" size={40} /><div><b>Need Assistance?</b><br />Talk to our technical team for design support and custom solutions. <Link href="/assistance" style={{ color: 'var(--orange)', fontWeight: 700 }}>Get help ›</Link></div></div>
      </div></section>
    </>
  );
}
