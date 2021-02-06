import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import * as History from 'history';
import thunk from 'redux-thunk';
import { countReducer } from './troubleLists/reducer';

export const history = History.createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), thunk)
);

export default store;
