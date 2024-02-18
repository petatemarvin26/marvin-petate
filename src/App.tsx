import {useContext, Fragment} from 'react';

import {LoadPercentage} from 'context';
import {HomeNavigator, LoadingNavigator} from 'navigators';
import {useScreen, ScreenType} from 'hooks';
import {NotSupported} from 'pages';
import {getDisplay} from 'utils';

const App: React.FC = () => {
  const screen = useScreen();
  const {isReady} = useContext(LoadPercentage.Context);

  if (ScreenType.Desktop !== screen) {
    return <NotSupported />;
  }

  // const isReady = false;
  return (
    <Fragment>
      <LoadingNavigator display={getDisplay(!isReady)} />
      <HomeNavigator display={getDisplay(isReady)} />
    </Fragment>
  );
};

export default App;
