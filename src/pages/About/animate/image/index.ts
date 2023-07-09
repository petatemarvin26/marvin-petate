import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';
import {SmartImage} from 'components';

import {Items} from './types';
import {
  displayPic2Img,
  displayPic2LowImg,
  displayPic3Img,
  displayPic3LowImg
} from 'assets';
import {animated, easings} from '@react-spring/web';
import contents from 'pages/About/meta.data';

const AnimatedSmartImage = animated(SmartImage);

const config = {duration: 250, easing: easings.easeInSine};

const imageFrom: UseAnimationFnProps = () => {
  return {
    from: {
      display: 'none',
      scale: 1.35,
      y: '-200px',
      transform: 'rotate(0deg)',
      x: '0px'
    },
    config
  };
};
const imageToIn: UseAnimationFnProps = (idx) => {
  const rotate = Math.floor(Math.random() * 40 - 20);
  return {
    to: {
      display: 'flex',
      y: '0px',
      scale: 1,
      transform: `rotate(${rotate}deg)`
    },
    delay: (idx + 1) * 200,
    config
  };
};
const imageToOut: UseAnimationFnProps = () => ({
  to: async (next) => {
    await next({opacity: 0});
    await next({display: 'none'});
    await next({scale: 1.35});
    await next({y: '-200px'});
    await next({opacity: 1});
  },
  config
});

const imageToNext: UseAnimationThunkFnProps = (key) => (idx) => {
  const rotate = Math.floor(Math.random() * 40 - 20);
  if (contents.length - key <= idx) {
    return {
      to: {y: '0px', x: '-1000px', transform: 'rotate(-100deg)'},
      config: {
        ...config,
        easing: easings.easeInBack
      }
    };
  }
  return {
    to: {scale: 1, y: '0px', x: '0px', transform: `rotate(${rotate}deg)`},
    config: {
      ...config,
      easing: easings.easeOutBack
    }
  };
};
const imageToPrev: UseAnimationThunkFnProps = () => () => {
  return {
    to: {scale: 1, y: '0px', x: '0px'},
    config
  };
};

const imageElements: Array<Items> = [
  {
    Controller: AnimatedSmartImage,
    preSrc: displayPic2LowImg,
    src: displayPic2Img
  },
  {
    Controller: AnimatedSmartImage,
    preSrc: displayPic3LowImg,
    src: displayPic3Img
  }
];

const imageAnim: [number, UseAnimationFnProps] = [
  imageElements.length,
  imageFrom
];

export {
  imageElements,
  imageAnim,
  imageFrom,
  imageToIn,
  imageToOut,
  imageToNext,
  imageToPrev
};
