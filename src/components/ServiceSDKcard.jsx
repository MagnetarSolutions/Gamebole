import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Service1Content1Img1 from "resources/services/5/2.png";
import Service1Content1Img2 from "resources/services/5/1.png";
import GameCardimg from "resources/images/GameCardimg.png";
import mainimg from "resources/services/1/main.png";
import playcanvas from "resources/games/logo 2.png";
import CustomButton from "components/CustomButton";
import Service1Content1Btn1 from "resources/services/1/1-b1.svg";
import Service1Content1Btn1Dark from "resources/services/1/1-b1-dark.svg";


const gamesData = [
    {
        Cardimg: GameCardimg,
        title: "Bus Parking 3D",  
        description:
          "Embark on a thrilling challenge with Gamebole's 'Bus Parking 3D' on PlayCanvas. Maneuver your bus through intricate levels, collecting coins while mastering the art of precision parking within the allotted time. This simple yet engaging game combines skill and strategy for an immersive experience, offering players a chance to showcase their driving prowess in a visually captivating environmen",
        Playimg: playcanvas,
      button: {
        type: "button",
        text: "Play now",
        src: Service1Content1Btn1,
        srcDark: Service1Content1Btn1Dark,
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
        text: "Play now",
        src: Service1Content1Btn1,
        srcDark: Service1Content1Btn1Dark,
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
        text: "Play now",
        src: Service1Content1Btn1,
        srcDark: Service1Content1Btn1Dark,
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
        text: "Play now",
        src: Service1Content1Btn1,
        srcDark: Service1Content1Btn1Dark,
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
   <div className="overflow-hidden p-4 w-[100%] mt-2 rounded-md service-content-gradient-A">
      <img src={GameCardimg} alt={game.title} className="w-full h-56 object-cover rounded-md" />
      <h3 className="text-2xl font-syne mt-3 text-[#FF9900]">{game.title}</h3>
      <p className="text-white text-sm mt-2">
        {game.description}
      </p>
      <span className=""><p className="inline pr-3 text-white">Availible on:</p><img src={playcanvas} alt="" className="inline" /></span>
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

const ServiceSDKcard = () => {
  const [selected, setSelected] = useState("platform1");

  return (
    <div className="flex flex-col items-center justify-center py-10 px-3 bg-[#B4EAFF] relative dark:bg-black">
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

export default ServiceSDKcard;
