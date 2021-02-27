import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import firebase from 'firebase/app';
// import ActionTypes from '../actionTypes';
import { Idia, IdiaActionTypes } from './types';
import { RootState } from '../store';
import { db, FirebaseTimeStamp } from '../../firebase';
import { fetchIdiaAction } from './actions';

const idiaRef = db.collection('idias');

export const register: ActionCreator<
  ThunkAction<void, RootState, undefined, IdiaActionTypes>
> = (
  troubleId: string,
  title: string,
  trouble: string,
  username: string,
  target: string,
  example: string,
  remark: string
) => {
  return async (dispatch: Dispatch) => {
    const timestamp = FirebaseTimeStamp.now();

    const ref = idiaRef.doc();

    const data = {
      id: ref.id,
      trouble_id: troubleId,
      title,
      trouble,
      username,
      target,
      example,
      remark,
      created_at: timestamp,
      updated_at: timestamp,
    };

    await db.collection('idias').doc(ref.id).set(data, { merge: true });
    const url =
      'https://hooks.slack.com/services/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';
    const payload = {
      text: `【投稿者名】
${username}
【悩み】
${trouble}
【表題】
${title}
【ターゲット像】
${target}
【サービス例】
${example}
【備考】
${remark}`,
    };

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(() => {
      dispatch(push('/'));
    });

    alert('投稿しました');
    dispatch(push('/menu'));
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
