import { useNavigate } from "react-router-dom";
import RightArrow from "resources/icons/arrow right.svg";

const BlogCard = ({ blogData, extraClasses }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "bg-[#EAF9FF] w-full max-w-[350px] border border-solid border-[#0000003b] rounded-[8px] " +
        extraClasses
      }
    >
      <img
        className="rounded-[20px] p-3 w-full h-[200px]"
        src={blogData.img}
        alt="blog cover"
      ></img>
      <div className="ml-3 mr-2 font-sfui">
        <div className="text-[#818AA6]">{blogData.publishDate}</div>
        <div className="font-semibold text-lg text-[#222D39] leading-tight mt-2 mb-1">
          {blogData.title}
        </div>
        <div className=" text-sm">{blogData.teaser}</div>
        <div className="flex my-2 flex-wrap">
          {blogData.tags.map((tag) => (
            <div className="bg-[#087BFF44] px-2 py-1 rounded-[3px] mr-2 my-1">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex cursor-pointer mb-2 select-none">
          <div onClick={() => navigate(blogData.link)}>Read More</div>
          <img src={RightArrow} alt="arrow"></img>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
