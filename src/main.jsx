import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <>
        <Home />
      </>
    </React.StrictMode>
  </Router>,
)