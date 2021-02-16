import ActionTypes from '../actionTypes';
import { TroubleState, TroubleActionTypes } from './types';

const initialState: TroubleState = {
  troubles: [],
};

export const troublesReducer = (
  state = initialState,
  action: TroubleActionTypes
): TroubleState => {
  console.log(action);
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
