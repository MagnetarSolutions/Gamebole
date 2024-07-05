import ChevronRight from "resources/icons/chevron-right.svg";
import ChevronRightDark from "resources/icons/chevron-right-dark.svg";

const CustomButton = ({
  text,
  isSmall,
  icon = ChevronRight,
  iconDark = ChevronRightDark,
}) => {
  if (isSmall)
    return (
      <div className="overflow-hidden w-[160px] h-[50px] ">
        <div className="absolute rounded-lg border-solid border-2 border-[#FF9900] dark:border-white w-[160px] h-[50px] mt-1 ml-1 -z-0"></div>
        <div className="absolute w-[160px] h-[50px] rounded-lg bg-[#051B39] dark:bg-[#FF9900] flex justify-center items-center cursor-pointer text-[#FF9900] dark:text-white hover:ml-1 overflow-hidden hover:mt-1 transition-all duration-300 ease-in-out box-shadow hover:shadow-none">
          <div className="font-raleway text-sm">{text}</div>
          <img src={icon} className="w-6 ml-1 block dark:hidden" alt="icon" />
          <img
            src={iconDark}
            className="w-6 ml-1 hidden dark:block"
            alt="icon"
          />
        </div>
      </div>
    );
  return (
    <div className="overflow-hidden w-[140px] md:w-[210px] h-[50px] md:h-[78px]">
      <div className="absolute rounded-lg border-solid border-2 border-[#FF9900] dark:border-white w-[140px] md:w-[210px] h-[50px] md:h-[78px] mt-2 ml-2 -z-0"></div>
      <div className="absolute w-[140px] md:w-[210px] h-[50px] md:h-[78px] rounded-lg bg-[#002B65] dark:bg-[#FF9900] flex justify-center items-center cursor-pointer text-[#FF9900] dark:text-white hover:ml-2 overflow-hidden hover:mt-2 transition-all duration-300 ease-in-out box-shadow hover:shadow-none">
        <div className="font-raleway text-sm md:text-xl">{text}</div>
        <img src={icon} className="w-8 block dark:hidden" alt="icon" />
        <img src={iconDark} className="w-8 hidden dark:block" alt="icon" />
      </div>
    </div>
  );
};

export default CustomButton;
