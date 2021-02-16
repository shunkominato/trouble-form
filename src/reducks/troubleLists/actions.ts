import ActionTypes from '../actionTypes';
import { Trouble, TroubleActionTypes } from './types';

export const fetchTorablesAction = (
  troubles: Trouble[]
): TroubleActionTypes => {
  return {
    type: ActionTypes.fetchTroubleLists,
    payload: troubles,
  };
};
