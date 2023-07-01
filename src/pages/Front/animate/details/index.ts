import {AnimatedButton, AnimatedText} from 'components';
import {UseAnimationFnConfig, UseAnimationFnProps} from 'hooks';

import {Details} from './types';

const config: UseAnimationFnConfig = (idx) => ({
  duration: (idx + 1) * 75 + 100
});

const detailsFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, x: '-75px'},
  config: config(idx)
});
const detailsToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1, x: '0px'}
});
const detailsToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, x: '-75px'}
});

const detailsElements: Array<Details> = [
  {
    Controller: AnimatedText,
    className: 'greeting',
    content: "HI I'M"
  },
  {
    Controller: AnimatedText,
    className: 'name',
    content: 'MARVIN PETATE'
  },
  {
    Controller: AnimatedText,
    className: 'title',
    content: 'FRONTEND DEV | SOFTWARE ENGR'
  },
  {
    Controller: AnimatedButton,
    className: 'about-btn',
    content: 'About Me'
  }
];

const detailsAnim: [number, UseAnimationFnProps] = [
  detailsElements.length,
  detailsFrom
];

export {detailsElements, detailsAnim, detailsFrom, detailsToIn, detailsToOut};
