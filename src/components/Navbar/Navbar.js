import React from "react";
import { BiListCheck } from "react-icons/bi";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginBtn: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ firstname }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.loginBtn}
            color="inherit"
            aria-label="login"
          >
            <a href="/">
              <LockIcon />
            </a>
          </IconButton>
          <BiListCheck style={{ fontSize: 40 }} />
          <Typography variant="h6" className={classes.title}>
            RoomBud
          </Typography>
          <div>
            Hello {firstname}
            <IconButton
              aria-label="account of current user"
              color="inherit"
            >
              <a href="/account">
                <AccountCircle />
              </a>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
