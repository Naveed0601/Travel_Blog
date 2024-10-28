import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import BlogPage from "./BlogPage";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Photos from "./Photos";
import SocialMedia from "./SocialMedia";
const Home = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Features />
                <Blog />
                <SocialMedia />
                <Photos />
              </>
            }
          />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Home;
