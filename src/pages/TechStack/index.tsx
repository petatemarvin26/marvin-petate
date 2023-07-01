import {useEffect, useRef, useState} from 'react';
import {View} from 'vin-react';

import {Tech, TechDetails, TechStack, AnimatedView} from 'components';
import {useAnimation, useFocus} from 'hooks';

import {SelectHandler} from './type';
import {
  rightAnim,
  rightToIn,
  rightToOut,
  techAnim,
  techElements,
  techSelectIn,
  techSelectOut,
  techToIn,
  techToOut,
  titleAnim,
  titleElements,
  titleToIn,
  titleToOut
} from './animate';
import styles from './.module.css';

const TechStackPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const leftRef = useRef<HTMLDivElement>();
  const techstackRef = useRef<HTMLDivElement>();
  const [tech, setTech] = useState<TechStack>();

  const [titleStyles, titleStart] = useAnimation(...titleAnim);
  const [techStyles, techStart] = useAnimation(...techAnim);
  const [rightStyles, rightStart] = useAnimation(...rightAnim);

  const focus = useFocus(() => [ref.current], {threshold: 0.4});

  const handleSelect: SelectHandler = (key) => (val) => {
    techStart(techSelectIn(key));
    rightStart(rightToIn);
    setTech(val);

    const scrollToTech = () => {
      const half = techstackRef.current.querySelectorAll('div');
      half.forEach((el) => {
        if (el.id === `tech-${key}`) {
          const offsetParent =
            el.offsetTop - (techstackRef.current.offsetTop + 25);

          leftRef.current.scrollTo({top: offsetParent, behavior: 'smooth'});
        }
      });
    };

    if (tech) {
      scrollToTech();
      return;
    }
    setTimeout(scrollToTech, 550);
  };

  const focusListener = () => {
    if (focus) {
      techStart(techToIn);
      titleStart(titleToIn);
      return;
    }
    setTech(undefined);
    titleStart(titleToOut);
    rightStart(rightToOut);
    techStart(techToOut);
    techStart(techSelectOut);
  };
  useEffect(focusListener, [focus]);

  const initListener = () => {
    const handleClickListener = (e: MouseEvent) => {
      if (!leftRef.current.contains(e.target as Node)) {
        setTech(undefined);
        rightStart(rightToOut);
        techStart(techSelectOut);
      }
    };
    document.addEventListener('click', handleClickListener);
    return () => {
      document.removeEventListener('click', handleClickListener);
    };
  };
  useEffect(initListener, [tech]);

  const renderedRightPane = rightStyles.map((style, key) => (
    <AnimatedView key={key} className={styles['right-pane']} style={style}>
      <TechDetails data={tech} />
    </AnimatedView>
  ));

  const renderedTitle = titleStyles.map((style, key) => {
    const {Controller} = titleElements[key];
    return (
      <Controller key={key} className={styles['title-txt']} style={style}>
        TECH STACK
      </Controller>
    );
  });

  const remderedTechStack = techStyles.map((style, key) => {
    const data = techElements[key];
    return (
      <Tech
        key={key}
        id={`tech-${key}`}
        style={style}
        data={data}
        onSelect={handleSelect(key)}
      />
    );
  });

  return (
    <View
      id='p-1'
      reference={(_ref) => {
        ref.current = _ref;
      }}
      className={styles['techstack-page']}
    >
      <View className={styles['top-pane']}>{renderedTitle}</View>
      <View className={styles['center-pane']}>
        <View id='content-pane' className={styles['content-pane']}>
          <View
            reference={(ref) => {
              leftRef.current = ref;
            }}
            className={styles['left-pane']}
          >
            <View
              reference={(_ref) => {
                techstackRef.current = _ref;
              }}
              className={styles['techstack-pane']}
            >
              {remderedTechStack}
            </View>
          </View>
          {renderedRightPane}
        </View>
      </View>
    </View>
  );
};

export default TechStackPage;
