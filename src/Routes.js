import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home'
import Route2 from "./pages/Route2";
import Route3 from "./pages/Route3";
import NotFound from "./pages/NotFound";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/route2" exact component={ Route2 } />
    <Route path="/route3" exact component={ Route3 } />
    <Route component={ NotFound } />
  </Switch>
);
