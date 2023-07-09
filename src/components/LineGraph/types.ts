import {CSSProperties} from 'react';

type Item = {
  [x: string]: any;
};

type Props = {
  data: Array<Item>;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  colors?: [string, string, string?];
};

export type {Item, Props};
