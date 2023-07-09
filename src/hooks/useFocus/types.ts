interface UseFocus {
  (
    getRefs: () => Array<Element>,
    options?: {
      name?: string;
      rootMargin?: string;
      threshold?: number | number[];
    }
  ): boolean;
}

export type {UseFocus};
