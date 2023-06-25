import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route exact path="/login" element={<Login />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
