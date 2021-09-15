import { combineReducers } from 'redux'
import { user } from './user/reducer'
import { phoneBook } from './phone-book/reducer'

export default combineReducers({
  user,
  phoneBook
})