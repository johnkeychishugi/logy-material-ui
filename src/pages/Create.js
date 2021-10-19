import React from 'react'
import { Typography, Button, Container, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles({
     btn:{
       fontSize: 60,
       backgroundColor: 'violet'
     }
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
          className={classes.btn}
          onClick={ ()=>{console.log('You clicked me') }}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
        {/* Icons */}
        {/* <AcUnitIcon />
        <AcUnitIcon color="secondary" fontSize="large" />
        <AcUnitIcon color="secondary" fontSize="small" />
        <AcUnitIcon color="action" fontSize="small" />
        <AcUnitIcon color="error" fontSize="small" />
        <AcUnitIcon color="disable" fontSize="small" /> */}


    </Container>
  )
}

export default Create
