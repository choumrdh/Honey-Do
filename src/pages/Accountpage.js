import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
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
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Account({
  firstname,
  setFirstname,
  lastname,
  setLastname,
}) {
  const accountStorage = window.localStorage;

  const classes = useStyles();
  const updateBtn = () => {
    accountStorage.setItem("firstName", firstname);
    accountStorage.setItem("lastName", lastname);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
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
            <TextField
              variant="outlined"
              margin="normal"
              name="FirstName"
              label="First Name"
              type="firstName"
              value={firstname}
              id="firstName"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              name="LastName"
              label="Last Name"
              type="lastName"
              id="lastName"
              value={lastname}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
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
          </FormControl>
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        ><HomeIcon/>
          <a className="loginLink" href="/home">
            Home
          </a>
        </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
