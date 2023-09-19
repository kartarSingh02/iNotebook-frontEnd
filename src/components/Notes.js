import React,{useContext} from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes, setNotes}= context;
  return (
        <div className="row">
            <h2>Your Notes</h2>
            {notes.map((note)=>{
                return <NoteItem key={note.id} note={note}/>;
            })}
        </div>
  )
}

export default Notes