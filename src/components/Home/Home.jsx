import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Features from "./Features";
import Intro from "./Intro";
import BlogPage from "../context/BlogPage";

const Home = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Features />
              <Blog />
            </>
          }
        />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default Home;
