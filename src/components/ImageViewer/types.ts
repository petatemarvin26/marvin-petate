import {Project} from 'pages/Projects/types';
import {MouseEvent} from 'react';

type Props = {
  onChangeIndex: (index: Project) => void;
};

type HandleClick = {
  (index: number): (event: MouseEvent<HTMLDivElement>) => void;
};

export type {Props, HandleClick};
