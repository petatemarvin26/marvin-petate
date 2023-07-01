import {easings} from '@react-spring/web';
import contents from 'pages/About/meta.data';

import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';
import {AnimatedView} from 'components';

import {Panels} from './types';

const config = {duration: 400, easing: easings.easeOutBack};

const indicatorFrom: UseAnimationFnProps = (idx) => {
  const from = {width: '25px'};
  if (idx <= 0) from.width = '100px';
  return {from, config};
};
const indicatorToIn: UseAnimationThunkFnProps = (key) => (idx) => {
  const to = {width: '25px'};
  if (key === idx) to.width = '100px';
  return {to, config};
};
const indicatorToOut: UseAnimationFnProps = (idx) => {
  const to = {width: '25px'};
  if (idx <= 0) to.width = '100px';
  return {to, config};
};

const indicatorElements: Array<Panels> = [
  {Controller: AnimatedView},
  {Controller: AnimatedView},
  {Controller: AnimatedView},
  {Controller: AnimatedView}
];

const indicatorAnim: [number, UseAnimationFnProps] = [
  contents.length,
  indicatorFrom
];

export {
  indicatorElements,
  indicatorAnim,
  indicatorFrom,
  indicatorToIn,
  indicatorToOut
};
