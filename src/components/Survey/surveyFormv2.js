import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Select,
  TextField,
  Grid,
  Typography,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SurveyFormv2 = ({ surveyId, isEditable }) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    Button: {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      justifyContent: "space-around"
    },
  }));
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(isEditable);
  const [formValue, setFormValue] = useState({});
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const allSurveys = JSON.parse(window.localStorage.getItem("default"));
  const surveyToRender = allSurveys.find((survey) => surveyId == survey.id);
  const { id, title, questions } = surveyToRender;

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const temp = questions[result.source.index];
    questions[result.source.index] = questions[result.destination.index];
    questions[result.destination.index] = temp;
  };

  const textHandler = (event, questionId) => {
    setFormValue({
      ...formValue,
      [questionId]: event.target.value,
    });
  };
  const selectHandler = (event, questionId) => {
    setFormValue({
      ...formValue,
      [questionId]: event.target.value,
    });
  };
  const checkboxSingleHandler = (event, questionId, checkedOption) => {
    setFormValue({
      ...formValue,
      [questionId]: checkedOption,
    });
  };
  const submitHandler = () => {
    const surveyAnswers =
      JSON.parse(window.localStorage.getItem("surveyAnswer")) || {};
    const currentSurveyAnswers = surveyAnswers[surveyId] || [];
    // console.log(surveyAnswers, currentSurveyAnswers);
    currentSurveyAnswers.push(formValue);
    surveyAnswers[surveyId] = currentSurveyAnswers;
    window.localStorage.setItem("surveyAnswer", JSON.stringify(surveyAnswers));
    setOpen(true);
  };
  const closeHandle = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  //   console.log(surveyId, surveyToRender);
  return (
    <div>
      {!isEdit && (
        <form className={classes.form}>
          <Typography variant="h6" gutterBottom>
            Survey
          </Typography>
          <p>{title}</p>
          <Grid container spacing={3}>
            {questions.map((question) => {
              switch (question.type) {
                case "input":
                  return (
                    <>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id={`${question.id}`}
                          name={question.label}
                          label={question.label}
                          fullWidth
                          onChange={(event) => textHandler(event, question.id)}
                          value={formValue[question.id]}
                        />
                      </Grid>
                    </>
                  );
                  break;
                case "dropdown":
                  return (
                    <Grid item xs={12} sm={12}>
                      <FormControl className={classes.formControl}>
                        <InputLabel>{question.label}</InputLabel>
                        <Select
                          name={question.label}
                          id={`${question.id}`}
                          autoWidth
                          onChange={(event) =>
                            selectHandler(event, question.id)
                          }
                          value={formValue[question.id]}
                        >
                          {question.value.map((option, index) => (
                            <MenuItem value={option} key={index}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  );
                  break;
                case "checkbox.single":
                  return (
                    <Grid item xs={12}>
                      <FormControl className={classes.formControl}>
                        <FormLabel component="legend">
                          {question.label}
                        </FormLabel>
                        <FormGroup>
                          {question.value.map((option, index) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  key={index}
                                  checked={formValue[question.id] === option}
                                  onChange={(event) => {
                                    checkboxSingleHandler(
                                      event,
                                      question.id,
                                      option
                                    );
                                  }}
                                  name={option}
                                  color="primary"
                                />
                              }
                              label={option}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  );
                  break;
                case "textfield":
                  return (
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id={`${question.id}`}
                        label={question.label}
                        multiline
                        fullWidth
                        rows={5}
                        variant="outlined"
                        onChange={(event) => textHandler(event, question.id)}
                      />
                    </Grid>
                  );
                  break;
              }
            })}
          </Grid>
          <br></br>
          <Grid>
            <Button variant="contained" color="primary" onClick={submitHandler}>
              <a href={"/view/"+surveyId}>Submit</a>
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={closeHandle}>
              <Alert onClose={closeHandle} severity="success">
                Thank you for submitting your answer
              </Alert>
            </Snackbar>
          </Grid>
        </form>
      )}
      {isEdit && (
        <DragDropContext onDragEnd={onDragEnd}>
          <form className={classes.form}>
            <Typography variant="h6" gutterBottom>
              Survey
            </Typography>
            <p>{title}</p>
            <div>
              <Droppable droppableId="surveyDrop">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {questions.map((question, index) => (
                      <Draggable
                        draggableId={`${question.id}`}
                        key={question.id}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          switch (question.type) {
                            case "input":
                              return (
                                <Grid item xs={12} sm={12}>
                                  <TextField
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    key={`${index}`}
                                    required
                                    disabled
                                    id={`${question.id}`}
                                    name={question.label}
                                    label={question.label}
                                    fullWidth
                                  />
                                </Grid>
                              );
                              break;
                            case "dropdown":
                              return (
                                <Grid item xs={12} sm={12}>
                                  <FormControl
                                    className={classes.formControl}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    key={`${index}`}
                                  >
                                    <InputLabel>{question.label}</InputLabel>
                                    <Select
                                      name={question.label}
                                      id={`${question.id}`}
                                      autoWidth
                                      disabled
                                    >
                                      {question.value.map((option, index) => (
                                        <MenuItem value={option} key={index}>
                                          {option}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                              );
                              break;
                            case "checkbox.single":
                              return (
                                <Grid item xs={12}>
                                  <FormControl
                                    className={classes.formControl}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    key={`${index}`}
                                  >
                                    <FormLabel component="legend">
                                      {question.label}
                                    </FormLabel>
                                    <FormGroup>
                                      {question.value.map((option, index) => (
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              key={`${index}`}
                                              name={option}
                                              disabled
                                              color="primary"
                                            />
                                          }
                                          label={option}
                                        />
                                      ))}
                                    </FormGroup>
                                  </FormControl>
                                </Grid>
                              );
                              break;
                            case "textfield":
                              return (
                                <Grid item xs={12} sm={12}>
                                  <TextField
                                    disabled
                                    required
                                    id={`${question.id}`}
                                    label={question.label}
                                    multiline
                                    fullWidth
                                    rows={5}
                                    variant="outlined"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    key={index}
                                  />
                                </Grid>
                              );
                              break;
                          }
                        }}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </div>
            <Grid className={classes.Button}>
              <br></br>
              <Button
                type="button"
                variant="outlined"
                color="primary"
                onClick={() => {
                  window.localStorage.setItem(
                    "default",
                    JSON.stringify(allSurveys)
                  );
                }}
              >
                <a href="/home">Update Order</a>
              </Button>
              <Button type="button" variant="outlined" color="secondary">
                <a href={"/view/" + surveyId}>View Survey</a>
              </Button>
            </Grid>
          </form>
        </DragDropContext>
      )}
    </div>
  );
};

export default SurveyFormv2;
