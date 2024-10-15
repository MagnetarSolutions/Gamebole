import { useContext } from "react";
import CustomDialog from "./CustomDialog";
import { DarkModeContext } from "contexts/DarkModeContext";
import { Heading, Para, Title, List, ListItem } from "./DialogComponents";

const TermsAndConditions = ({ open, onClose }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      wrapperClasses={isDarkMode ? "bg-[#3A177E] dark" : "bg-[#D3E5FE]"}
      disableCross
    >
      <Heading>Terms and Conditions</Heading>
      <Title>Effective Date: October 15, 2024</Title>
      <Para>Welcome to Gamebole. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</Para>
      <Title>1. Use of the Website</Title>
      <Para>
      The content of this website is for informational purposes only. By using our website, you agree that:
      </Para>
      
      <List>
        <ListItem>You will use the website solely for lawful purposes.</ListItem>
        <ListItem>You will not use the website in any way that may impair its functionality or accessibility.</ListItem>
        <ListItem>You will not attempt to hack, disrupt, or compromise the security or integrity of the website or its content.</ListItem>
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
      <Title>2. Intellectual Property</Title>
      <Para>All content on this website, including text, images, logos, graphics, and design, is the intellectual property of Gamebole unless otherwise stated. You may not reproduce, distribute, or use any content from this website without prior written permission from Gamebole.</Para>
      <Title>3. Services Offered</Title>
      <Para>Gamebole offers various services, which are described on our website. While we strive to ensure that all descriptions and details are accurate, we do not guarantee that the information is error-free or up-to-date. We reserve the right to modify or discontinue any service at any time without prior notice</Para>
      <Title>4. Third-Party Links</Title>
      <Para>Our website may contain links to third-party websites or services. These links are provided for your convenience and do not signify our endorsement of such websites. We are not responsible for the content or availability of linked sites, nor do we accept any liability for their practices.</Para>
      <Title>5. Limitation of Liability</Title>
      <Para>To the fullest extent permitted by law, [Your Company Name] will not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website or any services provided through it. This includes, but is not limited to, loss of data, revenue, or profit, whether due to negligence or other causes.</Para>
      <Title>6. Disclaimer of Warranties</Title>
      <Para>We make no warranties or representations regarding the accuracy, reliability, or availability of our website or its content. The website is provided "as is," and Gamebole disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.</Para>
      <Title>7. Changes to Terms and Conditions</Title>
      <Para>Gamebole reserves the right to update these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the website after changes are made constitutes your acceptance of the revised terms.</Para>
      <Title>8. Governing Law</Title>
      <Para>These terms and conditions are governed by and construed in accordance with the laws of Pakistan. By using this website, you agree to submit to the jurisdiction of the courts located in Pakistan for any disputes arising out of your use of the website.</Para>
      
    </CustomDialog>
  );
};

export default TermsAndConditions;
