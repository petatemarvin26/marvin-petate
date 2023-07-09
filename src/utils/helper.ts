import {PreRenderedImg} from './types';

const sort =
  <T>(key: keyof T) =>
  (a: any, b: any) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };

const preRenderImage: PreRenderedImg = (src, cb) => {
  const img = new Image();
  img.src = src;
  img.onload = () => cb(img.src);
};

export {sort, preRenderImage};
