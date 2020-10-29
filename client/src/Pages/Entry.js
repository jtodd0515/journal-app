import React from 'react';
import { FormGroup, TextareaAutosize, Button, TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
// import API from '../../utils/API';

export default function EntryForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const useStyles = makeStyles((theme) => ({
    FormGroup: {
      marginTop: "20px",
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    
  }));
  const classes = useStyles();
  
  // const handleFormSubmit = () => {
  //   if (title === '' || body === '') {
  //     return;
  //   } else {
  //     const postBody = {
  //       title,
  //       body
  //     };
  //     console.log(postBody);
  //       API.postEntry(postBody)
  //         .then(data=>{
  //           console.log(data);
  //         })
  //         .catch(err=>{
  //           console.log(err);
  //         })
  //   }
  // };
   
 
  return (
    <Container maxWidth="sm" className={classes.Container}>
    <FormGroup className={classes.FormGroup}>
    <TextField
          label="Title"
          id="outlined-margin-none"
          variant="outlined"
        />
      <TextareaAutosize
      placeholder="Entry"
      aria-label="minimum height"
      rowsMin={10}
      />
      <Button variant="contained" color="primary" size="small" className={classes.Button}>
  Submit
</Button>
      </FormGroup>
      </Container>
  );
}
 