import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import './auth.scss'

export const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <div className="form">
      <div className="container">
        <div className="form__holder">
          <form className="form__card">
            <h2 className="form__title">{ isLogin ? 'Авторизаци' : 'Регистрация' }</h2>
            <div className="form__input">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Введите email" type="text" />
            </div>
            <div className="form__input">
              <label htmlFor="password">Пароль</label>
              <input id="password" placeholder="Введите пароль" type="password" />
            </div>
            <div className="form__bottom">
              { isLogin ? <div>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link></div>
              : <div>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link></div> }
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
