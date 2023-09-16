import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'  

const About = () => {
  const a = useContext(noteContext);
  
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  

  return (
    <div>
    {/* we use .state coz the value if we see is iniside the state in NoteState */}
        This is About {a.state.name} and owning {a.state.class}
    </div>
  )
}

export default About