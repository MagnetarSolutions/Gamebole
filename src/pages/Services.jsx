import Background from "components/Background";
import CustomButton from "components/CustomButton";
import { gamesData, SCREEN_SIZES, servicesData } from "constants/index";
import ServiceData from "components/ServiceData";
import AiInteractor from "components/AiInteractor";
import ContactForm from "components/ContactForm";
import CustomDialog from "components/CustomDialog";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "contexts/DarkModeContext";
import ServiceDataMobile from "components/ServiceDataMobile";
import useScreenSize from "hooks/useScreenSize";
import SpiderwebAnimation from "components/SpiderwebAnimation";
import { useLocation } from "react-router-dom";

const GameCard = ({ gameCardData }) => {
  const { header, title, para, cover, sources } = gameCardData;

  return (
    <div className="mb-4 bg-[#E9F5FA] dark:bg-[#07070F] mr-2">
      <div className="relative h-[350px] my-2">
        <img
          src={cover}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-[50%] flex justify-center">
          <div className="absolute w-[150px] trapezoid-small text-[#066082] dark:text-white"></div>
          <div className="absolute text-[#FF9900] h-10 flex items-center font-sfui text-sm w-[150px] justify-center">
            {header}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="px-4 font-syne text-[#066082] dark:text-white font-bold text-lg">
          {title}
        </div>
        <div className="px-4 font-sfui text-sm text-gray-500 dark:text-gray-300 leading-tight font-light">
          {para}
        </div>
        <div className="px-4 flex mt-1 bg-[#4ad063]">
          <div className="text-gray-500 dark:text-black mr-1">
            Available on:
          </div>
          <div className="flex items-center">
            {sources.map((source) => (
              <img
                src={source.icon}
                className="h-4 cursor-pointer mr-1 border-solid border-2 border-gray-200 dark:border-gray-600 rounded-sm"
                alt="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeModal, setActiveModal] = useState(false);

  const screenSize = useScreenSize();

  const isLgScreen = screenSize >= SCREEN_SIZES.lg;

  const [isDarkMode] = useContext(DarkModeContext);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [location]);

  return (
    <div className="services w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden relative z-0 flex flex-col items-center">
      <div className="w-full max-w-[2000px]">
        <Background page="services" />
        <div className="w-full h-[600px] md:h-[720px] flex items-center justify-center relative">
          <div className="mt-16 md:mt-0 max-w-[90%] lg:max-w-[40%]">
            <div className="font-syne text-3xl md:text-5xl font-bold text-[#051B39] dark:text-white leading-tight mb-2 transition-color duration-1000">
              Gamebole: Elevating Game Development
            </div>
            <div className="font-raleway text-[#051B39] dark:text-white text-base md:text-lg font-normal leading-normal mb-8 transition-color duration-1000">
              Gamebole offers unparalleled game development services tailored to
              bring your vision to life. With a team of seasoned professionals,
              we specialize in custom game engineering and artistry, ensuring
              every project is an immersive masterpiece. From concept to
              execution, Gamebole is your trusted partner in shaping the future
              of gaming experiences.
            </div>
            <CustomButton text="Explore Now"></CustomButton>
          </div>
          <SpiderwebAnimation />
        </div>
        {servicesData.map((service) =>
          isLgScreen ? (
            <ServiceData
              data={service}
              setActiveModal={(val) => setActiveModal(val)}
            />
          ) : (
            <ServiceDataMobile
              data={service}
              setActiveModal={(val) => setActiveModal(val)}
            />
          )
        )}
      </div>
      <AiInteractor />
      <ContactForm />
      <CustomDialog
        open={activeModal === "h5games"}
        onClose={() => setActiveModal(null)}
        title={"Hello world"}
        wrapperClasses={isDarkMode ? "bg-[#3A177E] dark" : "bg-[#D3E5FE]"}
      >
        <div className=" font-syne text-xl w-full text-center text-[#051B39] dark:text-[#FF9900]">
          H5 Games
        </div>
        <div className="flex w-[900px]">
          <div className="w-1/3">
            <GameCard gameCardData={gamesData[0]} />
          </div>
          <div className="w-2/3">
            <GameCard gameCardData={gamesData[1]} />
          </div>
        </div>
        <div className="flex w-[900px]">
          <div className="w-2/3">
            <GameCard gameCardData={gamesData[2]} />
          </div>
          <div className="w-1/3">
            <GameCard gameCardData={gamesData[3]} />
          </div>
        </div>
      </CustomDialog>
    </div>
  );
};

export default Services;
