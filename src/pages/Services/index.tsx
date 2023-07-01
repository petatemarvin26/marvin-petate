import {useEffect, useRef} from 'react';
import {View} from 'vin-react';

import {Service} from 'components';
import {useAnimation, useFocus} from 'hooks';

import {
  hoverReset,
  hoverUp,
  servicesAnim,
  servicesElements,
  servicesToIn,
  servicesToOut,
  titleAnim,
  titleElements,
  titleToIn,
  titleToOut
} from './animate';
import {MouseHandler} from './types';
import servicesData from './test.data';
import styles from './.module.css';

const ServicesPage: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>();
  const [servicesStyles, servicesStart] = useAnimation(...servicesAnim);
  const [titleStyles, titleStart] = useAnimation(...titleAnim);

  const focus = useFocus(() => [servicesRef.current], {threshold: 0.5});

  const handleHover: MouseHandler = (key) => () => {
    servicesStart(hoverUp(key));
  };
  const handleLeave: MouseHandler = (key) => () => {
    servicesStart(hoverReset(key));
  };

  useEffect(() => {
    if (focus) {
      servicesStart(servicesToIn);
      titleStart(titleToIn);
      return;
    }
    servicesStart(servicesToOut);
    titleStart(titleToOut);
  }, [focus]);

  const renderedTitle = titleStyles.map((style, key) => {
    const {Controller} = titleElements[key];
    return (
      <Controller key={key} className={styles['title-txt']} style={style}>
        SERVICES
      </Controller>
    );
  });

  const renderedServices = servicesStyles.map((style, key) => {
    const service = servicesData[key];
    const {Controller} = servicesElements[key];
    return (
      <Controller
        key={key}
        style={style}
        onMouseEnter={handleHover(key)}
        onMouseLeave={handleLeave(key)}
      >
        <Service {...service} />
      </Controller>
    );
  });

  return (
    <View
      id='p-0'
      reference={(ref) => {
        servicesRef.current = ref;
      }}
      className={styles['services-page']}
    >
      <View className={styles['top-pane']}>{renderedTitle}</View>
      <View className={styles['center-pane']}>{renderedServices}</View>
    </View>
  );
};

export default ServicesPage;
