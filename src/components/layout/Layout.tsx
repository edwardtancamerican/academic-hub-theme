import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';

interface LayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export function Layout({ children, showBreadcrumbs = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {showBreadcrumbs && <Breadcrumbs />}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
