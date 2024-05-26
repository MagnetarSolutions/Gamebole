import ChevronRight from "resources/icons/chevron-right.svg";

const CustomButton = ({ text }) => {
  return (
    <div className="w-[210px] h-[78px] rounded-lg bg-[#002B65] flex justify-center items-center cursor-pointer text-[#FF9900] hover:ml-2 hover:mt-2 transition-all duration-300 ease-in-out">
      <div className="font-raleway text-xl">{text}</div>
      <img src={ChevronRight} className="w-8" alt="icon" />
    </div>
  );
};

export default CustomButton;
