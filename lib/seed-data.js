export const STORE_PRODUCTS = [
  { slug: 'toroidal-transformer-300va', name: 'Toroidal Transformer', category: 'Toroidal Transformers', spec: '300 VA | 230 V / 24 V', price: 4250, stock: 25, image: '/images/card-toroidal.jpg', popularity: 100, inductance_mh: null, current_a: null, power_w: 300 },
  { slug: 'inductor-1-5mh-10a', name: 'Inductor', category: 'Inductors', spec: '1.5 mH | 10 A', price: 860, stock: 120, image: '/images/card-inductors.jpg', popularity: 90, inductance_mh: 1.5, current_a: 10, power_w: null },
  { slug: 'hf-transformer-100w-65khz', name: 'High Frequency Transformer', category: 'High Frequency Transformers', spec: '100 W | 65 kHz', price: 1290, stock: 60, image: '/images/card-high-frequency.jpg', popularity: 80, inductance_mh: null, current_a: null, power_w: 100 },
  { slug: 'smps-transformer-24v-5a', name: 'SMPS Transformer', category: 'SMPS Transformers', spec: '24 V | 5 A | 120 W', price: 980, stock: 80, image: '/images/card-smps.jpg', popularity: 70, inductance_mh: null, current_a: 5, power_w: 120 },
];

const P = (t) => t.split('\n').map((s) => s.trim()).filter(Boolean).join('\n\n');
export const BLOG_POSTS = [
  { slug: 'what-is-a-toroidal-transformer', title: 'What is a Toroidal Transformer?', category: 'Product Knowledge', image: '/images/toroidal-2.jpg', published_at: '2026-10-28', read_minutes: 5,
    excerpt: 'Learn about the construction, working principle and key advantages of a toroidal transformer.',
    body: P(`A toroidal transformer wraps its windings around a ring-shaped (doughnut) core. Because the magnetic path is closed, very little flux leaks out of the core.
    That construction gives low electromagnetic interference, low noise, a compact footprint and low temperature rise, which is why toroidal designs are popular in power supplies, medical, audio and industrial equipment.
    Magnova designs toroidal transformers to application-specific ratings, from 50 VA up to 5 kVA.`) },
  { slug: 'toroidal-vs-conventional-transformer', title: 'Toroidal Transformer vs Conventional Transformer', category: 'Product Knowledge', image: '/images/toroidal-3.jpg', published_at: '2026-10-22', read_minutes: 6,
    excerpt: 'A detailed comparison of toroidal and EI transformers to help you choose the right solution for your application.',
    body: P(`Toroidal and conventional EI-core transformers both transfer power, but they differ in size, efficiency, noise and EMI behaviour.
    A toroidal core is generally more compact and lighter, with lower stray field. EI-core designs can be simpler to mount and sometimes more economical at certain ratings.
    The right choice depends on power rating, space, noise limits and cost targets. Our engineering team can help you evaluate both options for your application.`) },
  { slug: 'how-to-select-the-right-inductor', title: 'How to Select the Right Inductor?', category: 'Design & Engineering', image: '/images/main-inductors.jpg', published_at: '2026-10-15', read_minutes: 5,
    excerpt: 'Key parameters, design considerations and selection tips for inductors in power electronics.',
    body: P(`Start with the inductance value and the maximum DC and ripple current the inductor must carry without saturating.
    Next consider DC resistance (losses), core material (ferrite, iron powder, amorphous), operating frequency, temperature rise and the mounting style (PCB, chassis or custom).
    If your requirement is unusual, share your specification with us and we will propose a custom design.`) },
  { slug: 'magnetic-components-in-solar-inverters', title: 'Applications of Magnetic Components in Solar Inverters', category: 'Applications', image: '/images/hero-products.jpg', published_at: '2026-10-10', read_minutes: 6,
    excerpt: 'Explore how transformers and inductors improve efficiency, reliability and performance in solar inverter systems.',
    body: P(`Solar inverters rely on inductors for filtering and energy storage, and on transformers for isolation and voltage conversion.
    Well-designed magnetics reduce losses, limit EMI and keep temperature rise under control, which directly improves inverter efficiency and service life.`) },
  { slug: 'how-toroidal-transformers-are-manufactured', title: 'How Toroidal Transformers Are Manufactured?', category: 'Manufacturing', image: '/images/cap-manufacturing.jpg', published_at: '2026-10-05', read_minutes: 7,
    excerpt: 'A step-by-step look at the manufacturing process, from core selection and winding to testing and quality assurance.',
    body: P(`The process starts with core selection and insulation, followed by precision winding of the primary and secondary coils.
    After winding, units go through lead termination, impregnation or potting and curing where required, then in-process and final electrical testing (inductance, DCR, Hi-Pot and more).`) },
  { slug: 'latest-trends-in-power-electronics', title: 'Latest Trends in Power Electronics', category: 'Industry Trends', image: '/images/banner-toroid.jpg', published_at: '2026-09-28', read_minutes: 5,
    excerpt: 'Key technology trends and the growing role of magnetic components in renewable energy, EV and industrial applications.',
    body: P(`Higher switching frequencies, higher power density and tighter efficiency targets are reshaping power electronics.
    Magnetic components are central to these trends in renewable energy, EV charging and industrial automation, which is driving demand for compact, low-loss and application-specific designs.`) },
];
