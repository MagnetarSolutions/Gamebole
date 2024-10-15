import BlogImage1 from "resources/blogs/blog image 1.png";
import BlogPixelPerfectionCover from "resources/blogs/pixel perfection/cover.png";

import Service1 from "resources/services/1/main.png";
import Service1Content1 from "resources/services/1/1.png";
import Service1Content2 from "resources/services/1/2.png";
import Service1Content3 from "resources/services/1/3.png";
import Service1Content1Img1 from "resources/services/1/1-1.png";
import Service1Content1Img2 from "resources/services/1/1-2.png";
import Service1Content1Btn1 from "resources/services/1/1-b1.svg";
import Service1Content1Btn1Dark from "resources/services/1/1-b1-dark.svg";

import Service2 from "resources/services/2/main.png";
import Service2Background from "resources/services/2/background.png";
import Service2BackgroundDark from "resources/services/2/backgroundDark.png";
import Service2Content1 from "resources/services/2/1.png";
import Service2Content2 from "resources/services/2/2.png";
import Service2Content3 from "resources/services/2/3.png";
import Service2Content1Btn1 from "resources/services/2/1-b1.svg";
import Service2Content1Btn1Dark from "resources/services/2/1-b1-dark.svg";

import Service3 from "resources/services/3/main.png";
import Service3Content1 from "resources/services/3/1.png";
import Service3Content2 from "resources/services/3/2.png";
import Service3Content3 from "resources/services/3/3.png";
import Service3Content1Img1 from "resources/services/3/1-1.png";
import Service3Content1Btn1 from "resources/services/3/1-b1.svg";
import Service3Content1Btn1Dark from "resources/services/3/1-b1-dark.svg";

import Service4 from "resources/services/4/main.png";
import Service4Background from "resources/services/4/background.png";
import Service4BackgroundDark from "resources/services/4/backgroundDark.png";
import Service4Content1 from "resources/services/4/1.png";
import Service4Content2 from "resources/services/4/2.png";
import Service4Content3 from "resources/services/4/3.png";
import Service4Content1Btn1 from "resources/services/4/1-b1.svg";
import Service4Content1Btn1Dark from "resources/services/4/1-b1-dark.svg";

import Service5 from "resources/services/5/main.png";
import Service5Content1 from "resources/services/5/1.png";
import Service5Content2 from "resources/services/5/2.png";
import Service5Content1Img1 from "resources/services/5/1-1.png";
import Service5Content1Btn1 from "resources/services/1/1-b1.svg";
import Service5Content1Btn1Dark from "resources/services/1/1-b1-dark.svg";

import Game1 from "resources/games/800x800.jpg";
import Game2 from "resources/games/PoolMergeImage.png";
import Game3 from "resources/games/tap_away.png";
import Game4 from "resources/games/4.png";

import Game1Logo1 from "resources/games/logo 1-1.svg";
import Game1Logo2 from "resources/games/logo 1-2.svg";
import Game1Logo3 from "resources/games/logo 1-3.svg";
import Game2Logo1 from "resources/games/logo 2.png";
import Game3Logo1 from "resources/games/logo 3.png";
import Game4Logo1 from "resources/games/logo 4-1.svg";
import Game4Logo2 from "resources/games/logo 4-2.svg";
import Game4Logo3 from "resources/games/logo 4-3.svg";

export const SCREEN_SIZES = {
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
};

export const PAGE_TYPES = {
  HOME: "home",
  BLOG: "blog",
  BLOG_EXTENDED: "blog_extended",
  SERVICES: "services",
};

