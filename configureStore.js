/**
 * Create store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import createReducer from './reducers';
import apiMiddleware from './app/utils/apiMiddleware';

export default function configureStore(initialState = {}) {
  const middlewares = [
    apiMiddleware,
  ];

  const logger = createLogger({
    stateTransformer: state => state.toJS(),
  });

  if (__DEV__) { // eslint-disable-line no-undef
    middlewares.push(logger);
  }

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = __DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-undef
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-undef
    : compose;

  /* eslint-enable */
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
}
