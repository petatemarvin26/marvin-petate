import {SpringConfig, easings} from '@react-spring/web';

import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';

import {Images} from './types';
import projects from 'pages/Projects/meta.data';

const config: SpringConfig = {duration: 500, easing: easings.easeOutQuint};

const imagesFrom: UseAnimationFnProps = (idx) => {
  const from = {x: `${idx * 100}%`};
  return {from, config};
};
const imagesToIn: UseAnimationThunkFnProps = (key) => (idx) => {
  const to = {x: `${(idx - key) * 100}%`};
  return {to, config};
};
const imagesToOut: UseAnimationFnProps = (idx) => {
  const to = {x: `${idx * 100}%`};
  return {to, config};
};

const imagesElements: Array<Images> = [];

const imagesAnim: [number, UseAnimationFnProps] = [projects.length, imagesFrom];

export {imagesElements, imagesAnim, imagesFrom, imagesToIn, imagesToOut};
