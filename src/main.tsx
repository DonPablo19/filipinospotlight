import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.tsx'
import ArticlePage from './pages/ArticlePage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/philippine-police-chief-tracker-teams-on-standby-to-rearrest-freed-convicts" element={<ArticlePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
