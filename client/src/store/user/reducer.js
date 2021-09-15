import { AUTH_USER } from "./consts"

const initialState = {
  data: null,
}

export const user = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        data: { email: payload }
      }
    default: return state
  }
}