import {View, Image} from 'components';

import {Props} from './types';
import styles from './.module.css';

const Framework: React.FC<Props> = ({image}) => {
  return (
    <View className={styles.framework}>
      <Image className={styles.image} source={image} />
      {/* <Text className={styles.experience}>{experience}</Text> */}
    </View>
  );
};

export default Framework;
