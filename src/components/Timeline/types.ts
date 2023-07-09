import {CSSProperties} from 'react';

interface Props {
  focus?: boolean;
  style?: CSSProperties;
  onChangeIndex?: (index: number) => void;
}

type MouseWheelEvent = WheelEvent & {wheelDelta: number};

export type {Props, MouseWheelEvent};
