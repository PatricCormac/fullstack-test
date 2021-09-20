import React from 'react'
import cx from 'classnames'
import './input.scss'

export const Input = (props) => {
  const { inputNumber, similarNumbers, valid, error, inputNumberHandler } = props
  const classes = cx({error, valid})

  return (
    <div className="phone-book__input">
      <label htmlFor="phone-number">Телефон</label>
      <input
        className={error ? 'error' : ''}
        placeholder="+79999999999"
        value={inputNumber}
        autoComplete="off"
        onChange={ inputNumberHandler }
        id="phone-number"
        required
      />
      {similarNumbers.length !== 0 && (
        <div className="phone-book__similar-numbers">
          { similarNumbers.map(number => 
            <div key={number.phone_number}>{ number.phone_number }</div>
          ) }
        </div>
      )}
      <span>{ error }</span>
    </div>
  )
}
