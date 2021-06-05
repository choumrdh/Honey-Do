import React from "react";
import TodoList from "../components/Todo/TodoList";
import Memo from "../components/Memo/Memo";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import { BiListCheck } from "react-icons/bi";
import "../App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    padding:theme.spacing(2)
  },
}));
const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <AppBar position="relative" >
          <Toolbar>
            <BiListCheck style={{ fontSize: 40 }} />
            <Typography variant="h6" color="inherit" noWrap>
              RoomBud
            </Typography>
            <Button color="inherit"><a href="/account">Account</a></Button>
          </Toolbar>
        </AppBar>

        <Container>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid  xs={12} md={4} lg={4} spacing={2}>
              <Memo />
            </Grid>
            <Grid  xs={12} md={8} lg={8} spacing={2}>
              <TodoList/>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
