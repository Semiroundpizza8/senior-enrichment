import { combineReducers } from 'redux';
import studentReducer from './studentRedux.js';
const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
