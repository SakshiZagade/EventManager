import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Event from './components/Event'
import Register from './components/Register';

function App() {


  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/Update/:id' element={<Update/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
