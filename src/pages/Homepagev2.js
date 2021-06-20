import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import SurveryForm2 from "../components/Survey/surveyFormv2";
import DisplaySurveyCard from "../components/Survey/DisplaySurveyCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    padding: theme.spacing(2),
  },
}));
const Homepagev2 = ({firstname, getDefault}) => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Navbar firstname={firstname} />

        <Container className="todo-app">
          <Grid container direction="row" justify="center" alignItems="center">
           <DisplaySurveyCard surveys={getDefault}/>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Homepagev2;
