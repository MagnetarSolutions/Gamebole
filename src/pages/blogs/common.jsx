import TopCap from "resources/blogs/Blog Top Cap.svg";
import BottomCap from "resources/blogs/Blog Bottom Cap.svg";
import React from "react";
import BlogCard from "components/BlogCard";

export const BlogInfo = ({ coverImg, children }) => {
  return (
    <React.Fragment>
      <div className="relative">
        <div className="flex justify-center mt-40 ">
          <img
            src={coverImg}
            alt={"cover img"}
            className="rounded-2xl w-full max-w-[85%]"
          />
        </div>
        <div className="absolute flex justify-center bottom-0 w-full">
          <img src={TopCap} alt={"top cap"} className="w-3/4" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-3/4 bg-[#E0E0E0] px-10 py-8">{children}</div>
        <img src={BottomCap} alt={"bottom cap"} className="w-3/4" />
      </div>
    </React.Fragment>
  );
};

export const BlogTitle = ({ text }) => (
  <div className="w-4/5 text-3xl font-syne font-medium">{text}</div>
);

export const BlogDate = ({ text }) => (
  <div className="flex text-base text-[#6E757C] mb-3">
    <div className="font-bold mr-1">Posted on:</div>
    <div className="">{text}</div>
  </div>
);

export const BlogDivider = () => (
  <div className="w-full border border-[#6E757C] mb-5"></div>
);

export const BlogHeading = ({ text }) => (
  <div className="font-syne text-2xl text-[#222D39] mb-1 font-medium">
    {text}
  </div>
);

export const BlogPara = ({ label, text }) => (
  <div className="font-raleway text-base text-[#222D39] leading-tight mb-2">
    {label && <span className="italic font-bold mr-1">{label}</span>}
    <span>{text}</span>
  </div>
);

export const BlogImage = ({ image }) => (
  <div className="w-full mb-5 rounded-md">
    <img src={image} alt="blog img" className="w-full" />
  </div>
);

export const MoreBlogs = ({ blogs }) => (
  <div className="w-full mt-10 mb-20">
    <div className="font-syne font-bold text-3xl text-[#222D39] text-center">
      These might help as well
    </div>
    <div className="flex flex-wrap justify-center mt-2">
      {blogs.map((blog) => (
        <BlogCard blogData={blog} extraClasses={"m-[10px]"} />
      ))}
    </div>
  </div>
);
