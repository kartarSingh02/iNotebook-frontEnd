import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const s1 = {
        "name":"kartareyaaa",
        "class":"G-class"
    }

    const [state, setState] = useState(s1);
    const update = () =>{
        setInterval(() => {
            setState({
                "name":"kartareyaaa oyeee",
                "class":"G-class gaddi chkoo"
            })
        }, 1000);
    }

    return(
        // we are wrapping so that any children can access the states without props drilling and using 2 {{}} coz sending mulitple props and value of state is state and udpate is update
        <NoteContext.Provider value={ {state, update}}>
        {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState;