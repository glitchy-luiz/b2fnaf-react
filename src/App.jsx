import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import './script'
import Home from './pages/home'
import Noite from './pages/Noite';
import Globais from './components/Globais';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Noite" element={<Noite/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
