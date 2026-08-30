import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Equipments from "./Pages/Equipments";
import Detail from "./Pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/equipment" element={<Equipments />} />
        <Route path="/services/:id" element={<Detail />} />
        <Route path="/equipment/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;