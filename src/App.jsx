import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DashboardPage from './pages/DashboardPage';
const App = () => {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/Dashboard" element={<DashboardPage />} /> 



        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
