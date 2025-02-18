import { useNavigate } from "react-router-dom";
import RightArrow from "resources/icons/arrow right.svg";

const BlogCard = ({ blogData, extraClasses, isCareer = false }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "bg-[#EAF9FF] blog-card-gradient w-full max-w-[300px] border border-solid border-[#0000003b] rounded-[8px] transition-all duration-1000 " +
        extraClasses
      }
    >
      <img
        className="rounded-[20px] p-2 w-full h-[180px]"
        src={blogData.img}
        alt="blog cover"
      ></img>
      <div className="ml-3 mr-2 font-sfui dark:font-sans">
        <div className="text-[#818AA6] dark:text-[#3D6EB7]">
          {blogData.publishDate}
        </div>
        <div className="font-semibold text-base text-[#222D39] dark:text-white leading-tight mt-2 mb-1">
          {blogData.title}
        </div>
        <div className="font-light text-sm dark:text-white">
          {blogData.teaser}
        </div>
        <div className="flex my-2 flex-wrap">
          {blogData.tags.map((tag) => (
            <div className="bg-[#087BFF44] dark:bg-[#F0900040] dark:text-[#FF9900] px-2 py-1 rounded-[3px] mr-2 my-1 text-sm">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex cursor-pointer mb-3 w-24 select-none text-sm dark:text-white font-light group">
          <div
            className="hover:underline group-hover:mr-1 transition-all duration-500"
            onClick={() => navigate(isCareer ? blogData.applyLink : blogData.link)}
          >
            {isCareer ? "Apply Now" : "Read More"}
          </div>
          <img src={RightArrow} alt="arrow" className="w-5"></img>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
