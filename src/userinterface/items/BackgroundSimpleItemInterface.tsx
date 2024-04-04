import { useContext } from "react";
import { BackgroundSimpleItemContext } from "../../data/context/backgroundSimpleItemContext";
import { Box, Tab } from "@mui/material";
import { CreateNewSimpleItemData } from "../../helper/factory";
import { SelectedTabInterface } from "../../components/SelectedTabInterface";
import { Badge, ColorLens, Radar } from "@mui/icons-material";
import { TabPanel } from "../../components/TabPanel";
import { BackgroundSimpleItemGeneralInterface } from "./BackgroundSimpleItemGeneralInterface";
import { BackgroundSimpleItemStyleInterface } from "./BackgroundSimpleItemStyleInterface";
import { BackgroundSimpleItemPositionInterface } from "./BackgroundSimpleItemPositionInterface";
import { useDrackTabs } from "../../hooks/useDrackTabs";
import { DrackTabs } from "../../components/DrackTabs";

export function BackgroundSimpleItemInterface() {
  var itemContext = useContext(BackgroundSimpleItemContext);
  const [selectedValue, handleTabChange] = useDrackTabs();

  return (
    <SelectedTabInterface
      dataContext={itemContext!}
      createNew={CreateNewSimpleItemData}
    >
      {itemContext!.selectedData !== null && (
        <Box
          display="grid"
          gridTemplateAreas="
                'OpenTab Tabs'
                "
          gridTemplateColumns="1fr auto"
          gap={8}
        >
          <Box gridArea="Tabs">
            <DrackTabs
              selectedValue={selectedValue}
              handleChange={handleTabChange}
              orientation="vertical"
            >
              <Tab icon={<Badge />} tabIndex={0} />
              <Tab icon={<ColorLens />} tabIndex={1} />
              <Tab icon={<Radar />} tabIndex={2} />
            </DrackTabs>
          </Box>

          <Box gridArea="OpenTab">
            <TabPanel value={selectedValue} index={0} header="General">
              <BackgroundSimpleItemGeneralInterface />
            </TabPanel>
            <TabPanel value={selectedValue} index={1} header="Style">
              <BackgroundSimpleItemStyleInterface />
            </TabPanel>
            <TabPanel value={selectedValue} index={2} header="Position">
              <BackgroundSimpleItemPositionInterface />
            </TabPanel>
          </Box>
        </Box>
      )}
    </SelectedTabInterface>
  );
}
