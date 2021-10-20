import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css'

const  Notes = () => {
  const [notes,setNotes] = useState([]);
  const breakpoints ={
    default: 3,
    1100: 2,
    700: 1
  }

  useEffect(()=>{
      fetch('http://localhost:8000/notes')
        .then(res=> res.json())
        .then(data => setNotes(data))
  },[]);

  const handleDelete = async (id) =>{
      await fetch('http://localhost:8000/notes/' + id, {
        method: 'DELETE'
      });

      const newNotes = notes.filter(note => note.id != id);
      setNotes(newNotes);
  }
  
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(note =>(
            <div key={ note.id }  xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </div>
          ))}
      </Masonry>
    </Container>
  )
}

export default Notes;
