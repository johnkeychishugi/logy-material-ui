import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
        test:{
            border: (note) =>{
                if(note.category == 'work') {
                    return '1px solid red'
                }
            }
        }
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyle(note);

    return ( 
       <Card elevation={1} className={classes.test}>
           <CardHeader 
            action={
                <IconButton onClick={() => handleDelete(note.id)}>
                    <DeleteOutlined />
                </IconButton>
              }
              title={note.title}
              subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
       </Card>
     );
}
 
export default NoteCard;