import {CSSProperties} from 'react';

type ClickLinkHandler = {
  (key: number): () => void;
};

type ClickLogoHandler = {
  (): void;
};

type Props = {
  scroll?: number;
  className?: string;
  style?: CSSProperties;
};

export type {ClickLinkHandler, ClickLogoHandler, Props};
