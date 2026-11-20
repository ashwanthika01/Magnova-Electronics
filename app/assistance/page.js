import EnquiryForm from '@/components/EnquiryForm';
import Icon from '@/components/Icon';
import { Banner, Crumbs } from '@/components/PageBanner';
import { COMPANY, FAQ, HELP } from '@/lib/data';
export const metadata = { title: 'Need Assistance?' };

export default function Assistance() {
  return (
    <>
      <Banner title="Need Assistance?" sub="Talk to our technical team for product selection, design support, customisation or any other queries." />
      <Crumbs trail={[['Need Assistance?']]} />
      <section className="sec"><div className="wrap two r">
        <div className="card"><div style={{ padding: '22px 26px 0' }}><h2 className="h2" style={{ marginBottom: 6 }}>Get Technical Assistance</h2><p>Share your requirement and our technical team will get back to you with a suitable solution.</p></div>
          <EnquiryForm variant="assistance" /></div>
        <div>
          <div className="card box" style={{ marginTop: 0 }}><h3>How We Can Help You</h3>
            <div className="grid g5" style={{ gap: 10 }}>{HELP.map(([i, t]) => <div key={t} className="card" style={{ padding: 10, textAlign: 'center', fontSize: 13, fontWeight: 600 }}><Icon name={i} size={30} /><br />{t}</div>)}</div></div>
          <div className="card box faq"><h3>Frequently Asked Questions (FAQ)</h3>
            {FAQ.map(([q, a]) => <details key={q}><summary>{q}<Icon name="down" size={18} className="" /></summary><p>{a}</p></details>)}</div>
          <div className="cta" style={{ borderRadius: 14, marginTop: 20 }}><div className="wrap" style={{ padding: 22 }}><Icon name="headset" size={40} className="" />
            <div><h3 style={{ color: '#fff' }}>Prefer to Talk to an Expert?</h3><p>Call us at <b>{COMPANY.phone}</b> or email us at <b>{COMPANY.supportEmail}</b></p></div></div></div>
        </div>
      </div></section>
    </>
  );
}
