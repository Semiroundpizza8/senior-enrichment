import { combineReducers } from 'redux';
import studentReducer from './studentRedux.js';
import campusReducer from './campusRedux.js';

const initialState = {
  students: [],
  campuses: []
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};


export default combineReducers({
  root: rootReducer,
  students: studentReducer,
  campuses: campusReducer
})

export * from './studentRedux.js'
export * from './campusRedux.js'
