import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import HomePage from './Pages/home.jsx';
import AboutPage from './Pages/about.jsx';
import ClassSchedule from './Pages/class-schedule.jsx';
import WhatAshtanga from './Pages/what-ashtanga.jsx';
import NewToAshtanga from './Pages/new-to-ashtanga.jsx';
import './styles/App.css'
import './styles/banner.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/ashtanga" element={<WhatAshtanga />} />
      <Route path="/new-to-ashtanga" element={<NewToAshtanga />} />
      
    </Routes>
  </BrowserRouter>,
);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
