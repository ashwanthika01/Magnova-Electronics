import Icon from '@/components/Icon';
import { Banner, Crumbs, Cta, H2 } from '@/components/PageBanner';
import { ABOUT_LONG, CAPABILITIES, CERTS, MISSION, VISION } from '@/lib/data';
export const metadata = { title: 'Company Profile' };

export default function Profile() {
  return (
    <>
      <Banner title="Company Profile" sub="Engineering and Manufacturing of High-Performance Magnetic Components | Design | Manufacture | Supply of Magnetic Components" />
      <Crumbs trail={[['Profile']]} />
      <section className="sec"><div className="wrap about">
        <img className="fac" src="/images/facility.jpg" alt="Magnova facility" />
        <div><h2 className="h2" style={{ color: 'var(--brown)' }}>About Magnova</h2><p>{ABOUT_LONG}</p><br />
          <div className="grid g2">
            <div className="card vm"><Icon name="target" size={44} /><div><h3>Our Vision</h3><p>{VISION}</p></div></div>
            <div className="card vm"><Icon name="mountain" size={44} /><div><h3>Our Mission</h3><p>{MISSION}</p></div></div>
          </div></div>
      </div></section>
      <section className="sec alt"><div className="wrap"><H2>Our Capabilities</H2>
        <div className="grid g4">{CAPABILITIES.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="card capcard"><img src={c.img} alt={c.title} /><div className="bd"><h3><Icon name={c.icon} />{c.title}</h3><p>{c.summary}</p></div></a>))}</div></div></section>
      <section className="sec"><div className="wrap">
        {CAPABILITIES.map((c) => (
          <article id={c.id} key={c.id} className="card cap" style={{ scrollMarginTop: 90 }}>
            <div className="ph"><img src={c.img} alt={c.title} /></div>
            <div><h3><Icon name={c.icon} size={28} /> {c.title}</h3><div className="sub">{c.sub}</div><p>{c.intro}</p>
              <ul>{c.items.map(([i, t]) => <li key={t}><Icon name={i} size={19} />{t}</li>)}</ul></div>
          </article>))}
      </div></section>
      <section className="sec alt"><div className="wrap grid g2">
        <div><H2>Certifications</H2><div className="cert">
          {CERTS.map(([a, b, c]) => <div className="iso" key={b}><b>{a}</b>{b}<small>{c}</small></div>)}
          <p style={{ flex: 1, minWidth: 220 }}>Our processes and systems are aligned with international standards to ensure consistent quality and reliability.</p></div></div>
        <div><H2>Our Infrastructure</H2><div className="row" style={{ justifyContent: 'flex-start', gap: 16 }}><Icon name="factory" size={48} />
          <p>Well-equipped facility with modern machines, test systems and a skilled team to deliver high-quality magnetic components.</p></div></div>
      </div></section>
      <Cta title="Partner with Magnova" text="For reliable, customized and high-performance magnetic solutions." />
    </>
  );
}