export const CONTENT_TYPES = {
  TITLE: "title",
  PARA: "para",
  IMAGE: "image",
  BUTTON: "button",
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
  services: {
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
};

export const dummyBlogData = [
  {
    img: BlogPixelPerfectionCover,
    publishDate: "August, 2022",
    title:
      "Pixel Perfection: The Art and Science of Game Graphics Optimization",
    teaser: "Delve into the realm of game graphics optimization...",
    tags: ["Game Design", "Optimization"],
    link: "/blog/pixel-perfection",
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

export const servicesData = [
  {
    title: "Game Development",
    wrapperId: "gameDev",
    mainImg: Service1,
    imgRotation: 9,
    variant: 0,
    background: null,
    blocks: [
      {
        logo: Service1Content1,
        title: "H5 Games",
        content: [
          { type: "title", text: "H5 Games" },
          { type: "image", src: Service1Content1Img1 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          { type: "image", src: Service1Content1Img2 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          {
            type: "button",
            text: "Play now",
            src: Service1Content1Btn1,
            srcDark: Service1Content1Btn1Dark,
            link: {
              type: "popup",
              value: "h5games",
            },
          },
        ],
      },
      {
        logo: Service1Content2,
        title: "Roblox",
        content: [
          { type: "title", text: "H5 Games" },
          { type: "image", src: Service1Content1Img1 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          { type: "image", src: Service1Content1Img2 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          {
            type: "button",
            text: "Play now",
            src: Service1Content1Btn1,
            srcDark: Service1Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service1Content3,
        title: "Android / IOS",
        content: [
          { type: "title", text: "H5 Games" },
          { type: "image", src: Service1Content1Img1 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          { type: "image", src: Service1Content1Img2 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          {
            type: "button",
            text: "Play now",
            src: Service1Content1Btn1,
            srcDark: Service1Content1Btn1Dark,
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "XR",
    wrapperId: "xr",
    mainImg: Service2,
    imgRotation: 22,
    variant: 1,
    background: Service2Background,
    backgroundDark: Service2BackgroundDark,
    blocks: [
      {
        logo: Service2Content1,
        title: "AR",
        content: [
          { type: "title", text: "AR" },
          {
            type: "para",
            text: "Embrace the future of immersive technology with Gamebole's expert services in XR, AR, and VR. Our team pioneers cutting-edge experiences, pushing the boundaries of virtual and augmented reality. From XR simulations that redefine training to AR applications transforming real-world interactions, and VR environments transporting users to new realms, Gamebole is your dedicated partner in bringing innovative and captivating experiences to life.",
          },
          {
            type: "button",
            text: "Experience now",
            src: Service2Content1Btn1,
            srcDark: Service2Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service2Content2,
        title: "VR",
        content: [
          { type: "title", text: "AR" },
          {
            type: "para",
            text: "Embrace the future of immersive technology with Gamebole's expert services in XR, AR, and VR. Our team pioneers cutting-edge experiences, pushing the boundaries of virtual and augmented reality. From XR simulations that redefine training to AR applications transforming real-world interactions, and VR environments transporting users to new realms, Gamebole is your dedicated partner in bringing innovative and captivating experiences to life.",
          },
          {
            type: "button",
            text: "Experience now",
            src: Service2Content1Btn1,
            srcDark: Service2Content1Btn1Dark,
            link: "/",
          },
        ],
      },

      {
        logo: Service2Content3,
        title: "MR",
        content: [
          { type: "title", text: "H5 Games" },
          { type: "image", src: Service1Content1Img1 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          { type: "image", src: Service1Content1Img2 },
          {
            type: "para",
            text: "Gamebole excels in H5 games, developing top-tier PlayCanvas experiences that redefine immersive gameplay and visual sophistication.",
          },
          {
            type: "button",
            text: "Play now",
            src: Service1Content1Btn1,
            srcDark: Service1Content1Btn1Dark,
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Visualization",
    wrapperId: "vr",
    mainImg: Service3,
    imgRotation: 10,
    variant: 0,
    background: null,
    blocks: [
      {
        logo: Service3Content1,
        title: "Metaverse",
        content: [
          { type: "title", text: "Metaverse" },
          { type: "image", src: Service3Content1Img1 },
          {
            type: "para",
            text: "Embark on a visual journey with Gamebole's distinguished 3D visualization services, where creativity meets precision to redefine the art of immersive experiences. Specializing in a spectrum of applications, from architectural designs that breathe life into blueprints to intricately detailed product modeling, our team excels in transforming ideas into visually compelling realities.",
          },
          {
            type: "button",
            text: "Experience now",
            src: Service3Content1Btn1,
            srcDark: Service3Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service3Content2,
        title: "Config",
        content: [
          { type: "title", text: "Metaverse" },
          { type: "image", src: Service3Content1Img1 },
          {
            type: "para",
            text: "Embark on a visual journey with Gamebole's distinguished 3D visualization services, where creativity meets precision to redefine the art of immersive experiences. Specializing in a spectrum of applications, from architectural designs that breathe life into blueprints to intricately detailed product modeling, our team excels in transforming ideas into visually compelling realities.",
          },
          {
            type: "button",
            text: "Experience now",
            src: Service3Content1Btn1,
            srcDark: Service3Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service3Content3,
        title: "Simulations",
        content: [
          { type: "title", text: "Metaverse" },
          { type: "image", src: Service3Content1Img1 },
          {
            type: "para",
            text: "Embark on a visual journey with Gamebole's distinguished 3D visualization services, where creativity meets precision to redefine the art of immersive experiences. Specializing in a spectrum of applications, from architectural designs that breathe life into blueprints to intricately detailed product modeling, our team excels in transforming ideas into visually compelling realities.",
          },
          {
            type: "button",
            text: "Experience now",
            src: Service3Content1Btn1,
            srcDark: Service3Content1Btn1Dark,
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Web/App Development",
    wrapperId: "appDev",
    mainImg: Service4,
    imgRotation: 9,
    variant: 1,
    background: Service4Background,
    backgroundDark: Service4BackgroundDark,
    blocks: [
      {
        logo: Service4Content1,
        title: "React",
        content: [
          { type: "title", text: "React" },
          {
            type: "para",
            text: "Step into the realm of cutting-edge digital experiences with Gamebole's exceptional web and app development services. Our expert team blends creativity with advanced technology to craft seamless and responsive solutions tailored to your unique needs. From dynamic web applications that engage users intuitively to innovative mobile apps transforming user experiences on the go, Gamebole is dedicated to delivering excellence.",
          },
          {
            type: "button",
            text: "See Examples",
            src: Service4Content1Btn1,
            srcDark: Service4Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service4Content2,
        title: "View",
        content: [
          { type: "title", text: "React" },
          {
            type: "para",
            text: "Step into the realm of cutting-edge digital experiences with Gamebole's exceptional web and app development services. Our expert team blends creativity with advanced technology to craft seamless and responsive solutions tailored to your unique needs. From dynamic web applications that engage users intuitively to innovative mobile apps transforming user experiences on the go, Gamebole is dedicated to delivering excellence.",
          },
          {
            type: "button",
            text: "See Examples",
            src: Service4Content1Btn1,
            srcDark: Service4Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service4Content3,
        title: "Servers",
        content: [
          { type: "title", text: "React" },
          {
            type: "para",
            text: "Step into the realm of cutting-edge digital experiences with Gamebole's exceptional web and app development services. Our expert team blends creativity with advanced technology to craft seamless and responsive solutions tailored to your unique needs. From dynamic web applications that engage users intuitively to innovative mobile apps transforming user experiences on the go, Gamebole is dedicated to delivering excellence.",
          },
          {
            type: "button",
            text: "See Examples",
            src: Service4Content1Btn1,
            srcDark: Service4Content1Btn1Dark,
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "SDK's",
    wrapperId: "sdk",
    mainImg: Service5,
    imgRotation: 0,
    variant: 0,
    background: null,
    blocks: [
      {
        logo: Service5Content1,
        title: "Platforms",
        content: [
          { type: "title", text: "Platforms" },
          {
            type: "para",
            text: "We specialize in developing robust and versatile SDKs that empower developers to unlock the full potential of their projects.",
          },
          { type: "image", src: Service5Content1Img1 },
          {
            type: "button",
            text: "Play now",
            src: Service5Content1Btn1,
            srcDark: Service5Content1Btn1Dark,
            link: "/",
          },
        ],
      },
      {
        logo: Service5Content2,
        title: "Platforms",
        content: [
          { type: "title", text: "Platforms" },
          {
            type: "para",
            text: "We specialize in developing robust and versatile SDKs that empower developers to unlock the full potential of their projects.",
          },
          { type: "image", src: Service5Content1Img1 },
          {
            type: "button",
            text: "Play now",
            src: Service5Content1Btn1,
            srcDark: Service5Content1Btn1Dark,
            link: "/",
          },
        ],
      },
    ],
  },
];

export const gamesData = [
  {
    header: "Bowling 3d",
    title: "Bowling 3d",
    para: "Play our bowling 3d games with new challenges and adventures",
    cover: Game1,
    sources: [{ icon: Game2Logo1, link: "" }],
  },
  {
    header: "Pool Merge Io",
    title: "Pool Merge Io",
    para: "Pool Merge Io being made as a inhouse product is a 3d merge game where bigger pool balls eat smaller ones and become bigger",
    cover: Game2,
    sources: [{ icon: Game2Logo1, link: "" }],
  },
  {
    header: "Tap Away",
    title: "Tap Away",
    para: "Tap away is a escape game where users have to save the person freezing in the ice block",
    cover: Game3,
    sources: [{ icon: Game2Logo1, link: "" }],
  },
  {
    header: "Mr Bean World Tour",
    title: "Mr Bean World Tour",
    para: "Dive into the adrenaline-pumping action of Mr Bean. Unleash your shooting skills as you navigate through dynamic levels, blasting colorful balls to bits. With each level presenting escalating challenges, 'Ball Blast' offers an addictive and visually vibrant gaming experience",
    cover: Game4,
    sources: [{ icon: Game2Logo1, link: "" }],
  },
];
