import Blob from "resources/backgrounds/blob.svg";
import Bit1 from "resources/backgrounds/bit 1.svg";
import Bit2 from "resources/backgrounds/bit 2.svg";
import Strip1 from "resources/backgrounds/Strip 1.svg";
import Strip2 from "resources/backgrounds/Strip 2.svg";
import React, { useEffect, useRef, useState } from "react";
import { STRIP_TRIP_DURATION } from "constants/index";

const Background = () => {
  const [animationDirection, setAnimationDirection] = useState(false);
  const animationDirectionRef = useRef(animationDirection);
  const intervalRef = useRef(null);

  const switchAnimationDirection = () => {
    animationDirectionRef.current = !animationDirectionRef.current;
    setAnimationDirection(animationDirectionRef.current);
  };

  useEffect(() => {
    switchAnimationDirection();
    intervalRef.current = setInterval(
      switchAnimationDirection,
      STRIP_TRIP_DURATION
    );
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="-z-50 select-none">
      <div className="absolute w-full h-[1044px] opacity-85 bg-no-repeat bg-cover bg-background1"></div>
      <div className="absolute w-full h-[1044px] bg-no-repeat bg-cover bg-background3 mt-[278px]"></div>
      <div className="absolute w-full h-[850px] bg-no-repeat bg-cover bg-background4 mt-[1350px]"></div>
      <div className="absolute h-[62px]">
        <img
          src={Bit1}
          alt=""
          className="object-cover h-full mt-[205px] ml-[10vw]"
        />
      </div>
      <div className="absolute w-full h-[62px]">
        <img
          src={Bit2}
          alt=""
          className="object-cover h-full mt-[890px] ml-[10vw]"
        />
      </div>
      <div className="absolute w-full h-[347px] opacity-40 flex flex-row-reverse mt-[830px] overflow-hidden">
        <img src={Blob} alt="" className="object-cover h-full mr-[-173px]" />
      </div>
      <div className="absolute w-full h-[1044px] bg-no-repeat bg-cover bg-background2"></div>
      <div className="absolute h-[62px]">
        <img
          src={Bit1}
          alt=""
          className="object-cover h-full mt-[205px] ml-[10vw]"
        />
      </div>

      <div className="absolute h-[10vw]">
        <img
          src={Strip1}
          alt=""
          className={
            "object-cover h-full duration-[10000ms] ease-linear " +
            (!animationDirection
              ? "ml-[15vw] mt-[1990px]"
              : "ml-[1vw] mt-[1880px]")
          }
        />
      </div>
      <div className="absolute h-[10vw]">
        <img
          src={Strip2}
          alt=""
          className={
            "object-cover h-full duration-[10000ms] ease-linear " +
            (!animationDirection
              ? "ml-[80vw] mt-[2786px]"
              : "ml-[50vw] mt-[3100px]")
          }
        />
      </div>
    </div>
  );
};

export default Background;
