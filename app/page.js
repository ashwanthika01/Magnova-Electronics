import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import ProfileCarousel from '@/components/ProfileCarousel';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/Icon';
import { Cta, H2 } from '@/components/PageBanner';
import { ABOUT_SHORT, CAPABILITIES, MISSION, PRODUCTS, STRIP, VISION, WHY } from '@/lib/data';

const FAQS = [
  ['What products does Magnova manufacture?', 'We manufacture toroidal transformers, inductors, high frequency transformers and custom magnetic components for power electronics applications.'],
  ['Can you build a custom design to my specification?', 'Yes. Share your electrical requirements, size constraints and application details, and our team will work with you on a custom magnetic solution.'],
  ['How do I request a quote?', 'Use the enquiry form on the Contact page with your requirement and quantity. Our team will get back to you with the details.'],
  ['Do you supply prototypes and small quantities?', 'Yes. We can support prototype and sample requirements as well as regular production volumes. Contact us with your quantity and we will confirm.'],
  ['Can I buy standard products online?', 'Yes. Visit the Online Stores page to browse available products and place an order.'],
  ['Which industries do you serve?', 'Our components are used across power electronics, industrial equipment, energy systems and other applications that need reliable magnetics.'],
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="sec"><div className="wrap"><H2>Profile</H2><ProfileCarousel /></div></section>
      <div className="strip">{STRIP.map(([i, t]) => <div key={t}><Icon name={i} size={34} />{t}</div>)}</div>
      <section className="sec"><div className="wrap"><H2 href="/products" link="View All Products">Product Range</H2>
        <div className="grid g5">{PRODUCTS.map((p) => <ProductCard key={p.slug} p={p} />)}</div></div></section>
      <section className="sec alt ab-sec"><div className="wrap ab">
        <div className="ab-media">
          <div className="ab-img-wrap">
            <img src="/images/facility.jpg" alt="Magnova facility" />
          </div>
          <div className="ab-badge"><span className="ab-dot" />Magnetic Solutions</div>
        </div>
        <div className="ab-content">
          <span className="ab-eyebrow">Who We Are</span>
          <h2 className="ab-title">About <span>Magnova</span></h2>
          <p className="ab-text">{ABOUT_SHORT}</p>
          <div className="ab-cards">
            <div className="ab-card">
              <div className="ab-ico"><Icon name="target" size={30} /></div>
              <div><h3>Our Vision</h3><p>{VISION}</p></div>
            </div>
            <div className="ab-card">
              <div className="ab-ico"><Icon name="mountain" size={30} /></div>
              <div><h3>Our Mission</h3><p>{MISSION}</p></div>
            </div>
          </div>
        </div>
      </div></section>
      <section className="sec"><div className="wrap"><H2>Our Capabilities</H2>
        <div className="caps">{CAPABILITIES.map((c) => <Link key={c.id} href={`/profile#${c.id}`}><Icon name={c.icon} size={42} />{c.title}</Link>)}</div></div></section>
      <section className="sec alt"><div className="wrap qa">
        <div className="qa-intro">
          <span className="qa-eyebrow">FAQ</span>
          <h2 className="qa-title">Questions &amp; Answers</h2>
          <p>Quick answers to the things customers ask us most. Can&apos;t find yours? Talk to our team.</p>
          <Link href="/contact" className="btn sm">Contact Us</Link>
        </div>
        <div className="qa-list">
          {FAQS.map(([q, a], i) => (
            <details key={q} className="qa-item" open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div></section>
      <section className="why"><div className="wrap"><h3>Why Choose Magnova?</h3>{WHY.map(([i, t]) => <div className="it" key={t}><Icon name={i} size={32} className="" />{t}</div>)}</div></section>
      <Cta title="Have a Requirement?" text="Get in touch with our team for customised magnetic solutions." />
    </>
  );
}