import { CONTENT_TYPES } from "constants/index";
import { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { BundleCurve } from "react-svg-curve";

const ServiceMain = ({ title, image, imgRotation, titleRef, variant }) => {
  return (
    <div className="w-[500px] h-[550px] flex flex-col justify-between mr-6">
      <div
        ref={titleRef}
        className={`font-syne font-bold text-4xl text-center w-full ${
          !variant ? "text-[#051B39]" : "text-white"
        }`}
      >
        {title}
      </div>
      <div className={`flex ${variant ? "justify-center" : "justify-start"}`}>
        <img
          src={image}
          alt={"main-logo"}
          style={{
            transform: `rotate(${-1 * imgRotation || 0}deg)`,
            width: 300,
          }}
        />
      </div>
    </div>
  );
};

const ServiceSection = ({
  title,
  image,
  onClick,
  variant,
  isSelected,
  index,
  servicesRef,
}) => {
  const serviceRef = useRef();

  useEffect(() => {
    if (servicesRef?.current && serviceRef.current)
      servicesRef.current[index] = serviceRef.current;
  }, [serviceRef.current]);

  return (
    <div
      ref={serviceRef}
      className={`rounded border-[3px] border-[#ffffff00] ${
        !isSelected
          ? variant
            ? "hover:border-orange-300"
            : "hover:border-cyan-300"
          : ""
      } transition-all`}
    >
      <div
        className={`w-28 h-28 flex flex-col justify-around items-center ${
          isSelected
            ? variant
              ? "service-selector-gradient-B"
              : "service-selector-gradient-A"
            : "bg-[#D9D9D9]"
        } cursor-pointer rounded`}
        onClick={onClick}
      >
        <img className="w-16 h-16" src={image} alt="service" />
        <div
          className={`font-syne text-base font-bold text-center mb-1 ${
            isSelected
              ? variant
                ? "text-[#0C4593]"
                : "text-white"
              : "text-[#051B39]"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const ServiceSections = ({
  services,
  servicesRef,
  servicesWrapperRef,
  selectedSection,
  selectSection,
  variant,
}) => {
  return (
    <div
      className="h-[448px] flex flex-col justify-between mr-6"
      ref={servicesWrapperRef}
    >
      {services.map((service, index) => (
        <ServiceSection
          title={service.title}
          image={service.logo}
          onClick={() => selectSection(index)}
          variant={variant}
          isSelected={index === selectedSection}
          index={index}
          servicesRef={servicesRef}
        />
      ))}
    </div>
  );
};

const ContentTitle = ({ text, variant }) => {
  return (
    <div
      className={`w-full text-center font-syne font-semibold text-3xl mb-8 ${
        variant ? "text-[#051B39]" : "text-white"
      }`}
    >
      {text}
    </div>
  );
};

const ContentPara = ({ text, variant }) => {
  return (
    <div
      className={`w-full mb-5 text-start font-raleway text-lg leading-tight ${
        variant ? "text-[#222D39]" : "text-white"
      }`}
    >
      {text}
    </div>
  );
};

const ContentImage = ({ src }) => {
  return <img src={src} className="max-w-full h-10 mb-4" />;
};

const ContentButton = ({ text, src, onClick }) => {
  return (
    <div className="my-4 w-full flex justify-center relative">
      <CustomButton text={text} onClick={onClick} icon={src} isSmall />
    </div>
  );
};

const ContentError = ({ type }) => {
  <div className="text-red">Unknown type in content: {type}</div>;
};

const ServiceContent = ({ content, variant }) => {
  return (
    <div className="h-full flex flex-col justify-center mr-6">
      <div
        className={`w-[450px] h-[480px] overflow-y-auto p-7 pr-4 ${
          variant ? "bg-[#D9D9D9]" : "service-content-gradient"
        }`}
      >
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
                  onClick={() =>
                    window.open(item.link, "_blank", "noopener,noreferrer")
                  }
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

const ServiceData = ({ data }) => {
  const [selectedSection, setSelection] = useState(0);
  const [curves, setCurves] = useState([]);

  const titleRef = useRef(null);
  const servicesWrapperRef = useRef(null);
  const servicesRef = useRef([]);
  const curveRef = useRef(null);

  const variant = data.variant;

  const adjustCurve = () => {
    if (
      !titleRef.current ||
      !servicesRef.current ||
      !curveRef.current ||
      !servicesWrapperRef.current
    )
      return console.error("Something went wrong in adjustCurve");

    const CURVE_PADDING = 10;
    const CURVE_PADDING_MINOR = 2;
    const titleRect = titleRef.current.getBoundingClientRect();

    const servicesWrapperRect =
      servicesWrapperRef.current.getBoundingClientRect();

    const curves = [];

    if (!variant) {
      const width =
        servicesWrapperRect.left - titleRect.left - titleRect.width / 2;
      curveRef.current.style.width = width;
      const height = servicesWrapperRect.height;
      curveRef.current.style.height = height;
      curveRef.current.style.left = titleRect.left + titleRect.width / 2;

      const firstCurvePoints = [];
      firstCurvePoints.push([CURVE_PADDING_MINOR, CURVE_PADDING]);
      firstCurvePoints.push([CURVE_PADDING_MINOR, (0.8 * height) / 2]);
      firstCurvePoints.push([CURVE_PADDING_MINOR, height / 2]);
      firstCurvePoints.push([width / 3, servicesWrapperRect.height / 2]);
      curves.push({ points: firstCurvePoints });

      curves.push({
        points: [[width / 3, servicesWrapperRect.height / 2]],
        showPoints: true,
      });

      servicesRef.current.forEach((ref) => {
        const refRect = ref.getBoundingClientRect();
        const points = [];
        const x1 = width / 3;
        const y1 = servicesWrapperRect.height / 2;
        const x2 = width - CURVE_PADDING;
        const y2 = refRect.top - servicesWrapperRect.top + refRect.height / 2;
        points.push([x1, y1]);
        points.push([(x1 + x2) / 2, y1]);
        points.push([(x1 + x2) / 2, y2]);
        points.push([x2, y2]);
        curves.push({ points });
      });
    } else {
      const width =
        titleRect.left -
        servicesWrapperRect.left -
        servicesWrapperRect.width +
        titleRect.width / 2;
      curveRef.current.style.width = width;
      const height = servicesWrapperRect.height;
      curveRef.current.style.height = height;
      if (variant)
        curveRef.current.style.left =
          servicesWrapperRect.left + servicesWrapperRect.width;
      else curveRef.current.style.left = titleRect.left + titleRect.width / 2;

      const firstCurvePoints = [];
      firstCurvePoints.push([width - CURVE_PADDING_MINOR, CURVE_PADDING]);
      firstCurvePoints.push([width - CURVE_PADDING_MINOR, (0.8 * height) / 2]);
      firstCurvePoints.push([width - CURVE_PADDING_MINOR, height / 2]);
      firstCurvePoints.push([(2 * width) / 3, servicesWrapperRect.height / 2]);
      curves.push({ points: firstCurvePoints });

      curves.push({
        points: [[(2 * width) / 3, servicesWrapperRect.height / 2]],
        showPoints: true,
      });

      servicesRef.current.forEach((ref) => {
        const refRect = ref.getBoundingClientRect();
        const points = [];
        const x1 = (2 * width) / 3;
        const y1 = servicesWrapperRect.height / 2;
        const x2 = CURVE_PADDING;
        const y2 = refRect.top - servicesWrapperRect.top + refRect.height / 2;
        points.push([x1, y1]);
        points.push([(x1 + x2) / 2, y1]);
        points.push([(x1 + x2) / 2, y2]);
        points.push([x2, y2]);
        curves.push({ points });
      });
    }

    setCurves(curves);
  };

  useEffect(() => {
    setTimeout(() => {
      adjustCurve();
      window.addEventListener("resize", adjustCurve);
    }, 10);
    return window.removeEventListener("resize", adjustCurve);
  }, [selectedSection]);

  console.log(data.background, "B");
  if (!variant)
    return (
      <div
        className="w-full flex justify-center items-center h-[700px] relative"
        style={{ background: data.background || "" }}
      >
        <svg ref={curveRef} className="absolute">
          {curves.map((curve) => (
            <BundleCurve
              data={curve.points}
              showPoints={!!curve.showPoints}
              pointElement={([x, y], i) => (
                <circle cx={x} cy={y} r="5" key={i} />
              )}
              strokeWidth={1.8}
            />
          ))}
        </svg>
        <ServiceMain
          title={data.title}
          image={data.mainImg}
          titleRef={titleRef}
          variant={variant}
        />
        <ServiceSections
          services={data.blocks}
          servicesRef={servicesRef}
          servicesWrapperRef={servicesWrapperRef}
          selectedSection={selectedSection}
          selectSection={setSelection}
          variant={variant}
        />
        <ServiceContent
          content={data.blocks[selectedSection].content}
          variant={variant}
        />
      </div>
    );
  return (
    <div
      className="w-full flex justify-center items-center h-[700px] relative"
      style={{
        backgroundImage: `url(${data.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <svg ref={curveRef} className="absolute">
        {curves.map((curve) => (
          <BundleCurve
            data={curve.points}
            showPoints={!!curve.showPoints}
            pointElement={([x, y], i) => (
              <circle
                cx={x}
                cy={y}
                r="5"
                key={i}
                stroke={"white"}
                fill={"white"}
              />
            )}
            strokeWidth={1.8}
            stroke={curve.color || "white"}
          />
        ))}
      </svg>
      <ServiceContent
        content={data.blocks[selectedSection].content}
        variant={variant}
      />
      <ServiceSections
        services={data.blocks}
        servicesRef={servicesRef}
        servicesWrapperRef={servicesWrapperRef}
        selectedSection={selectedSection}
        selectSection={setSelection}
        variant={variant}
      />
      <ServiceMain
        title={data.title}
        image={data.mainImg}
        titleRef={titleRef}
        variant={variant}
      />
    </div>
  );
};

export default ServiceData;
