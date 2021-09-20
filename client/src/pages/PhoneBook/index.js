import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Input } from '../../components/Input/Input'
import { PhoneBookList } from '../../components/PhoneBookList/PhoneBookList'
import { getNumbers, postNumber, removeNumber } from '../../http/phoneBookApi'
import { addNumber, deleteNumber, setNumbers } from '../../store/phone-book/actions'
import './phone-book.scss'

const checkNumber = (number) => {
  if (number.length >= 11) {
    const phoneRe = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;
    console.log({phoneRe});
    const digits = number.replace(/\D/g, "");
    console.log({digits});
    return phoneRe.test(digits);
  }
}

const PhoneBook = (props) => {
  const { user, numbers, addNumber, deleteNumber, setNumbers } = props
  const [inputNumber, setInputNumber] = useState('')
  const [similarNumbers, setSimilarNumbers] = useState([])
  const [error, setError] = useState('')
  const [valid, setValid] = useState(false)

  const inputNumberHandler = ( event ) => {
    setError('')
    setInputNumber(event.target.value)
    const newSimilar = numbers.filter(number => number.phone_number.includes(event.target.value))
    if (checkNumber(event.target.value) && newSimilar.length === 0) {
      setValid(true)
    } else {
      setValid(false)
      setError('Номер не проходит валидацию')
    }

    if (newSimilar) setSimilarNumbers(newSimilar)
  }

  const addNumberHandler = () => {
    if (valid) {
      const newPhoneNumber = { phone_number: inputNumber, userId: user.id }

      addNumber(newPhoneNumber)
      postNumber(newPhoneNumber)
      setInputNumber('')
    }
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
            <Input
              inputNumber={inputNumber}
              similarNumbers={similarNumbers}
              error={error}
              valid={valid}
              inputNumberHandler={inputNumberHandler}
            />
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