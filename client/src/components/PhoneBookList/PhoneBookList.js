import React from 'react'

export const PhoneBookList = ({ numbers, user, deleteNumberHandler }) => {
  return (
    <div className="phone-book__list">
      {numbers.map(number =>
        <div key={ number.phone_number } className="phone-book__list-item">
          { number.phone_number }
          { number.userId === user.id && (
            <div className="phone-book__delete-button" onClick={() => deleteNumberHandler(number.phone_number)}>
              <span></span>
              <span></span>
            </div>
          ) }
        </div>
      )}
    </div>
  )
}
