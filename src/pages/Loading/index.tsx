import {useContext, useEffect} from 'react';
import {Text, View} from 'vin-react';

import {AnimatedProgressBar} from 'components';
import {LoadPercentage} from 'context';

import {Props} from './type';
import styles from './.module.css';
import {useSpring} from '@react-spring/web';

const Loading: React.FC<Props> = () => {
  const {totalPercentage} = useContext(LoadPercentage.Context);
  const [progressStyle, progress] = useSpring(() => ({
    from: {width: '100%', transform: 'translateX(-100%)'}
  }));

  const percentageListener = () => {
    progress.start({to: {transform: `translateX(${totalPercentage - 100}%)`}});
  };
  useEffect(percentageListener, [totalPercentage]);

  return (
    <View className={styles['loading']}>
      <View className={styles['top-pane']}>
        <Text className={styles['title-txt']}>Fetching Information...</Text>
      </View>
      <View className={styles['center-pane']}>
        <AnimatedProgressBar thumbStyle={progressStyle} />
      </View>
    </View>
  );
};

export default Loading;
