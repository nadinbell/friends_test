import { Dispatch } from 'redux';
import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  USERS_API_URL
 } from './constants'


export const setSearchField = (text: string) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestUsers = () => (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING })
  apiCall(USERS_API_URL)
    .then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}