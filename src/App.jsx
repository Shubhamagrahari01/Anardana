import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Locations from "./pages/Locations";
import Contact from "./pages/contact";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservation />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
