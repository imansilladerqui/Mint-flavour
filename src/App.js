import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/home/home";
// import Filter from './containers/Filter/filter';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

