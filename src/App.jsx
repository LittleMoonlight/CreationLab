import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Navbar from "./components/Navbar"; // kalau punya navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Tetap tampil di semua halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;