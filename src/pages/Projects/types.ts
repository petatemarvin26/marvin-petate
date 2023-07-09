type Project = {
  src: string;
  name: string;
  content: string;
};

type ChangeIndexHandler = {
  (index: Project): void;
};

export type {Project, ChangeIndexHandler};
