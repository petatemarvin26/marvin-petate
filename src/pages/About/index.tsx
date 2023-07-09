import {useEffect, useRef, useState} from 'react';
import {Text, View} from 'vin-react';

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
import {
  // preRenderImage,
  preRenderImages
} from 'utils';
import {
  displayPic2Img,
  displayPic2LowImg,
  displayPic3Img,
  displayPic3LowImg
} from 'assets';

const AboutPage: React.FC = () => {
  const initRender = useRef(true);
  const ref = useRef<HTMLDivElement>();
  // const [src0, setSrc0] = useState<string>();
  // const [src1, setSrc1] = useState<string>();
  const [srcs, setSrcs] = useState<Array<string>>([
    displayPic2LowImg,
    displayPic3LowImg
  ]);

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

      //pre-render of large image
      preRenderImages([displayPic2Img, displayPic3Img]).then((urls) => {
        setSrcs(urls as Array<string>);
      });
      // preRenderImage(displayPic2Img).then((src) =>
      //   setSrcs((prev) => [src as string, ...prev.slice(1, 2)])
      // );
      // preRenderImage(displayPic3Img).then((src) =>
      //   setSrcs((prev) => [...prev.slice(0, 2), src as string])
      // );
      return;
    }
    imageStart(imageToNext(timelineIndex));
  };
  useEffect(centerFocusListener, [centerFocus]);
  useEffect(timelineIndexListener, [timelineIndex]);

  const renderedImage = imageStyles.map((style, key) => {
    const {Controller} = imageElements[key];
    return (
      <Controller
        key={key}
        className={styles['dp-img']}
        style={style}
        src={srcs[key]}
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
