import React, { useState } from "react";
import "./App.css";
import Copyright from "./components/Copyright/Copyright";
import Box from "@material-ui/core/Box";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
// import HomePage from "./pages/Homepage";
import AccountPage from "./pages/Accountpage";
import EditSurveyPage from "./pages/EditSurveyPage";
import Homepagev2 from "./pages/Homepagev2";
import defaultSurvey from "./components/Survey/pre-madeSurvey.json";
import ViewSurveyPage from "./pages/ViewSurveyPage";

function App() {
  const storage = window.localStorage;
  const [firstname, setFirstname] = useState(
    storage.getItem("firstName") || "Mickey"
  );
  const [lastname, setLastname] = useState(
    storage.getItem("lastName") || "Chou"
  );
  // const savedTodoList = storage.getItem("todos");
  // const [todos, setTodos] = useState(
  //   savedTodoList ? JSON.parse(savedTodoList) : []
  // );

  if(!storage.getItem("default")) {
    storage.setItem("default", JSON.stringify(defaultSurvey));
  }
  const getDefault = JSON.parse(storage.getItem("default"));
  const surveyAnswers = JSON.parse(storage.getItem("surveyAnswer"))

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/view" render={() => <ViewSurveyPage firstname={firstname} surveyAnswers={surveyAnswers} getDefault={getDefault}/>} />
          <Route exact path="/add" render={() => <EditSurveyPage firstname={firstname} isEditable={false} />} />
          <Route exact path="/edit" render={() => <EditSurveyPage firstname={firstname} isEditable={true} />} />
          {/* <Route
          exact
          path="/home"
          render={() => <HomePage todos={todos} setTodos={setTodos} firstname={firstname}/>}
        /> */}
          <Route
            exact
            path="/home"
            render={() => (
              <Homepagev2 firstname={firstname} getDefault={getDefault} />
            )}
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
