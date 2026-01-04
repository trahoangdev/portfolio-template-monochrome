import { useEffect } from 'react';

const useScrollAnimation = (refTab = null, refList = null) => {
  const divs = refList;



  useEffect(() => {
    // Animation logic
    if (divs && divs.current) {
      // Filter out null/undefined refs once
      const elements = divs.current.filter(e => e !== null && e !== undefined);

      elements.forEach((div) => {
        div.classList.add('animation');
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        elements.forEach((div) => {
          // Double check if element is still connected
          if (!div.isConnected) return;

          const rect = div.getBoundingClientRect();
          const offsetTop = rect.top + scrollPosition;

          if (scrollPosition >= offsetTop - (window.innerHeight / 1.3)) {
            div.classList.add('active');
          } else {
            div.classList.remove('active');
          }
        });
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [divs]); // Only re-run if divs ref structure changes (which shouldn't happen often)
};

export default useScrollAnimation;
