import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewZone from './NewZone';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

document.addEventListener('DOMContentLoaded', function (){

const app = document.getElementById("root");
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/NewZone" component={NewZone}/>
    </Route>
  </Router>), app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
});