import Icon from '@/components/Icon';
import StoreClient from '@/components/StoreClient';
import { Banner, Crumbs } from '@/components/PageBanner';
import { getDb } from '@/lib/db';
export const metadata = { title: 'Online Store' };
export const dynamic = 'force-dynamic';

export default function Store() {
  const products = getDb().prepare('SELECT * FROM store_products ORDER BY popularity DESC').all();
  return (
    <>
      <Banner title="Magnova Online Store" sub="Buy Standard Magnetic Components Online – Quick, Easy and Secure" img="/images/hero-products.jpg" />
      <Crumbs trail={[['Online Stores']]} />
      <section className="sec"><div className="wrap">
        <StoreClient products={products} />
        <div className="card trust">{[['lock', 'Secure Payments'], ['truck', 'Reliable Shipping'], ['undo', 'Easy Returns'], ['headset', 'Customer Support']].map(([i, t]) => <div key={t}><Icon name={i} size={32} />{t}</div>)}</div>
        <div className="how"><b><Icon name="cart" className="" style={{ marginRight: 8 }} />How to Order?</b>
          {['Select Products', 'Add to Cart', 'Make Payment', 'Get it Delivered'].map((t, i) => <span key={t}>{i + 1}. {t}{i < 3 && ' →'}</span>)}</div>
      </div></section>
    </>
  );
}
