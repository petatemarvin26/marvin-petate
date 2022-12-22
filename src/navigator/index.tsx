import {useState} from 'react';
import {Loading} from 'context';
import {Indicator, View} from 'components';

import Main from 'page';

import styles from './.module.css';

const Navigator: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Loading.Provider value={{status: loading, setStatus: setLoading}}>
      <View
        className={styles['loading-pane']}
        style={{display: loading ? 'flex' : 'none'}}
      >
        <Indicator.CircleSnail
          size='5vh'
          thickness='0.5vh'
          color='var(--ACCENT-COLOR)'
        />
      </View>
      <Main isReady={!loading} />
    </Loading.Provider>
  );
};

export default Navigator;
