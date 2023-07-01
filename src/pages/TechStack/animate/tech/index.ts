import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';
import {TechStack} from 'components';

import techStacks from 'pages/TechStack/meta.data';
import {sort} from 'utils';
import {easings} from '@react-spring/web';

const selectConfig = {duration: 150, easing: easings.easeInOutBack};

const techFrom: UseAnimationFnProps = () => ({
  from: {y: '0px', opacity: 0, width: '0px', height: '0px'},
  config: selectConfig
});

const techToIn: UseAnimationFnProps = (idx) => ({
  to: {opacity: 1, width: '40px', height: '40px'},
  config: {duration: (idx + 1) * 25 + 150}
});
const techToOut: UseAnimationFnProps = (idx) => ({
  to: {opacity: 0, width: '0px', height: '0px'},
  config: {duration: (techElements.length - (idx + 1)) * 25 + 150}
});

const techSelectIn: UseAnimationThunkFnProps = (techId) => (idx) => {
  if (techId === idx) {
    return {
      to: {y: '-15px', boxShadow: 'var(--SELECT-SHADOW)', opacity: 1},
      config: selectConfig
    };
  }
  return {
    to: {y: '0px', boxShadow: 'var(--SELECT-SHADOW-OFF)', opacity: 0.25},
    config: selectConfig
  };
};
const techSelectOut: UseAnimationFnProps = () => ({
  to: {y: '0px', boxShadow: 'var(--SELECT-SHADOW-OFF)', opacity: 1},
  config: selectConfig
});

const techElements: Array<TechStack> = techStacks.sort(sort<TechStack>('id'));

const techAnim: [number, UseAnimationFnProps] = [techElements.length, techFrom];

export {
  techElements,
  techAnim,
  techFrom,
  techToIn,
  techToOut,
  techSelectIn,
  techSelectOut
};
