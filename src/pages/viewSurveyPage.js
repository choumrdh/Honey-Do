import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import Survey from "../components/Survey/SurveyForm";
import preSurvey from "../components/Survey/preSurvey.json"
import SurveryForm2 from "../components/Survey/surveyFormv2"

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

const SurveyPage = ({ firstname }) => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Navbar firstname={firstname} />

        <Container className="todo-app">
          <Grid container direction="row" justify="center" alignItems="center">
            {/* <Survey /> */}
            <SurveryForm2/>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default SurveyPage;
