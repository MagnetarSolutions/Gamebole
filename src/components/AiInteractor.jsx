import AiBot from "resources/images/AI bot.png";

import Volume from "resources/logo/volume.svg";

const InteractionButton = ({ text, className }) => {
  return (
    <div
      className={`w-[300px] p-[20px] interaction-button-gradient text-white flex justify-between cursor-pointer rounded-lg select-none ${className}`}
    >
      <div>{text}</div>
      <img src={Volume} alt="volume"></img>
    </div>
  );
};

const AiInteractor = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-aiInteractor h-[624px] px-[15%] text-white bg-cover">
      <div className="font-syne text-5xl font-bold mb-4">AI</div>
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
      <div className="flex h-[250px] w-full justify-between">
        <img src={AiBot} className="w-[250px]" alt="Ai bot"></img>
        <div className="flex">
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
