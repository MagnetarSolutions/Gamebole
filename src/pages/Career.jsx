import Background from "components/Background";
import BlogCard from "components/BlogCard";
import CustomButton from "components/CustomButton";
import { dummyCareerData } from "constants/index";
import Laptop from "resources/images/laptop.png";
import Document from "resources/icons/document.svg";
import useScreenSize from "hooks/useScreenSize";
import { SCREEN_SIZES } from "constants/index";
import { useState } from "react";
const Career = () => {
  const screenSize = useScreenSize();

  const [showAllJobs, setShowAllJobs] = useState(false);

  let careerData =
    screenSize <= SCREEN_SIZES.md
      ? dummyCareerData.slice(0, 3)
      : dummyCareerData.slice(0, 6);

  if (showAllJobs) careerData = dummyCareerData;

  return (
    <div className="career w-full bg-[#B4EAFF] dark:bg-[#110828] transition-color overflow-hidden relative z-0 flex justify-center">
      <div className="max-w-[2000px]">
        <Background page="career" />
        <div className="w-full h-[500px] md:h-[700px] flex items-center justify-center relative">
          <div className="mt-28 max-w-[80%] md:max-w-[40%]">
            <div className="font-syne text-2xl md:text-5xl font-bold text-[#051B39] dark:text-white mb-2 md:mb-4">
              JOIN THE GAMEBOLE TEAM
            </div>
            <div className="font-raleway text-[#051B39] dark:text-white text-base md:text-base font-normal leading-normal mb-8">
              At Gamebole, we're always looking for talented individuals to join our team. Explore our current job openings and become part of our innovative journey.
            </div>
            <CustomButton text="Explore Now" />
          </div>
          <img
            className="max-w-[40%] hidden md:inline animate-float"
            src={Laptop}
            alt="laptop"
          />
        </div>
        <div className="w-full flex justify-center mt-[550px] md:mt-[350px]">
          <div className="flex flex-wrap justify-center mt-10 max-w-[1200px]">
            {careerData.map((jobData) => (
              <BlogCard
                key={jobData.id}
                blogData={jobData}
                extraClasses="m-[10px]"
                isCareer
              />
            ))}
          </div>
        </div>
        <div className="mb-10">
          {!showAllJobs && (
            <div
              onClick={() => setShowAllJobs(true)}
              className="flex justify-center mt-4"
            >
              <div className="w-[200px] cursor-pointer flex bg-[#066082] dark:bg-[#FF9900bb] rounded text-white justify-center px-4 py-3 font-sfui font-light">
                <img src={Document} alt={"docs icon"} className="mr-2" />
                <div>View all jobs</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
