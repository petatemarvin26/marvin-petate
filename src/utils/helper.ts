const sort =
  <T>(key: keyof T) =>
  (a: any, b: any) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };

export {sort};
