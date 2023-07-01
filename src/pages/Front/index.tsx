import {useEffect, useRef} from 'react';
import {View} from 'vin-react';

import {displayPic} from 'assets/image';
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

const FrontPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const [pbLeftStyles, pbLeftStart] = useAnimation(...pbLeftAnim);
  const [pbRightStyles, pbRightStart] = useAnimation(...pbRightAnim);
  const [detailsStyles, detailsStart] = useAnimation(...detailsAnim);
  const [imgsStyles, imgsStart] = useAnimation(...imageAnim);

  const detailsFocus = useFocus(() => [ref.current], {threshold: [0.6]});
  const imageFocus = useFocus(() => [ref.current], {threshold: [0.5]});
  const profileBtnFocus = useFocus(() => [ref.current], {threshold: [0.4]});

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
  useEffect(detailsFocusListener, [detailsFocus]);
  useEffect(imageFocusListener, [imageFocus]);
  useEffect(profileBtnListener, [profileBtnFocus]);

  const renderedDetails = detailsStyles.map((style, key) => {
    const {Controller, className, content} = detailsElements[key];
    return (
      <Controller key={key} style={style} className={styles[className]}>
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
        src={displayPic}
      />
    );
  });

  const renderedLeftProfileButtons = pbLeftStyles.map((style, key) => {
    const {Controller, Icon} = pbLeftElements[key];
    return (
      <Controller key={key} style={style}>
        <Icon className={styles['svg']} />
      </Controller>
    );
  });

  const renderedRightProfileButtons = pbRightStyles.map((style, key) => {
    const {Controller, Icon} = pbRightElements[key];
    return (
      <Controller key={key} style={style}>
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
