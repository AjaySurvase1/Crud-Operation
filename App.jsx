import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Component/Homepage';
import Createusers from './Component/Createusers';
import Users from './Component/Users';
import Editusers from './Component/EditUsers';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Homepage/>
    <Routes>
      <Route path="/" element={<Createusers/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/edit/:index" element={<Editusers/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App