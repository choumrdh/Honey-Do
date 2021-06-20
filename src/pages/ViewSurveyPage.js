import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {Container, Grid, Card} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import SurveyAnswerCard from "../components/Survey/SurveyAnswerCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    padding: theme.spacing(2),
  },
}));

const ViewSurveyPage = ({firstname, surveyAnswers}) => {
    console.log("view", surveyAnswers)
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Navbar firstname={firstname} />

        <Container >
          <Grid container direction="row" justify="center" alignItems="center">
            <SurveyAnswerCard surveyAnswers={surveyAnswers}/>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ViewSurveyPage;