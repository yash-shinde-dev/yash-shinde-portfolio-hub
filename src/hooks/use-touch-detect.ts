
import { useEffect } from 'react';

export const useTouchDetect = () => {
  useEffect(() => {
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0));
    };

    if (isTouchDevice()) {
      document.documentElement.classList.add('touch');
    } else {
      document.documentElement.classList.remove('touch');
    }
  }, []);
};

export default useTouchDetect;
