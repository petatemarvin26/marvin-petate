import {PureComponent, ReactNode} from 'react';
import {animated} from '@react-spring/web';

import styles from './.module.css';
import {Props} from './types';

class ProgressBar extends PureComponent<Props> {
  render(): ReactNode {
    const {className, thumbClassName, style, thumbStyle, progress, ...rest} =
      this.props;

    let _className = styles['bar'];
    let _thumbClass = styles['thumb'];
    if (className) _className += ` ${className}`;
    if (thumbClassName) _thumbClass += ` ${thumbClassName}`;

    return (
      <div {...rest} className={_className} style={style}>
        <animated.div
          {...rest}
          className={_thumbClass}
          style={{width: `${progress}%`, ...thumbStyle}}
        />
      </div>
    );
  }
}

export default ProgressBar;
