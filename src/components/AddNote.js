import React,{useContext, useState} from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {addNote}= context;
    const [note, setNote] = useState({title:"", description:"",tag:"default"})

    const handleClick = (e) =>{
        // this will help not to reload the page
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }  

    const onChange = (e)=>{
        // spreading operator used that it will change the state of title,desc and tags as per change i.e values setting to name
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
    <h2>Add your Notes</h2>    
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description"name="description" onChange={onChange}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
    </div>
  )
}

export default AddNote