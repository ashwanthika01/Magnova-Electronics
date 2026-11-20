import Link from 'next/link';
import Icon from './Icon';

export function Banner({ title, sub, img = '/images/banner-toroid.jpg' }) {
  return <section className="banner"><img className="bg" src={img} alt="" /><div className="wrap"><h1>{title}</h1>{sub && <p>{sub}</p>}</div></section>;
}
export function Crumbs({ trail }) {
  return (
    <div className="crumbs"><div className="wrap">
      <Link href="/" aria-label="Home"><Icon name="home" size={16} className="" /></Link>
      {trail.map(([label, href], i) => (
        <span key={label} style={{ display: 'contents' }}><Icon name="right" size={14} className="" />{href ? <Link href={href}>{label}</Link> : <b>{label}</b>}</span>
      ))}
    </div></div>
  );
}
export function Cta({ title, text, href = '/enquiry', label = 'Enquiry Now' }) {
  return (
    <section className="cta"><div className="wrap">
      <div><h2>{title}</h2><p>{text}</p></div>
      <Link href={href} className="btn white"><Icon name="mail" className="" /> {label} <Icon name="right" size={16} className="" /></Link>
    </div></section>
  );
}
export function H2({ children, href, link }) { return <h2 className="h2">{children}{href && <Link href={href}>{link} ›</Link>}</h2>; }
