'use client'

import React, { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t)),
    })

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <main className='relative'>
      <Navbar />
      <Sidebar />
      {children}
    </main>
  )
}

export default layout