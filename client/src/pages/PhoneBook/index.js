import React, { useEffect, useState } from 'react'
import './phone-book.scss'

export const PhoneBook = () => {
  const [inputNumber, setInputNumber] = useState('')
  const [error, setError] = useState('')
  const [numbers, setNumbers] = useState([])
  const [userNumbers, setUserNumbers] = useState([])
  const [user, setUser] = useState({})

  const inputNumberHandler = ( event ) => {
    setInputNumber(event.target.value)
    setError('')
  }

  const addNumber = () => {
    if (userNumbers.find(number => number.number === inputNumber)) {
      setError('Номер существует')
      setInputNumber('')
      return
    }
    setUserNumbers(prev => [...prev, { number: inputNumber, owner: user.email }])
    setInputNumber('')
  }

  const deleteUserNumber = (deleteNumber) => {
    setUserNumbers(prev => {
      return prev.filter(number => number.number !== deleteNumber)
    })
  }

  const deleteNumber = (deleteNumber) => {
    setNumbers(prev => {
      return prev.filter(number => number.number !== deleteNumber)
    })
  }

  useEffect(() => {
    setNumbers([
      {number: '+79554562351', owner: 'patric4@mail.ru'},
      {number: '+79454533351', owner: 'patric2@mail.ru'},
      {number: '+79674522151', owner: 'patric6@mail.ru'},
      {number: '+79258563351', owner: 'patric1@mail.ru'},
      {number: '+79653562551', owner: 'patric1@mail.ru'},
      {number: '+79654562351', owner: 'patric1@mail.ru'},
      {number: '+79654533351', owner: 'patric1@mail.ru'},
      {number: '+79654522151', owner: 'patric1@mail.ru'},
      {number: '+79254563351', owner: 'patric1@mail.ru'},
      {number: '+79654562551', owner: 'patric4@mail.ru'}
    ])
  }, [])

  useEffect(() => {
    setUser({email: 'patric1@mail.ru'})
  }, [])

  return (
    <div className="phone-book">
      <div className="container">
        <div className="phone-book__wrapper">
          <div className="phone-book__header">
            <div className="phone-book__input">
              <label htmlFor="phone-number">Телефон</label>
              <input value={inputNumber} onInput={ inputNumberHandler } id="phone-number" placeholder="Введите телефон" type="text" />
              <span>{ error }</span>
            </div>
            <div className="phone-book__input">
              <button onClick={ addNumber }>Добавить</button>
            </div>
          </div>
          <div className="phone-book__body">
            <h2>Ваши номера</h2>
          <div className="phone-book__list">
            {userNumbers.map(number =>
              <div key={ number.number } className="phone-book__list-item">
                { number.number }
                { number.owner === user.email && (
                  <div className="phone-book__delete-button" onClick={() => deleteUserNumber(number.number)}>
                    <span></span>
                    <span></span>
                  </div>
                ) }
              </div>
              )}
            </div>
            <h2>Номера других пользователей</h2>
            <div className="phone-book__list">
              {numbers.map(number =>
                <div key={ number.number } className="phone-book__list-item">
                  { number.number }
                  { number.owner === user.email && (
                    <div className="phone-book__delete-button" onClick={() => deleteNumber(number.number)}>
                      <span></span>
                      <span></span>
                    </div>
                  ) }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
