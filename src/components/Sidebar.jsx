import React, { useEffect, useRef, useState } from "react";
import Home from "resources/icons/home.js";
import Work from "resources/icons/work.js";
import Career from "resources/icons/career.js";
import About from "resources/icons/about.js";
import Contact from "resources/icons/call.js";
import { ReactComponent as Sun } from "resources/icons/sun 2.svg";
import { ReactComponent as Moon } from "resources/icons/moon 2.svg";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ title, icon: Icon, onClick }) => {
  return (
    <div
      className="cursor-pointer select-none flex flex-row min-w-28 ml-4 mt-6"
      onClick={onClick}
    >
      <Icon className="w-5 h-5 self-center" />
      <div className="ml-2 text-white dark:text-[#FF9900] transition-color duration-1000">
        {title}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    const sidebarElement = document.getElementById("sidebar");
    if (isOpen) {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      sidebarElement.style.display = "flex";
    }

    if (!isOpen)
      timeoutRef.current = setTimeout(() => {
        if (sidebarElement) sidebarElement.style.display = "none";
      }, [500]);

    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex flex-row-reverse z-50 Sidebar mt-[80px]`}
      id={"sidebar"}
    >
      <div
        className={`bg-[#030f21] dark:bg-[#21094e] h-full transition-all duration-500 ${
          open ? "w-40" : "w-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col overflow-hidden">
            <SidebarItem
              title={"Home"}
              icon={Home}
              onClick={() => navigate("/home")}
            />
            <SidebarItem
              title={"About us"}
              icon={About}
              onClick={() => navigate("/home")}
            />
            <SidebarItem
              title={"Our Work"}
              icon={Work}
              onClick={() => navigate("/home")}
            />
            <SidebarItem
              title={"Career"}
              icon={Career}
              onClick={() => navigate("/home")}
            />
            <SidebarItem
              title={"Contact"}
              icon={Contact}
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="mb-5">
            <SidebarItem
              title={isDarkMode ? "Dark Mode" : "Light Mode"}
              icon={isDarkMode ? Moon : Sun}
              onClick={toggleDarkMode}
            />
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`flex-1 h-full bg-black opacity-20`}
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
