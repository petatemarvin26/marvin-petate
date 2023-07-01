import {animated} from '@react-spring/web';
import {smartCompare} from 'vin-react';

import {AnimatedView} from 'components';

import {
  Props,
  Framework,
  FrameworkData,
  TechStack,
  SelectHandler
} from './types';
import styles from './.module.css';
import {memo, useRef} from 'react';

const Tech: React.FC<Props> = ({id, data, style, onSelect}) => {
  const ref = useRef<HTMLDivElement>();
  const {Icon: IconData} = data;
  const {y, border, boxShadow, scale, ...restStyle} = style;

  const Icon = animated(IconData);
  const handleSelect: SelectHandler = (data: TechStack) => () => {
    onSelect(data);
  };

  return (
    <AnimatedView
      id={id}
      reference={(_ref) => {
        ref.current = _ref;
      }}
      style={{y, border, boxShadow, scale}}
      className={styles['tech']}
      onClick={handleSelect(data)}
    >
      <Icon className={styles['icon-svg']} style={restStyle} />
    </AnimatedView>
  );
};

export type {TechStack};
export {Framework, FrameworkData};
export default memo(Tech, smartCompare(['data', 'style', 'onSelect']));
