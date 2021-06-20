import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  CardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
  root: {
    padding: theme.spacing(2),
  },
  Card: {
    margin: theme.spacing(2),
  },
}));

const SurveyAnswerCard = ({surveyAnswers}) => {
    console.log("answer card", surveyAnswers)
  const classes = useStyles();
  const {id, } = surveyAnswers
  return (
    <div className={classes.root}>
      {/* {surveyAnswers.map((answer) => {
        
        return (
          <Card className={classes.Card}>
            <CardContent>
              <Typography>{title}</Typography>
              <h6>Survey ID: {id}</h6>
              <Typography>

              </Typography>
            </CardContent>

            
          </Card>
        );
      })} */}
    </div>
  );
};

export default SurveyAnswerCard;