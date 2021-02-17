import ActionTypes from './actionTypes';
import { Idia, IdiaActionTypes } from './types';

export const fetchIdiaAction = (idias: Idia[]): IdiaActionTypes => {
  return {
    type: ActionTypes.fetchIdiaLists,
    payload: idias,
  };
};
