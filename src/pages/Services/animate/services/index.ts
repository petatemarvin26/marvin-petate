import {easings} from '@react-spring/web';

import {
  UseAnimationFnConfig,
  UseAnimationFnProps,
  UseAnimationThunkFnProps
} from 'hooks';
import {AnimatedView} from 'components';

import {Panels} from './types';

const config: UseAnimationFnConfig = (idx: number) => ({
  duration: (idx + 1) * 100 + 100,
  easing: easings.linear
});

const servicesFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, y: '100px'},
  config: config(idx)
});
const servicesToIn: UseAnimationFnProps = (idx) => ({
  to: {opacity: 1, y: '0px'},
  config: config(idx)
});
const servicesToOut: UseAnimationFnProps = (idx) => ({
  to: {opacity: 0, y: '100px'},
  config: config(idx)
});

const hoverUp: UseAnimationThunkFnProps = (key) => (idx) => {
  if (key !== idx) return;
  return {
    to: {y: '-20px'},
    config: {duration: 200, easing: easings.easeOutBack}
  };
};
const hoverReset: UseAnimationThunkFnProps = (key) => (idx) => {
  if (key !== idx) return;
  return {to: {y: '0px'}};
};

const servicesElements: Array<Panels> = [
  {Controller: AnimatedView},
  {Controller: AnimatedView},
  {Controller: AnimatedView}
];

const servicesAnim: [number, UseAnimationFnProps] = [
  servicesElements.length,
  servicesFrom
];

export {
  servicesElements,
  servicesAnim,
  servicesFrom,
  servicesToIn,
  servicesToOut,
  hoverUp,
  hoverReset
};
