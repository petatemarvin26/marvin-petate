type ClickHandler = {
  (): void;
};

type Details = {
  Controller: React.ElementType;
  className: string;
  content: string;
  onClick?: ClickHandler;
};

export type {Details};
