import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "../Components/LoginForm";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    marginTop: "20px",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    marginLeft: 10,
  },
}));

// Login page
const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.typography}>
        <Typography align="center" variant="h3" color="secondary">
          Login here for your journal:
        </Typography>
      </Box>
      <LoginForm />
    </Container>
  );
};

// exporting page to be used in other parts of the application
export default Login;
