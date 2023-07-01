import {
  Controller,
  Lookup,
  OnResolve,
  OnRest,
  SpringConfig,
  SpringRef,
  SpringValue
} from '@react-spring/web';

interface UseAnimationStyle {
  x?: string;
  y?: string;
  scale?: string | number;
  size?: string;
  opacity?: number;
  width?: string;
  height?: string;
  display?: string;
}

interface UseAnimationNext {
  (styles: UseAnimationStyle): Promise<any>;
}

interface UseAnimationFnStyle {
  (next: UseAnimationNext): void;
}

interface UseAnimationControllerProps {
  delay: number;
  onResolve?: OnResolve<
    SpringValue<UseAnimationStyle>,
    Controller<UseAnimationStyle>
  >;
  onRest?: OnRest<
    SpringValue<UseAnimationStyle>,
    Controller<UseAnimationStyle>
  >;
}

type UseAnimationHookStyle =
  | UseAnimationStyle
  | UseAnimationStyle[]
  | UseAnimationFnStyle;

type UseAnimationProps<E = {}> =
  | ({
      to?: UseAnimationHookStyle;
      from?: UseAnimationHookStyle;
      config?: SpringConfig;
    } & E)
  | {[x: string]: any};

interface UseAnimationFnConfig {
  (idx: number): SpringConfig;
}

interface UseAnimationFnProps {
  (
    idx: number,
    ctrl?: Controller<Lookup<UseAnimationStyle>>
  ): UseAnimationProps<UseAnimationControllerProps>;
}

interface UseAnimationThunkFnProps {
  (...props: any[]): UseAnimationFnProps;
}

interface UseAnimationStartProp {
  (
    idx: number,
    ctrl?: Controller<Lookup<UseAnimationStyle>>
  ): UseAnimationProps<UseAnimationControllerProps>;
}

interface UseAnimationOtherProp {
  ref?: SpringRef<Lookup<any>>;
}

interface UseAnimationStart {
  (prop: UseAnimationStartProp): void;
}
interface UseAnimation {
  (
    length: number,
    props: UseAnimationFnProps,
    others?: UseAnimationOtherProp
  ): [UseAnimationStyle[], UseAnimationStart];
}

export type {
  UseAnimationStyle,
  UseAnimation,
  UseAnimationStart,
  UseAnimationProps,
  UseAnimationFnConfig,
  UseAnimationFnProps,
  UseAnimationThunkFnProps,
  UseAnimationControllerProps
};
