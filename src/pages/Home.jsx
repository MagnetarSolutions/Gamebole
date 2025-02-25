import Background from "components/Background";
import Adepti from "resources/images/Home Collage.png";

import gdDark from "resources/images/Offers/Game development dark.png";
import gdLight from "resources/images/Offers/Game development light.jpg";
import configLight from "resources/images/Offers/Configurator light.jpg";
import configDark from "resources/images/Offers/Configuration dark.png";
import metaLight from "resources/images/Offers/Metaverse-light.png";
import metaDark from "resources/images/Offers/Metaverse-dark.png";
import arDark from "resources/images/Offers/ar-dark.png";
import arLight from "resources/images/Offers/ar-light.png";

import useScreenSize from "hooks/useScreenSize";
import { SCREEN_SIZES } from "constants/index";
import CustomButton from "components/CustomButton";
import techDark from "resources/icons/tech-dark.png";
import techLight from "resources/icons/tech-light.png";
import React, { useContext, useEffect, useRef, useState } from "react";
import ClientImg1 from "resources/images/Sabrina.jpg";
import ClientImg2 from "resources/images/client2.png";
import ClientImg3 from "resources/images/client 1.png";
import ClientLogo1 from "resources/logo/IntervideoLogo.png";
import FrontSelect from "resources/icons/frontSelect.svg";
import BackSelect from "resources/icons/backSelect.svg";

import TeammemberImg1 from "resources/images/saifImg.png";
import TeammemberImg2 from "resources/images/FaiqPic.png";
import TeammemberImg3 from "resources/images/ShahzaibPic.png";
import TeammemberImg4 from "resources/images/DP_Furqan.png";

import LinkedinLogo from "resources/icons/linkedin.js";
import FacebookLogo from "resources/icons/facebook.js";
import TwitterLogo from "resources/icons/twitter.js";
import { useNavigate } from "react-router-dom";
import ContactForm from "components/ContactForm";
import { DarkModeContext } from "contexts/DarkModeContext";
import { useLocation, useParams } from "react-router-dom";

const clientData = [
    {
      clientImg: ClientImg1,
      clientLogo: ClientLogo1,
      clientName: "Sabrina Grob",
      clientReview: "I had an amazing experience working with this team! Their quick response time and short processing durations made everything incredibly smooth. The results were beyond my expectations, and the cooperation was nothing short of fantastic. I highly recommend their services to anyone looking for efficiency and professionalism!",
    },
    {
      clientImg: ClientImg2,
      clientLogo: ClientLogo1,
      clientName: "James Blue",
      clientReview: "Game development has never been easier! Thanks to Gamebole, I was able to create a well-structured and engaging game that players truly love. Their expertise and guidance throughout the process were invaluable. If you need a reliable team to bring your game ideas to life, look no further!",
    },
    {
      clientImg: ClientImg3,
      clientLogo: ClientLogo1,
      clientName: "Samith White",
      clientReview: "The experience of working with Gamebole was outstanding! From the initial planning phase to the final product, their support and technical knowledge made all the difference. My game turned out even better than I had imagined, and I couldn't be happier with the outcome!",
    },

  
];

const coreTeamMembers = [
  {
    memberProfile: TeammemberImg1,
    memberName: "Saif Ul Islam",
    memberRole: "Co-founder & CEO",
    memberLinks: ["saifulislam476", "isaifi.476", "saifi476"],
  },
  {
    memberProfile: TeammemberImg2,
    memberName: "Faiq Laiq",
    memberRole: "Co-founder & CTO",
    memberLinks: ["faiq-laiq-9b039a157", "fime.zayan", "FaiqLaiq"],
  },
  {
    memberProfile: TeammemberImg3,
    memberName: "Shahzaib Ansari",
    memberRole: "Product Lead",
    memberLinks: ["shahzaib52", "shahzaib52", "LostInPixals"],
  },
  {
    memberProfile: TeammemberImg4,
    memberName: "Furqan Wahid",
    memberRole: "Art Lead",
    memberLinks: ["furqan-wahid-798baa20a", "furqanwahid", "twitter"],
  },
];

