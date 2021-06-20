import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import Survey from "../components/Survey/SurveyForm";
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

const SurveyPage = ({ firstname, isEditable }) => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Navbar firstname={firstname} />

        <Container className="todo-app">
          <Grid container direction="row" justify="center" alignItems="center">
            <SurveryForm2 surveyId={1} isEditable={isEditable}/>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default SurveyPage;
