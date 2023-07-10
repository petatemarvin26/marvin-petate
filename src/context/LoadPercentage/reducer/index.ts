import {
  addPercentageData,
  setPercentageData,
  setLoadPercentage
} from './actions';
import {ADD_DATA, Reducer, SET, SET_DATA, State} from './types';

const reducerInitState: State = {
  isReady: false,
  total_percentage: 0,
  percentages: []
};

const reducer: Reducer = (state = reducerInitState, action) => {
  switch (action.type) {
    case ADD_DATA: {
      const percentages = [...state.percentages, action.payload];
      return {...state, percentages};
    }

    case SET_DATA: {
      const {id, percent} = action.payload;
      let total_percentage = 0;
      const percentages = state.percentages.map((data) => {
        if (data.id === id) {
          total_percentage += percent;
          return {id, percent};
        }
        total_percentage += data.percent;
        return data;
      });

      total_percentage = Math.floor(
        (total_percentage / (percentages.length * 100)) * 100
      );

      return {...state, total_percentage, percentages};
    }

    case SET: {
      const {isReady} = action.payload;
      return {...state, isReady};
    }

    default:
      return state;
  }
};

export {
  reducerInitState,
  addPercentageData,
  setPercentageData,
  setLoadPercentage
};
export default reducer;
