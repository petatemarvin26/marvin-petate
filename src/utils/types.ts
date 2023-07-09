type RenderedImgCallback = {
  (url: string): void;
};

type PreRenderedImg = {
  (url: string, cb: RenderedImgCallback): void;
};

export type {PreRenderedImg, RenderedImgCallback};
