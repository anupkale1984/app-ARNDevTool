import { REHYDRATE } from 'redux-persist/constants';
import { handleActions } from 'redux-actions';

const initialState = {
  appLoaded: false,
}

export default handleActions({

  [REHYDRATE]: (state, action) => {
    return {
      ...state,
      appLoaded: true,
    };
  },
}, initialState);
