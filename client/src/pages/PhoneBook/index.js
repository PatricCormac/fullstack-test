import React from 'react'
import './phone-book.scss'

export const PhoneBook = () => {
  const userNumbers = [
    {number: '+79654522151', owner: 'patric1@mail.ru'},
    {number: '+79254563351', owner: 'patric1@mail.ru'},
    {number: '+79654562551', owner: 'patric1@mail.ru'},
    {number: '+79654533351', owner: 'patric1@mail.ru'},
    {number: '+79654522151', owner: 'patric1@mail.ru'},
    {number: '+79254563351', owner: 'patric1@mail.ru'}
  ]

  const numbers = [
    {number: '+79654562351', owner: 'patric4@mail.ru'},
    {number: '+79654533351', owner: 'patric2@mail.ru'},
    {number: '+79654522151', owner: 'patric6@mail.ru'},
    {number: '+79254563351', owner: 'patric1@mail.ru'},
    {number: '+79654562551', owner: 'patric1@mail.ru'},
    {number: '+79654562351', owner: 'patric1@mail.ru'},
    {number: '+79654533351', owner: 'patric1@mail.ru'},
    {number: '+79654522151', owner: 'patric1@mail.ru'},
    {number: '+79254563351', owner: 'patric1@mail.ru'},
    {number: '+79654562551', owner: 'patric4@mail.ru'}
  ]

  const user = { email: 'patric1@mail.ru' }

  return (
    <div className="phone-book">
      <div className="container">
        <div className="phone-book__wrapper">
          <div className="phone-book__header">
            <div className="phone-book__input">
              <label htmlFor="phone-number">Телефон</label>
              <input id="phone-number" placeholder="Введите телефон" type="text" />
            </div>
          </div>
          <div className="phone-book__body">
            <h2>Ваши номера</h2>
          <div className="phone-book__list">
            {userNumbers.map(number =>
              <div className="phone-book__list-item">
                { number.number }
                { number.owner === user.email && (
                  <div className="phone-book__delete-button">
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
                <div className="phone-book__list-item">
                  { number.number }
                  { number.owner === user.email && (
                    <div className="phone-book__delete-button">
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
