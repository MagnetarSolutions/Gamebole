import Background from "components/Background";
import BlogCard from "components/BlogCard";
import CustomButton from "components/CustomButton";
import { dummyBlogData } from "constants/index";
import Laptop from "resources/images/laptop.png";
import Document from "resources/icons/document.svg";
import useScreenSize from "hooks/useScreenSize";
import { SCREEN_SIZES } from "constants/index";
import { useState } from "react";

const Blog = () => {
  const screenSize = useScreenSize();

  const [showAllArticles, setShowAllArticles] = useState(false);

  let blogData =
    screenSize <= SCREEN_SIZES.md
      ? dummyBlogData.slice(0, 3)
      : dummyBlogData.slice(0, 6);

  if (showAllArticles) blogData = dummyBlogData;

  return (
    <div className="blog w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden relative z-0 flex justify-center">
      <div className="max-w-[2000px]">
        <Background page="blog" />
        <div className="w-full h-[500px] md:h-[700px] flex items-center justify-center relative">
          <div className="mt-28 max-w-[80%] md:max-w-[40%]">
            <div className="font-syne text-2xl md:text-5xl font-bold text-[#051B39] dark:text-white mb-2 md:mb-4">
              GAMEBOLE KNOWLEDGE CENTER
            </div>
            <div className=" font-raleway text-[#051B39] dark:text-white text-base md:text-base font-normal leading-normal mb-8">
              we don't just undertake game art tasks; we capture the core
              essence and envision a spectrum of brilliant possibilities for
              implementation. Our extensive collaboration with industry leaders
              and an inspired approach pave the way for creating exceptional
              artworks that transcend the ordinary, defining our commitment to
              excellence in every project.
            </div>
            <CustomButton text="Explore Now"></CustomButton>
          </div>
          <img
            className="max-w-[40%] hidden md:inline"
            src={Laptop}
            alt="laptop"
          ></img>
        </div>
        <div className="w-full flex justify-center mt-[550px] md:mt-[350px]">
          <div className="flex flex-wrap justify-center mt-10 max-w-[1200px]">
            {blogData.map((blogData) => (
              <BlogCard blogData={blogData} extraClasses={"m-[10px]"} />
            ))}
          </div>
        </div>
        <div className="mb-10 ">
          {!showAllArticles && (
            <div
              onClick={() => setShowAllArticles(true)}
              className="flex justify-center mt-4"
            >
              <div className="w-[200px] cursor-pointer flex bg-[#066082] dark:bg-[#FF9900bb] rounded text-white justify-center px-4 py-3 font-sfui font-light">
                <img src={Document} alt={"docs icon"} className="mr-2"></img>
                <div>Read all articles</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
