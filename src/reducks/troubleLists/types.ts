import { Action } from 'redux';
import ActionTypes from '../actionTypes';

export type Trouble = {
  id: string;
  username: string;
  title: string;
  backGround: string;
  example: string;
  remark: string;
  created_at: string;
  updated_at: string;
};

export type TroubleState = {
  troubles: Trouble[];
};

interface FetchTroubleAction extends Action {
  type: typeof ActionTypes.fetchTroubleLists;
  payload: Trouble[];
}

export type TroubleActionTypes = FetchTroubleAction;
