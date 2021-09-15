import { AUTH_USER } from "./consts"

export const authUser = (data) => {
  return (dispatch) => {
    return dispatch({
      type: AUTH_USER,
      payload: data.email
    })
  }
}