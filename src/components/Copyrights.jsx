import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

const Dot = () => <div className="mx-4 cursor-default select-none">.</div>;

const Copyrights = () => {
  const [activeModal, setActiveModal] = useState(null);

  const onModalClose = () => setActiveModal(null);
  return (
    <div className="flex justify-around flex-wrap bg-[#051B39] dark:bg-[#170B37] text-white">
      <PrivacyPolicy
        open={activeModal === "PRIVACY_POLICY"}
        onClose={onModalClose}
      />
      <TermsAndConditions
        open={activeModal === "TERMS_AND_CONDITIONS"}
        onClose={onModalClose}
      />
      <div className="mt-8 text-xs md:text-base md:mt-14 md:my-14 flex mx-8">
        <div
          className="text-center underline cursor-pointer hover:text-blue-600"
          onClick={() => setActiveModal("PRIVACY_POLICY")}
        >
          Privacy Policy
        </div>
        <Dot />
        <div
          className="text-center underline cursor-pointer hover:text-blue-600"
          onClick={() => setActiveModal("TERMS_AND_CONDITIONS")}
        >
          Terms & Conditions
        </div>
        <Dot />
        <div className="text-center underline cursor-pointer hover:text-blue-600">
          Contact Us
        </div>
      </div>
      <div className="text-xs md:text-base mb-8 md:mb-14 mt-6 md:my-14 mx-8 text-center">
        Copyright ©2024 Gamebole. All rights reserved.
      </div>
    </div>
  );
};

export default Copyrights;
