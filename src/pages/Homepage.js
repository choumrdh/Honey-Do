import React from "react";
import TodoList from "../components/Todo/TodoList";
import Memo from "../components/Memo/Memo"

import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import { BiListCheck } from "react-icons/bi"
import "../App.css";

const HomePage = () => {
  
  return (
    <>
      <section className="full ">

      <AppBar position="relative">
        <Toolbar>
          <BiListCheck style={{ fontSize: 40 }}/>
          <Typography variant="h6" color="inherit" noWrap>
            Honey Do List
          </Typography>
        </Toolbar>
      </AppBar>

        <Container >
          <Grid spacing={6}>
            <TodoList />
          </Grid>
          <Grid>
            <Memo spacing={6}/>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
