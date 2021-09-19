import { SET_USER } from "./consts"

const initialState = {
  data: null,
}

export const user = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_USER:
      return {
        ...state,
        data: payload
      }
    default: return state
  }
}