import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    alignItems: "center",
    maxWidth: 400,
  },
  Card: {
    margin: theme.spacing(3),
    borderColor: 'primary.main',
  },
}));

const SurveyAnswerCard = ({ surveyAnswers }) => {
  console.log("answer card", surveyAnswers[0][0]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {surveyAnswers.map((answer) => {
        return <Card className={classes.Card} variant="outlined">
          <Typography variant="h5" gutterBottom>
            {answer[0]}
          </Typography>
          <Typography variant="h6">{answer[1]}</Typography>
          <CardContent>
            <Typography variant="subtitle1">{answer[2]}</Typography>
            <Typography variant="subtitle1" display="block">
              {answer[3]}
            </Typography>
            <Typography variant="subtitle1" display="block">
              {answer[4]}
            </Typography>
          </CardContent>
        </Card>;
      })}
    </div>
  );
};

export default SurveyAnswerCard;
