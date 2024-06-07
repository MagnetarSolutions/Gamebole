import Background from "components/Background";
import Adepti from "resources/images/Adepti.png";
import useScreenSize from "hooks/useScreenSize";
import { SCREEN_SIZES } from "constants/index";
import CustomButton from "components/CustomButton";
import Tech from "resources/icons/technologies.png";
import { useEffect, useRef, useState } from "react";
import ClientImg1 from "resources/images/client 1.png";
import ClientImg2 from "resources/images/client 2.jpeg";
import ClientLogo1 from "resources/logo/client logo 1.png";
import ClientLogo2 from "resources/logo/client logo 2.png";
import FrontSelect from "resources/icons/frontSelect.svg";
import BackSelect from "resources/icons/backSelect.svg";
import TeammemberImg1 from "resources/images/teammember 1.png";
import TeammemberImg2 from "resources/images/teammember 2.png";
import TeammemberImg3 from "resources/images/teammember 3.png";
import TeammemberImg4 from "resources/images/teammember 4.png";
import LinkedinLogo from "resources/icons/linkedin.svg";
import FacebookLogo from "resources/icons/facebook.svg";
import TwitterLogo from "resources/icons/twitter.svg";
import Mysterio from "resources/images/Mysterio.png";

const clientData = [
  {
    clientImg: ClientImg1,
    clientLogo: ClientLogo1,
    clientName: "John Smith",
    clientReview:
      "Working with Gamebole was a game-changer for us at Stellar Games. As the Chief Creative Officer, I was amazed by their unparalleled expertise in game development and artistry. Gamebole's commitment to excellence, innovative solutions, and seamless collaboration significantly elevated the quality of our projects. They are not just a development studio; they are creative partners who consistently exceed expectations. Gamebole's impact on our gaming portfolio has been nothing short of extraordinary",
  },
  {
    clientImg: ClientImg2,
    clientLogo: ClientLogo2,
    clientName: "Johnny Sins",
    clientReview:
      "Made a good game with the help of Sadam, using third mode of payment.",
  },
];

const coreTeamMembers = [
  {
    memberProfile: TeammemberImg1,
    memberName: "John Smith",
    memberRole: "Founder and CEO",
    memberLinks: ["", "", ""],
  },
  {
    memberProfile: TeammemberImg2,
    memberName: "Wade Warren",
    memberRole: "Marketing Lead",
    memberLinks: ["", "", ""],
  },
  {
    memberProfile: TeammemberImg3,
    memberName: "Adam Spain",
    memberRole: "Game Designer",
    memberLinks: ["", "", ""],
  },
  {
    memberProfile: TeammemberImg4,
    memberName: "John Doe",
    memberRole: "Game Designer",
    memberLinks: ["", "", ""],
  },
];

const TechIconScroller = () => {
  const [logoScrollMode, setLogoScrollMode] = useState(0);
  const logoScrollModeRef = useRef(0);
  const timeoutRef = useRef(null);

  const toggleNextMode = () => {
    logoScrollModeRef.current = (logoScrollModeRef.current + 1) % 2;
    setLogoScrollMode(logoScrollModeRef.current);
  };

  useEffect(() => {
    toggleNextMode();
    timeoutRef.current = setInterval(() => {
      toggleNextMode();
      if (logoScrollModeRef.current === 0)
        setTimeout(() => toggleNextMode(), 10);
    }, 20000);
    return () => timeoutRef.current && clearInterval(timeoutRef.current);
  }, []);
  return (
    <div className="w-full h-[140px] md:h-[200px] lg:h-[300px] bg-backgroundStrip1 bg-no-repeat bg-cover flex justify-start items-center overflow-hidden">
      <img
        className={
          `min-w-[300%] max-h-[60%]` +
          (logoScrollMode === 0
            ? " ml-0"
            : " ml-[-173%] transition-all duration-[20000ms] ease-linear")
        }
        src={Tech}
        alt={"technology slider"}
      ></img>
    </div>
  );
};

