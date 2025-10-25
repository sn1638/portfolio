import { StrictMode } from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './index.css'
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar.jsx';
import Second from './second.jsx';
import Third from './third'
import Fourth from './fourth'
import Project from './project.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode className="bg-black">
    <Navbar/>
    <Second />
    <Third />
    <Project />
    <Fourth />
  </StrictMode>
);