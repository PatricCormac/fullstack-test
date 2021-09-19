import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { setUser } from '../../store/user/actions'
import { LOGIN_ROUTE, PHONE_BOOK_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import { login, registration } from '../../http/userApi'
import './auth.scss'

const Auth = (props) => {
  const { setUser } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const inputHandler = (e) => {
    const { value, name } = e.target

    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const submit = async (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      alert("Заполните поля")
      return
    }

    try {
      let user

      if(isLogin) {
        user = await login(email, password)
      } else {
        user = await registration(email, password)
      }

      setUser(user)
      history.push(PHONE_BOOK_ROUTE)
      setEmail('')
      setPassword('')
    } catch(e) {
      alert(e.response.data.message)
      console.log(e.response.data.message);
    }
  }

  return (
    <div className="form">
      <div className="container">
        <div className="form__holder">
          <form onSubmit={submit} className="form__card">
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)