import {useState, Fragment, useRef, useEffect} from 'react';
import {View, Text, Button} from 'vin-react';

import contents from 'pages/About/meta.data';
import {AnimatedView} from 'components';
import {useAnimation} from 'hooks';
import {LeftArrow, RightArrowSvg} from 'assets';

import {
  contentAnim,
  contentToIn,
  contentToOut,
  indicatorAnim,
  indicatorToIn,
  indicatorToOut
} from './animation';
import {Props} from './types';
import styles from './.module.css';

const Timeline: React.FC<Props> = ({
  onChangeIndex = () => {},
  focus,
  style
}) => {
  const initRender = useRef(true);
  const contentRef = useRef<HTMLDivElement>();
  const [index, setIndex] = useState(0);

  const [contentStyles, contentStart] = useAnimation(...contentAnim);
  const [indicatorStyles, indicatorStart] = useAnimation(...indicatorAnim);

  const handleClickLeft = () => {
    setIndex((prev) => {
      const next = prev - 1;
      if (next < 0) return prev;
      contentStart(contentToIn(next));
      indicatorStart(indicatorToIn(next));
      return next;
    });
  };
  const handleClickRight = () => {
    setIndex((prev) => {
      const next = prev + 1;
      if (next >= contents.length) return prev;
      contentStart(contentToIn(next));
      indicatorStart(indicatorToIn(next));
      return next;
    });
  };

  const focusListener = () => {
    if (initRender.current) {
      initRender.current = false;
      return;
    }

    if (!focus) {
      setIndex(0);
      contentStart(contentToOut);
      indicatorStart(indicatorToOut);
    }
  };
  useEffect(focusListener, [focus]);

  const indexListener = () => {
    contentRef.current.scrollTo({top: 0, behavior: 'smooth'});
    onChangeIndex(index);
  };
  useEffect(indexListener, [index]);

  const renderedContent = contentStyles.map((style, key) => {
    const {data} = contents[key];
    return (
      <AnimatedView key={key} className={styles['data-pane']} style={style}>
        {data.map((text, tkey) => {
          return (
            <Fragment key={tkey}>
              <Text className={styles['details-txt']}>{text}</Text>
              {tkey !== data.length - 1 && <br />}
            </Fragment>
          );
        })}
      </AnimatedView>
    );
  });

  const renderedIndicator = indicatorStyles.map((style, key) => {
    return (
      <AnimatedView key={key} className={styles['indicator']} style={style} />
    );
  });

  return (
    <AnimatedView className={styles['timeline']} style={style}>
      <Button className={styles['ctrl-left-btn']} onClick={handleClickLeft}>
        <LeftArrow />
      </Button>
      <Button className={styles['ctrl-right-btn']} onClick={handleClickRight}>
        <RightArrowSvg />
      </Button>
      <View
        className={styles['content-pane']}
        reference={(ref) => (contentRef.current = ref)}
      >
        {renderedContent}
      </View>
      <View className={styles['indicator-pane']}>{renderedIndicator}</View>
    </AnimatedView>
  );
};

export default Timeline;
