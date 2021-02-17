import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import * as History from 'history';
import thunk from 'redux-thunk';
import { troublesReducer } from './troubleLists/reducer';
import { idiaReducer } from './idiaLists/reducer';

export const history = History.createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  troubles: troublesReducer,
  idias: idiaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), thunk)
);

export default store;
