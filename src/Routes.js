import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home'
import Route2 from "./pages/Route2";
import NotFound from "./pages/NotFound";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/route2" exact component={ Route2 } />
    <Route component={ NotFound } />
  </Switch>
);
