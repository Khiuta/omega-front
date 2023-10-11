import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/login" component={Login} />
    </Switch>
  );
}
