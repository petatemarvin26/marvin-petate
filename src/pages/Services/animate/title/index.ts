import {UseAnimationFnProps} from 'hooks';
import {AnimatedText} from 'components';

import {Items} from './types';

const config = {duration: 200};

const titleFrom: UseAnimationFnProps = () => ({
  from: {opacity: 0, y: '70px'},
  config
});
const titleToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1, y: '0px'}
});
const titleToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, y: '70px'}
});

const titleElements: Array<Items> = [{Controller: AnimatedText}];

const titleAnim: [number, UseAnimationFnProps] = [
  titleElements.length,
  titleFrom
];

export {titleElements, titleAnim, titleFrom, titleToIn, titleToOut};
