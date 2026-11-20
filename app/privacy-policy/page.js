import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Magnova Electronics',
  description: 'How Magnova collects, uses and protects your personal information.',
};

/* ===== EDIT THESE ===== */
const COMPANY = 'Magnova Electronics';
const EMAIL = 'Prabhu@magnovaelectronics.com';
const PHONE = '+91 9894662748';
const ADDRESS = 'Coimbatore, Tamil Nadu, India – 641 108, India';
const UPDATED = 'November 20, 2026';
/* ====================== */

const SECTIONS = [
  {
    id: 'information',
    title: 'Information We Collect',
    body: (
      <>
        <p>We collect only the information we need to respond to you and run our website and online store. This may include:</p>
        <ul>
          <li><b>Contact details:</b> name, company name, email address, phone number and address that you enter in our enquiry, contact or subscription forms.</li>
          <li><b>Account details:</b> name, email address and a password (stored in protected form) when you create an account or log in.</li>
          <li><b>Order and cart details:</b> products you add to your cart, order history and delivery information when you use our online store.</li>
          <li><b>Enquiry content:</b> the requirements, specifications and messages you send us.</li>
          <li><b>Technical data:</b> IP address, browser type, device information and pages visited, collected automatically when you use the website.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Respond to enquiries and provide quotations for our products and custom solutions.</li>
          <li>Create and manage your account, and process and deliver your orders.</li>
          <li>Send order updates and service-related communication.</li>
          <li>Send newsletters or product updates, only if you have subscribed. You can unsubscribe at any time.</li>
          <li>Improve our website, products and customer service.</li>
          <li>Prevent fraud and misuse, and comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Similar Technologies',
    body: (
      <>
        <p>Our website uses cookies and local storage to keep you logged in, remember your cart and understand how the site is used. You can block or delete cookies in your browser settings, but some features, such as the cart and login, may not work properly without them.</p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    body: (
      <>
        <p>We do not sell your personal information. We share it only when necessary:</p>
        <ul>
          <li>With service providers who help us operate the website, host our data, process payments, send emails or deliver orders, and who are bound to protect your data.</li>
          <li>When required by law, court order or a government authority.</li>
          <li>To protect our rights, property or safety, or those of our customers.</li>
          <li>In connection with a merger, acquisition or sale of business assets, in which case you will be informed.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data Retention',
    body: (
      <>
        <p>We keep your personal information only as long as needed for the purposes described in this policy, or as required by applicable law (for example, tax and accounting records). When it is no longer needed, we delete or anonymise it.</p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Data Security',
    body: (
      <>
        <p>We use reasonable technical and organisational measures to protect your information against unauthorised access, loss or misuse. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security. Please keep your account password confidential.</p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your Rights',
    body: (
      <>
        <p>Subject to applicable law, including the Digital Personal Data Protection Act, 2023 (India), you may:</p>
        <ul>
          <li>Ask for access to the personal information we hold about you.</li>
          <li>Ask us to correct inaccurate or incomplete information.</li>
          <li>Ask us to delete your information, subject to legal retention requirements.</li>
          <li>Withdraw your consent to marketing communication at any time.</li>
        </ul>
        <p>To exercise any of these rights, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </>
    ),
  },
  {
    id: 'links',
    title: 'Third-Party Links',
    body: (
      <>
        <p>Our website may contain links to other websites. We are not responsible for the privacy practices or content of those sites, and we encourage you to read their privacy policies.</p>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's Privacy",
    body: (
      <>
        <p>Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children under 18. If you believe a child has provided us information, please contact us and we will delete it.</p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: (
      <>
        <p>We may update this policy from time to time. The latest version will always be available on this page with the updated date shown at the top. Continued use of the website after changes means you accept the updated policy.</p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: (
      <>
        <p>If you have questions or concerns about this policy or how we handle your data, contact us:</p>
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

export default function PrivacyPolicy() {
  return (
    <>
      <section className="banner">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p>How we collect, use and protect your information.</p>
        </div>
      </section>
      <div className="crumbs">
        <div className="wrap"><Link href="/">Home</Link> / <b>Privacy Policy</b></div>
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
                {COMPANY} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what
                personal information we collect through our website and online store, how we use it, and the choices
                you have. By using our website, you agree to the practices described here.
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