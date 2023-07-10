import {ADD_DATA, Dispatch, SET, SET_DATA} from './types';

const addPercentageData: Dispatch = (payload) => ({
  type: ADD_DATA,
  payload
});

const setPercentageData: Dispatch = (payload) => ({
  type: SET_DATA,
  payload
});

const setLoadPercentage: Dispatch = (payload) => ({
  type: SET,
  payload
});

export {addPercentageData, setPercentageData, setLoadPercentage};
