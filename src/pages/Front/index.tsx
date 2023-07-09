import {useEffect, useRef, useState} from 'react';
import {View} from 'vin-react';

import {displayPicImg, displayPicLowImg} from 'assets/image';
import {useAnimation, useFocus} from 'hooks';

import {
  detailsAnim,
  detailsElements,
  detailsToIn,
  detailsToOut,
  imageAnim,
  imgElements,
  imgToIn,
  imgToOut,
  pbLeftAnim,
  pbLeftElements,
  pbLeftToIn,
  pbLeftToOut,
  pbRightAnim,
  pbRightElements,
  pbRightToIn,
  pbRightToOut
} from './animate';
import styles from './.module.css';
import {ClickHandler} from './types';
import {preRenderImage} from 'utils';

const FrontPage: React.FC = () => {
  const initRender = useRef(true);
  const ref = useRef<HTMLDivElement>();
  const [src, setSrc] = useState<string>(displayPicLowImg);

  const [pbLeftStyles, pbLeftStart] = useAnimation(...pbLeftAnim);
  const [pbRightStyles, pbRightStart] = useAnimation(...pbRightAnim);
  const [detailsStyles, detailsStart] = useAnimation(...detailsAnim);
  const [imgsStyles, imgsStart] = useAnimation(...imageAnim);

  const detailsFocus = useFocus(() => [ref.current], {threshold: [0.6]});
  const imageFocus = useFocus(() => [ref.current], {threshold: [0.5]});
  const profileBtnFocus = useFocus(() => [ref.current], {threshold: [0.4]});

  const handleClick: ClickHandler = (key) => () => {
    let link = 'https://stackoverflow.com/users/10646511/marvin';
    if (key === 1) link = 'https://www.npmjs.com/~petatemarvin26';
    if (key === 2) link = 'https://github.com/petatemarvin26';
    if (key === 3) link = 'https://gitlab.com/petatemarvin26';
    window.open(link, '_blank');
  };

  const preRenderImageListener = () => {
    if (initRender.current) {
      initRender.current = false;

      //pre-render of large image
      preRenderImage(displayPicImg).then(setSrc);
    }
  };
  const detailsFocusListener = () => {
    if (detailsFocus) {
      detailsStart(detailsToIn);
      return;
    }
    detailsStart(detailsToOut);
  };
  const imageFocusListener = () => {
    if (imageFocus) {
      imgsStart(imgToIn);
      return;
    }
    imgsStart(imgToOut);
  };
  const profileBtnListener = () => {
    if (profileBtnFocus) {
      pbLeftStart(pbLeftToIn);
      pbRightStart(pbRightToIn);
      return;
    }
    pbLeftStart(pbLeftToOut);
    pbRightStart(pbRightToOut);
  };
  useEffect(preRenderImageListener, []);
  useEffect(detailsFocusListener, [detailsFocus]);
  useEffect(imageFocusListener, [imageFocus]);
  useEffect(profileBtnListener, [profileBtnFocus]);

  const renderedDetails = detailsStyles.map((style, key) => {
    const {Controller, className, content, onClick} = detailsElements[key];
    return (
      <Controller
        key={key}
        style={style}
        className={styles[className]}
        onClick={onClick}
      >
        {content}
      </Controller>
    );
  });

  const renderedImg = imgsStyles.map((style, key) => {
    const {Controller} = imgElements[key];
    return (
      <Controller
        key={key}
        style={style}
        className={styles['display-pic-img']}
        src={src}
      />
    );
  });

  const renderedLeftProfileButtons = pbLeftStyles.map((style, key) => {
    const {Controller, Icon} = pbLeftElements[key];
    return (
      <Controller key={key} style={style} onClick={handleClick(key)}>
        <Icon className={styles['svg']} />
      </Controller>
    );
  });

  const renderedRightProfileButtons = pbRightStyles.map((style, key) => {
    const {Controller, Icon} = pbRightElements[key];
    return (
      <Controller key={key} style={style} onClick={handleClick(key + 2)}>
        <Icon className={styles['svg']} />
      </Controller>
    );
  });

  return (
    <View
      className={styles['front-page']}
      reference={(_ref) => (ref.current = _ref)}
    >
      <View className={styles['center-pane']}>
        <View className={styles['left-pane']}>
          <View className={styles['details-pane']}>{renderedDetails}</View>
        </View>
        <View className={styles['right-pane']}>{renderedImg}</View>
      </View>
      <View className={styles['bottom-pane']}>
        <View className={styles['dev-account-pane']}>
          {renderedLeftProfileButtons}
          {renderedRightProfileButtons}
        </View>
      </View>
    </View>
  );
};

export default FrontPage;
