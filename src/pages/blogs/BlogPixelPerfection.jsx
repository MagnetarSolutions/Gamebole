import Background from "components/Background";
import Cover from "resources/blogs/pixel perfection/cover.png";
import {
  BlogDate,
  BlogDivider,
  BlogHeading,
  BlogImage,
  BlogInfo,
  BlogPara,
  BlogTitle,
  MoreBlogs,
} from "./common";

import BlogImage1 from "resources/blogs/pixel perfection/blog image 1.png";
import BlogImage2 from "resources/blogs/pixel perfection/blog image 2.png";
import BlogImage3 from "resources/blogs/pixel perfection/blog image 3.png";
import { dummyBlogData } from "constants";

const BlogPixelPerfection = () => {
  return (
    <div className="blog w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden relative z-0">
      <div className="max-w-[2000px]">
        <Background page="blogExtended" />
        <BlogInfo coverImg={Cover}>
          <BlogTitle text="Pixel Perfection: The Art and Science of Game Graphics Optimization" />
          <BlogDate text="August, 2022" />
          <BlogDivider />
          <BlogHeading text="Introduction" />
          <BlogPara text="In the dynamic world of gaming, captivating visuals play a pivotal role in enhancing the player's experience. The quest for pixel perfection is an ongoing journey for game developers, merging artistic creativity with scientific precision to achieve optimal game graphics. This blog explores the intricacies of game graphics optimization, delving into the art and science behind creating visually stunning and performance-efficient gaming experiences." />
          <BlogHeading text="The Art of Pixel Perfection:" />
          <BlogImage image={BlogImage1} />
          <BlogPara
            label="Visual Immersion:"
            text="Game graphics serve as the visual gateway to a virtual world. Achieving pixel perfection involves creating graphics that immerse players in a rich and detailed environment. Artists employ techniques such as high-quality textures, realistic lighting, and intricate character designs to bring games to life."
          />
          <BlogImage image={BlogImage2} />
          <BlogPara
            label="Artistic Consistency:"
            text="Maintaining consistency in art style is crucial for a seamless gaming experience. Game developers work closely with artists to ensure that every element, from characters to landscapes, adheres to a unified artistic vision. This consistency contributes to the overall aesthetic appeal of the game."
          />
          <BlogImage image={BlogImage3} />
        </BlogInfo>
        <MoreBlogs
          blogs={[dummyBlogData[0], dummyBlogData[1], dummyBlogData[2]]}
        />
      </div>
    </div>
  );
};

export default BlogPixelPerfection;