const TechIconScroller = () => {
  const [isDarkMode] = useContext(DarkModeContext);
  const logoScrollModeRef = useRef(0);
  const [logoScrollMode, setLogoScrollMode] = useState(0);

  const toggleNextMode = () => {
    logoScrollModeRef.current = (logoScrollModeRef.current + 1) % 2;
    setLogoScrollMode(logoScrollModeRef.current);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleNextMode();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[140px] md:h-[200px] lg:h-[300px] bg-backgroundStrip1 dark:bg-backgroundStrip1Dark bg-no-repeat bg-cover flex justify-start items-center overflow-hidden">
      <img
        className={`min-w-[300%] max-h-[60%] transition-transform duration-[20000ms] ease-linear ${
          logoScrollMode === 0 ? "translate-x-0" : "-translate-x-[66.66%]"
        }`}
        src={isDarkMode ? techLight : techDark}
        alt="technology slider"
      />
    </div>
  );
};

const ClientReviews = () => {
  const [selectedClient, setSelectedClient] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectNextClient = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedClient((selectedClient + 1) % clientData.length);
        setIsAnimating(false);
      }, 300); // Animation duration
    }
  };

  const selectPrevClient = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedClient(selectedClient - 1 === -1 ? clientData.length - 1 : selectedClient - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-r from-[#F4F7FF] to-[#E4E9F2]">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="text-5xl pt-5 font-semibold text-[#002B65] dark:text-white">What Our Clients Say</div>
        <div className="w-[22%] h-1 bg-[#DEA719] mt-2 mb-6"></div>
      </div>

      {/* Reviews Slider */}
      <div className="relative flex justify-center">
        <div className="max-w-5xl w-full bg-[#0081db] dark:bg-dark-card rounded-xl p-12 shadow-lg flex items-center">
          
          {/* Client Image - Left Side */}
          <div className="w-56 h-56 rounded-full mb-8 overflow-hidden flex-shrink-0">
            <img 
              src={clientData[selectedClient].clientImg} 
              alt="Client" 
              className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`} 
            />
          </div>

          {/* Client Info - Right Side */}
          <div className="ml-6 flex flex-col flex-grow">
            
            <div className={`text-base text-white transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              {clientData[selectedClient].clientReview}
            </div>
            <div className={`text-lg font-semibold my-1 text-[#DEA719] transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              {clientData[selectedClient].clientName}
            </div>
            
            <div className="flex justify-between items-center">
          {/* Client Logo */}
          <div className={`w-28 h-12 p-2 border-2 border-[#DEA719] rounded-lg overflow-hidden flex items-center justify-center transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <img src={clientData[selectedClient].clientLogo} className="w-full h-full object-contain" alt="Client Logo" />
            </div>

            {/* Navigation Arrows - Right Side Below Comments */}
            <div className="flex justify-end mt-4">
              <div 
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-90" 
                onClick={selectPrevClient}
              >
                <img src={BackSelect} className="w-14 h-14 text-white p-2" alt="Previous" />
              </div>
              <div 
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-90" 
                onClick={selectNextClient}
              >
                <img src={FrontSelect} className="w-14 h-14 text-white p-2" alt="Next" />
              </div>
            </div>
          </div>
            </div>

            
          
        </div>
      </div>
    </div>
  );
};

const IconGroup = ({ links, height = 38 }) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-[152px] h-[38px] flex justify-center gap-[10%]`}>
        {links[0] && (
          <a href={`https://www.linkedin.com/in/${links[0]}`} target="_blank" rel="noopener noreferrer">
            <LinkedinLogo className={`logo-gradient w-[38px] h-[38px] cursor-pointer rounded-lg stroke-white hover:stroke-black transition-all duration-300`} />
          </a>
        )}
        {links[1] && (
          <a href={`https://www.facebook.com/${links[1]}`} target="_blank" rel="noopener noreferrer">
            <FacebookLogo className={`logo-gradient w-[38px] h-[38px] cursor-pointer rounded-lg stroke-white hover:stroke-black transition-all duration-300`} />
          </a>
        )}
        {links[2] && (
          <a href={`https://x.com/${links[2]}`} target="_blank" rel="noopener noreferrer">
            <TwitterLogo className={`logo-gradient w-[38px] h-[38px] cursor-pointer rounded-lg stroke-white hover:stroke-black transition-all duration-300`} />
          </a>
        )}
      </div>
    </div>
  );
};

const CoreTeamMember = ({ profile, name, role, links }) => {
  return (
    <div className="flex flex-col justify-center mx-8 mb-8 items-center">
      <div className="w-44 h-44 bg-profile bg-no-repeat bg-contain flex justify-center items-center">
        <img src={profile} className="w-40 h-40 rounded-full object-cover" alt={"profile"}></img>
      </div>
      <div className="text-white font-syne text-4xl font-bold flex text-center">{name}</div>
      <div className="text-white font-raleway text-lg text-center mb-4">{role}</div>
      <IconGroup links={links} />
    </div>
  );
};

