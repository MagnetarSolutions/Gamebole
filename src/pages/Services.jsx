import Background from "components/Background";
import CustomButton from "components/CustomButton";
import { gamesData, servicesData } from "constants/index";
import TechnologiesWeb from "resources/images/technologies web.png";
import ServiceData from "components/ServiceData";
import AiInteractor from "components/AiInteractor";
import ContactForm from "components/ContactForm";
import CustomDialog from "components/CustomDialog";
import { useState } from "react";

const GameCard = ({ gameCardData }) => {
  const { header, title, para, cover, sources } = gameCardData;

  return (
    <div className="mb-4 bg-[#E9F5FA] mr-2">
      <div className="relative h-[350px] my-2">
        <img
          src={cover}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-[50%] flex justify-center">
          <div className="absolute w-[150px] trapezoid-small text-[#066082]"></div>
          <div className="absolute text-[#FF9900] h-10 flex items-center font-sfui text-sm w-[150px] justify-center">
            {header}
          </div>
        </div>
      </div>
      <div className="px-4 w-full">
        <div className="font-syne text-[#066082] font-bold text-lg">
          {title}
        </div>
        <div className=" font-sfui text-sm text-gray-500 leading-tight font-light">
          {para}
        </div>
        <div className="flex mt-1">
          <div className="text-gray-500 mr-1">Available on:</div>
          <div className="flex items-center">
            {sources.map((source) => (
              <img
                src={source.icon}
                className="h-4 cursor-pointer mr-1 border-solid border-2 border-gray-200 rounded-sm"
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
  const [activeModal, setActiveModal] = useState(true);

  return (
    <div className="services w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden relative z-0">
      <div className="max-w-[2000px]">
        <Background page="services" />
        <div className="w-full h-[1044px] flex items-center justify-center relative">
          <div className="max-w-[40%]">
            <div className="font-syne text-5xl font-bold text-[#051B39] leading-tight mb-2">
              Gamebole: Elevating Game Development
            </div>
            <div className=" font-raleway text-[#051B39] text-lg font-normal leading-normal mb-8">
              Gamebole offers unparalleled game development services tailored to
              bring your vision to life. With a team of seasoned professionals,
              we specialize in custom game engineering and artistry, ensuring
              every project is an immersive masterpiece. From concept to
              execution, Gamebole is your trusted partner in shaping the future
              of gaming experiences.
            </div>
            <CustomButton text="Explore Now"></CustomButton>
          </div>
          <img
            className="max-w-[40%]"
            src={TechnologiesWeb}
            alt="tech-web"
          ></img>
        </div>
        {servicesData.map((service) => (
          <ServiceData data={service} />
        ))}
      </div>
      <AiInteractor />
      <ContactForm />
      <CustomDialog
        open={activeModal}
        onClose={() => setActiveModal(null)}
        title={"Hello world"}
        wrapperClasses="bg-[#D3E5FE]"
      >
        <div className=" font-syne text-xl w-full text-center text-[#051B39]">
          H5 Games
        </div>
        <div className="w-full flex w-[900px]">
          <div className="w-1/3">
            <GameCard gameCardData={gamesData[0]} />
          </div>
          <div className="w-2/3">
            <GameCard gameCardData={gamesData[1]} />
          </div>
        </div>
        <div className="w-full flex w-[900px]">
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
