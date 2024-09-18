import AiBot from "resources/images/AI bot.png";

import Volume from "resources/logo/volume.svg";

const InteractionButton = ({ text, className }) => {
  return (
    <div
      className={`w-[220] md:w-[300px] p-[10px] md:p-[20px] interaction-button-gradient text-white text-sm flex justify-between items-center cursor-pointer rounded-lg select-none ${className}`}
    >
      <div className="mr-2">{text}</div>
      <img src={Volume} className="w-4 h-4 md:w-6 md:h-6" alt="volume"></img>
    </div>
  );
};

const AiInteractor = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-aiInteractor dark:bg-aiInteractorDark h-[900px] md:h-[624px] px-4 md:px-[15%] text-white bg-cover transition-all duration-1000 max-w-[2000px]"
      id="ai"
    >
      <div className="font-syne text-3xl md:text-5xl font-bold mb-4">AI</div>
      <div className=" font-raleway text-center mb-8">
        Embark on a new era of immersive storytelling with Gamebole's
        cutting-edge AI-based mouth syncing technology. Our expertise in
        artificial intelligence enhances the realism of character interactions
        by synchronizing mouth movements seamlessly with dialogue. Whether it's
        for gaming narratives, virtual experiences, or animation projects,
        Gamebole's AI-based mouth syncing sets a new standard for lifelike
        communication. Revolutionize your content creation with our innovative
        approach, where AI seamlessly integrates with creativity, transforming
        characters into compelling storytellers. Trust Gamebole to bring your
        narratives to life with a level of authenticity that transcends
        expectations
      </div>
      <div className="flex h-[150px] md:h-[250px] w-full justify-between">
        <img
          src={AiBot}
          className="w-[250px] hidden md:inline"
          alt="Ai bot"
        ></img>
        <div className="flex flex-warp:break-word">
          <div className="flex flex-col justify-center">
            <InteractionButton
              text="Welcome to Gamebole AI"
              className={"mr-3 mb-3"}
            />
            <InteractionButton
              text="What is the vision of Gamebole?"
              className={"mr-3 mb-3"}
            />
          </div>
          <div className="flex flex-col justify-center">
            <InteractionButton
              text="Tell me about Gamebole"
              className={"mr-3 mb-3"}
            />
            <InteractionButton
              text="How to work with Gamebole?"
              className={"mr-3 mb-3"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiInteractor;
