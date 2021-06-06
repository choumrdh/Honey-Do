import React from "react";
import TodoList from "../components/Todo/TodoList";
import Memo from "../components/Memo/Memo";
import Navbar from "../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
const HomePage = ({ todos, setTodos, firstname }) => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Navbar firstname={firstname} />

        <Container>
          <Grid direction="row" justify="center" alignItems="center">
            <Grid xs={12} md={4} lg={4} spacing={2}>
              <Memo />
            </Grid>
            <Grid xs={12} md={8} lg={8} spacing={2}>
              <TodoList todos={todos} setTodos={setTodos} />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
