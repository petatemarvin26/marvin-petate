import {useEffect, useRef, useState} from 'react';
import {Image, View} from 'vin-react';

import {useAnimation, useFocus} from 'hooks';

import {imagesAnim, imagesElements, imagesToIn, imagesToOut} from './animate';
import {HandleClick} from './types';
import styles from './.module.css';

const ImageViewer: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const [, setIndex] = useState(0);

  const focus = useFocus(() => [ref.current]);

  const [imagesStyles, imagesStart] = useAnimation(...imagesAnim);

  const handleClick: HandleClick = (key) => () => {
    setIndex(key);
    imagesStart(imagesToIn(key));
  };

  const focusListener = () => {
    if (focus) {
      return;
    }
    imagesStart(imagesToOut);
  };
  useEffect(focusListener, [focus]);

  const renderedImages = imagesStyles.map((style, key) => {
    const {Controller, src} = imagesElements[key];
    return (
      <Controller
        key={key}
        style={style}
        className={styles['project-pane']}
        onClick={handleClick(key)}
      >
        <Image className={styles['project-img']} src={src} draggable={false} />
      </Controller>
    );
  });

  return (
    <View
      className={styles['image-viewer']}
      reference={(_ref) => {
        ref.current = _ref;
      }}
    >
      <View className={styles['images-pane']}>{renderedImages}</View>
    </View>
  );
};

export default ImageViewer;
