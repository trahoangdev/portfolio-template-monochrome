import { useEffect } from 'react';
import { OBSERVER_OPTIONS } from '../config/constants';

const useScrollAnimation = (refTab = null, refList = null) => {
  const divs = refList;



  useEffect(() => {
    if (divs && divs.current) {
      // Filter out null/undefined refs
      const elements = divs.current.filter(e => e !== null && e !== undefined);

      elements.forEach((div) => {
        div.classList.add('animation');
      });

      const observerOptions = OBSERVER_OPTIONS.ANIMATION;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // If not intersecting, check if it's below the viewport.
            // If boundingClientRect.top > 0, it means it's below the viewport (scrolled up).
            // We typically remove 'active' only if we scroll back up, not if we scroll past it down.
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('active');
            }
          }
        });
      }, observerOptions);

      elements.forEach((div) => {
        if (div) observer.observe(div);
      });

      return () => observer.disconnect();
    }
  }, [divs]);
};

export default useScrollAnimation;
