/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import * as Constants from './app/actions';
import { initialAPIState } from './defaultStates';

function apiReducer(state = initialAPIState, action) {
  const count = state.get('count');
  switch (action.type) {
    case Constants.SHOW_LOADER: {
      return state.set('count', count + 1);
    }
    case Constants.HIDE_LOADER: {
      return state.set('count', count < 0 ? 0 : count - 1);
    }
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer() {
  const appReducer = combineReducers({
    api: apiReducer,
  });
  const rootReducer = (state, action) => {
    let newState = state;
    if (action.type === Constants.LOGOUT) {
      newState = undefined;
    }
    return appReducer(newState, action);
  };

  return rootReducer;
}
