import React, { useState } from "react";
import Service1Content1Img1 from "resources/services/5/2.png";
import Service1Content1Img2 from "resources/services/5/1.png";
import mainimg from "resources/services/5/main.png";
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
        link: "/roblox-games",
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
        link: "/roblox-games",
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
        link: "/roblox-games",
      },
    },
];

const GameCard = ({ game }) => {
  const { text, link, src, srcDark } = game.button;
  return (
    <div className="overflow-hidden p-4 w-full max-w-xs md:max-w-sm lg:max-w-md mt-10 service-content-gradient-A">
      <h3 className="w-full text-center font-syne font-semibold text-2xl md:text-3xl mb-8 transition-color duration-1000 text-white">
        {game.title}
      </h3>
      <img src={game.image1} alt={game.title} className="max-w-full h-auto mb-4" />
      <p className="w-full mb-3 text-start font-raleway text-base md:text-lg leading-tight transition-color duration-1000 text-white">
        {game.description1}
      </p>
      <img src={game.image2} alt={game.title} className="max-w-full h-auto mb-4" />
      <p className="w-full mb-3 text-start font-raleway text-base md:text-lg leading-tight transition-color duration-1000 text-white">
        {game.description2}
      </p>
      <div className="mt-4 flex justify-center relative">
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

const ServiceSDKcard = () => {
  const [selected, setSelected] = useState("platform1");

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-[#B4EAFF] dark:bg-black relative">
      <img src={mainimg} alt="" className="absolute top-10 w-60 left-32 md:w-48 md:left-24 lg:w-60 lg:left-32" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-2xl lg:text-3xl">SDK's</h2>

      <svg width="900" height="110" className="mt-2 md:mt-4 lg:mt-2">
        <line x1="450" y1="0" x2="450" y2="50" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
        <line x1="100" y1="50" x2="800" y2="50" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
        <line x1="100" y1="50" x2="100" y2="100" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
        <line x1="800" y1="50" x2="800" y2="100" strokeWidth="1" strokeLinecap="round" className="stroke-black dark:stroke-white" />
      </svg>

      <div className="flex items-center justify-center gap-[580px]">
        <div
          className={`flex items-center w-46 gap-2 px-3 py-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 border-[3px] border-[#ffffff00] hover:border-orange-300 dark:hover:border-[#FF9900]
             ${selected === "platform1" ? "bg-gray-100 text-black" : "bg-white text-gray-800"}`}
          onClick={() => setSelected("platform1")}
        >
          <img src={Service1Content1Img2} alt="Android/iOS" className="w-10 h-10" />
          <span className="text-lg font-medium">Platforms</span>
        </div>
        <div
          className={`flex items-center w-46 gap-2 px-3 py-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 border-[3px] border-[#ffffff00] hover:border-orange-300 dark:hover:border-[#FF9900]
             ${selected === "platform2" ? "bg-gray-100 text-black" : "bg-white text-gray-800"}`}
          onClick={() => setSelected("platform2")}
        >
          <img src={Service1Content1Img1} alt="H5 Games" className="w-10 h-10" />
          <span className="text-lg font-medium">Functionalities</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-8">
        {gamesData.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSDKcard;
