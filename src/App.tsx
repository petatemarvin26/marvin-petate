import {HomeNavigator} from 'navigators';
import {useScreen, ScreenType} from 'hooks';
import {NotSupported} from 'pages';

const App: React.FC = () => {
  const screen = useScreen();

  if (ScreenType.Desktop !== screen) {
    return <NotSupported />;
  }
  return <HomeNavigator />;
};

export default App;
