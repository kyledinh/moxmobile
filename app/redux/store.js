import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate } from 'redux-persist';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  let store =  createStore(
    rootReducer,
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk),autoRehydrate())
  );
  return store;
}
