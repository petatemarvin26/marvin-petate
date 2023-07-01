import {UseAnimationStyle} from 'hooks';
import {CSSProperties, MouseEventHandler} from 'react';

enum Framework {
  Java,
  Javascript,
  Python,
  QL,
  StyleSheet,
  Animation,
  Infra,
  Database,
  CICD,
  Webserver,
  WebbasedRepo,
  VersionCtrl,
  MarkupLanguage
}
interface FrameworkData {
  [x: string]: any;
}

interface TechStack {
  id: number;
  Icon: React.ElementType;
  name: string;
  work_exp: number;
  content: string;
  framework?: Framework;
  graph?: Array<FrameworkData>;
  colors?: [string, string, string?];
}

interface SelectHandler {
  (tech: TechStack): MouseEventHandler<HTMLDivElement>;
}

interface Props {
  id?: any;
  style?: CSSProperties & UseAnimationStyle;
  data: TechStack;
  onSelect?: (tech: TechStack) => void;
}

export {Framework};
export type {Props, SelectHandler, TechStack, FrameworkData};
