import AuthForm from '@/components/AuthForm';
import { Banner, Crumbs } from '@/components/PageBanner';
export const metadata = { title: 'Login / Register' };

export default function Login() {
  return (<><Banner title="Login / Register" sub="Access your Magnova account." /><Crumbs trail={[['Login / Register']]} />
    <section className="sec"><div className="wrap"><AuthForm /></div></section></>);
}
