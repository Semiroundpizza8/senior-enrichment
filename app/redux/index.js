import { combineReducers } from 'redux';
import students from './studentRedux.js';
import campus from './campusRedux.js';

export default combineReducers({ students, campus });

export * from './studentRedux'
export * from './campusRedux'