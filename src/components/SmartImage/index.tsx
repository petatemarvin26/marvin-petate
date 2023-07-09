import {memo, useEffect, useRef, useState} from 'react';
import {Image as ImageComponent, smartCompare} from 'vin-react';

import styles from './.module.css';
import {Props} from './types';

const SmartImage: React.FC<Props> = ({className, style, preSrc, src}) => {
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

  let smartImageStyle = styles['smart-img'];
  if (className) smartImageStyle += ` ${className}`;

  return (
    <ImageComponent className={smartImageStyle} style={style} src={source} />
  );
};

export default SmartImage;
// export default memo(SmartImage, smartCompare(['preSrc', 'src']));
