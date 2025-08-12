import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philippine-police-chief-tracker-teams-on-standby-to-rearrest-freed-convicts" element={<Navigate to="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" replace />} />
        <Route path="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" element={<ArticlePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