const ClientReviews = () => {
  const [client, selectClient] = useState(0);

  const selectNextClient = () => selectClient((client + 1) % clientData.length);
  const selectPrevClient = () =>
    selectClient(client - 1 === -1 ? clientData.length - 1 : client - 1);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-4/5 min-w-80 flex flex-col items-center reviews-gradient mt-16 mb-16 rounded-2xl h-[200px] md:h-[400px]">
        <div className="absolute bottom-0 right-0 mb-4 md:mb-8 mr-4 md:mr-8 flex">
          <img
            src={BackSelect}
            className="mr-2 w-[30px] md:w-auto cursor-pointer"
            onClick={selectPrevClient}
            alt={"<-"}
          />
          <img
            src={FrontSelect}
            className="w-[30px] md:w-auto cursor-pointer"
            onClick={selectNextClient}
            alt={"->"}
          />
        </div>
        <div className="font-syne text-xl md:text-3xl text-[#FF9900] mt-2 md:mt-10 mb-2 md:mb-6">
          Reviews from Our Clients
        </div>
        <div className="flex w-11/12">
          <div className="min-w-[120px] h-[90px] md:min-w-[300px] md:h-[220px] border-4 border-solid border-black rounded-2xl overflow-hidden mr-2 md:mr-14 md:mt-2 md:mb-4">
            <img
              src={clientData[client].clientImg}
              className="w-full h-full"
              alt="Client Profile"
            />
          </div>
          <div className="text-white">
            <div className="text-xs md:text-base max-h-16 md:max-h-[170px] overflow-auto overscroll-contain">
              {clientData[client].clientReview}
            </div>
            <div className="mt-2 font-bold italic md:text-2xl">
              {clientData[client].clientName}
            </div>
            <div className="flex justify-between">
              <div className="w-[60px] h-[40px] md:w-[120px] md:h-[70px] border-black border-2 rounded-md overflow-hidden md:mt-2 md:mb-4">
                <img
                  src={clientData[client].clientLogo}
                  className="w-full h-full"
                  alt="Client Logo"
                />
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
      <div className={`w-[152px] h-[38px] flex justify-between`}>
        <img
          className={`logo-gradient w-[38px] h-[38px] cursor-pointer`}
          src={LinkedinLogo}
          alt={"linkedin"}
        ></img>
        <img
          className={`logo-gradient w-[38px] h-[38px] cursor-pointer`}
          src={FacebookLogo}
          alt={"facebook"}
        ></img>
        <img
          className={`logo-gradient w-[38px] h-[38px] cursor-pointer`}
          src={TwitterLogo}
          alt={"twitter"}
        ></img>
      </div>
    </div>
  );
};

const CoreTeamMember = ({ profile, name, role, links }) => {
  return (
    <div className="flex flex-col justify-center mx-8 mb-8 items-center">
      <div className="w-44 h-44 bg-profile bg-no-repeat bg-contain flex justify-center items-center">
        <img
          src={profile}
          className="w-40 h-40 rounded-full"
          alt={"profile"}
        ></img>
      </div>
      <div className="text-white font-syne text-4xl font-bold flex text-center">
        {name}
      </div>
      <div className="text-white font-raleway text-lg text-center mb-4">
        {role}
      </div>
      <IconGroup links={links} />
    </div>
  );
};

