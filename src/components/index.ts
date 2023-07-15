import {Button, HeadText, Image, Text, View} from 'vin-react';

import {animated} from '@react-spring/web';

import ImageViewer from './ImageViewer';
import ProgressBar from './ProgressBar';
import LineGraph from './LineGraph';
import Navbar from './Nabvar';
import Service from './Service';
import Tech, {Framework, TechStack} from './Tech';
import TechDetails from './TechDetails';
import Timeline from './Timeline';

const AnimatedButton = animated(Button);
const AnimatedHeadText = animated(HeadText);
const AnimatedImage = animated(Image);
const AnimatedProgressBar = animated(ProgressBar);
const AnimatedText = animated(Text);
const AnimatedView = animated(View);

export type {TechStack};
export {
  Framework,
  ImageViewer,
  LineGraph,
  Navbar,
  Service,
  Tech,
  TechDetails,
  Timeline,
  AnimatedButton,
  AnimatedHeadText,
  AnimatedImage,
  AnimatedProgressBar,
  AnimatedText,
  AnimatedView
};
