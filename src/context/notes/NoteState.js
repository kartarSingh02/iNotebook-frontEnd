import NoteContext from "./noteContext";
// eslint-disable-next-line 
import { useState } from "react";

const NoteState = (props) =>{

    return(
        // we are wrapping so that any children can access the states without props drilling and using 2 {{}} coz sending mulitple props and value of state is state and udpate is update
        <NoteContext.Provider value={ {}}>
        {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState;