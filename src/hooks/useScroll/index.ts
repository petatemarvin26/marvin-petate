import {useEffect, useState} from 'react';
import {UseScroll} from './types';

const useScroll: UseScroll = () => {
  const [percent, setPercent] = useState(0);
  const scrollListener = () => {
    const handleWheelEvent = () => {
      const body = document.querySelector('body');
      const {scrollY, innerHeight} = window;
      const scrollPercent = scrollY / (body.scrollHeight - innerHeight);

      setPercent(Math.floor(scrollPercent * 100));
    };
    window.addEventListener('wheel', handleWheelEvent);
    return () => {
      window.addEventListener('wheel', handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);

  return [percent];
};

export {useScroll};
