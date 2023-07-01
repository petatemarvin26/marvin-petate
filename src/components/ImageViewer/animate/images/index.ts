import {SpringConfig, animated, easings} from '@react-spring/web';
import {View} from 'vin-react';

import {test1, test2, test3, test4, test5, test6} from 'assets';
import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';

import {Images} from './types';

const AnimatedView = animated(View);

const config: SpringConfig = {duration: 300, easing: easings.easeInSine};

const imagesFrom: UseAnimationFnProps = (idx) => {
  const from = {x: `${idx * 100}%`, scale: 1, zIndex: 1};
  if (0 === idx) {
    from.scale = 1.5;
    from.zIndex = 2;
  }
  return {from, config};
};
const imagesToIn: UseAnimationThunkFnProps = (key) => (idx) => {
  const to = {x: `${(idx - key) * 100}%`, scale: 1, zIndex: 1};
  if (key === idx) {
    to.scale = 1.5;
    to.zIndex = 2;
  }
  return {to, config};
};
const imagesToOut: UseAnimationFnProps = (idx) => {
  const to = {x: `${idx * 100}%`, scale: 1, zIndex: 1};
  if (0 === idx) {
    to.scale = 1.5;
    to.zIndex = 2;
  }
  return {to, config};
};

const imagesElements: Array<Images> = [
  {
    id: 0,
    Controller: AnimatedView,
    src: test1
  },
  {
    id: 1,
    Controller: AnimatedView,
    src: test2
  },
  {
    id: 2,
    Controller: AnimatedView,
    src: test3
  },
  {
    id: 3,
    Controller: AnimatedView,
    src: test4
  },
  {
    id: 4,
    Controller: AnimatedView,
    src: test5
  },
  {
    id: 5,
    Controller: AnimatedView,
    src: test6
  }
];

const imagesAnim: [number, UseAnimationFnProps] = [
  imagesElements.length,
  imagesFrom
];

export {imagesElements, imagesAnim, imagesFrom, imagesToIn, imagesToOut};
