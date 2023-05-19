import {createContext} from 'react';

import {LoadingType} from './types';

const loadingInitState: LoadingType = {
  status: true,
  setStatus: () => {}
};

const Loading = createContext(loadingInitState);

export {Loading, loadingInitState};
export type {LoadingType};
