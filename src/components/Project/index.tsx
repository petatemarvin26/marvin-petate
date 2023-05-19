import {View, Image, Text} from 'components';

import {Props, States} from './types';
import styles from './.module.css';

const Project: React.FC<Props> = ({
  className,
  style,
  name,
  image,
  descriptions,
  tags,
  onClick
}) => {
  return (
    <View
      className={`${styles.project} ${className}`}
      style={style}
      onClick={onClick}
    >
      <View className={styles.topPane}>
        <Image source={image} className={styles.image} />
      </View>
      <View className={styles.bodyPane}>
        <View className={styles.upperBodyPane}>
          <Text className={styles.name}>{name}</Text>
        </View>
        <View className={styles.midBodyPane}>
          <Text className={styles.descriptions}>{descriptions}</Text>
        </View>
        <View className={styles.lowerBodyPane}>
          {tags.map((tag, index) => (
            <Text key={index} className={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export type {Props as ProjectProps, States as ProjectStates};

export default Project;
