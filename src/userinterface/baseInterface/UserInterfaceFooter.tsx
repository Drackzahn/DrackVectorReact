import {
  Settings,
  Wallpaper,
  Grass,
  DoorFront,
  Category,
  Visibility,
} from "@mui/icons-material";
import { Box, Switch, IconButton, Tabs, Tab } from "@mui/material";
import { SettingsView } from "../SettingsView";
import { useContext, useState } from "react";
import { DataContext } from "../../data/context/dataContext";
import { tabMenuEntries } from "./tabMenuEntries";
import { DrackCentralPaper } from "../../components/DrackCentralPaper";

export function UserInterfaceFooter() {
  const dataContext = useContext(DataContext);

  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);

  return (
    <Box padding={2}>
      <Box
        display="grid"
        gridTemplateAreas="'InterfaceSwitch Settings Tabs'"
        gridTemplateColumns="auto auto 1fr"
        columnGap={1}
        width="fit-content"
      >
        <Box gridArea="InterfaceSwitch" display="inline-block">
          <DrackCentralPaper>
            <Switch
              checked={dataContext!.isInterfaceVisible}
              onChange={(event) =>
                dataContext!.setIsInterfaceVisible(event.target.checked)
              }
            />
          </DrackCentralPaper>
        </Box>

        <Box gridArea="Settings">
          <DrackCentralPaper>
            <>
              <IconButton onClick={() => setIsSettingsModalOpen(true)}>
                <Settings />
              </IconButton>
              <SettingsView
                isOpen={isSettingsModalOpen}
                setIsOpen={setIsSettingsModalOpen}
              />
            </>
          </DrackCentralPaper>
        </Box>

        <Box
          gridArea="Tabs"
          visibility={dataContext!.isInterfaceVisible ? "visible" : "hidden"}
        >
          <DrackCentralPaper>
            <Tabs
              orientation="horizontal"
              variant="standard"
              value={dataContext!.selectedTab}
              onChange={dataContext!.changeSelectedTab}
            >
              <Tab
                icon={<Wallpaper />}
                tabIndex={tabMenuEntries.farBackground}
              />
              <Tab
                icon={<Grass />}
                tabIndex={tabMenuEntries.groundBackground}
              />
              <Tab
                icon={<DoorFront />}
                tabIndex={tabMenuEntries.middleBackground}
              />
              <Tab
                icon={<Category />}
                tabIndex={tabMenuEntries.backgroundItems}
              />
              <Tab
                icon={<Category />}
                tabIndex={tabMenuEntries.humanoidFigures}
              />
              <Tab
                icon={<Visibility />}
                tabIndex={tabMenuEntries.exportAndView}
              />
            </Tabs>
          </DrackCentralPaper>
        </Box>
      </Box>
    </Box>
  );
}
