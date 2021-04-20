import { AnyAction } from 'redux'

import {
  CHANGE_SEARCHFIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchUsers = (state=initialStateSearch, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateUsers = {
  users: [],
  isPending: false
}

export const requestUsers = (state=initialStateUsers, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {users: action.payload, isPending: false})
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}