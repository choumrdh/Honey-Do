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
  Snackbar
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SurveyFormv2 = ({ surveyId }) => {
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
  }));
  const classes = useStyles();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  //   const { id, title, questions } = survayData;
  const surveyToRender = JSON.parse(
    window.localStorage.getItem("default")
  ).find((survey) => surveyId == survey.id);
  const { id, title, questions } = surveyToRender;

  const onDragEnd = (result) => {
    if (!result.destination) return;

    console.log(result.source.index, result.destination.index);
    const temp = questions[result.source.index];
    questions[result.source.index] = questions[result.destination.index];
    questions[result.destination.index] = temp;
  };
  const [isEdit, setIsEdit] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [open, setOpen] = useState(false);
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
    const surveyAnswers = JSON.parse(window.localStorage.getItem("surveyAnswer")) || {};
    const currentSurveyAnswers = surveyAnswers[surveyId] || [];
    console.log(surveyAnswers, currentSurveyAnswers);
    currentSurveyAnswers.push(formValue);
    surveyAnswers[surveyId] = currentSurveyAnswers;
    window.localStorage.setItem("surveyAnswer", JSON.stringify(surveyAnswers));
    setOpen(true);
  };
  const closeHandle = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      {!isEdit && (
        <form className={classes.form} container>
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
                          id={question.id}
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
                        <InputLabel>Gender</InputLabel>
                        <Select
                          name={question.label}
                          id={question.label}
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
                          Pick one ice cream flavor
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
                        id={question.id}
                        label={question.label}
                        multiline
                        fullWidth
                        rows={5}
                        placeholder="Please enter note here"
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
              Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={closeHandle}>
              <Alert onClose={closeHandle} severity="success">
                Thank you for submitting your answer
              </Alert>
            </Snackbar>
            <Button type="button" variant="contained" color="secondary">
              Clear
            </Button>
          </Grid>
        </form>
      )}
      {isEdit && (
        <DragDropContext onDragEnd={onDragEnd}>
          <form className={classes.form} container>
            <Typography variant="h6" gutterBottom>
              Survey
            </Typography>
            <p>{title}</p>
            <div>
              <Droppable droppableId="surveyDrop">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef}>
                    {questions.map((question, index) => {
                      return (
                        <Draggable
                          draggableId={`${question.id}`}
                          key={question.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            switch (question.type) {
                              case "input":
                                return (
                                  <>
                                    <Grid item xs={12} sm={12}>
                                      <TextField
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        key={index}
                                        required
                                        id={question.id}
                                        name={question.label}
                                        label={question.label}
                                        fullWidth
                                        autoComplete="name"
                                        // onChange={(event) => {
                                        //   setFirstName(event.target.value);
                                        // }}
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                      <TextField
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        key={index}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        // onChange={(event) => {
                                        //   setEmail(event.target.value);
                                        // }}
                                      />
                                    </Grid>
                                  </>
                                );
                                break;
                              case "dropdown":
                                return (
                                  <Grid item xs={12} sm={12}>
                                    <FormControl
                                      className={classes.formControl}
                                    >
                                      <InputLabel>Gender</InputLabel>
                                      <Select
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        key={index}
                                        name={question.label}
                                        id={question.label}
                                        autoWidth
                                        // onChange={handleSelect}
                                        // value={gender}
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
                              case "checkbox":
                                return (
                                  <Grid item xs={12}>
                                    <FormControl
                                      className={classes.formControl}
                                    >
                                      <FormLabel component="legend">
                                        Pick one ice cream flavor
                                      </FormLabel>
                                      <FormGroup
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        key={index}
                                      >
                                        {question.value.map((option, index) => (
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                key={index}
                                                //   checked={checkOption.vanilla}
                                                //   onChange={handleChange}
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
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      key={index}
                                      required
                                      id={question.id}
                                      label={question.label}
                                      multiline
                                      fullWidth
                                      rows={5}
                                      placeholder="Please enter note here"
                                      variant="outlined"
                                      // onChange={(event) => {
                                      //   setNotes(event.target.value);
                                      // }}
                                    />
                                  </Grid>
                                );
                                break;
                            }
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                )}
              </Droppable>
            </div>
            <Grid>
              <br></br>
              <Button type="submit" variant="outlined" color="primary">
                Update
              </Button>
            </Grid>
          </form>
        </DragDropContext>
      )}
    </div>
  );
};

export default SurveyFormv2;
