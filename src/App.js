import About from "./components/About/About";
import Header from "./components/context/Header";
import Home from "./components/Home/Home";
import BlogPage from "./components/context/BlogPage"; // Adjust path as needed
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SocialMedia from "./components/context/SocialMedia";
import Photos from "./components/context/Photos";
import Footer from "./components/context/Footer";
import Travel from "./components/Travel/Travel";
import Eat from "./components/Eat/Eat";
import Relax from "./components/Relax/Relax";
import EatPage from "./components/Eat/EatPage";
import RelaxPage from "./components/Relax/RelaxPage";

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
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/eatPage/blogs/:id" element={<EatPage />} />
        <Route path="/relax/blogs/:id" element={<RelaxPage />} />
      </Routes>
      <SocialMedia />
      <Photos />
      <Footer />
    </Router>
  );
};

export default App;
