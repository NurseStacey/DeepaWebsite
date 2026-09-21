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
import GettingStarted from './Pages/getting-started.jsx';
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
      <Route path="/getting-started" element={<GettingStarted />} />
      
    </Routes>
  </BrowserRouter>,
);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
