import { useContext } from "react";
import CustomDialog from "./CustomDialog";
import { DarkModeContext } from "contexts/DarkModeContext";
import { Heading, Para, Title, List, ListItem } from "./DialogComponents";

const PrivacyPolicy = ({ open, onClose }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      wrapperClasses={isDarkMode ? "bg-[#3A177E] dark" : "bg-[#D3E5FE]"}
      disableCross
    >
      <Heading>Privacy Policy</Heading>
      <Title>Effective Date: October 15, 2024</Title>
      <Para>At Gamebole, we respect your privacy and are committed to protecting it. This privacy policy outlines how we handle any personal information we may encounter when you visit our website.</Para>
      <Title>1. No Collection of Personal Data</Title>
      <Para>
      We do not collect any personal information from visitors to our website. This means we do not ask for, store, or use your name, email address, phone number, or any other personal information. You are free to browse our website without providing any personal data.
      </Para>
      <Title>2. Cookies and Tracking Technologies</Title>
      <Para>Our website does not use cookies or any form of tracking technology to gather information about your browsing behavior.</Para>
      <Title>3. Third-Party Links</Title>
      <Para>Our website may contain links to third-party websites or services. Please note that once you leave our website, we are not responsible for the privacy practices of other websites. We encourage you to read the privacy policies of any external websites you visit..</Para>
      <Title>4. Data Security</Title>
      <Para>Since we do not collect any personal data, we do not store or process any user information. As such, there are no data security concerns related to personal information on our website.</Para>
      <Title>5. Changes to This Policy</Title>
      <Para>We may update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically. Your continued use of our website following any updates will signify your acceptance of the changes.</Para>
      <Title>6. Contact Information</Title>
      <Para>If you have any questions or concerns about this privacy policy, please feel free to contact us at:</Para>
      
      <List>
        <ListItem>Gamebole</ListItem>
        <ListItem>hr@gamebole.com</ListItem>
        <ListItem>28 E, 2nd floor, main market, Lahore</ListItem>
        {/* <Para bold warning>
          Banned Items
        </Para>
        <List>
          <ListItem bold>Item 1</ListItem>
          <ListItem warning>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem> */}
      </List>
      <Title>Compliance with Laws</Title>
      <Para>Since we do not collect, store, or process any personal information, we are fully compliant with all relevant data protection laws, including GDPR and CCPA.:</Para>
      
    </CustomDialog>
  );
};

export default PrivacyPolicy;
