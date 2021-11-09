import React from "react";
import "./App.css";
import Headers from "./Components/Headers";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Error from "./Components/Error";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/detail" exact>
            <Detail />
          </Route>
          <Route path="/" exact>
            <Home /> 
          </Route>
          <Error />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
