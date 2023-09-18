import './App.css';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <Main>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={ <Home/> } /> 
            <Route exact path="/about" element={ <About/> } /> 
          </Routes>
        </div>
      </Main>
    </NoteState>
    </>
  );
}

export default App;
