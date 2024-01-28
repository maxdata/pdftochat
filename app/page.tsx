import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import ProudlyOpenSource from '@/components/home/ProudlyOpenSource';
import { redirect } from 'next/navigation';
import { User, currentUser } from '../utils/user';

export default async function Home() {
  const user: User | null = await currentUser();
  const isLoggedIn = !!user;
  if (isLoggedIn) {
    redirect('/dashboard');
  }

  return (
    <main className="sm:p-7 sm:pb-0">
      <Header />
      <Hero />
      <HowItWorks />
      <ProudlyOpenSource />
      <Footer />
    </main>
  );
}
