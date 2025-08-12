import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import ArticlePage from './pages/ArticlePage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/albayalde-vowed-police-reforms-in-training-institute-launch" replace />} />
        <Route path="/albayalde-vowed-police-reforms-in-training-institute-launch" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
