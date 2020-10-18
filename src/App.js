import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pokemon from "./pages/Pokemon";


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function checkLoggedIn() {
    if (sessionStorage.getItem("key")) {
      console.log(sessionStorage.getItem("key"));
      setLoggedIn(true);
    } else if (isLoggedIn) {
      setLoggedIn(false);
    }
  }
  React.useEffect(() => checkLoggedIn());

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />

      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/signup">
          {isLoggedIn ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/pokemon">
          {isLoggedIn ? <Pokemon /> : <Redirect to="/" />}
        </Route>
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>

    </Router>
  );
}

export default App;
