import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const slackWebhook: ActionCreator<
  ThunkAction<void, undefined, undefined, Action<any>>
> = (url: string, payload: any) => {
  return async () => {
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.log(e);
      console.log('slackへの通知に失敗しました');
    }
  };
};
