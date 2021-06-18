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

  const [gender, setGender] = useState("");
  const handleSelect = (event) => {
    setGender(event.target.value);
    console.log("selected", gender);
  };
  const [checkOption, setChecOption] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });
  // const error = [checkOption].filter((v) => v).length !== 1;

  const handleChange = (event) => {
    setChecOption({
      ...checkOption,
      [event.target.name]: event.target.checked,
    });
    console.log("picked", checkOption);
  };

  const handleSubmit = () => {
    console.log("I am clicked");
  };

  return (
    <>
      <form className={classes.form} container>
        <Typography variant="h6" gutterBottom>
          Survey
        </Typography>
        <Grid container spacing={3}>
          <FormControl></FormControl>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
                Pick you favorite ice cream flavor
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label="Vanilla"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Chocolate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.checkedC}
                      onChange={handleChange}
                      name="checkedC"
                      color="primary"
                    />
                  }
                  label="Strawberry"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkOption.checkedD}
                      onChange={handleChange}
                      name="checkedD"
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
