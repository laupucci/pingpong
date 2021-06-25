import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/user";
import jwt from "jsonwebtoken";
import "./App.css";
import Home from "./components/Home";
import Match from "./components/Match";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import MyMatches from "./components/User/matches";
import AllMatches from "./components/AllMatches";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Nav} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/allMatches" component={AllMatches} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/:matchId" component={Match}/>
          <Route exact path="/matches/:userId" component={MyMatches}/>
        </Switch>
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;