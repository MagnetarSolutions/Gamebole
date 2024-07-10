const Dot = () => <div className="mx-4 cursor-default select-none">.</div>;

const Copyrights = () => {
  return (
    <div className="flex justify-around flex-wrap bg-[#051B39] dark:bg-[#170B37] text-white">
      <div className="mt-8 text-xs md:text-base md:mt-14 md:my-14 flex mx-8">
        <a href="" className="text-center">
          Privacy Policy
        </a>
        <Dot />
        <a href="" className="text-center">
          Terms & Conditions
        </a>
        <Dot />
        <a href="" className="text-center">
          Contact Us
        </a>
      </div>
      <div className="text-xs md:text-base mb-8 md:mb-14 mt-6 md:my-14 mx-8 text-center">
        Copyright ©2024 Gamebole. All rights reserved.
      </div>
    </div>
  );
};

export default Copyrights;
