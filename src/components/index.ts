import {Button, Image, Text, View} from 'vin-react';

import {animated} from '@react-spring/web';

import ImageViewer from './ImageViewer';
import LineGraph from './LineGraph';
import Navbar from './Nabvar';
import Service from './Service';
import SmartImage from './SmartImage';
import Tech, {Framework, TechStack} from './Tech';
import TechDetails from './TechDetails';
import Timeline from './Timeline';

const AnimatedText = animated(Text);
const AnimatedView = animated(View);
const AnimatedButton = animated(Button);
const AnimatedImage = animated(Image);

export type {TechStack};
export {
  Framework,
  ImageViewer,
  LineGraph,
  Navbar,
  Service,
  SmartImage,
  Tech,
  TechDetails,
  Timeline,
  AnimatedText,
  AnimatedView,
  AnimatedButton,
  AnimatedImage
};
