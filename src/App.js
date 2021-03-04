import React , { Component } from 'react';
import {
  BrowserRouter, Switch,
  Route, Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from "./containers/login/Login";
import NotFound from "./containers/notFound/NotFound";

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
            {
              // <PrivateRoute exact path="/" component={DashBoard} />
            }
            <Route exact path="/login" component={Login} /> 
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
  );
};

export default App;
