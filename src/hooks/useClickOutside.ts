import { useEffect, useState } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLElement | null>) => {
  const [isOutside, setIsOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOutside(true);
      } else {
        setIsOutside(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return isOutside;
};
