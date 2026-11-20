import EnquiryForm from '@/components/EnquiryForm';
import Icon from '@/components/Icon';
import { Banner, Crumbs } from '@/components/PageBanner';
import { COMPANY } from '@/lib/data';
export const metadata = { title: 'Contact Us' };

export default function Contact() {
  return (
    <>
      <Banner title="Contact Us" sub="Get in touch with Magnova for enquiries, product requirements or technical support." />
      <Crumbs trail={[['Contact']]} />
      <section className="sec"><div className="wrap two r">
        <div className="card"><div style={{ padding: '22px 26px 0' }}><h2 className="h2" style={{ marginBottom: 6 }}>Send an Enquiry</h2><p>Share your requirements and our team will get back to you at the earliest.</p></div>
          <EnquiryForm variant="contact" /></div>
        <div>
          <h2 className="h2">Our Contact Details</h2>
          <div className="grid g2" style={{ alignItems: 'center' }}>
            <div>
              <div className="li"><span className="b"><Icon name="pin" /></span><div><b>Registered Office</b><br />{COMPANY.legalName}<br />{COMPANY.address}</div></div>
              <div className="li"><span className="b"><Icon name="phone" /></span><a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}><b>{COMPANY.phone}</b></a></div>
              <div className="li"><span className="b"><Icon name="mail" /></span><a href={`mailto:${COMPANY.email}`}><b>{COMPANY.email}</b></a></div>
              <div className="li"><span className="b"><Icon name="globe" /></span><b>{COMPANY.web}</b></div>
            </div>
            <img src="/images/facility.jpg" alt="Magnova office" style={{ borderRadius: 14 }} />
          </div>
          <div className="grid g2" style={{ marginTop: 20 }}>
            <div className="row" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', gap: 14 }}><span className="li b" style={{ border: 0, padding: 0 }}><span className="b"><Icon name="clock" /></span></span>
              <div><h3>Working Hours</h3>{COMPANY.hours.map(([d, h]) => <div key={d}>{d} : {h}</div>)}</div></div>
            <div className="row" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', gap: 14 }}><span className="b li" style={{ border: 0, padding: 0 }}><span className="b"><Icon name="headset" /></span></span>
              <div><h3>Support</h3>For technical and product support, email us at <b>{COMPANY.supportEmail}</b></div></div>
          </div>
          <h2 className="h2" style={{ marginTop: 26 }}>Our Location</h2>
          <iframe title="Magnova location" loading="lazy" style={{ width: '100%', height: 260, border: '1px solid var(--line)', borderRadius: 14 }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.85%2C10.93%2C77.1%2C11.1&layer=mapnik&marker=11.0168%2C76.9558" />
        </div>
      </div></section>
    </>
  );
}
