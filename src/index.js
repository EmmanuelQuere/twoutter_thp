import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Register from 'pages/Register';
import UserPage from 'pages/UserPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import store from 'redux/store';
import './index.scss';

const App = () => {

  return (
  <Provider store={store}>
    <Router>
      <div>
        <Link to='/home'>Twoutter!</Link>
        <hr />
        <Navbar />
      </div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/users/me" component={Profile} exact/>
        <PrivateRoute path="/users/:user_id" component={UserPage} />

      </Switch>
    </Router>
  </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));