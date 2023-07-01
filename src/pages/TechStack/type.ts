import {TechStack} from 'components';
interface SelectHandler {
  (key: number): (tech: TechStack) => void;
}

export type {SelectHandler};
