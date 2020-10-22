import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "25px",
    margin: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.header}>
        <Typography variant="h2">Welcome to The Journal App</Typography>
        <Button
          className={classes.button}
          variant="outlined"
          color="secondary"
          component={Link}
          to="/login"
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Welcome;
