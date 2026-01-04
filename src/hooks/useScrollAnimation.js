import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useScrollAnimation = (refTab = null, refList = null) => {
  const scrollTab = refTab;
  const divs = refList;
  const activeTab = useSelector(state => state.activeTab);

  useEffect(() => {
    // Scroll to the active tab if it matches
    if (scrollTab && scrollTab.current && scrollTab.current.classList.contains(activeTab)) {
      scrollTab.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTab, scrollTab]); // Separate effect for scrolling

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
