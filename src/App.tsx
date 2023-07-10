import {useContext} from 'react';

import {LoadPercentage} from 'context';
import {HomeNavigator, LoadingNavigator} from 'navigators';
import {useScreen, ScreenType} from 'hooks';
import {NotSupported} from 'pages';
import {getDisplay} from 'utils';

const App: React.FC = () => {
  const screen = useScreen();
  const {isReady, totalPercentage} = useContext(LoadPercentage.Context);

  if (ScreenType.Desktop !== screen) {
    return <NotSupported />;
  }

  console.log(totalPercentage);

  // const isReady = false;
  return (
    <>
      <LoadingNavigator display={getDisplay(!isReady)} />
      <HomeNavigator display={getDisplay(isReady)} />
    </>
  );
};

export default App;
