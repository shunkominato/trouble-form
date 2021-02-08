import ActionTypes from '../actionTypes';
import { TroubleState, CounterActionTypes } from './types';

const initialState: TroubleState = {
  troubles: [],
};

export const countReducer = (
  state = initialState,
  action: CounterActionTypes
): TroubleState => {
  switch (action.type) {
    case ActionTypes.fetchTroubleLists:
      return {
        ...state,
        troubles: [...action.payload],
      };
    default:
      // const _: never = action;
      return state;
  }
};
