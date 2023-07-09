import {UseAnimationFnProps} from 'hooks';
import {AnimatedText} from 'components';

import {Panels} from './types';
import {easings} from '@react-spring/web';

const config = {duration: 650, easing: easings.easeInOutBack};

const rightFrom: UseAnimationFnProps = () => ({
  from: {width: '0%', opacity: 0},
  config
});
const rightToIn: UseAnimationFnProps = () => ({
  to: {width: '45%', opacity: 1}
});
const rightToOut: UseAnimationFnProps = () => ({
  to: {width: '0%', opacity: 0}
});

const rightElements: Array<Panels> = [{Controller: AnimatedText}];

const rightAnim: [number, UseAnimationFnProps] = [
  rightElements.length,
  rightFrom
];

export {rightElements, rightAnim, rightFrom, rightToIn, rightToOut};
