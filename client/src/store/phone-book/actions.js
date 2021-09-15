import { ADD_PHONE_NUMBER, DELETE_PHONE_NUMBER } from "./consts";

export function addNumber(number) {
  return {
    type: ADD_PHONE_NUMBER,
    payload: number
  }
}

export function deleteNumber(number) {
  return (dispatch, getState) => {
    const { phoneBook } = getState()

    const updatedNumbers = phoneBook.numbers.filter(item => item.number !== number)

    return dispatch({
      type: DELETE_PHONE_NUMBER,
      payload: updatedNumbers
    })
  }
}