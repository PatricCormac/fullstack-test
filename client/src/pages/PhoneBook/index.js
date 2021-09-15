import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PhoneBookList } from '../../components/PhoneBookList/PhoneBookList'
import { addNumber, deleteNumber } from '../../store/phone-book/actions'
import './phone-book.scss'

const PhoneBook = (props) => {
  const { user, numbers, addNumber, deleteNumber } = props
  const [inputNumber, setInputNumber] = useState('')
  const [error, setError] = useState('')

  const inputNumberHandler = ( event ) => {
    setInputNumber(event.target.value)
    setError('')
  }

  const addNumberHandler = () => {
    if (numbers.find(number => number.number === inputNumber)) {
      setError('Номер существует')
      setInputNumber('')
      return
    }

    const newPhoneNumber = { number: inputNumber, owner: 'patric1@mail.ru' }

    addNumber(newPhoneNumber)
    setInputNumber('')
  }

  const deleteNumberHandler = (number) => {
    deleteNumber(number)
  }

  return (
    <div className="phone-book">
      <div className="container">
        <div className="phone-book__wrapper">
          <div className="phone-book__header">
            <div className="phone-book__input">
              <label htmlFor="phone-number">Телефон</label>
              <input value={inputNumber} onChange={ inputNumberHandler } id="phone-number" placeholder="Введите телефон" type="text" />
              <span>{ error }</span>
            </div>
            <div className="phone-book__input">
              <button onClick={ addNumberHandler }>Добавить</button>
            </div>
          </div>
          <div className="phone-book__body">
            <h2>Номера</h2>
            <PhoneBookList
              numbers={numbers}
              user={user}
              deleteNumberHandler={deleteNumberHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  
  return {
    user: state.user.data,
    numbers: state.phoneBook.numbers,
  }
}

const mapDispatchToProps = {
  addNumber,
  deleteNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook)