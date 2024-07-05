import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");

  useEffect(() => {
    if (isDarkMode)
      document.getElementsByClassName("App")[0].classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode)
      document.getElementsByClassName("App")[0].classList.remove("dark");
    else document.getElementsByClassName("App")[0].classList.add("dark");
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
