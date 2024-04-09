import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { useDrackTabs } from "../../hooks/useDrackTabs";
import { Badge, Box, Divider, Tab } from "@mui/material";
import { DrackTabs } from "../../components/DrackTabs";
import { ColorLens, Radar } from "@mui/icons-material";
import { TabPanel } from "../../components/TabPanel";
import { FiguresGeneralInterface } from "./FiguresGeneralInterface";
import { FiguresSelectionInterface } from "./FiguresSelectionInterface";
import { FiguresHeadInterface } from "./FiguresHeadInterface";

export function FiguresBaseInterface() {
  const [selectedValue, handleTabChange] = useDrackTabs();

  // TODO Add Interface for Selection, General and Head
  return (
    <Box
      display="grid"
      gridTemplateAreas="'OpenTab TabSelection'"
      gridTemplateColumns="1fr auto"
    >
      <Box gridArea="OpenTab">
        <TabPanel value={selectedValue} index={0} header="Selection">
          <FiguresSelectionInterface />
        </TabPanel>
        <TabPanel value={selectedValue} index={1} header="General">
          <FiguresGeneralInterface />
        </TabPanel>
        <TabPanel value={selectedValue} index={2} header="Head">
          <FiguresHeadInterface />
        </TabPanel>
      </Box>
      <Box gridArea="TabSelection">
        <DrackTabs
          selectedValue={selectedValue}
          handleChange={handleTabChange}
          orientation="vertical"
        >
          <Tab icon={<AccessibilityIcon />} tabIndex={0} />
          <Tab icon={<ColorLens />} tabIndex={1} />
          <Tab icon={<ColorLens />} tabIndex={2} />
        </DrackTabs>
      </Box>
    </Box>
  );
}
