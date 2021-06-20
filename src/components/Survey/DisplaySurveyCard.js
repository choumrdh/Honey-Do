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

const DisplaySurveyCard = ({ surveys }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {surveys.map((survey, index) => {
        const { id, title } = survey;
        return (
          <Card className={classes.Card} key={index}>
            <CardContent>
              <Typography>{title}</Typography>
              <h6>Survey ID: {id}</h6>
            </CardContent>

            <CardActions className={classes.CardActions}>
              <Button size="small">
                <a href={`/view/${id}`}>View</a>
              </Button>
              <Button size="small">
                <a href={`/add/${id}`}>Add</a>
              </Button>
              <Button size="small">
                <a href={`/edit/${id}`}>Edit</a>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default DisplaySurveyCard;
