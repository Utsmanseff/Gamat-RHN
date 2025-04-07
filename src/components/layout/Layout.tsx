import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollTopButton from '../ui/ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollTopButton />
    </>
  );
}
