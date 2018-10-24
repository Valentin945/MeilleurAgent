import { combineReducers } from 'redux'
import act from './act'
import error from './error'
import agencyList from './agencyList'
import currentAgency from './currentAgency'
import messageList from './messageList'
import message from './message'

export default combineReducers({
  act,
  agencyList,
  currentAgency,
  error,
  message,
  messageList
})
