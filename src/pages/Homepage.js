import React from "react";
// import TodoList from "../components/Todo/TodoList";
import Navbar from "../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Survery from "../components/Survey/SurveyForm"


import "../App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    padding: theme.spacing(2),
  },
}));

const HomePage = ({ todos, setTodos, firstname}) => {
  const classes = useStyles();
  
 
  return (
    <>
      <section className={classes.root}>
        <Navbar firstname={firstname} />
  
        <Container className="todo-app">
          <Grid container direction="row" justify="center" alignItems="center">
            
            {/* <Grid xs={12} sm={8} md={8} lg={8} spacing={2}>
              <TodoList todos={todos} setTodos={setTodos} />
            </Grid> */}
            <Survery/>
          </Grid>
        </Container>
        
      </section>
    </>
  );
};

export default HomePage;
