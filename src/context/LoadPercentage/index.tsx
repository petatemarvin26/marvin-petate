import {createContext, useEffect, useReducer} from 'react';
import {AddDataHandler, Props, SetDataHandler, Value} from './types';
import reducer, {
  addPercentageData,
  reducerInitState,
  setLoadPercentage,
  setPercentageData
} from './reducer';

const initState: Value = {
  isReady: false,
  totalPercentage: 0,
  addPercentage() {},
  setPercentage() {}
};

const Context = createContext(initState);

const Provider: React.FC<Props> = ({children}) => {
  const [state, setState] = useReducer(reducer, reducerInitState);

  const handleAddData: AddDataHandler = (data) => {
    setState(addPercentageData(data));
  };
  const handleSetdata: SetDataHandler = (data) => {
    setState(setPercentageData(data));
  };

  useEffect(() => {
    if (state.total_percentage >= 100) {
      setTimeout(() => {
        setState(setLoadPercentage({isReady: true}));
      }, 1000);
    }
  }, [state.total_percentage]);

  return (
    <Context.Provider
      value={{
        isReady: state.isReady,
        totalPercentage: state.total_percentage,
        addPercentage: handleAddData,
        setPercentage: handleSetdata
      }}
    >
      {children}
    </Context.Provider>
  );
};

const LoadPercentage = {
  Context,
  Provider
};

export default LoadPercentage;
