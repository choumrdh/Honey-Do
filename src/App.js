import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import HomePage from "./pages/Homepage";
import AccountPage from "./pages/Accountpage";

function App() {
  const storage = window.localStorage;
  const [firstname, setFirstname] = useState(
    storage.getItem("firstName") || "Mickey"
  );
  const [lastname, setLastname] = useState(
    storage.getItem("lastName") || "Chou"
  );
  const savedTodoList = storage.getItem('todos')
  const [todos, setTodos] = useState(savedTodoList ? JSON.parse(savedTodoList) : []);
  // console.log('todo:app', todos);

  const savedMemo = storage.getItem("memo");
  const [memo, setMemo] = useState(savedMemo? JSON.parse(savedMemo):"");
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/home"
          render={() => <HomePage todos={todos} setTodos={setTodos} firstname={firstname} memo={memo} setMemo={setMemo}/>}
        />
        <Route
          exact
          path="/account"
          render={() => (
            <AccountPage
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
