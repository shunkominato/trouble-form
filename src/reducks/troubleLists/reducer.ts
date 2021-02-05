import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State {
  lists: [];
}

export const initialState: State = {
  lists: [],
};

export const Reducer = reducerWithInitialState(initialState);
