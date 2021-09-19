import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Spinner } from "./components/Spinner";
import { check } from "./http/userApi";
import { setUser } from "./store/user/actions"

const App = (props) => {
  const { setUser } = props
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      setUser(data)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  setUser
}

export default connect(null, mapDispatchToProps)(App);
