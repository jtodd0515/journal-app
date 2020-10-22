import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "25px",
    margin: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.header}>
                <Typography variant='h2'>
                    Welcome to The Journal App
                </Typography>
            </Box>
        </Container>
    )
}

export default Welcome;