import {View} from 'vin-react';

import {LoadingPage} from 'pages';

import {Props} from './types';
import styles from './.module.css';

const LoadingNavigator: React.FC<Props> = ({display}) => {
  return (
    <View className={styles['loading-nav']} style={{display}}>
      <LoadingPage />
    </View>
  );
};

export default LoadingNavigator;
