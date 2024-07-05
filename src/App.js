import Home from "pages/Home";
import Blog from "pages/Blog";
import BlogPixelPerfection from "pages/blogs/BlogPixelPerfection";
import Header from "components/Header";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { createContext, useContext, useLayoutEffect } from "react";
import Footer from "components/Footer";
import Copyrights from "components/Copyrights";
import Services from "pages/Services";
import useDarkMode from "hooks/useDarkMode";
import { DarkModeContext } from "contexts/DarkModeContext";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="App">
      <Router>
        <Wrapper>
          <DarkModeContext.Provider value={[isDarkMode, toggleDarkMode]}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route
                path="/blog/pixel-perfection"
                element={<BlogPixelPerfection />}
              ></Route>
            </Routes>
            <Footer />
            <Copyrights />
          </DarkModeContext.Provider>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
