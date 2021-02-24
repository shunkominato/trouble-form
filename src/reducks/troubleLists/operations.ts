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
  gender: string,
  trouble: string,
  backGround: string,
  remark: string
) => {
  return async (dispatch: Dispatch) => {
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

    await db.collection('troubles').doc(ref.id).set(data, { merge: true });

    const url =
      'https://hooks.slack.com/services/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';
    const payload = {
      text: `【投稿者名】
${username}
【年齢】
${age}
【性別】
${gender}
【悩み】
${trouble}
【背景】
${backGround}
【備考】
${remark}`,
    };

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(() => {
      dispatch(push('/'));
    });
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
