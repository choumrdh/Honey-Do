import React, { useState } from "react";
import "./App.css";
import Copyright from "./components/Copyright/Copyright";
import Box from "@material-ui/core/Box"; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import HomePage from "./pages/Homepage";
import AccountPage from "./pages/Accountpage";
import viewSurveyPage from "./pages/viewSurveyPage";
import defaultSurvey from "./components/Survey/pre-madeSurvey.json";

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

  storage.setItem("default", JSON.stringify(defaultSurvey));

  
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/survey" render={()=><viewSurveyPage/>}/>
        <Route
          exact
          path="/home"
          render={() => <HomePage todos={todos} setTodos={setTodos} firstname={firstname}/>}
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
       <Box mt={8}>
       <Copyright />
     </Box>
     </>
  );
}

export default App;
