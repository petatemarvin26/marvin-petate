import {Text} from 'components';

import {Props} from './types';
import styles from './.module.css';

const Age: React.FC<Props> = ({age}) => {
  return <Text className={styles.age}>{age}</Text>;
};

export default Age;
