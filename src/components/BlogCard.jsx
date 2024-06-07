import RightArrow from "resources/icons/arrow right.svg";

const BlogCard = ({ blogData, extraClasses }) => {
  return (
    <div
      className={
        "bg-[#EAF9FF] w-full max-w-[430px] border border-solid border-[#0000003b] rounded-[10px] " +
        extraClasses
      }
    >
      <img
        className="rounded-[7px] p-3"
        src={blogData.img}
        alt="blog cover"
      ></img>
      <div className="ml-3 font-sfui">
        <div className="text-[#818AA6]">{blogData.publishDate}</div>
        <div className="font-semibold text-xl text-[#222D39] leading-tight mt-2 mb-1">
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
          <div>Read More</div>
          <img src={RightArrow} alt="arrow"></img>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
