import {MouseEvent} from 'react';

interface Props {}

interface HandleClick {
  (index: number): (event: MouseEvent<HTMLDivElement>) => void;
}

export type {Props, HandleClick};
