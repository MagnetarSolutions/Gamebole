import { STRIP_TRIP_DURATION } from "constants";
import { DarkModeContext } from "contexts/DarkModeContext";
import { useContext, useEffect, useRef, useState } from "react";
import FooterStrip from "resources/backgrounds/footer-strip.svg";
import Logo from "resources/logo/logo.png";
import PrivacyPolicy from "./PrivacyPolicy";

const ItemList = ({ title, items }) => {
  return (
    <div className="m-8 my-4 md:my-8">
      <div className="font-bold mb-2">{title}</div>
      <div className="flex">
        <div className="w-8 h-1 bg-[#006EFF]"></div>
        <div className="w-14 h-1 bg-[#5BFFFF] rounded-r-full"></div>
      </div>
      {items.map((item) => (
        <div className="my-2 md:my-4 cursor-pointer">{item.name}</div>
      ))}
    </div>
  );
};

const Footer = () => {
  const [animationDirection, setAnimationDirection] = useState(false);
  const animationDirectionRef = useRef(animationDirection);
  const intervalRef = useRef(null);

  const [isDarkMode] = useContext(DarkModeContext);

  const switchAnimationDirection = () => {
    animationDirectionRef.current = !animationDirectionRef.current;
    setAnimationDirection(animationDirectionRef.current);
  };

  useEffect(() => {
    switchAnimationDirection();
    intervalRef.current = setInterval(
      switchAnimationDirection,
      STRIP_TRIP_DURATION
    );
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="h-[555px] bg-[#B4EAFF] dark:bg-[#110828] flex justify-center items-center transition-all duration-1000">
      <div
        className={`absolute w-full h-[555px] bg-no-repeat bg-cover ${
          isDarkMode ? "bg-footerBackgroundDark" : "bg-footerBackground"
        }`}
      ></div>
      <div className="absolute w-full h-[555px] opacity-90 bg-no-repeat bg-cover bg-footerStrips"></div>
      <div className="absolute h-[12vw] opacity-50">
        <img
          src={FooterStrip}
          alt=""
          className={
            "object-cover h-full duration-[10000ms] ease-linear " +
            (!animationDirection
              ? "ml-[85vw] mt-[0px]"
              : "ml-[70vw] mt-[200px]")
          }
        />
      </div>
      <div className="absolute flex flex-wrap w-full justify-around text-white">
        <div className="flex-col max-w-60 md:max-w-80 mb-4 hidden md:flex">
          <img className="w-40 md:w-56 mb-2" src={Logo} alt="logo"></img>
          <div>
            Gamebole: A global game development partner that helps developers
            and publishers to build games by providing custom engineering and
            game art services."
          </div>
        </div>
        <div className="flex flex-wrap w-full md:max-w-[50%] justify-start md:justify-around">
          <div>
            <ItemList
              title={"Gamebole"}
              items={[
                { name: "Home" },
                { name: "About Us" },
                { name: "Careers" },
                { name: "Services" },
                { name: "Contact Us" },
              ]}
            />
          </div>
          <div>
            <ItemList
              title={"Blogs"}
              items={[
                { name: "Unity 3D" },
                { name: "Maya 3D" },
                { name: "Blender 3D" },
                { name: "Game Design" },
                { name: "Game Development" },
              ]}
            />
          </div>
          <div>
            <ItemList
              title={"Phone Numbers"}
              items={[
                { name: "00 000 0000 0000" },
                { name: "00 000 0000 0000" },
              ]}
            />
            <ItemList
              title={"Find Us"}
              items={[{ name: "Main Market, Lahore" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
