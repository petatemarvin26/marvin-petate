import {UseAnimationFnProps} from 'hooks';
import {AnimatedText} from 'components';

import {Panels} from './types';

const DURATION = 400;

const titleFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0},
  config: {duration: (titleElements.length - idx) * DURATION}
});
const titleToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1}
});
const titleToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0}
});

const titleElements: Array<Panels> = [{Controller: AnimatedText}];

const titleAnim: [number, UseAnimationFnProps] = [
  titleElements.length,
  titleFrom
];

export {titleElements, titleAnim, titleFrom, titleToIn, titleToOut};
