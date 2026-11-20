import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: { default: 'Magnova – Magnetic Components for Power Electronics', template: '%s | Magnova' },
  description: 'Magnova designs and manufactures toroidal transformers, inductors, high frequency transformers, SMPS transformers and custom magnetic components.',
  icons: { icon: '/images/icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body><Providers><Header /><main>{children}</main><Footer /></Providers></body></html>
  );
}
