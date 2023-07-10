import {useContext, useEffect, useRef, useState} from 'react';
import {Text, View} from 'vin-react';

import {LoadPercentage} from 'context';
import {useAnimation, useFocus} from 'hooks';
import {Timeline} from 'components';

import contents from './meta.data';
import {
  titleElements,
  titleAnim,
  titleToIn,
  titleToOut,
  timelineAnim,
  timelineToIn,
  timelineToOut,
  imageAnim,
  imageElements,
  imageToIn,
  imageToOut,
  imageToNext
} from './animate';
import styles from './.module.css';
const AboutPage: React.FC = () => {
  const initRender = useRef(true);
  const {addPercentage, setPercentage} = useContext(LoadPercentage.Context);
  const ref = useRef<HTMLDivElement>();

  const [timelineIndex, setTimelineIndex] = useState(0);

  const [imageStyles, imageStart] = useAnimation(...imageAnim);
  const [titleStyles, titleStart] = useAnimation(...titleAnim);
  const [timelineStyle, timelineStart] = useAnimation(...timelineAnim);

  const centerFocus = useFocus(() => [ref.current], {threshold: [0.6]});

  const centerFocusListener = () => {
    if (centerFocus) {
      titleStart(titleToIn);
      timelineStart(timelineToIn);
      imageStart(imageToIn);
      return;
    }
    titleStart(titleToOut);
    timelineStart(timelineToOut);
    imageStart(imageToOut);
  };
  const timelineIndexListener = () => {
    if (initRender.current) {
      initRender.current = false;
      return;
    }
    imageStart(imageToNext(timelineIndex));
  };
  useEffect(centerFocusListener, [centerFocus]);
  useEffect(timelineIndexListener, [timelineIndex]);

  const renderedImage = imageStyles.map((style, key) => {
    const {Controller, src} = imageElements[key];
    return (
      <Controller
        key={key}
        className={styles['dp-img']}
        onProgress={() => {}}
        onLoadStart={() => {
          addPercentage({id: `dp-${key + 1}`, percent: 0});
        }}
        onLoadEnd={() => {
          setPercentage({id: `dp-${key + 1}`, percent: 100});
        }}
        style={style}
        src={src}
      />
    );
  });

  const renderedTitle = titleStyles.map((style, key) => {
    const {Controller} = titleElements[key];
    return (
      <Controller key={key} className={styles['upper-pane']} style={style}>
        <Text className={styles['title-txt']}>ABOUT ME</Text>
      </Controller>
    );
  });

  const renderedTimeline = timelineStyle.map((style, key) => (
    <Timeline
      key={key}
      style={style}
      focus={centerFocus}
      onChangeIndex={setTimelineIndex}
    />
  ));

  return (
    <View
      id='about'
      className={styles['about-page']}
      reference={(_ref) => (ref.current = _ref)}
    >
      <View className={styles['about-cont-pane']}>
        <View className={styles['left-pane']}>{renderedImage}</View>
        <View className={styles['right-pane']}>
          <View className={styles['upper-pane']}>{renderedTitle}</View>
          <View className={styles['mid-pane']}>{renderedTimeline}</View>
        </View>
      </View>
    </View>
  );
};

export {contents};
export default AboutPage;
