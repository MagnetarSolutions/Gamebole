import React, { useState } from "react";
import Service1Content1Img1 from "resources/services/1/1.png";
import Service1Content1Img2 from "resources/services/1/3.png";
import Service1Content1Img3 from "resources/services/1/2.png";
import mainimg from "resources/services/1/main.png";
import Cocos from "resources/services/1/1-2.png";
import playcanvas from "resources/services/1/1-1.png";
import CustomButton from "components/CustomButton";
import Service1Content1Btn1 from "resources/services/1/1-b1.svg";
import Service1Content1Btn1Dark from "resources/services/1/1-b1-dark.svg";


const gamesData = [
  {
    title: "H5 Games",
    image1: playcanvas,  
    description1:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    image2: Cocos,
    description2: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    button: {
      type: "button",
      text: "Play now",
      src: Service1Content1Btn1,
      srcDark: Service1Content1Btn1Dark,
      link: "/",
    },
  },
  {
    title: "H5 Games",
    image1: playcanvas,  
    description1:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    image2: Cocos,
    description2: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    button: {
      type: "button",
      text: "Play now",
      src: Service1Content1Btn1,
      srcDark: Service1Content1Btn1Dark,
      link: "/",
    },
  },
  {
    title: "H5 Games",
    image1: playcanvas,  
    description1:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    image2: Cocos,
    description2: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    button: {
      type: "button",
      text: "Play now",
      src: Service1Content1Btn1,
      srcDark: Service1Content1Btn1Dark,
      link: "/",
    },
  },
];


const GameCard = ({ game }) => {
  const { text, link, src, srcDark, onClick } = game.button;
  return (
    <div className="overflow-hidden p-4 w-full max-w-xs md:max-w-sm lg:max-w-md mt-10 service-content-gradient-A">
      <h3 className="w-full text-center font-syne font-semibold text-2xl md:text-3xl mb-8 text-white">
        {game.title}
      </h3>
      <img src={game.image1} alt={game.title} className="max-w-full h-auto mb-4" />
      <p className="w-full mb-3 text-start font-raleway text-base md:text-lg text-white">
        {game.description1}
      </p>
      <img src={game.image2} alt={game.title} className="max-w-full h-auto mb-4" />
      <p className="w-full mb-3 text-start font-raleway text-base md:text-lg text-white">
        {game.description2}
      </p>
      <div className="mt-4 flex justify-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CustomButton
            text={text}
            icon={src}
            iconDark={srcDark}
            isSmall
          />
        </a>
      </div>
    </div>
  );
};

const Servicegamecard = () => {
  const [selectedCategory, setSelectedCategory] = useState("H5 Games");

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-[#B4EAFF] relative dark:bg-black">
      <img src={mainimg} alt="" className="absolute top-0 w-72 left-10 md:w-48 md:left-8 lg:w-72 lg:left-10" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-2xl lg:text-3xl">Game Development</h2>

      <svg width="900" height="110" className="mt-2 md:mt-4 lg:mt-2">
        <line x1="450" y1="0" x2="450" y2="100" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
        <line x1="100" y1="50" x2="800" y2="50" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
        <line x1="100" y1="50" x2="100" y2="100" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
        <line x1="800" y1="50" x2="800" y2="100" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
      </svg>

      <div className="flex items-center justify-center gap-[170px]">
        {["Android/iOS", "Roblox", "H5 Games"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center px-6 py-3 rounded-lg shadow-md transition-all duration-300 border-[3px] border-[#ffffff00] hover:border-orange-300 dark:hover:border-[#FF9900]
              ${selectedCategory === category ? "bg-gray-100 text-black" : "bg-gray-200 text-gray-800"}`}
          >
            <img
              src={
                category === "Android/iOS"
                  ? Service1Content1Img2
                  : category === "Roblox"
                  ? Service1Content1Img3
                  : Service1Content1Img1
              }
              alt={category}
              className="w-8 h-8"
            />
            <span className="font-medium ml-2">{category}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-8">
        {gamesData.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Servicegamecard;
