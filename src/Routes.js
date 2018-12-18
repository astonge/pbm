import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./containers/Home";
import NewZone from "./containers/NewZone";
import NewAd from "./containers/NewAd";
import NewAdvertiser from "./containers/NewAdvertiser";

export default () =>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/newzone" exact component={NewZone}/>
    <Route path="/newad" exact component={NewAd}/>
    <Route path="/newadvertiser" exact component={NewAdvertiser}/>
  </Switch>