const sort =
  <T>(key: keyof T) =>
  (a: any, b: any) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };

const preRenderImage = (src: string) => {
  return new Promise((res, rej) => {
    const img = new Image();
    img.src = src;
    img.onload = function () {
      res(src);
    };
    img.onerror = function () {
      rej('Error Img');
    };
  });
};

const preRenderImages = (srcs: Array<string>) => {
  const images = srcs.map((src) => preRenderImage(src));
  return Promise.all(images);
};

export {sort, preRenderImage, preRenderImages};
