import {Button, Text, View} from 'vin-react';

import {Props} from './types';
import styles from './.module.css';

const Service: React.FC<Props> = ({Icon, title, content}) => {
  return (
    <View className={styles['service']}>
      <View className={styles['top-pane']}>
        <View className={styles['icon-border-pane']}>
          <View className={styles['icon-pane']}>
            <Icon className={styles['icon-svg']} />
          </View>
        </View>
      </View>
      <View className={styles['center-pane']}>
        <Text className={styles['title-txt']}>{title}</Text>
        <View className={styles['content-pane']}>
          <Text className={styles['content-txt']}>
            {content.substring(0, 275)}...
          </Text>
        </View>
      </View>
      <View className={styles['bottom-pane']}>
        <Button className={styles['readme-btn']}>Read More</Button>
      </View>
    </View>
  );
};

export default Service;
