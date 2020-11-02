import React, {useEffect, useState, useContext} from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../Context/contexts/UserContext";
// import { Redirect } from "react-router-dom";

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

const UserHome = () => {
  const classes = useStyles();
  const [entries, setEntries] = useState([]);
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Box className={classes.header}>
        <Typography variant="h2">My Home Page</Typography>
      </Box>
    </Container>
  );
};

export default UserHome;
