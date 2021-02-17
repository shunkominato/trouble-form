import { Action } from 'redux';
import ActionTypes from './actionTypes';

export type Idia = {
  id: string;
  trouble_id: string;
  trouble: string;
  title: string;
  username: string;
  target: string;
  example: string;
  remark: string;
  created_at: string;
  updated_at: string;
};

export type IdiaState = {
  idias: Idia[];
};

interface FetchIdiaAction extends Action {
  type: typeof ActionTypes.fetchIdiaLists;
  payload: Idia[];
}

export type IdiaActionTypes = FetchIdiaAction;
