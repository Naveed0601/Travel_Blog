import About from "./components/About/About";
import Header from "./components/context/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SocialMedia from "./components/context/SocialMedia";
import Photos from "./components/context/Photos";
import Footer from "./components/context/Footer";
import Travel from "./components/Travel/Travel";
import Eat from "./components/Eat/Eat";
import Relax from "./components/Relax/Relax";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/relax" element={<Relax />} />
      </Routes>
      <SocialMedia />
      <Photos />
      <Footer />
    </Router>
  );
};

export default App;
