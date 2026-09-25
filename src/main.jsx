import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './Pages/home.jsx';
import AboutPage from './Pages/about.jsx';
import ClassSchedule from './Pages/class-schedule.jsx';
import WhatAshtanga from './Pages/what-ashtanga.jsx';
import NewToAshtanga from './Pages/new-to-ashtanga.jsx';
import LoginPage from './Pages/admin/login.jsx';
import GettingStarted from './Pages/getting-started.jsx';
import Admin from './Pages/admin/admin.jsx';
import './styles/App.css'
import './styles/banner.css';
import './styles/widgets.css';
import ProtectedRoute from './utils/protected-route';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/ashtanga" element={<WhatAshtanga />} />
      <Route path="/new-to-ashtanga" element={<NewToAshtanga />} />
      <Route path="/getting-started" element={<GettingStarted />} />
      
      <Route path="/admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
        } /> 

    </Routes>
  </BrowserRouter>,
);
