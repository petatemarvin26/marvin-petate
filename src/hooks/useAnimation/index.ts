import {useSprings} from '@react-spring/web';

import {
  UseAnimation,
  UseAnimationStart,
  UseAnimationStyle,
  UseAnimationFnProps,
  UseAnimationThunkFnProps,
  UseAnimationFnConfig,
  UseAnimationProps,
  UseAnimationControllerProps
} from './types';

const useAnimation: UseAnimation = (length, props, others) => {
  const [styles, api] = useSprings(length, (idx) => {
    const properties = props(idx);
    return {
      ...properties,
      ...others
    };
  });

  const start: UseAnimationStart = (props) => {
    api.start(props);
  };

  return [styles, start];
};

export type {
  UseAnimation,
  UseAnimationStart,
  UseAnimationStyle,
  UseAnimationFnProps,
  UseAnimationProps,
  UseAnimationThunkFnProps,
  UseAnimationFnConfig,
  UseAnimationControllerProps
};
export {useAnimation};
