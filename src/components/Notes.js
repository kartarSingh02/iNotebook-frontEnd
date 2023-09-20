import React,{useContext, useEffect, useRef, useState} from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes, getNotes, editNote }= context;
    useEffect(() => {  
      getNotes()
      // eslint-disable-next-line
    }, [])
    const [note, setNote] = useState({id:"" , etitle:"", edescription:"",etag:""})

    const updateNote = (currentNote) =>{
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }

    const ref = useRef(null)
    const refClose = useRef(null)

    const handleClick = (e) =>{
        // this will help not to reload the page
        console.log("updating note", note)
        // e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag)
        ref.current.click();
    }  

    const onChange = (e)=>{
        // spreading operator used that it will change the state of title,desc and tags as per change i.e values setting to name
        setNote({...note, [e.target.name]: e.target.value})
    }
    
  return (
    <>
        <AddNote/>

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.etitle.length<5 || note.edescription.length<5 } onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
            <h2>Your Notes</h2>
            <div className="container">
                {notes.length === 0 && "No notes to display"}
            </div>
            {notes.map((note)=>{
                return <NoteItem key={note._id} updateNote={updateNote} note={note}/>;
            })}
        </div>
    </>
  )
}

export default Notes