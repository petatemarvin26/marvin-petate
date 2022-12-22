import {CSSProperties} from 'react';
type Props = {
  className?: string;
  style?: CSSProperties;
  onClick?: (event: any) => void;
  name: string;
  image: string;
  descriptions: string;
  tags: Tags[];
};

type Tags = string;

type States = {};

export type {Props, Tags, States};
