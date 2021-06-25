import { combineReducers } from 'redux';
import users from './users';
import matches from './matches';



export default combineReducers({
  users,
  matches,
})