import React, { useState } from "react";
import Service1Content1Img1 from "resources/services/2/3.png";
import Service1Content1Img2 from "resources/services/2/1.png";
import Service1Content1Img3 from "resources/services/2/2.png";
import mainimg from "resources/services/2/main.png";
import background from "resources/services/2/background.png";
import backgroundDark from "resources/services/4/backgroundDark.png";

import Cocos from "resources/services/1/1-2.png";
import playcanvas from "resources/services/1/1-1.png";
import CustomButton from "components/CustomButton";
import Service3Content1Btn1 from "resources/services/2/1-b1.svg";
import Service3Content1Btn1Dark from "resources/services/2/1-b1-dark.svg";


const gamesData = [
  {
    title: "H5 Games",
    image1: playcanvas,
    description1:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    image2: Cocos,
    description2:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
      button: {
        type: "button",
        text: "Experience now",
        src: Service3Content1Btn1,
        srcDark: Service3Content1Btn1Dark,
        link: "/roblox-games",
      },
  },
  {
    title: "H5 Games",
    image1: playcanvas,
    description1:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    image2: Cocos,
    description2:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
      button: {
        type: "button",
        text: "Experience now",
        src: Service3Content1Btn1,
        srcDark: Service3Content1Btn1Dark,
        link: "/roblox-games",
      },
  },
  {
    title: "H5 Games",
    image1: playcanvas,
    description1:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
    image2: Cocos,
    description2:
      "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
      button: {
        type: "button",
        text: "Experience now",
        src: Service3Content1Btn1,
        srcDark: Service3Content1Btn1Dark,
        link: "/roblox-games",
      },
  },
];

const GameCard = ({ game }) => {
  const { text, link, src, srcDark } = game.button;
  return (
    <div className="overflow-hidden p-4 w-[450px] mt-8 service-content-gradient-B dark:bg-dark-card">
      <h3 className="w-full text-center font-syne font-semibold text-3xl mb-8 transition-color duration-1000 dark:text-white ">
        {game.title}
      </h3>
      <img src={game.image1} alt={game.title} className="max-w-full h-10 mb-4" />
      <p className="w-full mb-3 text-start font-raleway text-lg leading-tight transition-color duration-1000 dark:text-white">
        {game.description1}
      </p>
      <img src={game.image2} alt={game.title} className="max-w-full h-10 mb-4" />
      <p className="w-full mb-3 text-start font-raleway text-lg leading-tight transition-color duration-1000 dark:text-white">
        {game.description2}
      </p>
      <div className="mt-4 flex justify-center relative mr-14">
      <CustomButton
        text={text}
        icon={src}
        iconDark={srcDark}
        isSmall
      />
      </div>
    </div>
  );
};

const Servicexdcard = () => {
  const [selectedCategory, setSelectedCategory] = useState("AR");

  return (
    <div
    className="flex flex-col items-center justify-center p-10 relative transition-all duration-500
               bg-[url('resources/services/2/background.png')] 
               dark:bg-[url('resources/services/4/backgroundDark.png')] 
               bg-cover bg-center "
  >
  
          <img src={mainimg} alt="" className="absolute top-10 w-60 right-32"/>
      {/* Heading */}
      <h2 className="text-3xl font-bold text-white">XR</h2>

      <svg width="900" height="110" className="mt-2">
        <line x1="450" y1="0" x2="450" y2="100" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="100" y1="50" x2="800" y2="50" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="100" y1="50" x2="100" y2="100" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="800" y1="50" x2="800" y2="100" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-[235px]">
        {["AR", "VR", "MR"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center w-28 gap-2 px-3 py-2 rounded-lg shadow-md transition-all duration-300 border-[3px] border-[#ffffff00] hover:border-orange-300 dark:hover:border-[#FF9900]
              ${
                selectedCategory === category
                  ? "bg-gray-100 text-black"
                  : "bg-gray-200 text-gray-800"
              }`}
          >
            <img
              src={
                category === "AR"
                  ? Service1Content1Img2
                  : category === "VR"
                  ? Service1Content1Img3
                  : Service1Content1Img1
              }
              alt={category}
              className="w-10 h-10"
            />
            <span className="text-lg font-medium">{category}</span>
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-6 p-8">
        {gamesData.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Servicexdcard;
