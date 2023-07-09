enum ScreenType {
  Phone = 800,
  Tablet = 1200,
  Desktop = 2000
}

interface UseScreen {
  (): ScreenType;
}

interface GetScreenType {
  (): ScreenType;
}

export {UseScreen, ScreenType, GetScreenType};
