import React from 'react'

export const PhoneBookList = ({ numbers, user, deleteNumberHandler }) => {
  return (
    <div className="phone-book__list">
      {numbers.map(number =>
        <div key={ number.number } className="phone-book__list-item">
          { number.number }
          { number.owner === user.email && (
            <div className="phone-book__delete-button" onClick={() => deleteNumberHandler(number.number)}>
              <span></span>
              <span></span>
            </div>
          ) }
        </div>
      )}
    </div>
  )
}
