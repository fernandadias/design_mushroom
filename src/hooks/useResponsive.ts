'use client';

import { useEffect, useState } from 'react';

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export function useResponsive() {
  const [screenSize, setScreenSize] = useState<ScreenSize>('lg');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        setScreenSize('sm');
        setIsMobile(true);
      } else if (width < 768) {
        setScreenSize('md');
        setIsMobile(true);
      } else if (width < 1024) {
        setScreenSize('lg');
        setIsMobile(false);
      } else if (width < 1280) {
        setScreenSize('xl');
        setIsMobile(false);
      } else {
        setScreenSize('2xl');
        setIsMobile(false);
      }
    };

    // Inicializar
    handleResize();
    
    // Adicionar listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenSize, isMobile };
}
