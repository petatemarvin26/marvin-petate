import {Text, View} from 'vin-react';

import LineGraph from 'components/LineGraph';

import {Props} from './types';
import styles from './.module.css';

const TechDetails: React.FC<Props> = ({data}) => {
  const work_exp = data?.work_exp;
  const framework_data = data?.graph;
  const colors = data?.colors;

  const contentPane = document.querySelector('#content-pane');
  const width = (contentPane?.clientWidth || 0) * 0.4;
  const height = (contentPane?.clientHeight || 0) * 0.5;

  return (
    <View className={styles['tech-details']}>
      <View className={styles['top-pane']}>
        {framework_data && framework_data.length && (
          <LineGraph
            data={framework_data}
            className={styles['line-graph']}
            width={width}
            height={height}
            colors={colors}
          />
        )}
      </View>
      <View className={styles['center-pane']}>
        <View className={styles['upper-pane']}>
          <Text className={styles['title-txt']}>{data?.name}</Text>
          <Text className={styles['work-exp-txt']}>
            {work_exp} yr{work_exp > 1.99 ? 's' : ''}
          </Text>
        </View>
        <View className={styles['lower-pane']}>
          <Text className={styles['content-txt']}>{data?.content}</Text>
        </View>
      </View>
    </View>
  );
};
export default TechDetails;
