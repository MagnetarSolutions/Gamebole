import Logo from "resources/logo/logo.png";
import LogoWithoutText from "resources/logo/logo without text.png";
import ContactIcon from "resources/icons/call.svg";
import { ReactComponent as Sun } from "resources/icons/sun.svg";
import { ReactComponent as Moon } from "resources/icons/moon.svg";
import { ReactComponent as Menu } from "resources/icons/menu.svg";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import useScreenSize from "hooks/useScreenSize";
import { SCREEN_SIZES } from "constants/index";
import Sidebar from "./Sidebar";
import { DarkModeContext } from "contexts/DarkModeContext";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const prevScrollY = useRef(0);

  const toggleSidebar = useCallback(
    () => setSidebarOpen(!sidebarOpen),
    [sidebarOpen]
  );

  const screenSize = useScreenSize();
  const isXlScreen = screenSize === SCREEN_SIZES.xl;
  const isLgScreen = screenSize >= SCREEN_SIZES.lg;
  const isSmScreen = screenSize <= SCREEN_SIZES.md;

  useEffect(() => {
    if (screenSize > SCREEN_SIZES.md && sidebarOpen) setSidebarOpen(false);
  }, [screenSize, sidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > prevScrollY.current;
      prevScrollY.current = window.scrollY;
      setHidden(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        !hidden ? "top-0 opacity-100" : "top-[-90px] opacity-0"
      } header sticky z-40 transition-all duration-1000`}
    >
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {isSmScreen ? (
        <div className="flex justify-center">
          <div className="absolute w-full z-50 bg-[#051b39] dark:bg-[#351375] transition-color h-20"></div>
          <div className="absolute w-full px-4 h-20 flex justify-between text-white items-center z-50">
            <div className="flex flex-col justify-center">
              <img src={Logo} alt="Logo" className="w-[120px]" />
            </div>
            <div className="flex flex-col justify-center">
              <Menu className="w-[40px] h-[40px]" onClick={toggleSidebar} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="absolute w-full max-w-[1140px] trapezoid z-50 text-[#051b39] dark:text-[#351375] transition-color"></div>
          <div className="absolute w-full max-w-[1140px] px-[50px] h-[90px] flex justify-between text-white items-center z-50">
            <div className="flex flex-col justify-center">
              <img
                src={isLgScreen ? Logo : LogoWithoutText}
                alt="Logo"
                className={isLgScreen ? "max-w-[165px]" : "max-w-[70px]"}
              />
            </div>
            <div className="flex w-full max-w-96 mx-4">
              <div className="flex justify-between w-full text-center">
                <div className="mx-2 font-sfui">HOME</div>
                <div className="mx-2 font-sfui">ABOUT US</div>
                <div className="mx-2 font-sfui">OUR WORK</div>
                <div className="mx-2 font-sfui">CAREER</div>
              </div>
            </div>
            <div className="flex">
              <div className="border-[1px] border-[#D9D9D9] flex text-xl items-center px-4 py-1 rounded-md cursor-pointer mr-4">
                <img
                  src={ContactIcon}
                  alt={""}
                  className={"min-w-5 h-5 " + (isXlScreen ? "mr-2" : "")}
                />
                {isXlScreen && <div className="text-sm">Contact Us</div>}
              </div>
              <input
                type="checkbox"
                id="darkmode-toggle"
                onClick={toggleDarkMode}
                checked={isDarkMode}
              />
              <label for="darkmode-toggle" className="select-none min-w-20">
                {isDarkMode ? <Moon /> : <Sun />}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
