import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Result from './Result';
import './css/tailwind.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/result" component={Result}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
