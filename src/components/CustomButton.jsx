import ChevronRight from "resources/icons/chevron-right.svg";

const CustomButton = ({ text }) => {
  return (
    <div className="overflow-hidden w-[140px] md:w-[210px] h-[50px] md:h-[78px]">
      <div className="absolute rounded-lg border-solid border-2 border-[#FF9900] w-[140px] md:w-[210px] h-[50px] md:h-[78px] mt-2 ml-2 -z-0"></div>
      <div className="absolute w-[140px] md:w-[210px] h-[50px] md:h-[78px] rounded-lg bg-[#002B65] flex justify-center items-center cursor-pointer text-[#FF9900] hover:ml-2 overflow-hidden hover:mt-2 transition-all duration-300 ease-in-out box-shadow hover:shadow-none">
        <div className="font-raleway text-sm md:text-xl">{text}</div>
        <img src={ChevronRight} className="w-8" alt="icon" />
      </div>
    </div>
  );
};

export default CustomButton;
