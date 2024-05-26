import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");

    setIsDarkMode(hasDarkClass);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode)
      document.getElementsByClassName("App")[0].classList.remove("dark");
    else document.getElementsByClassName("App")[0].classList.add("dark");
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
