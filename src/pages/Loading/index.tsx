import {View} from 'vin-react';

import {Props} from './type';
import styles from './.module.css';

const Loading: React.FC<Props> = () => {
  return <View className={styles['loading']}>Check for updates...</View>;
};

export default Loading;
