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
} from "@material-ui/core";

const Survery = () => {
  const surveyStorage = window.localStorage;
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [gender, setGender] = useState("");
  const [favorite, setFavorite] = useState("");
  const [notes, setNotes] = useState("");

  const handleSelect = (event) => {
    setGender(event.target.value);
    console.log("selected", gender);
  };
  const [checkOption, setCheckOption] = useState({
    vanilla: false,
    chocolate: false,
    strawberry: false,
    cookiencream: false,
  });
  // const error = [checkOption].filter((v) => v).length !== 1;

  const handleChange = (event) => {
    setCheckOption({
      ...checkOption,
      [event.target.name]: event.target.checked,
    });
    setFavorite(event.target.name);
    console.log("picked", checkOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let surveryInput = {
      id: new Date().getTime(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      favorite: favorite,
      notes: notes,
    };
    console.log(surveryInput);
    surveyStorage.setItem("surveyInput", JSON.stringify(surveryInput));
  };
  const clearForm = () => {
    console.log("I am reset");
  };
  return (
    <>
      <form className={classes.form} container>
        <Typography variant="h6" gutterBottom>
          Survey
        </Typography>
        <p>{title}</p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                id="gender"
                autoWidth
                onChange={handleSelect}
                value={gender}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="notAnswer">Prefer Not to Answer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <FormLabel component="legend">
                Pick one ice cream flavor
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.vanilla}
                      onChange={handleChange}
                      name="vanilla"
                      color="primary"
                    />
                  }
                  label="Vanilla"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.chocolate}
                      onChange={handleChange}
                      name="chocolate"
                      color="primary"
                    />
                  }
                  label="Chocolate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.strawberry}
                      onChange={handleChange}
                      name="strawberry"
                      color="primary"
                    />
                  }
                  label="Strawberry"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.cookiencream}
                      onChange={handleChange}
                      name="cookiencream"
                      color="primary"
                    />
                  }
                  label="Cookie n' cream"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
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
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <br></br>
        <Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <Button type="button" variant="contained" color="secondary">
            Clear
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default Survery;
