import {MouseEventHandler} from 'react';

type MouseHandler = {
  (key: number): (e: MouseEventHandler<HTMLDivElement>) => void;
};

export type {MouseHandler};
