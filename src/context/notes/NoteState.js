import NoteContext from "./noteContext";
// eslint-disable-next-line 
import { useState } from "react";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = []

    const [ notes, setNotes] = useState(notesInitial)

    // get all notes
    const getNotes = async () =>{ 
        console.log("Adding a note")
        // Todo Api call
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTZkNDI1M2YyN2UwMDA3YWM1ZmNjIn0sImlhdCI6MTY5NDYwMjU3N30.z3kz3Hj3t0xXkpVtpVTE__YZULdkhKzBsQd67Z0aXF0'
            },
        });
        const json = await response.json()
        console.log(json);
        setNotes(json)
    }

    // adding note
    const addNote = async (title, description, tag) =>{ 
        console.log("Adding a note")
        // Todo Api call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTZkNDI1M2YyN2UwMDA3YWM1ZmNjIn0sImlhdCI6MTY5NDYwMjU3N30.z3kz3Hj3t0xXkpVtpVTE__YZULdkhKzBsQd67Z0aXF0'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

        // manual data
        const note =  {
        "_id": "65081878820fc9be3fd5ed5fs3",
        "user": "65016d4253f27e0007ac5fcc",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-09-18T09:29:28.871Z",
        "__v": 0
    };
    // concat returns an array, whereas push updates array
        setNotes(notes.concat(note))
        // Reset the form fields to their initial values
        // setNotes({ title: '', description: '', tag: 'default' });

    }

    // deleting note
    const deleteNote = (id) =>{
         // Todo Api call
        console.log("deleting node with id" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    // editing note
    const editNote = async (id, title, description, tag) =>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTZkNDI1M2YyN2UwMDA3YWM1ZmNjIn0sImlhdCI6MTY5NDYwMjU3N30.z3kz3Hj3t0xXkpVtpVTE__YZULdkhKzBsQd67Z0aXF0'
            },
            body: JSON.stringify({title, description, tag})
        });
        // const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id===id){
                element.title =title;
                element.description =description;
                element.tag =tag;
            }     
        }
    } 

    return(
        // we are wrapping so that any children can access the states without props drilling and using 2 {{}} coz sending mulitple props and value of state is state and udpate is update
        <NoteContext.Provider value={ {notes, addNote, deleteNote, editNote, getNotes}}>
        {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState;