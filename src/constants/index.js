import BlogImage1 from "resources/blogs/blog image 1.png";

export const SCREEN_SIZES = {
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
};

export const STRIP_TRIP_DURATION = 10 * 1000; //10 seconds

export const PAGE_TYPES = {
  HOME: "home",
  BLOG: "blog",
  BLOG_EXTENDED: "blog_extended",
  SERVICES: "services",
};

export const BACKGROUND_ELEMENTS = {
  TOP_WHITE_WAVES: "TopWhiteWaves",
  TOP_DARK_WAVES: "TopDarkWaves",
  TOP_TRANSITION: "TopTransition",
  MIDDLE_DARK_WAVES: "MiddleDarkWaves",
  TOP_CYLINDER: "TopCylinder",
  TOP_CUBE: "TopCube",
  BLOB: "Blob",
  MIDDLE_STRIP_1: "MiddleStrip1",
  MIDDLE_STRIP_2: "MiddleStrip2",
};

export const BACKGROUND = {
  home: {
    TopWhiteWaves: true,
    TopDarkWaves: true,
    TopTransition: true,
    MiddleDarkWaves: true,
    TopCylinder: true,
    TopCube: true,
    Blob: true,
    MiddleStrip1: true,
    MiddleStrip2: true,
  },
  blog: {
    TopWhiteWaves: false,
    TopDarkWaves: true,
    TopTransition: true,
    MiddleDarkWaves: true,
    TopCylinder: true,
    TopCube: true,
    Blob: false,
    MiddleStrip1: true,
    MiddleStrip2: true,
  },
  blogExtended: {
    TopWhiteWaves: false,
    TopDarkWaves: true,
    TopTransition: false,
    MiddleDarkWaves: true,
    TopCylinder: true,
    TopCube: true,
    Blob: false,
    MiddleStrip1: true,
    MiddleStrip2: true,
  },
};

export const dummyBlogData = [
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
  {
    img: BlogImage1,
    publishDate: "January, 2021",
    title:
      "Mastering Unity: Unveiling the Secrets of Seamless Game Development",
    teaser: "Explore the intricacies of Unity game development...",
    tags: ["Game Development", "Unity Software"],
  },
];
