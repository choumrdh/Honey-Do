import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    alignItems: "center",
    minWidth: 350,
    maxWidth:600,
    display: 'flex'
  },
  Card: {
    margin: theme.spacing(3),
    borderColor: "primary.main",
  },
}));

const SurveyAnswerCard = ({ surveyAnswers, getDefault }) => {
  console.log("answer card", surveyAnswers[0][0]);
  console.log("default", getDefault.questions[4].label);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {surveyAnswers.map((answer) => {
        return (
          <Card className={classes.Card} variant="outlined">
            <Typography gutterBottom variant="h5" component="h2">Title:{getDefault.title}</Typography>
            
            <Typography variant="h6" gutterBottom>
              {getDefault.questions[0].label}: {answer[0]}
            </Typography>
            <Typography variant="h6">
              {getDefault.questions[1].label}: {answer[1]}
              </Typography>
            <CardContent>
              <Typography variant="subtitle1">
                {getDefault.questions[2].label}: {answer[2]}
                </Typography>
              <Typography variant="subtitle1" display="block">
                {getDefault.questions[3].label}: {answer[3]}
              </Typography>
              <Typography variant="subtitle1" display="block">
                {getDefault.questions[4].label}: {answer[4]}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SurveyAnswerCard;
