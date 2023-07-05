import {Button, Text, View} from 'vin-react';

import {Props} from './types';
import styles from './.module.css';
import {useEffect, useRef} from 'react';

const Service: React.FC<Props> = ({Icon, title, content, focus}) => {
  const centerRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();

  const handleClick = () => {
    const centerStyle = centerRef.current.style;
    centerStyle['-webkit-mask-image'] = 'none';
    const contentStyle = contentRef.current.style;
    contentStyle.overflowY = 'auto';
  };

  const focusListener = () => {
    if (centerRef.current && contentRef.current && focus) {
      const centerStyle = centerRef.current.style;
      centerStyle['-webkit-mask-image'] = 'var(--MASK-GRADIENT)';
      const contentStyle = contentRef.current.style;
      contentRef.current.scrollTo({top: 0});
      contentStyle.overflowY = 'hidden';
    }
  };
  useEffect(focusListener, [focus]);

  return (
    <View className={styles['service']}>
      <View className={styles['top-pane']}>
        <View className={styles['icon-border-pane']}>
          <View className={styles['icon-pane']}>
            <Icon className={styles['icon-svg']} />
          </View>
        </View>
      </View>
      <View
        className={styles['center-pane']}
        reference={(_ref) => (centerRef.current = _ref)}
      >
        <Text className={styles['title-txt']}>{title}</Text>
        <View
          className={styles['content-pane']}
          reference={(_ref) => (contentRef.current = _ref)}
        >
          <Text className={styles['content-txt']}>
            {content}
            {/* {content.substring(0, 275)}... */}
          </Text>
        </View>
      </View>
      <View className={styles['bottom-pane']}>
        <Button className={styles['readme-btn']} onClick={handleClick}>
          Read More
        </Button>
      </View>
    </View>
  );
};

export default Service;
