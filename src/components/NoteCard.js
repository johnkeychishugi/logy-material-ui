import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    avatar:{
           backgroundColor: (note) =>{
               if(note.category == 'work'){
                   return '#fbc02d !important';
               }
               if(note.category == 'money'){
                    return '#4caf50 !important'
               }
               if(note.category == 'todos'){
                    return '#c2185b !important'
               }
              return '#2196f3 !important'
           }
        }
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyle(note);

    return ( 
       <Card elevation={1}>
           <CardHeader 
            avatar={
                <Avatar className={classes.avatar}> 
                    {note.category[0].toUpperCase()}
                </Avatar>
            }
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