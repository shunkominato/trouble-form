import ActionTypes from '../actionTypes';
import { CounterActionTypes, Troble } from './types';

export const incrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.increment, // "INCREMENT"
  };
};

export const decrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.decrement,
  };
};

export const resetAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.countReset,
  };
};

export const fetchTorablesAction = (troubles: Troble[]) => {
  return {
    type: ActionTypes.fetchTroubleLists,
    payload: troubles,
  };
};
