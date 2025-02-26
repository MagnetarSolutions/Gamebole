import Home from "pages/Home";
import Blog from "pages/Blog";
import Career from "pages/Career";
import BlogPixelPerfection from "pages/blogs/BlogPixelPerfection";
import Header from "components/Header";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Footer from "components/Footer";
import Copyrights from "components/Copyrights";
import Services from "pages/Services";
import useDarkMode from "hooks/useDarkMode";
import { DarkModeContext } from "contexts/DarkModeContext";
// import Announcement from "components/Announcement";

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
      {/* <Announcement /> */}
      <Router>
        <Wrapper>
          <DarkModeContext.Provider value={[isDarkMode, toggleDarkMode]}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/career" element={<Career />}></Route>
              <Route
                path="/blog/pixel-perfection"
                element={<BlogPixelPerfection />}
              ></Route>
              <Route
                path="*"
                element={
                  <div className="py-40 text-red-500 text-3xl font-semibold text-center bg-blue-950">
                    404: PAGE NOT FOUND!
                  </div>
                }
              />
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
