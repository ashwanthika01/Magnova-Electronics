import CartClient from '@/components/CartClient';
import { Banner, Crumbs } from '@/components/PageBanner';
export const metadata = { title: 'Your Cart' };

export default function Cart() {
  return (<><Banner title="Your Cart" sub="Review your items and place your order." img="/images/hero-products.jpg" /><Crumbs trail={[['Online Stores', '/online-store'], ['Cart']]} />
    <section className="sec"><div className="wrap"><CartClient /></div></section></>);
}
