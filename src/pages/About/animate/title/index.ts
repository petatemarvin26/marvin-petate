import {UseAnimationFnConfig, UseAnimationFnProps} from 'hooks';
import {AnimatedView} from 'components';

import {Items} from './types';

const config: UseAnimationFnConfig = (idx) => ({
  duration: (titleElements.length - idx) * 400
});
const titleFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, y: '-70px'},
  config: config(idx)
});
const titleToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1, y: '0px'}
});
const titleToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, y: '-70px'}
});

const titleElements: Array<Items> = [{Controller: AnimatedView}];

const titleAnim: [number, UseAnimationFnProps] = [
  titleElements.length,
  titleFrom
];

export {titleElements, titleAnim, titleFrom, titleToIn, titleToOut};
