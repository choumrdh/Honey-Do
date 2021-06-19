import React from "react";
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
  } from "@material-ui/core";
const surveyFormv2 = ({ surveyId }) => {
//   const { id, title, questions } = survayData;
    const surveyToRender = JSON.parse(window.localStorage.getItem('default'))
        .find((survey) => (surveyId == survey.id));
    const { id, title, questions } = surveyToRender;
  return (
    <div>
      <form>
        <h1>{title}</h1>
        <div>
          {questions.map((question) => {
            let questionElement;
            switch (question.type) {
              case "input":
                return (
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    // onChange={(event) => {
                    //   setFirstName(event.target.value);
                    // }}
                  />
                );
                break;
              case "dropdown":
                return (
                  <Select
                    name="gender"
                    id="gender"
                    autoWidth
                    // onChange={handleSelect}
                    // value={gender}
                  >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="notAnswer">Prefer Not to Answer</MenuItem>
                  </Select>
                );
                break;
              case "checkbox":
                return (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={checkOption.vanilla}
                        //   onChange={handleChange}
                          name="vanilla"
                          color="primary"
                        />
                      }
                      label="Vanilla"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={checkOption.chocolate}
                        //   onChange={handleChange}
                          name="chocolate"
                          color="primary"
                        />
                      }
                      label="Chocolate"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={checkOption.strawberry}
                        //   onChange={handleChange}
                          name="strawberry"
                          color="primary"
                        />
                      }
                      label="Strawberry"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={checkOption.cookiencream}
                        //   onChange={handleChange}
                          name="cookiencream"
                          color="primary"
                        />
                      }
                      label="Cookie n' cream"
                    />
                  </FormGroup>
                );
                break;
              case "textfield":
                return (
                  <TextField
                    required
                    id="note"
                    label="Notes"
                    multiline
                    fullWidth
                    rows={5}
                    placeholder="Please enter note here"
                    // defaultValue="Please enter note here"
                    variant="outlined"
                    // onChange={(event) => {
                    //   setNotes(event.target.value);
                    // }}
                  />
                );
                break;
            }
          })}
        </div>
      </form>
    </div>
  );
};

export default surveyFormv2;
