type RenderedImgCallback = {
  (url: string): void;
};

type PreRenderedImg = {
  (url: string, cb: RenderedImgCallback): void;
};

type GetDisplay = {
  (flag: boolean): 'flex' | 'none';
};

export type {PreRenderedImg, RenderedImgCallback, GetDisplay};
