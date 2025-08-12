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
        <Route path="/" element={<Navigate to="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" replace />} />
        <Route path="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" element={<ArticlePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
