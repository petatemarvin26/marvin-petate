import {useEffect, useState} from 'react';
import {GetScreenType, ScreenType, UseScreen} from './types';

const getScreenType: GetScreenType = () => {
  const {innerWidth: width} = window;
  if (width <= ScreenType.Phone) {
    return ScreenType.Phone;
  }
  if (width <= ScreenType.Tablet) {
    return ScreenType.Tablet;
  }
  return ScreenType.Desktop;
};

const useScreen: UseScreen = () => {
  const type = getScreenType();
  const [screen, setScreen] = useState<ScreenType>(type);

  const screenListener = () => {
    const resizeListener = () => {
      const type = getScreenType();
      if (screen === type) return;
      setScreen(type);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  };
  useEffect(screenListener, [screen]);
  return screen;
};

export {GetScreenType, ScreenType, UseScreen};
export {useScreen};
