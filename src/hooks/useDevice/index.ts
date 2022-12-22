import {useEffect, useState} from 'react';

import {DeviceType} from './types';

function useDevice() {
  const [device, setDevice] = useState<DeviceType>(null);

  const onResizeWindow = () => {
    const width = window.innerWidth;
    if (width <= 750) {
      setDevice('PHONE');
      return;
    }
    if (width <= 1100) {
      setDevice('TABLET');
      return;
    }
    setDevice('DESKTOP');
  };
  useEffect(() => {
    if (!device) {
      onResizeWindow();
    }
    window.addEventListener('resize', onResizeWindow);
    return () => {
      window.removeEventListener('resize', onResizeWindow);
    };
  }, [device]);

  return device;
}

export default useDevice;
