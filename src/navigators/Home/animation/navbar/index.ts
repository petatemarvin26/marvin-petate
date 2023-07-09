import {UseAnimationFnProps} from 'hooks';
import {Navbar} from 'components';

import {Items} from './types';
import {animated} from '@react-spring/web';

const AnimatedNavbar = animated(Navbar);

const navbarFrom: UseAnimationFnProps = () => ({
  from: {opacity: 1, position: 'absolute'}
});
const navbarToIn: UseAnimationFnProps = () => ({
  to: {position: 'fixed'}
});
const navbarToOut: UseAnimationFnProps = () => ({
  to: {opacity: 1, position: 'absolute'},
  config: {duration: 100}
});

const navbarElements: Array<Items> = [{Controller: AnimatedNavbar}];

const navbarAnim: [number, UseAnimationFnProps] = [
  navbarElements.length,
  navbarFrom
];

export {navbarElements, navbarAnim, navbarFrom, navbarToIn, navbarToOut};
