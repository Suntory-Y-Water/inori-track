import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Suspense } from 'react';
import Aside from './components/Aside';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex-1'>
          <div className='container px-4 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10'>
            <aside className='flex font-medium text-base mt-12 sticky top-0'>
              <Aside />
            </aside>
            <main className='lg:mt-12'>
              <Suspense>{children}</Suspense>
            </main>
          </div>
        </div>
        <div className='mt-auto '>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
