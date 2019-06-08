import { fromJS } from 'immutable';

export const initialAPIState = fromJS({
  count: 0,
  apiProcessing: {},
});

export default {
  initialAPIState,
};
