import ActionTypes from './actionTypes';
import { IdiaState, IdiaActionTypes } from './types';

const initialState: IdiaState = {
  idias: [],
};

export const idiaReducer = (
  state = initialState,
  action: IdiaActionTypes
): IdiaState => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.fetchIdiaLists:
      return {
        ...state,
        idias: [...action.payload],
      };
    default:
      // const _: never = action;
      return state;
  }
};
