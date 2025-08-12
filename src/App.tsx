import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" element={<ArticlePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
