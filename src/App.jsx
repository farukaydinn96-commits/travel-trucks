import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
