import { useState } from 'react'
import { Typography, Button, Container, TextField, Radio, 
         RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import {  makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles({
  field:{
    marginTop: '20px !important',
    marginBottom: '20px !important',  
    display: 'block'
  }
});

const Create = () => {
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');
  const [titleError,setTitleError] = useState(false);
  const [detailsError,setDetailsError] = useState(false);
  const [category,setCategory] = useState('todos');
  const classes = useStyles();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title === ''){
       setTitleError(true);
    }

    if(details === ''){
      setDetailsError(true);
   }

    if(title && details){
      console.log(title,details,category);
    }
  }

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
        <form noValidate autoComplete="off"  onSubmit={handleSubmit}>
          <TextField 
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
            helperText={titleError ? 'Title is required' : ''}
          />
          <TextField 
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
            helperText={detailsError ? 'Details is required' : ''}
          />
          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value) }>
                <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money"/>
                <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos"/>
                <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders"/>
                <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work"/>
            </RadioGroup>
          </FormControl>
          <br />
           <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
        </form>
    </Container>
  )
}

export default Create
