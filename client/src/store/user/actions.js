import { SET_USER } from "./consts"

export const setUser = (data) => {
  return (dispatch) => {
    return dispatch({
      type: SET_USER,
      payload: data
    })
  }
}