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
        <Route path="/" element={<Navigate to="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" replace />} />
        <Route path="/philippine-police-chief-tracker-teams-on-standby-to-rearrest-freed-convicts" element={<Navigate to="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" replace />} />
        <Route path="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
