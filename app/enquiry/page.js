import EnquiryForm from '@/components/EnquiryForm';
import Icon from '@/components/Icon';
import { Banner, Crumbs } from '@/components/PageBanner';
import { ENQUIRY_WHY } from '@/lib/data';
export const metadata = { title: 'Product Enquiry' };

export default function Enquiry({ searchParams }) {
  return (
    <>
      <Banner title="Product Enquiry" sub="Tell us your requirement. Our team will get back to you soon." />
      <Crumbs trail={[['Contact', '/contact'], ['Product Enquiry']]} />
      <section className="sec"><div className="wrap two">
        <aside className="card" style={{ padding: 16 }}>
          <img src="/images/toroidal-3.jpg" alt="Magnova products" style={{ borderRadius: 12 }} />
          <h3 className="h2" style={{ fontSize: 21, margin: '18px 0 8px' }}>Why Enquire with Magnova?</h3>
          {ENQUIRY_WHY.map(([i, t]) => <div className="li" key={t}><Icon name={i} size={30} /><b>{t}</b></div>)}
        </aside>
        <div className="card"><div className="fhead"><Icon name="mail" size={26} className="" /> Product Enquiry</div>
          <EnquiryForm variant="product" defaultCategory={searchParams?.product} /></div>
      </div></section>
    </>
  );
}
