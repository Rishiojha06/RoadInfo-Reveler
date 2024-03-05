import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MapPage from './Components/MapPage';
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vienna-streets" element={<MapPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
