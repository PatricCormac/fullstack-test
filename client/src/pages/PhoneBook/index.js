import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { PhoneBookList } from '../../components/PhoneBookList/PhoneBookList'
import { getNumbers, postNumber, removeNumber } from '../../http/phoneBookApi'
import { addNumber, deleteNumber, setNumbers } from '../../store/phone-book/actions'
import './phone-book.scss'

const PhoneBook = (props) => {
  const { user, numbers, addNumber, deleteNumber, setNumbers } = props
  const [inputNumber, setInputNumber] = useState('')
  const [similarNumbers, setSimilarNumbers] = useState([])
  const [error, setError] = useState('')

  const inputNumberHandler = ( event ) => {
    setError('')
    setInputNumber(event.target.value)
    const newSimilar = numbers.filter(number => number.phone_number.includes(event.target.value))
    if (newSimilar) setSimilarNumbers(newSimilar)
  }

  const addNumberHandler = () => {
    if (numbers.find(number => number.phone_number === inputNumber)) {
      setError('Номер существует')
      setInputNumber('')
      return
    }

    const newPhoneNumber = { phone_number: inputNumber, userId: user.id }

    addNumber(newPhoneNumber)
    postNumber(newPhoneNumber)
    setInputNumber('')
  }

  const deleteNumberHandler = (number) => {
    deleteNumber(number)
    removeNumber(number)
  }

  useEffect(() => {
    getNumbers().then(data => {
      setNumbers(data)
    })
  }, [])

  useEffect(() => {
    if (inputNumber === '') {
      setSimilarNumbers([])
    }
  }, [inputNumber])

  return (
    <div className="phone-book">
      <div className="container">
        <div className="phone-book__wrapper">
          <div className="phone-book__header">
            <div className="phone-book__input">
              <label htmlFor="phone-number">Телефон</label>
              <input placeholder="+7 (999)-999-9999" value={inputNumber} autoComplete="off" onChange={ inputNumberHandler } id="phone-number" type="text" />
              {similarNumbers.length !== 0 && (
                <div className="phone-book__similar-numbers">
                  { similarNumbers.map(number => 
                    <div key={number.phone_number}>{ number.phone_number }</div>
                  ) }
                </div>
              )}
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
  deleteNumber,
  setNumbers
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook)