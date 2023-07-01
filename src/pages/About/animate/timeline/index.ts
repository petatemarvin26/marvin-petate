import {UseAnimationFnConfig, UseAnimationFnProps} from 'hooks';
import {AnimatedView} from 'components';

import {Panels} from './types';

const config: UseAnimationFnConfig = (idx) => ({
  duration: (timelineElements.length - idx) * 250
});

const timelineFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, y: '-70px'},
  config: config(idx)
});
const timelineToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1, y: '0px'}
});
const timelineToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, y: '-70px'}
});

const timelineElements: Array<Panels> = [{Controller: AnimatedView}];

const timelineAnim: [number, UseAnimationFnProps] = [
  timelineElements.length,
  timelineFrom
];

export {
  timelineElements,
  timelineAnim,
  timelineFrom,
  timelineToIn,
  timelineToOut
};
