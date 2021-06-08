import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Memo = ({ memo, setMemo }) => {
  const classes = useStyles();
  const memoStorage = window.localStorage;

  const handleChange = (e) => {
    setMemo(e.target.value);
  };
  const handleSubmitMemo = (memo) => {
    if (!memo.text || /^\s*$/.test(memo.text)) {
      return;
    }
    
  };
  const handleDeleteMemo = () => {
    console.log("delete");
    memoStorage.removeItem("memo");
    setMemo("");
  };
  return (
    <Container className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Memo
        </Typography>
        <Input
          fullWidth
          placeholder="Input Memo"
          value={memo}
          onChange={handleChange}
          name="text"
        />
      </CardContent>
      <Typography>
        {memo}
      </Typography>
      <CardActions>
        <Button size="small" onClick={handleSubmitMemo}>
          <AddCircleIcon />
          Memo
        </Button>
        <Button size="small" onClick={handleDeleteMemo}>
          <HighlightOffIcon />
          Delete Memo
        </Button>
      </CardActions>
    </Container>
  );
};

export default Memo;
