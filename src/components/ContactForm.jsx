import { useState } from "react";
import Mysterio from "resources/images/Mysterio.png";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      // Perform the submit action here (e.g., send email or log data)
      console.log("Form Submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-full my-8">
      <img
        src={Mysterio}
        className="hidden md:inline mr-8 w-[450px] h-[550px]"
        alt="contact-logo"
      />
      <div className="flex flex-col max-w-[550px] m-4">
        <div className="font-bold text-xl text-[#DEA719] md:mb-2 text-center md:text-start">
          CONTACT US
        </div>
        <div className="text-[#002B65] dark:text-white font-medium text-4xl md:text-6xl font-syne text-center md:text-start my-4">
          Interested in Working with Us?
        </div>
        <form onSubmit={onSubmit}>
          <input
            className="w-full h-16 bg-black mb-2 input-gradient rounded-lg px-4 text-white"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-700 dark:text-red-500 ml-2">{errors.name}</p>
          )}

          <input
            className="w-full h-16 bg-black mb-2 input-gradient rounded-lg px-4 text-white"
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-700 dark:text-red-500 ml-2">
              {errors.email}
            </p>
          )}

          <input
            className="w-full h-16 bg-black mb-2 input-gradient rounded-lg px-4 text-white"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {errors.subject && (
            <p className="text-red-700 dark:text-red-500 ml-2">
              {errors.subject}
            </p>
          )}

          <textarea
            className="w-full h-32 bg-black mb-2 input-gradient rounded-lg px-4 py-4 text-white"
            name="message"
            placeholder="Write Your Message Here"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && (
            <p className="text-red-700 dark:text-red-500 ml-2">
              {errors.message}
            </p>
          )}

          <div onClick={onSubmit}>
            <CustomButton text={"Submit"} isSmall />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
