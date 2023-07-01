import {Button} from 'vin-react';
import {animated, easings} from '@react-spring/web';

import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';

import {ButtonsElement} from './types';

const AnimatedView = animated(Button);

const config = {duration: 250, easing: easings.easeInBack};

const buttonsFrom: UseAnimationFnProps = () => ({
  from: {opacity: 0, width: '0%'},
  config
});
const buttonsToIn: UseAnimationThunkFnProps = (key) => (idx) => {
  if (key === idx) {
    return {
      to: {opacity: 1, width: '60px'}
    };
  }
  return {
    to: {opacity: 0, width: '0px'}
  };
};
const buttonsToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, width: '0%'}
});

const buttonsElements: Array<ButtonsElement> = [
  {Controller: AnimatedView, title: 'Services'},
  {Controller: AnimatedView, title: 'Tech Stack'},
  {Controller: AnimatedView, title: 'Projects'},
  {Controller: AnimatedView, title: 'Contact'}
];

const buttonsAnim: [number, UseAnimationFnProps] = [
  buttonsElements.length,
  buttonsFrom
];

export {buttonsElements, buttonsAnim, buttonsFrom, buttonsToIn, buttonsToOut};
