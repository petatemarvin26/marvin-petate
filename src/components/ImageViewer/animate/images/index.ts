import {SpringConfig, easings} from '@react-spring/web';

import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';

import {Images} from './types';
import projects from 'pages/Projects/meta.data';

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

const imagesElements: Array<Images> = [];

const imagesAnim: [number, UseAnimationFnProps] = [projects.length, imagesFrom];

export {imagesElements, imagesAnim, imagesFrom, imagesToIn, imagesToOut};
