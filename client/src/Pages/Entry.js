import React, { useState, useContext } from 'react';
import { FormGroup, TextareaAutosize, Button, TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { UserContext } from "../Context/contexts/UserContext";
import API from '../utils/API';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  FormGroup: {
    marginTop: "20px",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function EntryForm() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  const postEntry = async () => {
    try {
      await API.postEntry(user.token, {
        entryTitle: title,
        entryBody: body
      });
      setRedirect(true);
    } catch (err) {
      console.log(err)
    }
  };
  

  return (
    <Container maxWidth="sm" className={classes.Container}>
      <FormGroup className={classes.FormGroup}>
        <TextField
          onChange={e => setTitle(e.target.value)}
          value={title}
          name="title"
          label="Title"
          id="outlined-margin-none"
          variant="outlined"
        />
        <TextareaAutosize
          onChange={e => setBody(e.target.value)}
          value={body}
          name={body}
          placeholder="Entry"
          aria-label="minimum height"
          rowsMin={10}
        />
        <Button variant="contained" color="primary" size="small" onClick={postEntry} className={classes.Button}>
          Submit
        </Button>
      </FormGroup>
    </Container>
  );
}
