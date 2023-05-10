import React from 'react'

import {Routes, Route, useNavigate} from "react-router-dom"
import Login from './components/Login.Component'
import Home from './container/Home'
// Crtl+space - impporting the component
import {client} from './client'


const App = () => {
  return (
    <Routes>
      <Route path = "login" element = {<Login />}/>
      <Route path = "/*" element = {<Home/>}/>
    </Routes>
  )
}

export default App
