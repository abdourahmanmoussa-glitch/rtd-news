import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { BreakingTicker } from '@/components/layout/BreakingTicker';
import { Footer } from '@/components/layout/Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <BreakingTicker />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
