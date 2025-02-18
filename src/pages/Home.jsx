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
    clientReview: "Very quick response and short processing times, good result, pleasant cooperation. Clear recommendation!",
  },
  {
    clientImg: ClientImg1,
    clientLogo: ClientLogo1,
    clientName: "James Blue",
    clientReview: "Made a good game with the help of Gamebole...",
  },
  {
    clientImg: ClientImg1,
    clientLogo: ClientLogo1,
    clientName: "James White",
    clientReview: "Made a good game with the help of Gamebole...",
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
  const [logoScrollMode, setLogoScrollMode] = useState(0);
  const logoScrollModeRef = useRef(0);
  const [isDarkMode] = useContext(DarkModeContext);
  const timeoutRef = useRef(null);

  // Toggle between two scroll modes (which could be two images or two different scroll states)
  const toggleNextMode = () => {
    logoScrollModeRef.current = (logoScrollModeRef.current + 1) % 2;
    setLogoScrollMode(logoScrollModeRef.current);
  };

  useEffect(() => {
    // This makes the logo continue to loop
    timeoutRef.current = setInterval(() => {
      toggleNextMode();
    }, 20000); // Adjust the timing based on how fast you want the scroll transition

    return () => timeoutRef.current && clearInterval(timeoutRef.current);
  }, []);

  return (
    <div className="w-full h-[140px] md:h-[200px] lg:h-[300px] bg-backgroundStrip1 dark:bg-backgroundStrip1Dark bg-no-repeat bg-cover flex justify-start items-center overflow-hidden">
      {/* Ensure images are moving infinitely */}
      <img
        className={`min-w-[300%] max-h-[60%] transition-all duration-[20000ms] ease-linear ${
          logoScrollMode === 0 ? "ml-0" : "ml-[-173%]"
        }`}
        src={isDarkMode ? techLight : techDark}
        alt={"technology slider"}
      />
    </div>
  );
};


const ClientReviews = () => {
  const [selectedClient, selectClient] = useState(0);

  const selectNextClient = () => selectClient((selectedClient + 1) % clientData.length);
  const selectPrevClient = () => selectClient(selectedClient - 1 === -1 ? clientData.length - 1 : selectedClient - 1);

  return (
    <div className="w-full py-20 bg-gradient-to-r from-[#F4F7FF] to-[#E4E9F2]">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="text-3xl font-semibold text-[#002B65]">What Our Clients Say</div>
        <div className="w-24 h-1 bg-[#DEA719] mt-2 mb-6"></div>
      </div>

      {/* Reviews Slider */}
      <div className="relative flex justify-center">
        <div className="max-w-4xl w-full">
          {/* Client Review Card */}
          <div className="relative w-full bg-[#0081db] dark:bg-dark-card rounded-xl p-6 shadow-lg transition-all duration-500 ease-in-out">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src={clientData[selectedClient].clientImg} alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-[#DEA719]">{clientData[selectedClient].clientName}</div>
            </div>
            <div className="text-base text-white mb-10 pl-6">{clientData[selectedClient].clientReview}</div> {/* Added padding to the left */}

            <div className="flex justify-center gap-4">
              {/* Client Logo */}
              <div className="w-24 h-12 border-2 border-[#DEA719] rounded-lg overflow-hidden flex items-center justify-center">
                <img src={clientData[selectedClient].clientLogo} className="w-full h-full object-contain" alt="Client Logo" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-20" onClick={selectPrevClient}>
              <img src={BackSelect} className="w-10 h-10 text-white p-2" alt="Previous" />
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-20" onClick={selectNextClient}>
              <img src={FrontSelect} className="w-10 h-10 text-white p-2" alt="Next" />
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
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <div className="font-syne text-4xl md:text-8xl text-white font-bold mb-4 fade-in">You Dream,<br /> We Develop</div>
            <div className="flex justify-center">
              <CustomButton
                text="Contact Us"
                onClick={handleContactClick}
              />
            </div>
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
        <div className="flex justify-center text-xl font-raleway text-[#DEA719] dark:text-white font-extrabold mt-16">OUR COLLECTION</div>
        <div className="flex justify-center font-syne text-4xl lg:text-6xl text-[#002B65] dark:text-white mt-2 mb-6">Gamebole Offers</div>

        <div className="flex justify-center flex-wrap gap-8 mb-16 text-[#002B65] dark:text-white">
          <div className="flex flex-col items-start bg-gradient-to-r from-[#00A9E0] to-[#005A86] rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
            <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
            <div className="rounded-2xl overflow-hidden mb-4 z-10">
              <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? gdLight : gdDark} alt="Game Development" />
            </div>
            <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">Game Development</div>
            <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
              Android/iOS (Unity) & Web (Playcanvas) games designed to engage and entertain players on multiple platforms.
            </div>
          </div>

          <div className="flex flex-col items-start bg-gradient-to-r from-[#7B2E8C] to-[#580A52] rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
            <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
            <div className="rounded-2xl overflow-hidden mb-4 z-10">
              <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? metaLight : metaDark} alt="Metaverses" />
            </div>
            <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">Metaverses</div>
            <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
              3D multiplayer worlds with free-roaming interactions where users can connect and explore limitless possibilities.
            </div>
          </div>

          <div className="flex flex-col items-start bg-gradient-to-r from-[#FFC42E] to-[#FF4F00] rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
            <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
            <div className="rounded-2xl overflow-hidden mb-4 z-10">
              <img className="max-w-full max-h-full object-cover rounded-2xl" src={isDarkMode ? arLight : arDark} alt="AR Integration" />
            </div>
            <div className="text-[#002B65] dark:text-white text-xl md:text-2xl font-bold mb-2 z-10">AR Integration</div>
            <div className="text-[#002B65] dark:text-white font-raleway text-sm md:text-base z-10">
              Product visualization with 3D models and AR viewers to help showcase products in a real-world context.
            </div>
          </div>

          <div className="flex flex-col items-start bg-gradient-to-r from-[#E040FF] to-[#9B1DFF] rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-64 md:w-80 lg:w-96 relative">
            <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
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
