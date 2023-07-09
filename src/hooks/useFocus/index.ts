import {useEffect, useState} from 'react';
import {UseFocus} from './types';

const useFocus: UseFocus = (getRefs, options) => {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    const _refs = getRefs();
    _refs.forEach((ref) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setFocus(true);
              return;
            }
            setFocus(false);
          });
        },
        {threshold: [0.35], ...options}
      );
      io.observe(ref);
    });
  }, []);
  return focus;
};

export {useFocus};
