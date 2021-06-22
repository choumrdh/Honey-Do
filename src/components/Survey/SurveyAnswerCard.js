import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    alignItems: "center",
    minWidth: 360,
    maxWidth:600,
   
  },
  Card: {
    margin: theme.spacing(3),
    borderColor: "primary.main",
  },
}));

const SurveyAnswerCard = ({ surveyAnswers, getDefault }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {surveyAnswers.map((answer) => {
        return (
          <Grid xs={12} sm={12} lg={12}>
            <Card className={classes.Card} variant="outlined">
            <Typography gutterBottom variant="h5" component="h2">Title:{getDefault.title}</Typography>
            
            <Typography variant="h6" gutterBottom>
              {getDefault.questions[0].label}: {answer[getDefault.questions[0].id]}
            </Typography>
            <Typography variant="h6">
              {getDefault.questions[1].label}: {answer[getDefault.questions[1].id]}
              </Typography>
            <CardContent>
              <Typography variant="subtitle1">
                {getDefault.questions[2].label}: {answer[getDefault.questions[2].id]}
                </Typography>
              <Typography variant="subtitle1" display="block">
                {getDefault.questions[3].label}: {answer[getDefault.questions[3].id]}
              </Typography>
              <Typography variant="subtitle1" display="block">
                {getDefault.questions[4].label}: {answer[getDefault.questions[4].id]}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          
        );
      })}
    </div>
  );
};

export default SurveyAnswerCard;
