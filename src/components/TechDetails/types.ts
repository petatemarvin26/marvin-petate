import {CSSProperties} from 'react';
import {FrameworkData, TechStack} from 'components/Tech';

interface Props {
  reference?: any;
  data?: TechStack;
  style?: CSSProperties;
}

interface RenderGraph {
  (ref: HTMLDivElement, data: FrameworkData): void;
}

export type {Props, RenderGraph};
