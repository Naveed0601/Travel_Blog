import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Features from "./Features";
import Intro from "./Intro";

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
      </Routes>
    </>
  );
};

export default Home;
