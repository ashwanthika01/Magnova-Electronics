import Link from 'next/link';
import Icon from './Icon';
import { COMPANY, PRODUCTS } from '@/lib/data';

// Replace with Ashwanthika's portfolio / LinkedIn / website URL
const DESIGNER_URL = 'https://www.linkedin.com/in/ashwanthika-govindaraja-49a084271/';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-brand">
          <img src="/images/logo.png" alt="Magnova" />
          <p>
            Design | Manufacture | Supply of Magnetic Components for industrial,
            renewable and power electronics applications.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <Link href="/profile">Profile</Link>
          <Link href="/online-store">Online Store</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/assistance">Need Assistance?</Link>
        </div>

        <div>
          <h4>Products</h4>
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>
              {p.name}
            </Link>
          ))}
        </div>

        <div>
          <h4>Contact</h4>
          <p className="ftr-addr">
            <Icon name="pin" size={15} className="" /> {COMPANY.legalName}, {COMPANY.address}
          </p>
          <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <Link href="/enquiry">Enquiry Now</Link>
        </div>
      </div>

      <div className="bot">
        <span className="bot-copy">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </span>

        <nav className="bot-legal" aria-label="Legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className="bot-sep" aria-hidden="true">|</span>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </nav>

        <span className="bot-credit">
          Designed with ❤️ by{' '}
          <a href={DESIGNER_URL} target="_blank" rel="noopener noreferrer">
            Ashwanthika Govindaraja
          </a>
        </span>
      </div>
    </footer>
  );
}