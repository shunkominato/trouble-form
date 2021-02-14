import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import firebase from 'firebase/app';
// import ActionTypes from '../actionTypes';
import { TroubleActionTypes, Trouble } from './types';
import { RootState } from '../store';
import { db, FirebaseTimeStamp } from '../../firebase';
import { fetchTorablesAction } from './actions';

const troubleRef = db.collection('troubles');

export const register: ActionCreator<
  ThunkAction<void, RootState, undefined, TroubleActionTypes>
> = (
  username: string,
  age: number,
  business: string,
  title: string,
  backGround: string,
  example: string,
  remark: string
) => {
  return (dispatch: Dispatch) => {
    const timestamp = FirebaseTimeStamp.now();

    const ref = troubleRef.doc();

    const data = {
      id: ref.id,
      username,
      age,
      business,
      title,
      backGround,
      example,
      remark,
      created_at: timestamp,
      updated_at: timestamp,
    };

    db.collection('troubles').doc(ref.id).set(data, { merge: true });
    alert('登録しました');
    dispatch(push('/troubleList'));
  };
};

export const fetchTroubleLists: ActionCreator<
  ThunkAction<void, RootState, undefined, TroubleActionTypes>
> = () => {
  return (dispatch: Dispatch) => {
    db.collection('troubles').onSnapshot(
      (
        snapshots: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
      ) => {
        const troubleLists: Trouble[] = [];
        snapshots.forEach(
          (
            snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
          ) => {
            const trouble = snapshot.data() as Trouble;
            troubleLists.push(trouble);
          }
        );
        dispatch(fetchTorablesAction(troubleLists));
      }
    );
  };
};
