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
      <Title>This is Terms and Conditions</Title>
      <Para>This is para of Terms and Conditions</Para>
      <Title>This is Terms and Conditions</Title>
      <Para>
        This is para a ois para of pis para of pis a ois para of pis para of pis
        a ois para of pis para of pis a ois para of pis para of pis
      </Para>
      <Para>This is para of Terms and Conditions</Para>
      <Para>This is para of Terms and Conditions</Para>
      <List>
        <ListItem>First item</ListItem>
        <Para bold warning>
          Banned Items
        </Para>
        <List>
          <ListItem bold>Item 1</ListItem>
          <ListItem warning>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    </CustomDialog>
  );
};

export default TermsAndConditions;
