import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import ActionTypes from '../actionTypes';
import { CounterActionTypes } from './types';
import { RootState } from '../store';

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
