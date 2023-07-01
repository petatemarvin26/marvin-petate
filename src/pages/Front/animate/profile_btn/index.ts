import {GithubSvg, Gitlab2Svg, NpmSvg, StackoverflowSvg} from 'assets';
import {UseAnimationFnConfig, UseAnimationFnProps} from 'hooks';
import {AnimatedButton} from 'components';

import {ProfileButtons} from './types';

const configIn: UseAnimationFnConfig = (idx) => ({
  duration: (pbLeftElements.length - idx) * 70 + 300
});
const configOut: UseAnimationFnConfig = (idx) => ({
  duration: (idx + 1) * 100 + 100
});

const pbFromLeft: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, x: `-${50 + (idx + 1) * 30}px`}
});
const pbLeftToIn: UseAnimationFnProps = (idx) => ({
  to: {opacity: 1, x: '0px'},
  config: configIn(idx)
});
const pbLeftToOut: UseAnimationFnProps = (idx) => ({
  to: {opacity: 0, x: `-${50 + idx * 20}px`},
  config: configOut(idx)
});

const pbLeftElements: Array<ProfileButtons> = [
  {Controller: AnimatedButton, Icon: StackoverflowSvg},
  {Controller: AnimatedButton, Icon: NpmSvg}
];

const pbLeftAnim: [number, UseAnimationFnProps] = [
  pbLeftElements.length,
  pbFromLeft
];

const pbFromRight: UseAnimationFnProps = (idx) => ({
  from: {opacity: 0, x: `${50 + (idx + 1) * 30}px`}
});
const pbRightToIn: UseAnimationFnProps = (idx) => ({
  to: {opacity: 1, x: '0px'},
  config: configOut(idx)
});
const pbRightToOut: UseAnimationFnProps = (idx) => ({
  to: {opacity: 0, x: `${50 + idx * 20}px`},
  config: configIn(idx)
});

const pbRightElements: Array<ProfileButtons> = [
  {Controller: AnimatedButton, Icon: GithubSvg},
  {Controller: AnimatedButton, Icon: Gitlab2Svg}
];
const pbRightAnim: [number, UseAnimationFnProps] = [
  pbRightElements.length,
  pbFromRight
];

export {
  pbLeftAnim,
  pbLeftElements,
  pbRightAnim,
  pbRightElements,
  pbLeftToIn,
  pbLeftToOut,
  pbFromLeft,
  pbRightToIn,
  pbRightToOut,
  pbFromRight
};
