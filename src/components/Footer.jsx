import { DarkModeContext } from "contexts/DarkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FooterStrip from "resources/backgrounds/footer-strip.svg";
import Logo from "resources/logo/logo.png";

const Footer = () => {
  const [isDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate();

  const ItemList = ({ title, items, links, onClick }) => {
    return (
      <div className="m-8 my-4 md:my-8">
        <div className="font-bold mb-2">{title}</div>
        <div className="flex">
          <div className="w-8 h-1 bg-[#006EFF]"></div>
          <div className="w-14 h-1 bg-[#5BFFFF] rounded-r-full"></div>
        </div>
        {items.map((item, index) => (
          <div
            className="my-2 md:my-4 cursor-pointer hover:opacity-70"
            onClick={onClick || (() => links[index] && navigate(links[index]))}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="h-[555px] bg-[#B4EAFF] dark:bg-[#110828] flex justify-center items-center transition-all duration-1000">
      <div
        className={`absolute w-full h-[555px] bg-no-repeat bg-cover ${
          isDarkMode ? "bg-footerBackgroundDark" : "bg-footerBackground"
        }`}
      ></div>
      <div className="absolute w-full h-[555px] opacity-90 bg-no-repeat bg-cover bg-footerStrips"></div>
      <div className="absolute h-[12vw] opacity-50 left-0" id="strip-3">
        <img
          src={FooterStrip}
          alt=""
          className={"object-cover h-full strip-3-animation"}
        />
      </div>
      <div className="absolute flex flex-wrap w-full justify-around text-white">
        <div className="flex-col max-w-60 md:max-w-80 mb-4 hidden md:flex">
          <img className="w-40 md:w-56 mb-2" src={Logo} alt="logo"></img>
          <div>
          Your global game development partner, delivering custom engineering, game art, and immersive experiences for developers and publishers worldwide.
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
              links={["/home", "/home", "/career", "/services", "/#contact"]}
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
              links={["/blog", "/blog", "/blog", "/blog", "/blog"]}
            />
          </div>
          <div>
            <ItemList
              title={"Phone Numbers"}
              items={[{ name: "+92 3034443174" }]}
              links={[]}
              onClick={() => {
                window.location.href = `tel:+923034443174`;
              }}
            />
            <ItemList
              title={"Find Us"}
              items={[{ name: "Main Market, Lahore" }]}
              links={[]}
              onClick={() => {
                window.open(
                  `https://maps.app.goo.gl/RMXf8E96u8fvLfMN9`,
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
