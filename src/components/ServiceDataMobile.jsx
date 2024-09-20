import { CONTENT_TYPES } from "constants/index";
import { useContext, useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import ArrowRight from "resources/icons/arrow right white.svg";
import ArrowDown from "resources/icons/arrow down white.svg";
import { DarkModeContext } from "contexts/DarkModeContext";

const ContentTitle = ({ text, variant }) => {
  return (
    <div
      className={`w-full text-center font-syne font-semibold text-2xl mb-4 transition-color duration-1000 ${
        variant ? "text-[#051B39] dark:text-white" : "text-white"
      }`}
    >
      {text}
    </div>
  );
};

const ContentPara = ({ text, variant }) => {
  return (
    <div
      className={`w-full mb-4 text-start font-raleway text-base leading-tight transition-color duration-1000 ${
        variant ? "text-[#222D39] dark:text-white" : "text-white"
      }`}
    >
      {text}
    </div>
  );
};

const ContentImage = ({ src }) => {
  return <img src={src} className="max-w-full mb-2" />;
};

const ContentButton = ({ text, src, srcDark, onClick }) => {
  return (
    <div className="my-4 mt-5 md:mt-0 w-full flex justify-center relative">
      <CustomButton
        text={text}
        onClick={onClick}
        icon={src}
        iconDark={srcDark}
        isSmall
      />
    </div>
  );
};

const ContentError = ({ type }) => {
  <div className="text-red">Unknown type in content: {type}</div>;
};

const ServiceContent = ({ content, variant, open, setActiveModal }) => {
  return (
    <div
      className={`${
        !open
          ? "h-0"
          : "h-[450px] border-2 border-[#FF9900] rounded-bl-lg rounded-br-lg"
      } w-full overflow-hidden flex flex-col justify-center mr-6 transition-all duration-500 ${
        variant ? "service-content-gradient-B" : "service-content-gradient-A"
      }`}
    >
      <div className="p-7 pr-4">
        {content.map((item) => {
          switch (item.type) {
            case CONTENT_TYPES.TITLE:
              return <ContentTitle text={item.text} variant={variant} />;
            case CONTENT_TYPES.PARA:
              return <ContentPara text={item.text} variant={variant} />;
            case CONTENT_TYPES.IMAGE:
              return <ContentImage src={item.src} />;
            case CONTENT_TYPES.BUTTON:
              return (
                <ContentButton
                  text={item.text}
                  src={item.src}
                  srcDark={item.srcDark}
                  onClick={() => {
                    if (item.link.type === "popup") {
                      setActiveModal(item.link.value);
                    } else
                      window.open(
                        item.link.value,
                        "_blank",
                        "noopener,noreferrer"
                      );
                  }}
                />
              );
            default:
              <ContentError type={item.type} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const ServiceSection = ({ title, image, variant, content, setActiveModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2 w-[90%]">
      <div
        className={`h-16 ${
          variant
            ? "service-section-mobile-gradient-B"
            : "service-section-mobile-gradient-A"
        } rounded-tr-lg rounded-tl-lg border-[#FF9900] flex justify-between items-center px-5 cursor-pointer ${
          isOpen ? "border-2" : "rounded-lg"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center text-white select-none">
          <img src={image} className="w-14 h-14 mr-4" />
          <div className="font-syne text-xl">{title}</div>
        </div>
        <img src={isOpen ? ArrowDown : ArrowRight} className="w-6 h-6" />
      </div>
      <ServiceContent
        content={content}
        variant={variant}
        open={isOpen}
        setActiveModal={setActiveModal}
      />
    </div>
  );
};

const ServiceSections = ({ services, title, variant }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
      <div
        className={`${
          variant ? "text-white" : "text-[#051B39] dark:text-white"
        } font-syne font-bold text-3xl mb-4`}
      >
        {title}
      </div>
      {services.map((service, index) => (
        <ServiceSection
          title={service.title}
          image={service.logo}
          variant={variant}
          content={service.content}
        />
      ))}
    </div>
  );
};

const ServiceDataMobile = ({ data, setActiveModal }) => {
  const variant = data.variant;
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className=""
      id={data.wrapperId}
      style={{
        backgroundImage: `url(${
          isDarkMode ? data.backgroundDark : data.background
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <ServiceSections
        title={data.title}
        services={data.blocks}
        variant={variant}
        setActiveModal={setActiveModal}
      />
    </div>
  );
};

export default ServiceDataMobile;
