import { ADD_PHONE_NUMBER, DELETE_PHONE_NUMBER, SET_PHONE_NUMBERS } from "./consts";

export function setNumbers(numbers) {
  return {
    type: SET_PHONE_NUMBERS,
    payload: numbers
  }
}

export function addNumber(number) {
  return {
    type: ADD_PHONE_NUMBER,
    payload: number
  }
}

export function deleteNumber(number) {
  return (dispatch, getState) => {
    const { phoneBook } = getState()

    const updatedNumbers = phoneBook.numbers.filter(item => item.phone_number !== number)

    return dispatch({
      type: DELETE_PHONE_NUMBER,
      payload: updatedNumbers
    })
  }
}