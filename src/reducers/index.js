import { combineReducers } from 'redux';
import todos from './todos.reducer'
import todoInput from './todoInput.reducer'
import filter from './filter.reducer'

export default combineReducers({
   todos,
   todoInput,
   filter
})