import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { LOGIN_ROUTE } from '../utils/consts'

const AppRouter = ({ user }) => {
  return (
    <Switch>
      {user && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps, null)(AppRouter)