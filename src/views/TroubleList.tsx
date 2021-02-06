// import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../reducks/troubleLists/actions';
import { asyncIncrement } from '../reducks/troubleLists/operations';
// import fetchTroubleLists from '../reducks/troubleLists/operations';
import { RootState } from '../reducks/store';

const TroubleList = () => {
  const dispatch = useDispatch();
  const currentCount = useSelector((state: RootState) => state.counter);
  return (
    <>
      <div>sss</div>
      <button type="button" onClick={() => dispatch(incrementAction())}>
        up
      </button>
      <button type="button" onClick={() => dispatch(decrementAction())}>
        down
      </button>
      <button type="button" onClick={() => dispatch(resetAction())}>
        reset
      </button>
      <button type="button" onClick={() => dispatch(asyncIncrement())}>
        async
      </button>
      <p>{currentCount.value}</p>
    </>
  );
};

export default TroubleList;
