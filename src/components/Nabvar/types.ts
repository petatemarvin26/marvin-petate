import {CSSProperties} from 'react';

type ClickHandler = {
  (key: number): () => void;
};

type Props = {
  scroll?: number;
  className?: string;
  style?: CSSProperties;
};

export type {ClickHandler, Props};