const CoreTeam = () => {
  return (
    <div className="w-full bg-backgroundStrip2 bg-no-repeat bg-cover flex flex-col items-center py-16">
      <div className="text-[#DEA719] text-lg md:text-xl font-bold mt-12 md:mt-14">
        MEET OUR TEAM
      </div>
      <div className=" font-syne font-bold text-2xl md:text-6xl text-white mt-4 md:mt-8 mb-12">
        Meet Our Core Team
      </div>
      <div className="flex w-full justify-around mb-20 flex-wrap">
        {coreTeamMembers.map((member) => {
          return (
            <CoreTeamMember
              profile={member.memberProfile}
              name={member.memberName}
              role={member.memberRole}
              links={member.memberLinks}
            />
          );
        })}
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex justify-around w-full my-8">
      <img src={Mysterio} className="hidden md:inline"></img>
      <div className="flex flex-col max-w-[650px] m-4">
        <div className="font-bold text-xl text-[#DEA719] md:mb-2 text-center md:text-start">
          CONTACT US
        </div>
        <div className="text-[#002B65] font-medium text-4xl md:text-6xl font-syne text-center md:text-start my-4">
          Interested in Working with Us?
        </div>
        <input
          className="w-full h-16 bg-black mb-2 input-gradient rounded-lg px-4 text-white"
          type="text"
          placeholder="Your Name"
        ></input>
        <input
          className="w-full h-16 bg-black mb-2 input-gradient rounded-lg px-4 text-white"
          type="text"
          placeholder="Email*"
        ></input>
        <input
          className="w-full h-16 bg-black mb-2 input-gradient rounded-lg px-4 text-white"
          type="text"
          placeholder="Subject"
        ></input>
        <textarea
          className="w-full h-32 bg-black mb-2 input-gradient rounded-lg px-4 py-4 text-white"
          type="text"
          placeholder="Write Your Message Here"
        ></textarea>
      </div>
    </div>
  );
};

const Home = () => {
  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;

  return (
    <div className="home w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden flex justify-center relative z-0">
      <div className=" max-w-[2000px]">
        <Background page="home" />
        <div className="w-full h-[1044px]"></div>
        {isMobileScreen ? (
          <div className="h-[500px] flex flex-col justify-center align-middle px-10">
            <div className="font-syne text-5xl text-[#002B65] mb-5 leading-tight text-center">
              Welcome to Gamebole
            </div>
            <div className="text-md md:text-lg text-[#002B65] font-raleway leading-snug font-normal">
              we don't just undertake game art tasks; we capture the core
              essence and envision a spectrum of brilliant possibilities for
              implementation. Our extensive collaboration with industry leaders
              and an inspired approach pave the way for creating exceptional
              artworks that transcend the ordinary, defining our commitment to
              excellence in every project.
            </div>
            <div className="w-full h-full mt-4">
              <CustomButton text="Explore Now" />
            </div>
          </div>
        ) : (
          <div className="mt-12 ml-[10vw] mr-[5vw] h-[714px] flex justify-between align-middle">
            <div className="w-1/2 flex flex-col justify-center font-bold z-10">
              <div className="font-syne text-6xl text-[#002B65] mb-5 leading-tight">
                Welcome to Gamebole
              </div>
              <div className="text-xl text-[#002B65] font-raleway leading-snug mb-8 font-normal">
                we don't just undertake game art tasks; we capture the core
                essence and envision a spectrum of brilliant possibilities for
                implementation. Our extensive collaboration with industry
                leaders and an inspired approach pave the way for creating
                exceptional artworks that transcend the ordinary, defining our
                commitment to excellence in every project.
              </div>
              <div className="w-full h-full">
                <CustomButton text="Explore Now" />
              </div>
            </div>
            <div className="absolute w-3/5 h-[714px] ml-[30%] z-0 flex flex-col align-middle justify-center">
              <img
                className=" max-h-[600px] max-w-[1200px]"
                src={Adepti}
                alt="Man"
              />
            </div>
          </div>
        )}
        <div className="flex justify-center text-xl font-raleway text-[#DEA719] font-extrabold">
          OUR COLLECTION
        </div>
        <div className="flex justify-center font-syne text-4xl lg:text-6xl text-[#002B65] mt-2 mb-6">
          Gamebole Offers
        </div>
        <div className="flex justify-center flex-wrap mb-16 text-[#002B65]">
          <div className="flex flex-col items-center">
            <div className="rounded-2xl w-80 h-80 card-gradient m-3"></div>
            <div className="flex justify-center text-2xl font-bold">
              Game Development
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl w-80 h-80 card-gradient m-3"></div>
            <div className="flex justify-center text-2xl font-bold">
              3D Render
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl w-80 h-80 card-gradient m-3"></div>
            <div className="flex justify-center text-2xl font-bold">
              3D Experience
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