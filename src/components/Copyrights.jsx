const Dot = () => <div className="mx-4 cursor-default select-none   ">.</div>;

const Copyrights = () => {
  return (
    <div className="flex justify-around flex-wrap bg-[#051B39] dark:bg-[#170B37] text-white">
      <div className="mt-14 md:my-14 flex">
        <a href="">Privacy Policy</a>
        <Dot />
        <a href="">Terms & Conditions</a>
        <Dot />
        <a href="">Contact Us</a>
      </div>
      <div className="mb-14 mt-6 md:my-14">
        Copyright ©2024 Gamebole. All rights reserved.
      </div>
    </div>
  );
};

export default Copyrights;
