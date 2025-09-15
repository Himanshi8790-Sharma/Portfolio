import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services";
import Resume from "./components/Resume/Start";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Portfolio" element={<Portfolio />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
