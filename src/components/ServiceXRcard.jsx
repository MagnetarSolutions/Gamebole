import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Service1Content1Img1 from "resources/services/2/3.png";
import Service1Content1Img2 from "resources/services/2/1.png";
import Service1Content1Img3 from "resources/services/2/2.png";
import mainimg from "resources/services/2/main.png";
import background from "resources/services/2/background.png";
import backgroundDark from "resources/services/4/backgroundDark.png";
import GameCardimg from "resources/images/GameCardimg.png";
import playcanvas from "resources/games/logo 2.png";
import CustomButton from "components/CustomButton";
import Service3Content1Btn1 from "resources/services/2/1-b1.svg";
import Service3Content1Btn1Dark from "resources/services/2/1-b1-dark.svg";


const gamesData = [
  {
    Cardimg: GameCardimg,
        title: "Bus Parking 3D",  
        description:
          "Embark on a thrilling challenge with Gamebole's 'Bus Parking 3D' on PlayCanvas. Maneuver your bus through intricate levels, collecting coins while mastering the art of precision parking within the allotted time. This simple yet engaging game combines skill and strategy for an immersive experience, offering players a chance to showcase their driving prowess in a visually captivating environmen",
        Playimg: playcanvas,
      button: {
        type: "button",
        text: "Experience now",
        src: Service3Content1Btn1,
        srcDark: Service3Content1Btn1Dark,
        link: "/roblox-games",
      },
  },
  {
    Cardimg: GameCardimg,
        title: "Bus Parking 3D",  
        description:
          "Embark on a thrilling challenge with Gamebole's 'Bus Parking 3D' on PlayCanvas. Maneuver your bus through intricate levels, collecting coins while mastering the art of precision parking within the allotted time. This simple yet engaging game combines skill and strategy for an immersive experience, offering players a chance to showcase their driving prowess in a visually captivating environmen",
        Playimg: playcanvas,
      button: {
        type: "button",
        text: "Experience now",
        src: Service3Content1Btn1,
        srcDark: Service3Content1Btn1Dark,
        link: "/roblox-games",
      },
  },
  {
    Cardimg: GameCardimg,
        title: "Bus Parking 3D",  
        description:
          "Embark on a thrilling challenge with Gamebole's 'Bus Parking 3D' on PlayCanvas. Maneuver your bus through intricate levels, collecting coins while mastering the art of precision parking within the allotted time. This simple yet engaging game combines skill and strategy for an immersive experience, offering players a chance to showcase their driving prowess in a visually captivating environmen",
        Playimg: playcanvas,
      button: {
        type: "button",
        text: "Experience now",
        src: Service3Content1Btn1,
        srcDark: Service3Content1Btn1Dark,
        link: "/roblox-games",
      },
  },
  {
    Cardimg: GameCardimg,
        title: "Bus Parking 3D",  
        description:
          "Embark on a thrilling challenge with Gamebole's 'Bus Parking 3D' on PlayCanvas. Maneuver your bus through intricate levels, collecting coins while mastering the art of precision parking within the allotted time. This simple yet engaging game combines skill and strategy for an immersive experience, offering players a chance to showcase their driving prowess in a visually captivating environmen",
        Playimg: playcanvas,
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
    <div className="overflow-hidden p-4 w-[100%] mt-2 rounded-md service-content-gradient-B dark:bg-black">
      <img src={GameCardimg} alt={game.title} className="w-full h-56 object-cover rounded-md" />
      <h3 className="text-2xl font-syne mt-3 text-[#FF9900]">{game.title}</h3>
      <p className="text-black text-sm mt-2 dark:!text-white">
        {game.description}
      </p>
      <span className=""><p className="inline pr-3 text-black dark:!text-white">Availible on:</p><img src={playcanvas} alt="" className="inline" /></span>
      <div className="mt-3 flex justify-center">
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

const Servicexdcard = () => {
  const [selectedCategory, setSelectedCategory] = useState("AR");

  return (
    <div
      className=" relative flex flex-col items-center justify-center pb-40 pt-20 px-3 transition-all duration-500 dark:!bg-black
               bg-[url('resources/services/2/background.png')]
               dark:bg-[url('resources/services/4/backgroundDark.png')]
               bg-cover bg-center "
    >
      <img src={mainimg} alt="" className="absolute top-20 w-60 right-32 md:w-48 md:right-24 lg:w-60 lg:right-32" />

      <h2 className="text-3xl font-bold text-white md:text-2xl lg:text-3xl">XR</h2>

      <svg width="900" height="110" className="mt-2 md:mt-4 lg:mt-2">
        <line x1="450" y1="0" x2="450" y2="100" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="100" y1="50" x2="800" y2="50" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="100" y1="50" x2="100" y2="100" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="800" y1="50" x2="800" y2="100" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="flex items-center justify-center gap-[235px]">
        {["AR", "VR", "MR"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center w-28 gap-2 px-3 py-2 rounded-lg shadow-md transition-all duration-300 border-[3px] border-[#ffffff00] hover:border-orange-300 dark:hover:border-[#FF9900]
              ${selectedCategory === category ? "bg-gray-100 text-black" : "bg-gray-200 text-gray-800"}`}
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

      <div className="relative w-full mt-10">
              <Swiper
                slidesPerView={4} 
                spaceBetween={10}
                slidesPerGroup={1} 
                loop={true} 
                navigation
                modules={[Navigation]}
                className="w-full"
      
              >
                {gamesData.map((game, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center relative">
                      <GameCard game={game} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            width: 50px; 
            height: 50px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white !important;
            top: 57% !important; 
            transform: translateY(-50%); 
          }
      
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 20px;
            color: white; 
          }
      
          .swiper-button-prev {
            left: 10px !important;
          }
          
          .swiper-button-next {
            right: 10px !important;
          }
        `}
      </style>
      
      
      
             
            </div>
    </div>
  );
};

export default Servicexdcard;
