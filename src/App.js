import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Homepage from './Pages/Homepage/Homepage'
import Register from './Pages/Register/Register'
import DaftarJual from './Pages/DaftarJual/DaftarJual'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="daftar-jual" element={<DaftarJual />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
