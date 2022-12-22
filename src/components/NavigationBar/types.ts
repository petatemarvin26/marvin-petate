type Props = {
  onNavigate: (module: string) => void;
};

type Modules = {
  name: string;
  icon: JSX.Element;
};

export type {Props, Modules};
