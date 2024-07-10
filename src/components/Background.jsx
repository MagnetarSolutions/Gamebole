import Blob from "resources/backgrounds/blob.svg";
import TopCylinder from "resources/backgrounds/bit 1.svg";
import TopCube from "resources/backgrounds/bit 2.svg";
import MiddleStrip1 from "resources/backgrounds/Strip 1.svg";
import MiddleStrip2 from "resources/backgrounds/Strip 2.svg";
import React, { useEffect, useRef, useState } from "react";
import {
  PAGE_TYPES,
  BACKGROUND_ELEMENTS,
  BACKGROUND,
  STRIP_TRIP_DURATION,
} from "constants/index";

const Background = ({ page = PAGE_TYPES.HOME }) => {
  const [animationDirection, setAnimationDirection] = useState(false);
  const animationDirectionRef = useRef(animationDirection);
  const intervalRef = useRef(null);

  const switchAnimationDirection = () => {
    animationDirectionRef.current = !animationDirectionRef.current;
    setAnimationDirection(animationDirectionRef.current);
  };

  useEffect(() => {
    if (
      !BACKGROUND[page][BACKGROUND_ELEMENTS.MIDDLE_STRIP_1] &&
      !BACKGROUND[page][BACKGROUND_ELEMENTS.MIDDLE_STRIP_2]
    )
      return;
    switchAnimationDirection();
    intervalRef.current = setInterval(
      switchAnimationDirection,
      STRIP_TRIP_DURATION
    );
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [page]);

  return (
    <div className="select-none flex justify-center relative -z-50">
      {BACKGROUND[page][BACKGROUND_ELEMENTS.TOP_WHITE_WAVES] && (
        <div className="absolute w-full h-[600px] md:h-[1044px] opacity-85 bg-no-repeat bg-cover bg-topWhiteWaves"></div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.TOP_DARK_WAVES] && (
        <div className="absolute w-full h-[600px] md:h-[1044px] bg-no-repeat bg-cover bg-topDarkWaves"></div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.MIDDLE_DARK_WAVES] && (
        <div className="absolute w-full h-[850px] md:h-[850px] bg-no-repeat bg-cover bg-middleDarkWaves mt-[1350px]"></div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.TOP_CYLINDER] && (
        <div className="absolute h-[62px]">
          <img
            src={TopCylinder}
            alt=""
            className="object-cover h-full mt-[205px] ml-[10vw]"
          />
        </div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.TOP_CUBE] && (
        <div className="absolute w-full h-[62px]">
          <img
            src={TopCube}
            alt=""
            className="object-cover h-full mt-[890px] ml-[10vw]"
          />
        </div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.BLOB] && (
        <div className="absolute w-full h-[347px] opacity-40 flex flex-row-reverse mt-[830px] overflow-hidden">
          <img src={Blob} alt="" className="object-cover h-full mr-[-173px]" />
        </div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.TOP_TRANSITION] && (
        <div className="absolute w-full h-[600px] md:h-[1044px] bg-no-repeat bg-cover bg-topTransition"></div>
      )}

      {BACKGROUND[page][BACKGROUND_ELEMENTS.MIDDLE_STRIP_1] && (
        <div className="absolute h-[10vw]">
          <img
            src={MiddleStrip1}
            alt=""
            className={
              "object-cover h-full duration-[10000ms] ease-linear " +
              (!animationDirection
                ? "ml-[15vw] mt-[1990px]"
                : "ml-[1vw] mt-[1880px]")
            }
          />
        </div>
      )}
      {BACKGROUND[page][BACKGROUND_ELEMENTS.MIDDLE_STRIP_2] && (
        <div className="absolute h-[10vw]">
          <img
            src={MiddleStrip2}
            alt=""
            className={
              "object-cover h-full duration-[10000ms] ease-linear " +
              (!animationDirection
                ? "ml-[80vw] mt-[2786px]"
                : "ml-[50vw] mt-[3100px]")
            }
          />
        </div>
      )}
    </div>
  );
};

export default Background;
