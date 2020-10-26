import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage'
import GeoMap from './pages/GeoMapPage'

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/geo" component={GeoMap} />
  </Switch>
);

export default routes;
