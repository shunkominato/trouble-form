import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { errorHandle } from './errorHandle';

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
      errorHandle(e, 'common slackWebhook');
    }
  };
};
