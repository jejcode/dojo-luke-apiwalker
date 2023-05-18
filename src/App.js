import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Form from './Components/Form';
import Results from './Components/Results';
import People from './Components/People';
import Planets from './Components/Planets';
import Starships from './Components/Starships';


function App() {

  return (
      <BrowserRouter>
        <Form />
        <Routes>
          <Route path="/" element={<Results/>}/>
            <Route path="/people/:id" element={<People />}/>
            <Route path="/planets/:id" element={<Planets />}/>
            <Route path="/starships/:id" element={<Starships />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
