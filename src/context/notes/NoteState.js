import NoteContext from "./noteContext";
// eslint-disable-next-line 
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [
    {
        "_id": "650416a12fae86ee3b00508ca",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "utho",
        "description": "uth bhai",
        "tag": "uthjaa",
        "date": "2023-09-15T08:47:14.675Z",
        "__v": 0
    },
    {
        "_id": "650818788205fc9befd5ed5f3",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "Maarde aa gym dharti khilar de",
        "description": "gym jao jldi se gym jao",
        "tag": "personal",
        "date": "2023-09-18T09:29:28.871Z",
        "__v": 0
    },
    {
        "_id": "654081878820fc9befd5ed5f3",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "Maarde aa gym dharti khilar de",
        "description": "gym jao jldi se gym jao",
        "tag": "personal",
        "date": "2023-09-18T09:29:28.871Z",
        "__v": 0
    },
        {
        "_id": "65041a122fae86ee3b00508ca",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "utho",
        "description": "uth bhai",
        "tag": "uthjaa",
        "date": "2023-09-15T08:47:14.675Z",
        "__v": 0
    },
    {
        "_id": "650818783820fc9befd5ed5f3",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "Maarde aa gym dharti khilar de",
        "description": "gym jao jldi se gym jao",
        "tag": "personal",
        "date": "2023-09-18T09:29:28.871Z",
        "__v": 0
    },
        {
        "_id": "6504s1a12fae86ee3b00508ca",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "utho",
        "description": "uth bhai",
        "tag": "uthjaa",
        "date": "2023-09-15T08:47:14.675Z",
        "__v": 0
    },
    {
        "_id": "65081878820fc9be3fd5ed5f3",
        "user": "65016d4253f27e0007ac5fcc",
        "title": "Maarde aa gym dharti khilar de",
        "description": "gym jao jldi se gym jao",
        "tag": "personal",
        "date": "2023-09-18T09:29:28.871Z",
        "__v": 0
    },
    ]

    const [ notes, setNotes] = useState(notesInitial)


    // adding note
    const addNote = (title, description, tag) =>{ 
        console.log("Adding a note")
        // Todo Api call
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

    }

    // deleting note
    const deleteNote = () =>{

    }

    // editing note
    const editNote = () =>{

    } 

    return(
        // we are wrapping so that any children can access the states without props drilling and using 2 {{}} coz sending mulitple props and value of state is state and udpate is update
        <NoteContext.Provider value={ {notes, addNote, deleteNote, editNote}}>
        {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState;