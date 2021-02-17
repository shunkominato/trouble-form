import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import firebase from 'firebase/app';
// import ActionTypes from '../actionTypes';
import { Idia, IdiaActionTypes } from './types';
import { RootState } from '../store';
import { db, FirebaseTimeStamp } from '../../firebase';
import { fetchIdiaAction } from './actions';

// const idiaRef = db.collection('idias');

export const register: ActionCreator<
  ThunkAction<void, RootState, undefined, IdiaActionTypes>
> = (
  troubleId: string,
  title: string,
  username: string,
  target: string,
  example: string,
  remark: string
) => {
  return async (dispatch: Dispatch) => {
    console.log('komikomi');
    const timestamp = FirebaseTimeStamp.now();

    const ref = db
      .collection('troubles')
      .doc(troubleId)
      .collection('idia')
      .doc();
    const data = {
      id: ref.id,
      title,
      username,
      target,
      example,
      remark,
      created_at: timestamp,
      updated_at: timestamp,
    };

    try {
      await db
        .collection('troubles')
        .doc(troubleId)
        .collection('idias')
        .doc(ref.id)
        .set(data, { merge: true });
      alert('投稿しました');
      dispatch(push('/menu'));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchIdiaLists: ActionCreator<
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
