import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Header from '../components/Header';
import Context from '../context';
import withRoot from '../withRoot';

const Splash = () => {
  const { state } = useContext(Context)
  return state.isAuth ? <Redirect to="/" /> : (
    <React.Fragment>
      <Header />
      <Login />
    </React.Fragment>
  )
}

export default withRoot(Splash);