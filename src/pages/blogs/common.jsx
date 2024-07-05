import TopCap from "resources/blogs/Blog Top Cap.svg";
import TopCapDark from "resources/blogs/Blog Top Cap Dark.svg";
import BottomCap from "resources/blogs/Blog Bottom Cap.svg";
import BottomCapDark from "resources/blogs/Blog Bottom Cap Dark.svg";
import React, { useContext } from "react";
import BlogCard from "components/BlogCard";
import { DarkModeContext } from "contexts/DarkModeContext";

export const BlogInfo = ({ coverImg, children }) => {
  const [isDarkMode] = useContext(DarkModeContext);
  return (
    <React.Fragment>
      <div className="relative">
        <div className="flex justify-center mt-28 md:mt-40 ">
          <img
            src={coverImg}
            alt={"cover img"}
            className="rounded-2xl w-full max-w-[85%]"
          />
        </div>
        <div
          className={`absolute flex justify-center bottom-0 w-full transition-opacity duration-1000 ${
            isDarkMode ? "opacity-0" : " opacity-100"
          }`}
        >
          <img src={TopCap} alt={"top cap"} className="w-4/5 md:w-3/4" />
        </div>
        <div
          className={`absolute flex justify-center bottom-0 w-full transition-opacity duration-1000 ${
            isDarkMode ? "opacity-100" : " opacity-0"
          }`}
        >
          <img src={TopCapDark} alt={"top cap"} className="w-4/5 md:w-3/4" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-4/5 md:w-3/4 bg-[#E0E0E0] dark:bg-[#0E0D3B] transition-all duration-1000 px-2 py-2 md:px-10 md:py-8">
          {children}
        </div>
        <img
          src={isDarkMode ? BottomCapDark : BottomCap}
          alt={"bottom cap"}
          className="w-4/5 md:w-3/4"
        />
      </div>
    </React.Fragment>
  );
};

export const BlogTitle = ({ text }) => (
  <div className="w-full md:w-4/5 text-2xl leading-7 mb-1 md:mb-0 md:leading-normal md:text-3xl font-syne font-medium dark:text-[#FF9900]">
    {text}
  </div>
);

export const BlogDate = ({ text }) => (
  <div className="flex text-[#6E757C] mb-2 md:mb-3 text-sm md:text-base">
    <div className="font-bold mr-1">Posted on:</div>
    <div className="">{text}</div>
  </div>
);

export const BlogDivider = () => (
  <div className="w-full border border-[#6E757C] mb-3 md:mb-5"></div>
);

export const BlogHeading = ({ text }) => (
  <div className="font-syne text-xl md:text-2xl text-[#222D39] dark:text-[#FF9900] mb-1 font-medium underline md:no-underline">
    {text}
  </div>
);

export const BlogPara = ({ label, text }) => (
  <div className="font-raleway text-sm md:text-base text-[#222D39] dark:text-white leading-tight mb-2">
    {label && <span className="italic font-bold mr-1">{label}</span>}
    <span>{text}</span>
  </div>
);

export const BlogImage = ({ image }) => (
  <div className="w-full mb-4 md:mb-5 rounded-md">
    <img src={image} alt="blog img" className="w-full" />
  </div>
);

export const MoreBlogs = ({ blogs }) => (
  <div className="w-full mt-10 mb-20">
    <div className="font-syne font-bold text-3xl text-[#222D39] dark:text-white text-center transition-all duration-1000">
      These might help as well
    </div>
    <div className="flex flex-wrap justify-center mt-2">
      {blogs.map((blog) => (
        <BlogCard blogData={blog} extraClasses={"m-[10px]"} />
      ))}
    </div>
  </div>
);
