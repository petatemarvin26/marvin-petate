import {View, Text} from 'vin-react';

import styles from './.module.css';
import {GearSvg} from 'assets';

const NotSupported: React.FC = () => {
  return (
    <View className={styles['not-supported-page']}>
      <View className={styles['top-pane']}>
        <GearSvg className={styles['gear-svg']} />
      </View>
      <View className={styles['center-pane']}>
        <Text className={styles['title-txt']}>Ow Sorry!</Text>
        <Text className={styles['subtitle-txt']}>
          this screen is not supported yet
        </Text>
      </View>
    </View>
  );
};

export default NotSupported;
