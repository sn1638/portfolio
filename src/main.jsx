import { StrictMode } from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar.jsx';
import Second from './second.jsx';
import Third from './third'
import Fourth from './fourth'

createRoot(document.getElementById('root')).render(
  <StrictMode className="bg-black">
    <Navbar/>
    <Second />
    <Third />
    <Fourth />
  </StrictMode>
);
