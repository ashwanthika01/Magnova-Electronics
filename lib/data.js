// All website content taken from the Magnova presentation. Edit here to change copy site-wide.
export const COMPANY = {
  name: 'Magnova',
  legalName: 'Magnova Electronics Pvt. Ltd.',
  address: 'Coimbatore, Tamil Nadu, India – 641 108',
  phone: '+91 9894662748',
  email: 'Prabhu@magnovaelectronics.com',
  supportEmail: 'magnovaelectronics@gmail.com',
  web: 'www.magnovaelectronics.com',
  hours: [['Mon – Fri', '9:00 AM – 6:00 PM'], ['Sat', '9:00 AM – 1:00 PM'], ['Sunday', 'Closed']],
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Products', href: '/products', children: true },
  { label: 'Online Stores', href: '/online-store' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_SLIDES = [
  { title: 'Magnetic Components', accent: 'for Power Electronics', text: 'Toroidal Transformers | Inductors | High Frequency Transformers | Custom Magnetic Solutions', img: '/images/hero-toroid-pcb.jpg' },
  { title: 'Reliable Magnetic', accent: 'Solutions', text: 'Toroidal Transformers | Inductors | High Frequency Transformers | SMPS Transformers | Custom Magnetic Components', img: '/images/hero-products.jpg' },
  { title: 'Custom Magnetic', accent: 'Solutions', text: 'Application Specific | Tailor-Made Design | Engineering Support', img: '/images/banner-toroid.jpg' },
];

export const PRODUCTS = [
  {
    slug: 'toroidal-transformers', name: 'Toroidal Transformers', short: 'High-efficiency, low noise transformers with compact design.',
    tags: ['Compact', 'High-Efficiency', 'Low Noise', 'Custom Design'], card: '/images/card-toroidal.jpg',
    images: ['/images/toroidal-1.jpg', '/images/toroidal-2.jpg', '/images/toroidal-3.jpg'],
    intro: ['Toroidal transformers are compact, high-efficiency transformers with low electromagnetic interference (EMI) and low noise, ideally suited for power, control and electronic applications.',
      'Magnova manufactures high-performance toroidal transformers with superior efficiency, low electromagnetic interference (EMI) and compact design. They are ideal for power supply, medical, industrial and renewable energy applications.'],
    highlights: [['leaf', 'High Efficiency'], ['volume', 'Low Noise & EMI'], ['compact', 'Compact & Lightweight'], ['thermo', 'Low Temperature Rise'], ['shield', 'Reliable & Long Life']],
    features: ['High efficiency and low power loss', 'Compact and lightweight design', 'Low EMI / RFI and low noise', 'Low temperature rise', 'High reliability and long service life', 'Custom designs as per requirement'],
    specs: [['Power Rating', '50 VA – 5 kVA (10 VA – 5 kVA customizable)'], ['Primary Voltage', '115 V / 230 V AC (100 – 480 V AC, or as required)'], ['Secondary Voltage', '6 V – 48 V AC (Single / Multiple), as per requirement'], ['Frequency', '50 / 60 Hz'], ['Insulation Class', 'Class B / Class F / Class H'], ['Dielectric Strength', '2.5 kV – 4.0 kV AC'], ['Construction', 'Toroidal (Copper Winding)'], ['Cooling', 'Natural Convection'], ['Applicable Standards', 'IEC / IS / UL (as per requirement)']],
    apps: ['Power supplies (Linear / SMPS)', 'Audio and medical equipment', 'Industrial control and instrumentation', 'Test and measurement systems', 'Automation and embedded systems', 'General purpose power conversion', 'Renewable energy / inverter systems', 'Audio & communication systems'],
    custom: [['zap', 'Power Rating (VA / kVA)'], ['wave', 'Input / Output Voltage'], ['layers', 'Multiple Outputs'], ['activity', 'Frequency (50 / 60 Hz)'], ['shield', 'Insulation Class (B / F / H)'], ['compact', 'Size & Height (As required)'], ['thermo', 'Thermal / Temperature Rise'], ['gear', 'Lead Type & Termination']],
  },
  {
    slug: 'inductors', name: 'Inductors', short: 'High-performance inductors for power conversion and EMI filtering.',
    tags: ['Energy Storage', 'Noise Filtering', 'High Current'], card: '/images/card-inductors.jpg', images: ['/images/main-inductors.jpg'],
    intro: ['Inductors are passive magnetic components used for energy storage, filtering and current control in power electronics and industrial applications.',
      'Magnova designs and manufactures a wide range of inductors for power conversion, filtering and energy storage applications with high reliability and thermal performance.'],
    highlights: [['coil', 'High Current Handling'], ['activity', 'Low Loss & High Efficiency'], ['thermo', 'Excellent Thermal Stability'], ['shield', 'Reliable Performance']],
    features: ['High inductance with low losses', 'Suitable for power and EMI filtering', 'Stable performance and thermal reliability', 'Compact and rugged construction', 'Customized designs as per application'],
    specs: [['Inductance Range', '1 µH – 100 mH'], ['Current Rating', '0.5 A – 100 A'], ['DC Resistance (DCR)', '10 mΩ – 1 Ω'], ['Core Material', 'Ferrite / Iron Powder / Amorphous / Other'], ['Operating Frequency', 'Up to 500 kHz'], ['Mounting', 'PCB / Chassis / Custom'], ['Cooling', 'Natural Convection']],
    apps: ['DC-DC converters and power supplies', 'Power Supplies & SMPS', 'Inverters and renewable energy systems', 'Motor drives and industrial automation', 'EMI / RFI / EMC filtering', 'Energy storage and smoothing'],
  },
  {
    slug: 'high-frequency-transformers', name: 'High Frequency Transformers', short: 'Compact and efficient transformers for switched mode power applications.',
    tags: ['Compact Design', 'High Efficiency', 'Wide Applications'], card: '/images/card-high-frequency.jpg', images: ['/images/main-high-frequency.jpg'],
    intro: ['Magnova manufactures high frequency transformers for switching power supplies and converter applications, offering high efficiency, compact size and reliable performance.'],
    highlights: [['zap', 'High Efficiency'], ['compact', 'Compact & Lightweight'], ['activity', 'Low Leakage Inductance'], ['shield', 'High Reliability']],
    specs: [['Power Rating', '1 W – 1 kW'], ['Switching Frequency', '20 kHz – 500 kHz'], ['Core Material', 'Ferrite'], ['Insulation Class', 'Class B / F / H']],
    apps: ['SMPS & Adapters', 'DC–DC Converters', 'Industrial Control Systems', 'Telecom & Networking Equipment'],
  },
  {
    slug: 'smps-transformers', name: 'SMPS Transformers', short: 'Reliable transformers for SMPS and power supply applications.',
    tags: ['High Efficiency', 'Compact Size', 'Cost Effective'], card: '/images/card-smps.jpg', images: ['/images/main-smps.jpg'],
    intro: ['Magnova offers a range of SMPS transformers designed for switch mode power supply applications, ensuring high efficiency, low losses and stable operation.'],
    highlights: [['gauge', 'High Efficiency'], ['compact', 'Compact Design'], ['activity', 'Low EMI & Noise'], ['thermo', 'Low Temperature Rise']],
    specs: [['Power Rating', '5 W – 500 W'], ['Input Voltage', '85 – 265 V AC'], ['Switching Frequency', '20 – 200 kHz'], ['Core Material', 'Ferrite (MnZn / NiZn)']],
    apps: ['AC–DC SMPS', 'LED Drivers', 'Battery Chargers', 'Consumer & Industrial Electronics'],
  },
  {
    slug: 'custom-magnetic-components', name: 'Custom Magnetic Components', short: 'Application-specific magnetic solutions designed to meet unique requirements.',
    tags: ['Application Specific', 'Tailor-Made Design', 'Engineering Support'], card: '/images/card-custom.jpg', images: ['/images/main-custom.jpg'],
    intro: ['Magnova provides custom-designed magnetic components as per customer specifications, offering optimized solutions for diverse and demanding applications.'],
    highlights: [['gear', 'Application Specific Design'], ['sliders', 'Flexible Configuration'], ['layers', 'Optimized Performance'], ['handshake', 'End-to-End Support']],
    specs: [['Power Rating', 'As per requirement'], ['Frequency', 'Up to 1 MHz'], ['Core Material', 'Ferrite / Iron Powder / Amorphous / Custom'], ['Design Type', 'EE / EI / PQ / Toroidal / Custom']],
    apps: ['Power Electronics', 'Renewable Energy Systems', 'Automotive & EV', 'Industrial & Special Purpose'],
  },
];

export const STRIP = [['gear', 'Custom Design & Development'], ['layers', 'Reliable Manufacturing'], ['award', 'Quality Assurance'], ['users', 'Customer Support']];
export const PROMISES = [['gear', 'Custom Design', 'As per your application needs'], ['award', 'Proven Quality', 'Tested for performance and reliability'], ['truck', 'On-Time Delivery', 'Committed and dependable'], ['headset', 'Technical Support', 'From design to production']];
export const WHY = [['gear', 'Custom Design'], ['gear2', 'Reliable Quality'], ['truck', 'On-Time Delivery'], ['headset', 'Technical Support'], ['globe', 'Global Supply']];

export const ABOUT_SHORT = 'Magnova is a leading manufacturer of magnetic components, specializing in toroidal transformers, inductors, high frequency transformers, SMPS transformers and custom magnetic solutions for diverse industrial applications.';
export const ABOUT_LONG = 'Magnova is a manufacturer of high-performance magnetic components, including toroidal transformers, inductors and custom magnetics for power electronics applications. We focus on reliable design, consistent quality and customer-specific solutions.';
export const VISION = 'To be a preferred global partner for innovative and reliable magnetic components.';
export const MISSION = 'To design and manufacture high-quality magnetic components that deliver performance, reliability and value to our customers.';

export const CAPABILITIES = [
  { id: 'design', icon: 'design', title: 'Design & Development', sub: 'Innovation-Driven Magnetic Solutions', summary: 'R&D, custom design, simulation and prototyping.', img: '/images/cap-design.jpg',
    intro: 'Innovative, application-specific magnetic solutions from concept to production.',
    items: [['clipboard', 'Application Requirement Analysis'], ['magnet', 'Custom Magnetic Design & Optimization'], ['thermo', 'Magnetic, Electrical & Thermal Design'], ['activity', 'EMI / Thermal / Performance Simulation & Validation (FEA)'], ['layers', 'Material & Core Selection (Ferrite, Iron Powder, etc.)'], ['flask', 'Prototype Development & Design Validation'], ['gear', 'Design for Manufacturability (DFM) & Cost Optimization']] },
  { id: 'manufacturing', icon: 'factory', title: 'Manufacturing Facility', sub: 'Modern & Scalable Manufacturing Infrastructure', summary: 'Modern winding, assembly and production infrastructure.', img: '/images/cap-manufacturing.jpg',
    intro: 'Modern and scalable manufacturing infrastructure for high-quality magnetic components.',
    items: [['coil', 'Advanced Winding & Assembly (Automated & Semi-Automated)'], ['layers', 'Core Processing & Assembly'], ['flask', 'Potting, Impregnation, Vacuum Potting & Curing'], ['trend', 'Flexible & Scalable Production Capacity, Prototype to Volume'], ['users', 'Skilled & Experienced Workforce'], ['gear', 'Process Control & Standardization'], ['factory', 'In-house Manufacturing Infrastructure, Multiple Plant Facilities'], ['shield', 'Clean & Safe Work Environment, Lean Manufacturing & On-Time Delivery']] },
  { id: 'quality', icon: 'shield', title: 'Quality Assurance', sub: 'Built for Reliability & Long-Term Performance', summary: 'Rigorous inspection, electrical testing and reliability validation.', img: '/images/cap-quality.jpg',
    intro: 'Robust quality processes to ensure reliable, safe and long-lasting products.',
    items: [['clipboard', 'Incoming Material Inspection'], ['check', 'In-Process & Final Inspection / Testing'], ['activity', 'Electrical & Performance Testing (L, Q, DCR, Hi-Pot, IR, Insulation, etc.)'], ['thermo', 'Reliability & Environmental Tests (Temperature, Humidity, etc.)'], ['micro', 'Material & Insulation Evaluation'], ['file', 'Compliance to Relevant Standards (IEC / IS / UL – as applicable)'], ['award', 'Continuous Improvement (CAPA)']] },
  { id: 'customer', icon: 'users', title: 'Customer Focused Solutions', sub: 'Flexible, Responsive and Value-Added Support', summary: 'Application specific design, flexible customization and long-term support.', img: '/images/cap-customer.jpg',
    intro: 'Flexible, reliable and value-added solutions tailored to customer requirements.',
    items: [['chat', 'Requirement Consultation'], ['target', 'Customized Designs, Variants & Application-Specific Customization'], ['clock', 'Quick Response, Engineering Support & Quick Turnaround for Prototypes'], ['headset', 'Technical Support & Application Guidance'], ['truck', 'On-time Delivery & Supply Reliability'], ['package', 'Small to Large Volume Supply'], ['sliders', 'Flexible Design & Material Options'], ['handshake', 'End-to-End Support & Long-term Partnership']] },
];

export const CERTS = [['ISO', '9001:2015', 'Quality Management'], ['ISO', '27001:2022', 'Information Security Management']];

export const APPLICATIONS = ['Industrial Power Supplies', 'Medical Equipment', 'Audio & Communication Systems', 'Renewable Energy / Inverter Systems', 'Test & Measurement Instruments', 'Automation & Embedded Systems', 'Automotive & EV', 'Industrial & Special Purpose'];
export const ENQUIRY_WHY = [['gear', 'Customized Solutions'], ['clock', 'Quick & Reliable Response'], ['shield', 'Technical Support'], ['users', 'Competitive Quotation']];
export const HELP = [['gear', 'Product Selection'], ['pencil', 'Design Support'], ['sliders', 'Customisation & Modifications'], ['cpu', 'Application Guidance'], ['chat', 'General Enquiries']];
export const ASSIST_TYPES = ['Product Selection', 'Design Support', 'Customisation & Modifications', 'Application Guidance', 'General Enquiries'];
export const FAQ = [
  ['Can you design toroidal transformers as per our specification?', 'Yes. We design application-specific toroidal transformers to your power, voltage, frequency, size and insulation requirements.'],
  ['What information is required for a custom design?', 'Typically power rating, input/output voltages, frequency, size constraints, insulation class, operating conditions and any applicable standards.'],
  ['Do you provide application support?', 'Yes. Our technical team supports you from design through production, including product selection and application guidance.'],
  ['What is the typical design and development lead time?', 'Lead time depends on complexity and quantity. Share your requirement and our team will confirm timelines for prototypes and production.'],
  ['Can I share my drawing or datasheet for review?', 'Absolutely. Attach drawings or specifications (PDF, DWG, JPG, PNG, max 10 MB) with your enquiry.'],
];
export const STORE_CATEGORIES = ['Toroidal Transformers', 'Inductors', 'High Frequency Transformers', 'SMPS Transformers', 'Magnetic Components'];
export const BLOG_CATEGORIES = ['Product Knowledge', 'Design & Engineering', 'Applications', 'Troubleshooting', 'Manufacturing', 'Industry Trends', 'Company News'];
