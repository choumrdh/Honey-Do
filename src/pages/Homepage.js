import React from "react";
import TodoList from "../components/Todo/TodoList";
import Memo from "../components/Memo/Memo";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { BiListCheck } from "react-icons/bi";
import "../App.css";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));
const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <section className="full ">
        <AppBar position="relative">
          <Toolbar>
            <BiListCheck style={{ fontSize: 40 }} />
            <Typography variant="h6" color="inherit" noWrap>
              RoomBud
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid  xs={12} md={4} lg={3} spacing={1}>
              <Memo />
            </Grid>
            <Grid  xs={12} md={8} lg={9} spacing={1}>
              <TodoList/>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
