import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import ActionTypes from '../actionTypes';
import { CounterActionTypes } from './types';
import { RootState } from '../store';
import { db, FirebaseTimeStamp } from '../../firebase';

export const asyncIncrement: ActionCreator<
  ThunkAction<void, RootState, string, CounterActionTypes>
> = () => {
  return (dispatch: Dispatch, getState) => {
    console.log(getState().counter.value);
    setTimeout(() => {
      dispatch({ type: ActionTypes.increment });
    }, 3000);
    console.log('ss');
    dispatch(push('/'));
  };
};

export const register: ActionCreator<
  ThunkAction<void, RootState, undefined, CounterActionTypes>
> = (
  username: string,
  title: string,
  backGround: string,
  example: string,
  remark: string
) => {
  return (dispatch: Dispatch) => {
    const timestamp = FirebaseTimeStamp.now();
    const data = {
      username,
      title,
      backGround,
      example,
      remark,
      created_at: timestamp,
      updated_at: timestamp,
    };
    console.log(username);
    console.log(backGround);
    console.log(title);
    console.log(example);
    console.log(remark);
    db.collection('troubles').doc().set(data, { merge: true });
    alert('登録しました');
    dispatch(push('/'));
  };
};
