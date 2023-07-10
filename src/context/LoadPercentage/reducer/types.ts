import {Data} from '../types';

type Types = 'SET' | 'ADD-DATA' | 'SET-DATA';

type State = {
  total_percentage: number;
  percentages: Array<Data>;
  isReady: boolean;
};

type Action = {
  type: Types;
  payload: any;
};

type Dispatch = {
  (payload: any): Action;
};

type Reducer = {
  (state: State, action: Action): State;
};

const SET: Types = 'SET';
const ADD_DATA: Types = 'ADD-DATA';
const SET_DATA: Types = 'SET-DATA';

export type {State, Action, Dispatch, Reducer};
export {SET, ADD_DATA, SET_DATA};
