import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import firebase from 'firebase/app';
// import ActionTypes from '../actionTypes';
import { Idia, IdiaActionTypes } from './types';
import { RootState } from '../store';
import { db, FirebaseTimeStamp } from '../../firebase';
import { fetchIdiaAction } from './actions';

const troubleRef = db.collection('troubles');

export const register: ActionCreator<
  ThunkAction<void, RootState, undefined, IdiaActionTypes>
> = (troubleId: string, username: string, example: string, remark: string) => {
  return async (dispatch: Dispatch) => {
    console.log('komikomi');
    const timestamp = FirebaseTimeStamp.now();

    const ref = troubleRef.doc();

    const data = {
      id: ref.id,
      trouble_id: troubleId,
      username,
      example,
      remark,
      created_at: timestamp,
      updated_at: timestamp,
    };

    await db.collection('idias').doc(ref.id).set(data, { merge: true });
    alert('投稿しました');
    dispatch(push('/menu'));
  };
};

export const fetchTroubleLists: ActionCreator<
  ThunkAction<void, RootState, undefined, IdiaActionTypes>
> = () => {
  return (dispatch: Dispatch) => {
    db.collection('idias').onSnapshot(
      (
        snapshots: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
      ) => {
        const idiaLists: Idia[] = [];
        snapshots.forEach(
          (
            snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
          ) => {
            const idia = snapshot.data() as Idia;
            idiaLists.push(idia);
          }
        );
        dispatch(fetchIdiaAction(idiaLists));
      }
    );
  };
};
