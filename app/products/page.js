import ProductCard from '@/components/ProductCard';
import Icon from '@/components/Icon';
import { Banner, Crumbs, Cta, H2 } from '@/components/PageBanner';
import { PRODUCTS, PROMISES } from '@/lib/data';
export const metadata = { title: 'Our Products' };

export default function Products() {
  return (
    <>
      <Banner title="Our Products" sub="A Comprehensive Range of Magnetic Components for Power, Control and Energy Applications. High-performance magnetic components for industrial, renewable and power electronics applications." />
      <Crumbs trail={[['Products']]} />
      <section className="sec"><div className="wrap"><H2>Product Catalogue</H2>
        <div className="grid g5">{PRODUCTS.map((p) => <ProductCard key={p.slug} p={p} detailed />)}</div></div></section>
      <section className="sec alt"><div className="wrap grid g4">{PROMISES.map(([i, t, s]) => <div key={t} className="row" style={{ justifyContent: 'flex-start', gap: 14 }}><Icon name={i} size={38} /><div><b>{t}</b><br /><small>{s}</small></div></div>)}</div></section>
      <Cta title="Need a Custom Solution?" text="Share your requirements and get the right magnetic solution from Magnova." />
    </>
  );
}
