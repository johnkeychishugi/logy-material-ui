import React from 'react'
import { Typography, Button, Container } from '@mui/material';

 const Create = () => {
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
        >
          Submit
        </Button>
        {/* <Button type="submit">Submit</Button>
        <Button type="submit" color="secondary" variant="outlined">Submit</Button>*/}
    </Container>
  )
}

export default Create