const CoreTeam = () => {
  const [isDarkMode] = useContext(DarkModeContext);
  return (
    <div className={`w-full ${isDarkMode ? "bg-backgroundStrip2Dark" : "bg-backgroundStrip2"} bg-no-repeat bg-cover flex flex-col items-center py-20 md:py-16`}>
      <div className="text-[#DEA719] text-lg md:text-xl font-bold mt-12 md:mt-14">MEET OUR TEAM</div>
      <div className=" font-syne font-bold text-2xl md:text-6xl text-white mt-4 md:mt-8 mb-12">Meet Our Core Team</div>
      <div className="flex w-full justify-around mb-20 flex-wrap">
        {coreTeamMembers.map((member) => {
          return <CoreTeamMember profile={member.memberProfile} name={member.memberName} role={member.memberRole} links={member.memberLinks} />;
        })}
      </div>
    </div>
  );
};

const AnimatedNumber = ({ target, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return <span ref={ref}>{count}+</span>;
};

const Home = () => {
  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;
  const location = useLocation();
  const [isDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [location]);

  const videoId = "FiNIKeBImtw";
  const playerRef = useRef(null);

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&mute=1`;

  const handleVideoClick = () => {
    if (playerRef.current && playerRef.current.contentWindow) {
      playerRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    }
  };
  const handleContactClick = () => {
    navigate('/#contact');
  };

  return (
    <div className="home w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden flex justify-center relative z-0">
      <div className=" max-w-[2000px]">
        <Background page="home" />
        <div className="w-full h-[1044px] flex items-center justify-center relative" onClick={handleVideoClick}>
          <div className="w-full h-full overflow-hidden">
          <iframe
          ref={playerRef}
          width="100%"
          height="100%"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            transform: 'scale(1.1)',
            pointerEvents: 'none',
            position: 'absolute',
            top: '0',
            left: '0',
            objectFit: 'cover',
          
          
          }}
        ></iframe>
        <div className="absolute bottom-[-60px] left-0 w-full h-[62px] bg-[#B4EAFF] dark:bg-[#110828]"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <div className="font-syne text-4xl md:text-8xl text-white font-bold mb-4 fade-in">You Dream,<br /> We Develop</div>
           
          </div>
          <div className="relative right-[45%] top-[13%]">
              <CustomButton
                text="Contact Us"
                onClick={handleContactClick}
                className=""
              />
            </div>
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-8 z-20 w-full max-w-screen-xl">
          <div className="flex justify-between w-full gap-8">
            {/* Happy Clients Card */}
            <div className="bg-[#002B65] bg-opacity-20 backdrop-blur-lg rounded-md flex items-center gap-4 p-4 shadow-xl flex-1">
              <div className="loco-text-heading-sm min-w-[30%] shrink-0 text-center text-white font-syne text-4xl md:text-5xl font-bold">
                <AnimatedNumber target={50} />
              </div>
              <div className="loco-text-body max-w-xs text-white font-raleway text-sm md:text-base">
                Thousands of clients trust
              </div>
            </div>

            {/* Games Card */}
            <div className="bg-[#002B65] bg-opacity-20 backdrop-blur-lg rounded-md flex items-center gap-4 p-4 shadow-xl flex-1">
              <div className="loco-text-heading-sm min-w-[30%] shrink-0 text-center text-white font-syne text-4xl md:text-5xl font-bold">
                <AnimatedNumber target={100} />
              </div>
              <div className="loco-text-body max-w-xs text-white font-raleway text-sm md:text-base">
                We’ve built over 100 games across platforms
              </div>
            </div>

            {/* Experiences Card */}
            <div className="bg-[#002B65] bg-opacity-20 backdrop-blur-lg rounded-md flex items-center gap-4 p-4 shadow-xl flex-1">
              <div className="loco-text-heading-sm min-w-[30%] shrink-0 text-center text-white font-syne text-4xl md:text-5xl font-bold">
                <AnimatedNumber target={35} />
              </div>
              <div className="loco-text-body max-w-xs text-white font-raleway text-sm md:text-base">
                Crafting immersive and interactive experiences
              </div>
            </div>
          </div>
        </div>
       </div>


        {/* {isMobileScreen ? (
          <div className="h-[500px] flex flex-col justify-center align-middle px-10">
            <div className="font-syne text-5xl text-[#002B65] dark:text-white mt-10 mb-5 leading-tight text-center">Welcome to Gamebole</div>
            <div className="text-md md:text-lg text-[#002B65] dark:text-white font-raleway leading-snug font-normal"> we capture the core essence and envision a spectrum of brilliant possibilities for implementation. Our extensive collaboration with industry leaders and an inspired approach pave the way for creating exceptional artworks that transcend the ordinary, defining our commitment to excellence in every project.</div>
          </div>
        ) : (
          <div className="mt-12 ml-[10vw] mr-[5vw] h-[714px] flex justify-start align-start">
            <div className="w-1/2 flex flex-col justify-center font-bold z-10">
              <div className="font-syne text-6xl text-[#002B65] dark:text-white mb-5 leading-tight">Welcome to Gamebole</div>
              <div className="text-xl text-[#002B65] dark:text-white font-raleway leading-snug mb-8 font-normal">For over three years, Gamebole Studios has transformed ideas into immersive experiences. With expertise in web, Android, and iOS game development, we create high-quality, optimized configurations, metaverses, and visualizations. We embed ourselves within our clients’ teams, handling their challenges as our own to deliver real value. At Gamebole, we don’t just build projects; we bring dreams to life with dedication, creativity, and a touch of fun.</div>
            </div>
            <div className="absolute w-3/5 h-[714px] ml-[30%] z-0 flex flex-col align-middle justify-center">
              <img className=" max-h-[600px] max-w-[1200px]" src={Adepti} alt="Man" />
            </div>
          </div>
        )} */}
        <div className="flex justify-center text-xl font-raleway text-[#DEA719] dark:text-[#DEA719] font-extrabold mt-16">OUR COLLECTION</div>
        <div className="flex justify-center font-syne text-4xl lg:text-6xl text-[#002B65] dark:text-white mt-2 mb-6">Gamebole Offers</div>

        <div className="flex justify-center flex-wrap gap-8 mb-16 text-[#002B65] dark:text-white">
       
  <div className="flex flex-col items-start bg-gradient-to-r from-[#00A9E0] to-[#005A86] blog-card-gradient dark:border dark:border-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
    <div className="absolute inset-0 bg-[#EAF9FF] dark:bg-transparent rounded-2xl"></div>
    <div className="rounded-2xl overflow-hidden mb-4 z-10">
      <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? gdLight : gdDark} alt="Game Development" />
    </div>
    <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">Game Development</div>
    <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
      Android/iOS (Unity) & Web (Playcanvas) games designed to engage and entertain players on multiple platforms.
    </div>
  </div>



  <div className="flex flex-col items-start bg-gradient-to-r from-[#7B2E8C] to-[#580A52] blog-card-gradient dark:border dark:border-white rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
  <div className="absolute inset-0 bg-[#EAF9FF] dark:bg-transparent rounded-xl"></div>
  <div className="rounded-2xl overflow-hidden mb-4 z-10">
    <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? metaLight : metaDark} alt="Metaverses" />
  </div>
  <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">Metaverses</div>
  <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
    3D multiplayer worlds with free-roaming interactions where users can connect and explore limitless possibilities.
  </div>
</div>


<div className="flex flex-col items-start bg-gradient-to-r from-[#FFC42E] to-[#FF4F00] blog-card-gradient dark:border dark:border-white rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
  <div className="absolute inset-0 bg-[#EAF9FF] dark:bg-transparent rounded-xl"></div>
  <div className="rounded-2xl overflow-hidden mb-4 z-10">
    <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? arLight : arDark} alt="AR Integration" />
  </div>
  <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">AR Integration</div>
  <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
    Product visualization with 3D models and AR viewers to help showcase products in a real-world context.
  </div>
</div>


<div className="flex flex-col items-start bg-gradient-to-r from-[#E040FF] to-[#9B1DFF] blog-card-gradient dark:border dark:border-white rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
  <div className="absolute inset-0 bg-[#EAF9FF] dark:bg-transparent rounded-xl"></div>
  <div className="rounded-2xl overflow-hidden mb-4 z-10">
    <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? configLight : configDark} alt="Interactive Experiences" />
  </div>
  <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">Interactive Experiences</div>
  <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
    Configurations, simulations, and visualizations designed to create engaging and educational user interactions.
  </div>
</div>

        </div>
        <TechIconScroller />
        <ClientReviews />
        <CoreTeam />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
