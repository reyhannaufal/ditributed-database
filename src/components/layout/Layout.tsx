import * as React from 'react';

import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
