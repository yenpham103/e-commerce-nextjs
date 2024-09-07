import MobileBottom from '@/components/custom/MobileBottom';
import Footer from '@/components/footer';
import Header from '@/components/header';
import * as React from 'react';

//here is layout page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </>
  );
}
