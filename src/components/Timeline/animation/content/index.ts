import {SpringConfig} from '@react-spring/web';

import {UseAnimationFnProps, UseAnimationThunkFnProps} from 'hooks';
import {AnimatedText} from 'components';

import {Items} from './types';
import {contents} from 'pages/About';

const config: SpringConfig = {duration: 500};

const contentFrom: UseAnimationFnProps = (idx) => {
  const from = {x: `${100 * idx}%`, opacity: 0, display: 'none'};
  if (idx === 0) {
    from.opacity = 1;
    from.display = 'flex';
  }
  return {from, config};
};
const contentToIn: UseAnimationThunkFnProps = (key) => (idx) => {
  return {
    to: async (next) => {
      let opacity = 1;
      if (key === idx) {
        await next({display: 'flex'});
      }
      if (key !== idx) opacity = 0;
      await next({x: `${(idx - key) * 100}%`, opacity});
      if (key !== idx) {
        await next({display: 'none'});
      }
    },
    config
  };
};
const contentToOut: UseAnimationFnProps = (idx) => {
  const to = {x: `${100 * idx}%`, opacity: 0, display: 'none'};
  if (idx === 0) {
    to.display = 'flex';
    to.opacity = 1;
  }
  return {to, config};
};

const contentElements: Array<Items> = [
  {Controller: AnimatedText},
  {Controller: AnimatedText},
  {Controller: AnimatedText},
  {Controller: AnimatedText}
];

const contentAnim: [number, UseAnimationFnProps] = [
  contents.length,
  contentFrom
];

export {contentElements, contentAnim, contentFrom, contentToIn, contentToOut};
