import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate } from 'redux-persist';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  let store =  createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk),autoRehydrate())
  );
  return store;
}
