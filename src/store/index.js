import { compose, createStore, applyMiddleware } from 'redux';

import reducer from './reducer';

import {
  getLocalStorage,
  setLocalStorage,
} from './localStorage';

const createStorage = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const initialState = getLocalStorage();
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(),
    ),
  );
  store.subscribe(() => {
    setLocalStorage(store.getState());
  });
  return store;
};

export default createStorage();
