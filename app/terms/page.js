import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Magnova Electronics',
  description: 'Terms and conditions for using the Magnova website and online store.',
};

/* ===== EDIT THESE ===== */
const COMPANY = 'Magnova Electronics';
const EMAIL = 'Prabhu@magnovaelectronics.com';
const PHONE = '+91 9894662748';
const ADDRESS = 'Coimbatore, Tamil Nadu, India – 641 108, India';
const JURISDICTION = 'Coimbatore, Tamil Nadu';
const UPDATED = 'November 20, 2026';
/* ====================== */

const SECTIONS = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: (
      <>
        <p>By accessing or using this website and our online store, you agree to be bound by these Terms and Conditions and our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree, please do not use the website.</p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'Use of the Website',
    body: (
      <>
        <p>You agree to use the website only for lawful purposes. You must not:</p>
        <ul>
          <li>Attempt to gain unauthorised access to the website, our servers or other users&apos; accounts.</li>
          <li>Introduce viruses, malicious code or anything that disrupts the website.</li>
          <li>Copy, scrape or reuse our content in bulk without written permission.</li>
          <li>Submit false, misleading or fraudulent information in forms or orders.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'accounts',
    title: 'User Accounts',
    body: (
      <>
        <p>To use certain features, such as the cart and online store, you may need to create an account. You are responsible for keeping your login details confidential and for all activity under your account. Please notify us immediately if you suspect unauthorised use. We may suspend or close accounts that violate these terms.</p>
      </>
    ),
  },
  {
    id: 'products',
    title: 'Products and Information',
    body: (
      <>
        <p>We try to keep product descriptions, images, specifications and availability accurate. However, the information on this website is for general guidance and may contain errors or change without notice. Product images are for illustration, and actual products may differ slightly. Please confirm technical specifications with our team before placing an order for a specific application.</p>
      </>
    ),
  },
  {
    id: 'custom',
    title: 'Custom Orders and Quotations',
    body: (
      <>
        <p>Custom magnetic components are made to your specifications. Quotations are valid for the period stated in the quotation, and pricing and delivery times may change if specifications or quantities change. Custom-made items are generally non-cancellable and non-returnable once production has started, unless agreed in writing.</p>
      </>
    ),
  },
  {
    id: 'orders',
    title: 'Orders, Pricing and Payment',
    body: (
      <>
        <ul>
          <li>All prices are in Indian Rupees (INR) unless stated otherwise. Applicable taxes, such as GST, and shipping charges are shown or communicated at checkout or in the quotation.</li>
          <li>Placing an order is an offer to buy. We may accept or decline any order, for example due to stock issues, pricing errors or suspected fraud.</li>
          <li>Payment must be made through the methods offered on the website or as agreed in writing.</li>
          <li>We reserve the right to correct pricing or listing errors, even after an order is placed, and to cancel and refund the affected order.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping and Delivery',
    body: (
      <>
        <p>Delivery timelines are estimates and not guarantees. We are not liable for delays caused by couriers, weather, strikes or other events outside our control. Risk of loss passes to you when the goods are handed to the carrier. Please inspect your package on delivery and report visible damage within 48 hours.</p>
      </>
    ),
  },
  {
    id: 'returns',
    title: 'Returns, Refunds and Warranty',
    body: (
      <>
        <p>If you receive a defective or incorrect standard product, contact us within 7 days of delivery with your order details and photos. After verification, we will repair, replace or refund the item at our discretion. Products damaged through misuse, incorrect installation or operation outside the stated specifications are not covered. Any warranty period will be stated in your quotation or order confirmation.</p>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    body: (
      <>
        <p>All content on this website, including the {COMPANY} name, logo, text, images, graphics and designs, belongs to {COMPANY} or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute or modify any content without our prior written permission. Designs and specifications you share with us for custom orders remain yours, and we will not disclose them to third parties except as needed to fulfil your order.</p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: (
      <>
        <p>To the fullest extent permitted by law, {COMPANY} is not liable for any indirect, incidental or consequential loss, including loss of profit, data or business, arising from the use of the website or products. Our total liability for any claim relating to an order is limited to the amount you paid for that order. The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis, and we do not guarantee that it will be uninterrupted or error-free.</p>
      </>
    ),
  },
  {
    id: 'links',
    title: 'Third-Party Links',
    body: (
      <>
        <p>This website may link to third-party websites. We do not control or endorse them and are not responsible for their content or practices.</p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: (
      <>
        <p>We may update these terms from time to time. The latest version will always be on this page with the updated date shown at the top. Continued use of the website after changes means you accept the updated terms.</p>
      </>
    ),
  },
  {
    id: 'law',
    title: 'Governing Law',
    body: (
      <>
        <p>These terms are governed by the laws of India. Any dispute arising from them or from your use of the website will be subject to the exclusive jurisdiction of the courts at {JURISDICTION}.</p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: (
      <>
        <p>For any questions about these terms, contact us:</p>
        <ul>
          <li><b>Company:</b> {COMPANY}</li>
          <li><b>Email:</b> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><b>Phone:</b> {PHONE}</li>
          <li><b>Address:</b> {ADDRESS}</li>
        </ul>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <>
      <section className="banner">
        <div className="wrap">
          <h1>Terms &amp; Conditions</h1>
          <p>The rules for using our website and online store.</p>
        </div>
      </section>
      <div className="crumbs">
        <div className="wrap"><Link href="/">Home</Link> / <b>Terms &amp; Conditions</b></div>
      </div>

      <section className="sec">
        <div className="wrap pol">
          <aside className="pol-toc">
            <h3>Contents</h3>
            <nav>
              {SECTIONS.map((sec, i) => (
                <a key={sec.id} href={`#${sec.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{sec.title}</a>
              ))}
            </nav>
          </aside>

          <div className="pol-body">
            <div className="pol-intro">
              <p className="pol-date">Last updated: {UPDATED}</p>
              <p>
                Welcome to {COMPANY}. Please read these Terms and Conditions carefully before using our website
                or placing an order. They set out your rights and responsibilities and ours.
              </p>
            </div>

            {SECTIONS.map((sec, i) => (
              <article key={sec.id} id={sec.id} className="pol-sec">
                <h2><span>{String(i + 1).padStart(2, '0')}</span>{sec.title}</h2>
                {sec.body}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}