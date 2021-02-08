import { Action } from 'redux';
import ActionTypes from '../actionTypes';

export type Count = {
  value: number;
};
// Actionの型 Actionを継承
interface IncrementAction extends Action {
  type: typeof ActionTypes.increment; // "INCREMENT"型
}

interface DecrementAction extends Action {
  type: typeof ActionTypes.decrement;
}

interface ResetAction extends Action {
  type: typeof ActionTypes.countReset;
}

interface FetchTroubleAction extends Action {
  type: typeof ActionTypes.fetchTroubleLists;
  payload: Troble[];
}

// exportするActionの型, Unionで結合
export type CounterActionTypes =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | FetchTroubleAction;

export type Troble = {
  username: string;
  title: string;
  backGround: string;
  example: string;
  remark: string;
};

export type TroubleState = {
  troubles: Troble[];
};
