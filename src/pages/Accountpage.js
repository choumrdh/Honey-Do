import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import DirectionsIcon from "@material-ui/icons/Directions";
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BorderColorIcon from '@material-ui/icons/BorderColor';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        RoomBud
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Account({firstname, setFirstname, lastname, setLastname}) {
  const accountStorage = window.localStorage;
  console.log(firstname, lastname)

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  

  const updateBtn =()=>{
    accountStorage.setItem("firstName", firstname);
    accountStorage.setItem("lastName", lastname)

  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="account">
          Account Profile
        </Typography>
        <form className={classes.form} noValidate>
        <FormControl
            fullWidth
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            {/* <InputLabel 
                htmlFor="outlined-adornment-password" 
                variant="outlined"
                margin="normal"
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
            >
              First Name
            </InputLabel>
            <Input 
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}
                // onChange={handleChange}
                // name="textmask"
                // id="formatted-text-mask-input"
            /> */}
            <TextField 
              label="First Name"
              variant="outlined"
              value={firstname}
              onChange={(event) => {setFirstname(event.target.value)}}
            />
           
           <TextField
            variant="outlined"
            margin="normal"
            name="LastName"
            label="Last Name"
            type="lastName"
            id="lastName"
            value={lastname}
            onChange={(event) => {setLastname(event.target.value)}}
            // autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={updateBtn}
          >
              Update
          </Button>
            {/* <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                   <BorderColorIcon/>
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            /> */}
          </FormControl>
        </form>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <a className="loginLink" href="/home">Home</a>
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
