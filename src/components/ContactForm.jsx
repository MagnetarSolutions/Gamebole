import Mysterio from "resources/images/Mysterio.png";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  return (
    <div className="flex justify-center w-full my-8">
      <img
        src={Mysterio}
        className="hidden md:inline mr-8 w-[450px]"
        alt="contact-logo"
      ></img>
      <div className="flex flex-col max-w-[550px] m-4">
        <div className="font-bold text-xl text-[#DEA719] md:mb-2 text-center md:text-start">
          CONTACT US
        </div>
        <div className="text-[#002B65] dark:text-white font-medium text-4xl md:text-6xl font-syne text-center md:text-start my-4">
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
        <CustomButton text={"Submit"} isSmall />
      </div>
    </div>
  );
};

export default ContactForm;
