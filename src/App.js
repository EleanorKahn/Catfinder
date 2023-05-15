import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import CatfinderPage from './pages/CatfinderPage';

function App() {
  return (
    <div className="App">
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
