import { Routes, Route } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import CatfinderPage from './pages/CatfinderPage';
import "./assets/main.css";

function App() {
  return (
    <div className="App bg-sky-300 h-full">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catfinder" element={<CatfinderPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
