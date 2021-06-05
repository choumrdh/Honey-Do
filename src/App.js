
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login"
import HomePage from "./pages/Homepage"
import AccountPage from "./pages/Accountpage"


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/account" component={AccountPage}/>
      </Switch>
    </Router>
  );
}

export default App;
