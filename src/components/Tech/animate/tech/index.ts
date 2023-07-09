import {UseAnimationFnProps} from 'hooks';
import {AnimatedText} from 'components';

import {Items} from './types';

const DURATION = 400;

const titleFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, y: '-70px'},
  config: {duration: (titleElements.length - idx) * DURATION}
});
const titleToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1, y: '0px'}
});
const titleToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, y: '-70px'}
});

const titleElements: Array<Items> = [{Controller: AnimatedText}];

const titleAnim: [number, UseAnimationFnProps] = [
  titleElements.length,
  titleFrom
];

export {titleElements, titleAnim, titleFrom, titleToIn, titleToOut};
