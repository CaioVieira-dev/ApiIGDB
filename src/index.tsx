import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './index.css';
import App from './views/App';
import PageSingle from './views/PageSingle';
import Login from './views/Login/Login';
import CreateAccount from './views/CreateAccount/CreateAccount';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/page">
          <PageSingle />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
