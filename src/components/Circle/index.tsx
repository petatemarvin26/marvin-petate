import {View} from 'components';

import {Props} from './types';

const Circle: React.FC<Props> = ({color, size, axisX = '0', axisY = '0'}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: `calc(${size} / 2)`,
        backgroundColor: color,
        position: 'absolute',
        top: axisY,
        left: axisX
      }}
    />
  );
};

export default Circle;

export type {Props as CircleProps};
