import React, { Component } from "react";
import {
  Route, BrowserRouter } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";

import psaHome from "./PSA/psaHome";
import ESA from "./ESA/esaHome";
import ECI from "./ECI/eciHome";
import Header from "./component/header";
import Home from './component/Home';

import CreateAccount from './PSA/createAccount/CreateAccount';
 

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="container">
            <Header/>
            <div className="contentRest">
              <Route path="/" component={Home} exact />
              <Route path="/PSA" component={psaHome} exact />
              <Route path="/ESA" component={ESA}/>
              <Route path="/ECI" component={ECI}/>
              <Route path="/PSA/ca" component={CreateAccount} exact></Route>
            </div>
        </div>
      </BrowserRouter >
    );
  }
}
 
export default Main;