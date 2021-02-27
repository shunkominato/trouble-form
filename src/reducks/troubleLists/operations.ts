import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { push } from 'connected-react-router';
import firebase from 'firebase/app';
// import ActionTypes from '../actionTypes';
import { TroubleActionTypes, Trouble } from './types';
import { RootState } from '../store';
import { db, FirebaseTimeStamp } from '../../firebase';
import { fetchTorablesAction } from './actions';
import { errorHandle } from '../commons/errorHandle';

const troubleRef = db.collection('troubles');

export const register: ActionCreator<
  ThunkAction<Promise<void>, RootState, undefined, TroubleActionTypes>
> = (
  username: string,
  age: number,
  gender: string,
  trouble: string,
  backGround: string,
  remark: string
) => {
  return async () => {
    const timestamp = FirebaseTimeStamp.now();

    const ref = troubleRef.doc();

    const data = {
      id: ref.id,
      username,
      age,
      gender,
      trouble,
      backGround,
      remark,
      created_at: timestamp,
      updated_at: timestamp,
    };

    try {
      await troubleRef.doc(ref.id).set(data, { merge: true });
    } catch (e) {
      errorHandle(e, 'troubles resister');
      throw new Error();
    }
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
