import React, {useEffect, useState, useContext} from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../Context/contexts/UserContext";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import API from "../utils/API"
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
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const UserHome = () => {
  const classes = useStyles();
  const [entries, setEntries] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    loadUsersEntries();
  }, []);

  const loadUsersEntries = async () => {
    try {
      const response = await API.getEntries(user.token);
      console.log(response.data.entries);
      setEntries(response.data.entries);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Box className={classes.header}>
        <Typography variant="h2">My Home Page</Typography>
      </Box>
      <div className={classes.root}>
        {entries.map((entry, i) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{entry.entryTitle} {entry.createdAt}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{entry.entryBody}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  );
};

export default UserHome;
