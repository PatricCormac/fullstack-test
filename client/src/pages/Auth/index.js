import React, { useState } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../../store/user/actions'
import { Link, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import './auth.scss'

const Auth = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { authUser } = props
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const inputHandler = (e) => {
    const { value, name } = e.target

    setError('')
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setError("Заполните поля")
      return
    }

    authUser({ email })
    setEmail('')
    setPassword('')
    props.history.push('/')
  }

  return (
    <div className="form">
      <div className="container">
        <div className="form__holder">
          <form onSubmit={submitHandler} className="form__card">
            <h2 className="form__title">{ isLogin ? 'Авторизаци' : 'Регистрация' }</h2>
            <div className="form__input">
              <label htmlFor="email">Email</label>
              <input value={email} onChange={inputHandler} name="email" id="email" placeholder="Введите email" type="text" />
            </div>
            <div className="form__input">
              <label htmlFor="password">Пароль</label>
              <input value={password} onChange={inputHandler} name="password" id="password" placeholder="Введите пароль" type="password" />
            </div>
            <div className="form__bottom">
              <div>
                { isLogin ? <div>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link></div>
                : <div>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link></div> }
                <div className="form__error">{ error }</div>
              </div>
              <div className="form__input">
                <button type="submit">{ isLogin ? 'Войти' : 'Зарегистрироваться' }</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  authUser
}

export default connect(null, mapDispatchToProps)(Auth)