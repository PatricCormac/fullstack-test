import { ADD_PHONE_NUMBER, DELETE_PHONE_NUMBER, SET_PHONE_NUMBERS } from "./consts"

const initialState = {
  numbers: [],
}

export const phoneBook = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_PHONE_NUMBER:
      return {
        ...state,
        numbers: [
          ...state.numbers,
          payload
        ]
      }
    case SET_PHONE_NUMBERS:
      return {
        ...state,
        numbers: [
          ...payload
        ]
      }
    case DELETE_PHONE_NUMBER:
      return {
        ...state,
        numbers: payload
      }
    default: return state
  }
}