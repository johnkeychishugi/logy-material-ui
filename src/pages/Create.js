import React from 'react'
import { Typography, Button, Container } from '@mui/material';
import {  makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles({

});

const Create = () => {
  const classes = useStyles();

  return (
    <Container>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>
        <Button
          onClick={ ()=>{console.log('You clicked me') }}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
    </Container>
  )
}

export default Create
