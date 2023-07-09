import {Image as ImageComponent, smartCompare} from 'vin-react';

import styles from './.module.css';
import {Props} from './types';
import {memo, useEffect, useRef, useState} from 'react';

const SmartImage: React.FC<Props> = ({preSrc, src}) => {
  const initRender = useRef(true);
  const [source, setSource] = useState(preSrc);

  const initListener = () => {
    if (initRender.current) {
      initRender.current = false;
      const img = new Image();
      img.src = src;
      img.onload = () => setSource(src);
    }
  };
  useEffect(initListener, []);

  return <ImageComponent className={styles['smart-image']} src={source} />;
};

export default memo(SmartImage, smartCompare(['preSrc', 'src']));
