import {useContext, useEffect, useState} from 'react';
import {Image, View} from 'vin-react';

import projects from 'pages/Projects/meta.data';
import {LoadPercentage} from 'context';
import {AnimatedView} from 'components';
import {useAnimation} from 'hooks';

import {imagesAnim, imagesToIn, imagesToOut} from './animate';
import {HandleClick, Props} from './types';
import styles from './.module.css';

const ImageViewer: React.FC<Props> = ({focus, reference, onChangeIndex}) => {
  const [, setIndex] = useState(0);
  const {addPercentage, setPercentage} = useContext(LoadPercentage.Context);
  const [imagesStyles, imagesStart] = useAnimation(...imagesAnim);

  const handleClick: HandleClick = (key) => () => {
    setIndex(key);
    imagesStart(imagesToIn(key));
    onChangeIndex(projects[key]);
  };

  const focusListener = () => {
    if (focus) {
      return;
    }
    imagesStart(imagesToOut);
  };
  useEffect(focusListener, [focus]);

  const renderedImages = imagesStyles.map((style, key) => {
    const {src} = projects[key];
    return (
      <AnimatedView
        key={key}
        style={style}
        className={styles['project-pane']}
        onClick={handleClick(key)}
      >
        <Image
          className={styles['project-img']}
          src={src}
          draggable={false}
          onProgress={() => {}}
          onLoadStart={() => {
            addPercentage({id: `proj-${key}`, percent: 0});
          }}
          onLoadEnd={() => {
            setPercentage({id: `proj-${key}`, percent: 100});
          }}
        />
      </AnimatedView>
    );
  });

  return (
    <View className={styles['image-viewer']} reference={reference}>
      <View className={styles['images-pane']}>{renderedImages}</View>
    </View>
  );
};

export default ImageViewer;
