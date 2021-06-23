import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    alignItems: "center",
    maxWidth:600
  },
  Paper:{
    backgroundColor:"#FFEDE1",
    margin:theme.spacing(2),
    // textAlign:"center"
  },
  Typography:{
    margin:theme.spacing(2),
    textAlign:"center",
    display: 'flex',
    color:"#0e1c36", 
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
    
  },
 
}));

const SurveyAnswerCard = ({ surveyAnswers, getDefault }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {surveyAnswers.map((answer) => {
        return (
          <Grid xs={12} sm={12} lg={12}>
            <Paper elevation={3} className={classes.Paper} >
            <Typography gutterBottom variant="h6" className={classes.Typography}><b>{getDefault.title}</b></Typography>
            <Typography variant="h6" gutterBottom className={classes.Typography}>
              <i>{getDefault.questions[0].label}:</i> {answer[getDefault.questions[0].id]}
            </Typography>
           
            <CardContent >
            <Typography variant="subtitle1">
              <i>{getDefault.questions[1].label}:</i>
                 {answer[getDefault.questions[1].id]}
              </Typography>
              <Typography variant="subtitle1">
                <i>{getDefault.questions[2].label}:</i> {answer[getDefault.questions[2].id]}
                </Typography>
              <Typography variant="subtitle1" display="block">
                <i>{getDefault.questions[3].label}:</i> {answer[getDefault.questions[3].id]}
              </Typography>
              <Typography variant="subtitle1" display="block">
                <i>{getDefault.questions[4].label}: </i>{answer[getDefault.questions[4].id]}
              </Typography>
            </CardContent>
            </Paper>
          </Grid>
          
        );
      })}
    </div>
  );
};

export default SurveyAnswerCard;
