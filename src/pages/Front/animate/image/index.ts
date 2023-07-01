import {AnimatedImage} from 'components';
import {UseAnimationFnConfig, UseAnimationFnProps} from 'hooks';

import {Image} from './types';

const imgElements: Array<Image> = [{Controller: AnimatedImage}];

const config: UseAnimationFnConfig = (idx) => ({
  duration: (imgElements.length - idx) * 25 + 200
});

const imgFrom: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, x: '50px'},
  config: config(idx)
});
const imgToIn: UseAnimationFnProps = () => ({
  to: {opacity: 1, x: '0px'}
});
const imgToOut: UseAnimationFnProps = () => ({
  to: {opacity: 0, x: '50px'}
});

const imageAnim: [number, UseAnimationFnProps] = [imgElements.length, imgFrom];

export {imgElements, imgToIn, imgToOut, imgFrom, imageAnim};
